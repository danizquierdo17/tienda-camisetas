#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import argparse
import csv
import os
import shutil
import sys
import time

from scraper_futbolmodaes import build_session, fetch_product_info


def read_catalog(path):
    with open(path, newline="", encoding="utf-8") as f:
        rows = list(csv.reader(f, delimiter="|"))
    if not rows:
        raise ValueError("El catalogo esta vacio.")
    return rows


def backup_file(path):
    timestamp = time.strftime("%Y%m%d_%H%M%S")
    backup_path = f"{path}.bak_{timestamp}"
    shutil.copy2(path, backup_path)
    return backup_path


def repair_catalog(catalog_path, delay, only_pid=None, limit=None):
    rows = read_catalog(catalog_path)
    header = rows[0]
    data = rows[1:]

    expected_header = ["equipo", "pID", "nombre", "precio"]
    if header != expected_header:
        raise ValueError(
            f"Cabecera inesperada en catalogo: {header}. Esperada: {expected_header}"
        )

    session = build_session()
    repaired_rows = [header]

    total = 0
    changed = 0
    skipped = 0

    for row in data:
        if len(row) < 4:
            repaired_rows.append(row)
            skipped += 1
            continue

        equipo, pid, nombre_actual, precio = row[:4]

        if only_pid and pid != only_pid:
            repaired_rows.append(row)
            continue

        if limit is not None and total >= limit:
            repaired_rows.append(row)
            continue

        total += 1
        nombre_nuevo, _, _ = fetch_product_info(session, pid, delay)

        if nombre_nuevo and nombre_nuevo != nombre_actual:
            repaired_rows.append([equipo, pid, nombre_nuevo, precio])
            changed += 1
            print(f"[OK] {pid}: '{nombre_actual}' -> '{nombre_nuevo}'")
        else:
            repaired_rows.append(row)
            print(f"[=] {pid}: sin cambios")

    return repaired_rows, total, changed, skipped


def write_catalog(path, rows):
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f, delimiter="|")
        writer.writerows(rows)


def main():
    ap = argparse.ArgumentParser(description="Repara nombres erroneos en catalogo.csv")
    ap.add_argument(
        "--catalog",
        default="futbolmodaes_img/catalogo.csv",
        help="Ruta al catalogo.csv",
    )
    ap.add_argument(
        "--delay",
        type=float,
        default=0.8,
        help="Pausa base entre peticiones HTTP",
    )
    ap.add_argument(
        "--only-pid",
        default=None,
        help="Reparar solo un pID concreto",
    )
    ap.add_argument(
        "--limit",
        type=int,
        default=None,
        help="Maximo de productos a revisar",
    )
    ap.add_argument(
        "--dry-run",
        action="store_true",
        help="No escribe cambios; solo muestra resultados",
    )
    args = ap.parse_args()

    if not os.path.exists(args.catalog):
        print(f"No existe el catalogo: {args.catalog}", file=sys.stderr)
        sys.exit(1)

    rows, total, changed, skipped = repair_catalog(
        args.catalog,
        args.delay,
        only_pid=args.only_pid,
        limit=args.limit,
    )

    if args.dry_run:
        print("\nModo simulacion: no se ha modificado el archivo.")
    else:
        backup_path = backup_file(args.catalog)
        write_catalog(args.catalog, rows)
        print(f"\nCopia de seguridad creada en: {backup_path}")
        print(f"Catalogo actualizado: {args.catalog}")

    print("\nResumen")
    print(f"- Revisados: {total}")
    print(f"- Cambiados: {changed}")
    print(f"- Saltados: {skipped}")


if __name__ == "__main__":
    main()

# Made with Bob
