# Generador de genogramas

App web de un solo archivo (`index.html`), sin dependencias ni servidor. Dibuja genogramas con los símbolos de McGoldrick y Gerson (*Genogramas en la evaluación familiar*).

## Uso local
Abre `index.html` en el navegador. Funciona sin internet.

## Publicar en GitHub Pages
1. Crea un repositorio y sube estos archivos a la rama `main`.
2. Settings > Pages > Source: "Deploy from a branch" > rama `main`, carpeta `/ (root)`.
3. Tu app quedará en `https://TU-USUARIO.github.io/NOMBRE-REPO/`.

## Funciones agregadas
- **Embarazos, abortos y gemelos** (Diagrama 2.4 y 2.15): en las listas de hijos y hermanos, botón "+ Embarazo / aborto" (embarazo △, aborto espontáneo ●, aborto provocado ✕, parto de feto muerto ⊠/⊗). Gemelos: elige "con el siguiente" (dicigóticos o idénticos, con barra) y deja a ambos seguidos.
- **Hijos adoptivos** (Diagrama 2.14): casilla "Adoptado/a" → línea punteada hacia los padres.
- **Parejas de hermanos y tíos** (Diagrama 2.18): casilla "Tiene pareja"; se dibuja un poco más abajo, unida con línea de matrimonio/unión/separación/divorcio.
- **Cronología familiar** (cap. 2): año + hecho, se ordena sola y se dibuja bajo el genograma (también en SVG/PNG). El botón "Traer uniones y pérdidas con año" la llena desde el genograma.
- **Hijos de hermanos y tíos** (sobrinos y primos): al marcar "Tiene pareja" aparece "Hijos de esta pareja", con los mismos controles (adoptados, gemelos, embarazos y abortos). Se dibujan bajo la pareja, y el genograma se reacomoda para dejarles espacio.

## Instalar como app (PWA)
Funciona en Android, iPhone/iPad y computadora. Requiere abrirla desde una dirección `https://` (por ejemplo GitHub Pages); no se instala abriendo el archivo directamente.
- **Android (Chrome):** menú ⋮ > "Instalar app" o "Agregar a la pantalla principal".
- **iPhone/iPad (Safari):** botón Compartir > "Agregar a pantalla de inicio".
- Después de la primera carga funciona sin internet.
- Archivos necesarios en el repositorio: `index.html`, `manifest.json`, `sw.js` y la carpeta `icons/`.
- Si modificas `index.html`, cambia `genogramas-v1` por `genogramas-v2` (y así sucesivamente) en `sw.js` para que los celulares reciban la actualización.
