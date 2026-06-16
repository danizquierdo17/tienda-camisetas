#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import argparse
import csv
import re
from pathlib import Path


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".gif"}
PID_PATTERN = re.compile(r"^(\d+)(?:_(\d+))?$")


def iter_image_files(root: Path):
    for path in sorted(root.rglob("*")):
        if not path.is_file():
            continue
        if path.suffix.lower() not in IMAGE_EXTENSIONS:
            continue
        if path.name in {"placeholder.svg", "placeholder.jpg"}:
            continue
        yield path


def extract_pid(filename_stem: str):
    match = PID_PATTERN.match(filename_stem)
    if not match:
        return None
    return match.group(1)


def build_rows(root: Path):
    rows = []

    for image_path in iter_image_files(root):
        relative_path = image_path.relative_to(root.parent).as_posix()
        equipo_slug = image_path.parent.name
        pid = extract_pid(image_path.stem)

        if not pid:
            continue

        rows.append([
            equipo_slug,
            "",
            pid,
            "",
            relative_path,
        ])

    rows.sort(key=lambda row: (row[0], int(row[2]), row[4]))
    return rows


def main():
    parser = argparse.ArgumentParser(
        description="Reconstruye manifest.csv a partir de las imágenes ya descargadas."
    )
    parser.add_argument(
        "--root",
        default="futbolmodaes_img",
        help="Directorio raíz de imágenes",
    )
    parser.add_argument(
        "--output",
        default="futbolmodaes_img/manifest.csv",
        help="Ruta del manifest.csv a generar",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Solo muestra cuántas filas se generarían",
    )
    args = parser.parse_args()

    root = Path(args.root)
    output = Path(args.output)

    if not root.exists() or not root.is_dir():
        raise SystemExit(f"No existe el directorio raíz: {root}")

    rows = build_rows(root)

    if args.dry_run:
        print(f"Se generarían {len(rows)} filas en {output}")
        return

    output.parent.mkdir(parents=True, exist_ok=True)

    with output.open("w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["equipo_slug", "cpath", "pID", "image_url", "fichero"])
        writer.writerows(rows)

    print(f"Manifest reconstruido: {output}")
    print(f"Filas generadas: {len(rows)}")


if __name__ == "__main__":
    main()

# Made with Bob
