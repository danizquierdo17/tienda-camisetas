---
name: actualizacion-club-y-despliegue-fotos
description: Hacer scraping de un club concreto, actualizar catálogo y productos, versionar cambios y desplegar fotos nuevas a la VM
---

Usa este skill cuando el usuario quiera actualizar un club o equipo concreto con nuevas camisetas e imágenes.

## Flujo

1. Ejecuta el scraping solo para el club solicitado usando [`scraper_futbolmodaes.py`](scraper_futbolmodaes.py).
2. Verifica que se hayan descargado nuevas imágenes y que se haya actualizado [`futbolmodaes_img/catalogo.csv`](futbolmodaes_img/catalogo.csv).
3. Reconstruye [`futbolmodaes_img/manifest.csv`](futbolmodaes_img/manifest.csv) y regenera [`productos.js`](productos.js) con [`combinar_datos.py`](combinar_datos.py).
4. Haz commit y push en git solo de los archivos de catálogo/datos que se quieran versionar.
5. Sube las fotos nuevas a la VM.
6. Reinicia servicios en la VM.
7. Recuerda al usuario que debe purgar la caché en Cloudflare.

## Comandos

### 1. Scraping del club concreto

Parámetros opcionales útiles del scraper:
- [`--only`](scraper_futbolmodaes.py:502): filtra por uno o varios textos del equipo o club
- [`--max-products`](scraper_futbolmodaes.py:500): limita cuántos productos procesar por equipo
- [`--catalog-only`](scraper_futbolmodaes.py:510): actualiza solo catálogo, sin descargar imágenes
- [`--all-images`](scraper_futbolmodaes.py:508): descarga todas las vistas disponibles de cada producto

Ejemplos:

```bash
python3 ./scraper_futbolmodaes.py --only CLUB
```

```bash
python3 ./scraper_futbolmodaes.py --only CLUB --max-products 20
```

```bash
python3 ./scraper_futbolmodaes.py --only CLUB --all-images
```

```bash
python3 ./scraper_futbolmodaes.py --only CLUB --catalog-only --max-products 20
```

### 2. Reconstruir manifest y regenerar productos

```bash
python3 ./combinar_datos.py --rebuild-manifest
```

### 3. Versionar solo catálogo y productos

```bash
git add ./futbolmodaes_img/catalogo.csv ./productos.js
git commit -m "Actualizar catálogo y productos de CLUB"
git push
```

### 4. Subir fotos nuevas a la VM

```bash
tar -czf futbolmodaes_img.tar.gz futbolmodaes_img
gcloud compute scp ./futbolmodaes_img.tar.gz dehesa-vm:~ --zone=europe-southwest1-a --project=mercadodeploy
```

### 4b. Hacer git pull en la VM

```bash
cd ~/tienda-camisetas
git pull
```

### 5. Aplicar fotos en la VM

```bash
cd ~/tienda-camisetas
tar -xzf ~/futbolmodaes_img.tar.gz -C ~/tienda-camisetas
sudo systemctl restart tienda-camisetas nginx
```

## Importante

- Si el usuario quiere, también puedes incluir [`futbolmodaes_img/manifest.csv`](futbolmodaes_img/manifest.csv) en git, pero por defecto este flujo versiona solo [`futbolmodaes_img/catalogo.csv`](futbolmodaes_img/catalogo.csv) y [`productos.js`](productos.js).
- Después del despliegue, recuerda al usuario que debe purgar la caché en Cloudflare para ver las imágenes nuevas.
- Recuerda al usuario que los comnados en la VM los tendra que lanzar el. Para hacer login
 ```bash 
 gcloud compute ssh --zone "europe-southwest1-a" "dehesa-vm" --project "mercadodeploy"
 ```