#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from pathlib import Path
import argparse


def find_suffix_00_files(root: Path):
    candidates = []

    for path in root.rglob("*"):
        if not path.is_file():
            continue

        stem = path.stem
        suffix = path.suffix

        if not stem.endswith("_00"):
            continue

        base_name = stem[:-3]
        target_path = path.with_name(base_name + suffix)
        candidates.append((path, target_path))

    return candidates


def main():
    parser = argparse.ArgumentParser(
        description="Renombra archivos con sufijo _00 al nombre base sin _00. Si el destino ya existe, elimina el archivo con _00."
    )
    parser.add_argument(
        "--root",
        default="futbolmodaes_img",
        help="Directorio raíz donde buscar imágenes",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Solo muestra qué cambios se harían, sin modificar nada",
    )
    args = parser.parse_args()

    root = Path(args.root)

    if not root.exists() or not root.is_dir():
        raise SystemExit(f"No existe el directorio: {root}")

    candidates = find_suffix_00_files(root)

    if not candidates:
        print("No se encontraron archivos con sufijo _00.")
        return

    print(f"Encontrados {len(candidates)} archivos con sufijo _00:\n")

    renamed = 0
    deleted = 0

    for source_path, target_path in candidates:
        print(f"origen : {source_path}")
        print(f"destino: {target_path}")

        if target_path.exists() and target_path.is_file():
            if args.dry_run:
                print("acción : eliminar origen (_00), porque el destino ya existe")
            else:
                source_path.unlink()
                deleted += 1
                print("acción : eliminado origen (_00), porque el destino ya existía")
        else:
            if args.dry_run:
                print("acción : renombrar origen -> destino")
            else:
                source_path.rename(target_path)
                renamed += 1
                print("acción : renombrado origen -> destino")

        print()

    if args.dry_run:
        print(f"Dry-run completado. Se revisarían {len(candidates)} archivos.")
    else:
        print(f"Proceso completado. Renombrados: {renamed}. Eliminados: {deleted}.")


if __name__ == "__main__":
    main()

# Made with Bob
