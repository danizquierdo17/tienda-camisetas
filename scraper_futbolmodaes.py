#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
scraper_futbolmodaes.py
-----------------------
Descarga las imagenes GRANDES de https://www.futbolmodaes.com/ organizadas en
carpetas por equipo (categoria), y genera dos archivos:

    futbolmodaes_img/
        nacional-espana/
            29706_00.jpg
            29706_01.jpg
            ...
        manifest.csv        <- equipo_slug | cpath | pID | image_url | fichero
        catalogo.csv        <- equipo | nombre | precio

catalogo.csv tiene exactamente el formato pedido:
    equipo|nombre|precio
    nacional-espana|Espana 2026-27 2a Equipacion Thai Camisetas|17.90

Como funciona (la web usa Zen Cart):
  1. Lee la pagina principal y descubre TODAS las categorias-equipo.
     Solo se queda con las categorias "hoja" (sin subcategorias).
  2. Para cada equipo recorre todas sus paginas y saca los pID.
  3. Para cada producto abre product_info y extrae:
       - Nombre  (<h1 itemprop="name"> o <title> como fallback)
       - Precio  (itemprop="price", o patrones de precio con euro/€)
       - Imagenes principales y adicionales
  4. Descarga imagenes y escribe catalogo.csv.
     Todo es reanudable: si el fichero/centinela ya existe lo salta.

Requisitos:
    pip install requests

Uso:
    python scraper_futbolmodaes.py                         # todo el catalogo
    python scraper_futbolmodaes.py --only Espana           # solo ese equipo
    python scraper_futbolmodaes.py --all-images            # portada + adicionales
    python scraper_futbolmodaes.py --only Espana --all-images --delay 1.0
    python scraper_futbolmodaes.py --list                  # solo listar equipos
    python scraper_futbolmodaes.py --catalog-only          # solo catalogo.csv, sin descargar imagenes
    python scraper_futbolmodaes.py --start-from "ajax"     # comenzar desde AFC Ajax hasta el final
    python scraper_futbolmodaes.py --start-from "venezia"  # comenzar desde Venezia hasta el final
    python scraper_futbolmodaes.py --max-products 50       # maximo 50 productos por equipo
"""

import argparse
import csv
import os
import re
import sys
import time
import random
from urllib.parse import urljoin, quote

import requests

BASE = "https://www.futbolmodaes.com/"

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/124.0 Safari/537.36"
    ),
    "Accept-Language": "es-ES,es;q=0.9,en;q=0.8",
    "Referer": BASE,
}

# ---------------------------------------------------------------------------
# Expresiones regulares
# ---------------------------------------------------------------------------

RE_CATEGORY = re.compile(
    r'href="https?://www\.futbolmodaes\.com/([^"/]+?)-c-(\d+(?:_\d+)*)\.html"',
    re.IGNORECASE,
)
RE_PRODUCT = re.compile(r'-p-(\d+)\.html', re.IGNORECASE)

# Imagen principal: bmz_cache/ o images/
RE_BIG_IMAGE = re.compile(
    r'((?:https?://www\.futbolmodaes\.com)?/?(?:bmz_cache|images)/[^\s"\'<>)]+?\.(?:jpe?g|png|gif))',
    re.IGNORECASE,
)
RE_ADDITIONAL = re.compile(
    r'products_image_large_additional=([^"\'<>)&]+?\.(?:jpe?g|png|gif))',
    re.IGNORECASE,
)
RE_MAIN_PRODUCT = re.compile(
    r'products_image=([^"\'<>)&]+?\.(?:jpe?g|png|gif))',
    re.IGNORECASE,
)

# Nombre del producto
# Zen Cart suele usar itemprop="name" en un h1/h2, o el <title>
RE_NAME_ITEMPROP = re.compile(
    r'itemprop=["\']name["\'][^>]*>\s*([^<]+?)\s*<',
    re.IGNORECASE,
)
RE_NAME_H1 = re.compile(
    r'<h[12][^>]*>\s*([^<]{5,120}?)\s*</h[12]>',
    re.IGNORECASE,
)
RE_TITLE = re.compile(
    r'<title[^>]*>\s*([^<]+?)\s*(?:\||-|::).*?</title>',
    re.IGNORECASE,
)
RE_TITLE_PLAIN = re.compile(
    r'<title[^>]*>\s*([^<]+?)\s*</title>',
    re.IGNORECASE,
)
RE_META_DESCRIPTION = re.compile(
    r'<meta[^>]+name=["\']description["\'][^>]+content=["\']([^"\']+)["\']',
    re.IGNORECASE,
)

# Precio del producto
# Zen Cart emite itemprop="price" content="17.90"  o  €17.90  o  17,90 €
RE_PRICE_ITEMPROP = re.compile(
    r'itemprop=["\']price["\'][^>]*content=["\']([0-9]+[.,][0-9]{1,2})["\']',
    re.IGNORECASE,
)
RE_PRICE_CONTENT = re.compile(
    r'content=["\']([0-9]+[.,][0-9]{1,2})["\'][^>]*itemprop=["\']price["\']',
    re.IGNORECASE,
)
RE_PRICE_EURO = re.compile(
    r'(?:€|&euro;)\s*([0-9]+[.,][0-9]{1,2})',
    re.IGNORECASE,
)
RE_PRICE_EURO_AFTER = re.compile(
    r'([0-9]+[.,][0-9]{1,2})\s*(?:€|&euro;)',
    re.IGNORECASE,
)
RE_PRICE_CLASS = re.compile(
    r'(?:productPrice|productSpecialPrice|price)[^>]*>\s*[^0-9€]*([0-9]+[.,][0-9]{1,2})',
    re.IGNORECASE,
)


# ---------------------------------------------------------------------------
# Red
# ---------------------------------------------------------------------------

def build_session():
    s = requests.Session()
    s.headers.update(HEADERS)
    return s


def get(session, url, *, retries=3, timeout=30):
    for intento in range(1, retries + 1):
        try:
            r = session.get(url, timeout=timeout)
            if r.status_code == 200:
                return r
            if r.status_code in (404, 410):
                return None
        except requests.RequestException as e:
            if intento == retries:
                print(f"   ! Error definitivo en {url}: {e}", file=sys.stderr)
                return None
        time.sleep(1.5 * intento)
    return None


# ---------------------------------------------------------------------------
# Descubrimiento de categorias
# ---------------------------------------------------------------------------

def discover_categories(session):
    print("Descubriendo equipos desde la pagina principal...")
    r = get(session, BASE)
    if r is None:
        print("No se pudo leer la pagina principal.", file=sys.stderr)
        sys.exit(1)

    html = r.text
    cats = {}
    for slug, cpath in RE_CATEGORY.findall(html):
        if cpath.count("_") > 1:
            continue
        if cpath not in cats or len(slug) < len(cats[cpath]):
            cats[cpath] = slug

    all_paths = set(cats.keys())
    leaves = []
    for cpath, slug in cats.items():
        es_padre = any(other.startswith(cpath + "_") for other in all_paths)
        if not es_padre:
            leaves.append((slug, cpath))

    leaves.sort(key=lambda x: x[0])
    print(f"  -> {len(leaves)} equipos/categorias encontrados.\n")
    return leaves


# ---------------------------------------------------------------------------
# Productos de una categoria
# ---------------------------------------------------------------------------

def category_url(slug, cpath, page=1):
    url = f"{BASE}{slug}-c-{cpath}.html"
    if page > 1:
        url += f"?page={page}&disp_order=1&sort=20a"
    return url


def product_ids_for_category(session, slug, cpath, delay, max_pages=200):
    pids = []
    vistos = set()
    page = 1
    while page <= max_pages:
        url = category_url(slug, cpath, page)
        r = get(session, url)
        if r is None:
            break
        nuevos = [p for p in RE_PRODUCT.findall(r.text) if p not in vistos]
        if not nuevos:
            break
        for p in nuevos:
            vistos.add(p)
            pids.append(p)
        page += 1
        time.sleep(delay + random.uniform(0, delay * 0.3))
    return pids


# ---------------------------------------------------------------------------
# Extraccion de nombre y precio
# ---------------------------------------------------------------------------

def clean_text(s):
    """Limpia espacios y entidades HTML basicas."""
    s = re.sub(r'&amp;', '&', s)
    s = re.sub(r'&nbsp;', ' ', s)
    s = re.sub(r'&#?\w+;', '', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip()


def normalize_product_name(name):
    """Limpia prefijos SEO y coletillas promocionales del nombre."""
    txt = clean_text(name)

    txt = re.sub(r'^(cheap|wholesale|discount|thai cheap)\s+', '', txt, flags=re.IGNORECASE)
    txt = re.sub(
        r'\s+is an authentic professional sports jersey.*$',
        '',
        txt,
        flags=re.IGNORECASE,
    )
    return txt.strip(" -|:")


def is_bad_product_name(name):
    """Detecta nombres SEO/promocionales o claramente incompletos."""
    if not name:
        return True

    txt = normalize_product_name(name)
    lower = txt.lower()

    if len(txt) < 10:
        return True

    bad_values = {
        "cheap",
        "wholesale",
        "discount",
    }
    if lower in bad_values:
        return True

    return False


def extract_name(html):
    """Extrae el nombre del producto del HTML de product_info."""
    candidates = []

    # 1) Meta description: suele empezar por el nombre real del producto
    m = RE_META_DESCRIPTION.search(html)
    if m:
        txt = normalize_product_name(m.group(1))
        if not is_bad_product_name(txt):
            candidates.append(txt)

    # 2) Primer <h1> o <h2> con contenido razonable
    for m in RE_NAME_H1.finditer(html):
        txt = normalize_product_name(m.group(1))
        if 10 < len(txt) < 200 and '<' not in txt and not is_bad_product_name(txt):
            candidates.append(txt)

    # 3) <title> antes del separador
    m = RE_TITLE.search(html)
    if m:
        txt = normalize_product_name(m.group(1))
        if not is_bad_product_name(txt):
            candidates.append(txt)

    # 4) itemprop="name" solo como fallback
    m = RE_NAME_ITEMPROP.search(html)
    if m:
        txt = normalize_product_name(m.group(1))
        if not is_bad_product_name(txt):
            candidates.append(txt)

    # 5) <title> completo como ultimo recurso
    m = RE_TITLE_PLAIN.search(html)
    if m:
        txt = normalize_product_name(m.group(1))
        if not is_bad_product_name(txt):
            candidates.append(txt)

    if candidates:
        return max(candidates, key=len)

    return ""


def extract_price(html):
    """Extrae el precio del producto (devuelve string tipo '17.90' o '')."""
    # 1) itemprop="price" content="..."  (formato mas fiable)
    for pattern in (RE_PRICE_ITEMPROP, RE_PRICE_CONTENT):
        m = pattern.search(html)
        if m:
            return m.group(1).replace(",", ".")

    # 2) €17.90 o €17,90
    m = RE_PRICE_EURO.search(html)
    if m:
        return m.group(1).replace(",", ".")

    # 3) 17.90 €
    m = RE_PRICE_EURO_AFTER.search(html)
    if m:
        return m.group(1).replace(",", ".")

    # 4) Clase CSS productPrice / productSpecialPrice
    m = RE_PRICE_CLASS.search(html)
    if m:
        return m.group(1).replace(",", ".")

    return ""


def fetch_product_info(session, pid, delay):
    """
    Abre la pagina de producto y devuelve (nombre, precio, html).
    html se reutiliza para extraer imagenes adicionales.
    """
    prod_url = f"{BASE}index.php?main_page=product_info&products_id={pid}"
    r = get(session, prod_url)
    time.sleep(delay + random.uniform(0, delay * 0.3))
    if r is None:
        return "", "", None
    html = r.text
    nombre = extract_name(html)
    precio = extract_price(html)
    return nombre, precio, html


# ---------------------------------------------------------------------------
# Extraccion de imagenes
# ---------------------------------------------------------------------------

def big_image_url(session, pid, delay):
    url = f"{BASE}index.php?main_page=popup_image&pID={pid}"
    r = get(session, url)
    if r is None:
        return None
    m = RE_BIG_IMAGE.search(r.text)
    if not m:
        return None
    raw = m.group(1)
    return raw if raw.startswith("http") else urljoin(BASE, raw)


def collect_product_images(session, pid, delay, product_html=None):
    """
    Devuelve lista de (etiqueta, url).
    Si ya tenemos el HTML de product_info lo reutilizamos (product_html).
    """
    images = []
    vistas = set()

    # Portada via popup_image
    main = big_image_url(session, pid, delay)
    time.sleep(delay + random.uniform(0, delay * 0.3))
    if main and main not in vistas:
        vistas.add(main)
        images.append(("00", main))

    # Reutilizar HTML ya descargado o pedir pagina de producto
    if product_html is None:
        prod_url = f"{BASE}index.php?main_page=product_info&products_id={pid}"
        pr = get(session, prod_url)
        time.sleep(delay + random.uniform(0, delay * 0.3))
        html = pr.text if pr is not None else ""
    else:
        html = product_html

    if html:
        # Fallback portada
        if not images:
            m = RE_MAIN_PRODUCT.search(html)
            if m:
                path = m.group(1).strip()
                full = BASE + quote(path, safe="/:") if not path.startswith("http") else path
                if full not in vistas:
                    vistas.add(full)
                    images.append(("00", full))

        # Vistas adicionales
        i = 0
        for path in RE_ADDITIONAL.findall(html):
            path = path.strip()
            full = BASE + quote(path, safe="/:") if not path.startswith("http") else path
            if full in vistas:
                continue
            vistas.add(full)
            i += 1
            images.append((f"{i:02d}", full))

    return images


# ---------------------------------------------------------------------------
# Descarga
# ---------------------------------------------------------------------------

def download_image(session, img_url, dest_path):
    # Validar si la imagen ya existe (para evitar descargas innecesarias)
    if os.path.exists(dest_path):
        print(f"   ⏭️  Imagen ya existe: {dest_path}")
        return True
    
    # También verificar en el directorio images/ (estructura plana para producción)
    base_name = os.path.basename(dest_path)
    images_path = os.path.join("images", base_name)
    if os.path.exists(images_path):
        print(f"   ⏭️  Imagen ya existe en images/: {images_path}")
        # Copiar a la ubicación esperada si no existe
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        import shutil
        shutil.copy2(images_path, dest_path)
        return True
    
    r = get(session, img_url)
    if r is None:
        return False
    ctype = r.headers.get("Content-Type", "")
    if "image" not in ctype and not img_url.lower().endswith((".jpg", ".jpeg", ".png", ".gif")):
        print(f"   ! {img_url} no parece imagen (Content-Type: {ctype})", file=sys.stderr)
        return False
    with open(dest_path, "wb") as f:
        f.write(r.content)
    return True


# ---------------------------------------------------------------------------
# Utilidades
# ---------------------------------------------------------------------------

def ext_from_url(url, default=".jpg"):
    m = re.search(r"\.(jpe?g|png|gif)(?:$|\?)", url, re.IGNORECASE)
    if m:
        e = "." + m.group(1).lower()
        return ".jpg" if e == ".jpeg" else e
    return default


def safe_folder(slug):
    s = slug.strip().lower()
    s = re.sub(r"[^a-z0-9áéíóúñü\-_]+", "-", s)
    return s or "sin-nombre"


def sentinel_path(folder, pid):
    return os.path.join(folder, f"{pid}_no_image")


def already_done(folder, pid, all_images):
    if os.path.exists(sentinel_path(folder, pid)):
        return True
    pattern = pid + "_" if all_images else pid + "."
    return any(f.startswith(pattern) for f in os.listdir(folder))


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    ap = argparse.ArgumentParser(description="Descarga imagenes y catalogo de futbolmodaes.com.")
    ap.add_argument("--out", default="futbolmodaes_img",
                    help="Carpeta de salida (def: futbolmodaes_img)")
    ap.add_argument("--delay", type=float, default=1.0,
                    help="Pausa base entre peticiones en segundos (def: 1.0)")
    ap.add_argument("--max-products", type=int, default=None,
                    help="Maximo de productos a procesar por equipo (def: sin limite)")
    ap.add_argument("--only", nargs="*", default=None,
                    help="Solo equipos cuyo slug contenga alguno de estos textos")
    ap.add_argument("--start-from", type=str, default=None,
                    help="Comenzar desde este equipo (slug) y procesar hasta el final")
    ap.add_argument("--list", action="store_true",
                    help="Solo listar los equipos detectados y salir")
    ap.add_argument("--all-images", action="store_true",
                    help="Descargar TODAS las vistas de cada producto")
    ap.add_argument("--catalog-only", action="store_true",
                    help="Solo generar catalogo.csv, sin descargar imagenes")
    args = ap.parse_args()

    session = build_session()
    categories = discover_categories(session)

    if args.only:
        filtros = [f.lower() for f in args.only]
        categories = [(s, c) for (s, c) in categories
                      if any(f in s.lower() for f in filtros)]
        print(f"Filtrado a {len(categories)} equipos por --only {args.only}\n")

    if args.start_from:
        # Buscar el índice del equipo desde donde comenzar
        start_idx = None
        for idx, (slug, cpath) in enumerate(categories):
            if args.start_from.lower() in slug.lower():
                start_idx = idx
                break
        
        if start_idx is not None:
            total_original = len(categories)
            categories = categories[start_idx:]
            print(f"Comenzando desde '{categories[0][0]}' (posición {start_idx + 1}/{total_original})")
            print(f"Se procesarán {len(categories)} equipos (saltando los primeros {start_idx})\n")
        else:
            print(f"⚠️  No se encontró ningún equipo que contenga '{args.start_from}'")
            print("Equipos disponibles:")
            for slug, cpath in categories[:10]:
                print(f"  - {slug}")
            if len(categories) > 10:
                print(f"  ... y {len(categories) - 10} más")
            return

    if args.list:
        for slug, cpath in categories:
            print(f"  {cpath:12s}  {slug}")
        print(f"\nTotal: {len(categories)} equipos.")
        return

    os.makedirs(args.out, exist_ok=True)

    manifest_path = os.path.join(args.out, "manifest.csv")
    catalog_path  = os.path.join(args.out, "catalogo.csv")

    nuevo_manifest = not os.path.exists(manifest_path)
    nuevo_catalog  = not os.path.exists(catalog_path)

    # pIDs ya en catalogo para no reescribir filas duplicadas al reanudar
    pids_en_catalogo = set()
    if not nuevo_catalog:
        with open(catalog_path, newline="", encoding="utf-8") as f:
            for row in csv.reader(f, delimiter="|"):
                if len(row) >= 2:
                    # la columna 1 es el nombre; usamos equipo+nombre como clave
                    # Pero mejor guardamos la 3a columna (precio tiene pID en manifest)
                    pass
        # Releer correctamente: buscamos pIDs ya procesados en manifest
    if not nuevo_manifest:
        with open(manifest_path, newline="", encoding="utf-8") as f:
            for row in csv.reader(f):
                if len(row) >= 3:
                    pids_en_catalogo.add(row[2])  # columna pID

    total_descargadas  = 0
    total_saltadas     = 0
    total_fallidas     = 0
    total_sin_imagen   = 0
    total_en_catalogo  = 0

    with (
        open(manifest_path, "a", newline="", encoding="utf-8") as mf,
        open(catalog_path,  "a", newline="", encoding="utf-8") as cf,
    ):
        manifest_writer = csv.writer(mf)
        catalog_writer  = csv.writer(cf, delimiter="|")

        if nuevo_manifest:
            manifest_writer.writerow(["equipo_slug", "cpath", "pID", "image_url", "fichero"])
        if nuevo_catalog:
            catalog_writer.writerow(["equipo", "pID", "nombre", "precio"])

        for idx, (slug, cpath) in enumerate(categories, 1):
            folder = os.path.join(args.out, safe_folder(slug))
            if not args.catalog_only:
                os.makedirs(folder, exist_ok=True)

            print(f"[{idx}/{len(categories)}] {slug}  (cPath {cpath})")

            pids = product_ids_for_category(session, slug, cpath, args.delay)
            print(f"   {len(pids)} productos en esta categoria")
            
            # Limitar productos si se especificó --max-products
            if args.max_products and len(pids) > args.max_products:
                print(f"   ⚠️  Limitando a {args.max_products} productos (de {len(pids)})")
                pids = pids[:args.max_products]

            for pid in pids:

                # ---------- Nombre y precio (siempre, para el catalogo) ----------
                already_in_catalog = pid in pids_en_catalogo

                if not already_in_catalog:
                    nombre, precio, prod_html = fetch_product_info(session, pid, args.delay)
                    if nombre or precio:
                        catalog_writer.writerow([slug, pid, nombre, precio])
                        cf.flush()
                        pids_en_catalogo.add(pid)
                        total_en_catalogo += 1
                        print(f"   c {pid}  {nombre[:50]}  {precio}")
                    else:
                        prod_html = None
                else:
                    prod_html = None

                # ---------- Descarga de imagenes ----------
                if args.catalog_only:
                    continue

                if already_done(folder, pid, args.all_images):
                    total_saltadas += 1
                    continue

                if args.all_images:
                    imgs = collect_product_images(session, pid, args.delay,
                                                  product_html=prod_html)
                    if not imgs:
                        print(f"   ! Sin imagenes para pID {pid}", file=sys.stderr)
                        total_sin_imagen += 1
                        open(sentinel_path(folder, pid), "w").close()
                        continue

                    for etiqueta, img_url in imgs:
                        ext  = ext_from_url(img_url)
                        dest = os.path.join(folder, f"{pid}_{etiqueta}{ext}")
                        if os.path.exists(dest):
                            total_saltadas += 1
                            continue
                        ok = download_image(session, img_url, dest)
                        time.sleep(args.delay + random.uniform(0, args.delay * 0.3))
                        if ok:
                            total_descargadas += 1
                            manifest_writer.writerow([slug, cpath, pid, img_url, dest])
                            mf.flush()
                            print(f"   + {pid}_{etiqueta}{ext}")
                        else:
                            total_fallidas += 1
                            print(f"   ! Fallo {pid}_{etiqueta}  ({img_url})", file=sys.stderr)

                else:
                    # Modo simple: solo imagen principal
                    img_url = big_image_url(session, pid, args.delay)
                    time.sleep(args.delay + random.uniform(0, args.delay * 0.3))

                    if not img_url and prod_html:
                        m = RE_MAIN_PRODUCT.search(prod_html)
                        if m:
                            path = m.group(1).strip()
                            img_url = (BASE + quote(path, safe="/:")
                                       if not path.startswith("http") else path)

                    if not img_url:
                        print(f"   ! Sin imagen grande para pID {pid}", file=sys.stderr)
                        total_sin_imagen += 1
                        open(sentinel_path(folder, pid), "w").close()
                        continue

                    ext  = ext_from_url(img_url)
                    dest = os.path.join(folder, f"{pid}{ext}")
                    ok   = download_image(session, img_url, dest)
                    time.sleep(args.delay + random.uniform(0, args.delay * 0.3))

                    if ok:
                        total_descargadas += 1
                        manifest_writer.writerow([slug, cpath, pid, img_url, dest])
                        mf.flush()
                        print(f"   + {pid}{ext}")
                    else:
                        total_fallidas += 1
                        print(f"   ! Fallo {pid}  ({img_url})", file=sys.stderr)

    print("\n================ RESUMEN ================")
    print(f"  Productos en catalogo: {total_en_catalogo}")
    print(f"  Descargadas nuevas   : {total_descargadas}")
    print(f"  Saltadas (ya estaban): {total_saltadas}")
    print(f"  Sin imagen detectada : {total_sin_imagen}")
    print(f"  Fallidas (red/HTTP)  : {total_fallidas}")
    print(f"  Salida               : {os.path.abspath(args.out)}")
    print(f"  Catalogo             : {catalog_path}")
    print(f"  Manifest             : {manifest_path}")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nInterrumpido. Puedes volver a lanzarlo y continuara donde estaba.")
