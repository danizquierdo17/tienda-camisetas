#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from pathlib import Path
import argparse


def find_no_image_files(root: Path):
    return sorted(
        path for path in root.rglob("*")
        if path.is_file() and path.name.endswith("_no_image")
    )


def main():
    parser = argparse.ArgumentParser(
        description="Elimina recursivamente todos los archivos que terminan en _no_image."
    )
    parser.add_argument(
        "--root",
        default="futbolmodaes_img",
        help="Directorio raíz donde buscar archivos _no_image",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Solo muestra qué archivos se eliminarían, sin borrar nada",
    )
    args = parser.parse_args()

    root = Path(args.root)

    if not root.exists() or not root.is_dir():
        raise SystemExit(f"No existe el directorio: {root}")

    files = find_no_image_files(root)

    if not files:
        print("No se encontraron archivos terminados en _no_image.")
        return

    print(f"Encontrados {len(files)} archivos terminados en _no_image:\n")

    deleted = 0
    for path in files:
        print(path)
        if not args.dry_run:
            path.unlink()
            deleted += 1

    print()
    if args.dry_run:
        print(f"Dry-run completado. Se eliminarían {len(files)} archivos.")
    else:
        print(f"Proceso completado. Eliminados {deleted} archivos.")


if __name__ == "__main__":
    main()

# Made with Bob
