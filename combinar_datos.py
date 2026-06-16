#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import argparse
import csv
import json
import os
from decimal import Decimal, ROUND_HALF_UP


DEFAULT_CATALOG_PATH = "futbolmodaes_img/catalogo.csv"
DEFAULT_MANIFEST_PATH = "futbolmodaes_img/manifest.csv"
DEFAULT_OUTPUT_PATH = "productos.js"
DEFAULT_PLACEHOLDER_PATH = "futbolmodaes_img/placeholder.svg"
DEFAULT_MULTIPLIER = Decimal("1.447")


def round_money(value: Decimal) -> Decimal:
    return value.quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)


def calcular_precio_venta(precio_lista: Decimal, multiplicador: Decimal) -> Decimal:
    return round_money(precio_lista * multiplicador)


def read_catalog(path: str) -> list[dict]:
    rows = []
    with open(path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f, delimiter="|")
        expected = ["equipo", "pID", "nombre", "precio"]
        if reader.fieldnames != expected:
            raise ValueError(
                f"Cabecera inesperada en catalogo: {reader.fieldnames}. Esperada: {expected}"
            )

        for row in reader:
            pid = (row.get("pID") or "").strip()
            if not pid:
                continue

            precio_raw = (row.get("precio") or "").strip().replace(",", ".")
            if not precio_raw:
                continue

            rows.append(
                {
                    "equipo": (row.get("equipo") or "").strip(),
                    "id": pid,
                    "nombre": (row.get("nombre") or "").strip(),
                    "precio_lista": Decimal(precio_raw),
                }
            )
    return rows


def read_manifest(path: str) -> dict[str, str]:
    manifest = {}
    with open(path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        expected = ["equipo_slug", "cpath", "pID", "image_url", "fichero"]
        if reader.fieldnames != expected:
            raise ValueError(
                f"Cabecera inesperada en manifest: {reader.fieldnames}. Esperada: {expected}"
            )

        for row in reader:
            pid = (row.get("pID") or "").strip()
            fichero = (row.get("fichero") or "").strip()
            if pid and fichero and pid not in manifest:
                manifest[pid] = fichero
    return manifest


def build_products(catalog_rows: list[dict], manifest_map: dict[str, str], placeholder_path: str, multiplicador: Decimal) -> list[dict]:
    products = []

    for row in catalog_rows:
        precio_lista = row["precio_lista"]
        precio_venta = calcular_precio_venta(precio_lista, multiplicador)

        products.append(
            {
                "id": row["id"],
                "equipo": row["equipo"],
                "imagen": manifest_map.get(row["id"], placeholder_path),
                "nombre": row["nombre"],
                "precio_lista": float(round_money(precio_lista)),
                "precio_venta": float(precio_venta),
            }
        )

    return products


def write_productos_js(path: str, products: list[dict], multiplicador: Decimal) -> None:
    porcentaje = round_money((multiplicador - Decimal("1")) * Decimal("100"))
    lines = [
        "// Productos cargados desde manifest.csv y catalogo.csv",
        "// precio_lista: Precio original del catálogo",
        f"// precio_venta: Precio calculado con fórmula (actualmente: precio_lista × {multiplicador})",
        f"// Margen: {porcentaje}% (ejemplo: 17.90€ → {calcular_precio_venta(Decimal('17.90'), multiplicador)}€)",
        "// Para cambiar la fórmula, edita la función calcular_precio_venta() en combinar_datos.py",
        "const productosData = " + json.dumps(products, ensure_ascii=False, indent=2) + ";",
        "",
    ]
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))


def main() -> None:
    parser = argparse.ArgumentParser(description="Combina catalogo.csv y manifest.csv para generar productos.js")
    parser.add_argument("--catalog", default=DEFAULT_CATALOG_PATH, help="Ruta a catalogo.csv")
    parser.add_argument("--manifest", default=DEFAULT_MANIFEST_PATH, help="Ruta a manifest.csv")
    parser.add_argument("--output", default=DEFAULT_OUTPUT_PATH, help="Ruta de salida para productos.js")
    parser.add_argument("--placeholder", default=DEFAULT_PLACEHOLDER_PATH, help="Ruta de imagen fallback")
    parser.add_argument(
        "--multiplier",
        default=str(DEFAULT_MULTIPLIER),
        help="Multiplicador para calcular el precio de venta",
    )
    args = parser.parse_args()

    if not os.path.exists(args.catalog):
        raise FileNotFoundError(f"No existe el catálogo: {args.catalog}")
    if not os.path.exists(args.manifest):
        raise FileNotFoundError(f"No existe el manifest: {args.manifest}")

    multiplicador = Decimal(str(args.multiplier))
    catalog_rows = read_catalog(args.catalog)
    manifest_map = read_manifest(args.manifest)
    products = build_products(catalog_rows, manifest_map, args.placeholder, multiplicador)
    write_productos_js(args.output, products, multiplicador)

    print(f"Generado {args.output} con {len(products)} productos usando multiplicador {multiplicador}")


if __name__ == "__main__":
    main()

# Made with Bob
