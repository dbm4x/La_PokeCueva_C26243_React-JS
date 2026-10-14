# TalentoLab Tech Store — Pre-entrega React

E-commerce de ejemplo para la pre-entrega del curso de React (TalentoLab / Talento Tech).

## Requisitos cubiertos

1. **Estructura y Layout** — Carpetas organizadas, `Layout.jsx` con `Header`, `nav` y `Footer` (info de empresa + tarjetas del equipo).
2. **Catálogo** — `ItemListContainer` carga `public/data/productos.json` con `useEffect` + `fetch`. Productos con `Item.jsx` por props.
3. **Ruteo** — `react-router-dom`: `/`, `/productos`, `/producto/:id`, `/carrito`. Nav con `<Link>`.
4. **Carrito** — `CartContext` (`addToCart`), `CartWidget` con contador, vista `/carrito`.
5. **Deploy** — Configurado para Vercel (`vercel.json`) y Netlify (`public/_redirects`).

## Scripts

```bash
npm install
npm run dev      # desarrollo
npm run build    # build de producción
npm run preview  # previsualizar build
```

## Deploy

### Vercel
1. Subí el repo a GitHub.
2. En [vercel.com](https://vercel.com) → Import Project → seleccioná el repo.
3. Framework: Vite. Build: `npm run build`. Output: `dist`.

### Netlify
1. Subí el repo a GitHub.
2. En [netlify.com](https://netlify.com) → Add new site → Import from Git.
3. Build command: `npm run build`. Publish directory: `dist`.

## Links (completar tras publicar)

- **Sitio:** _pegar URL de Vercel o Netlify_
- **Repositorio:** _pegar URL de GitHub_
