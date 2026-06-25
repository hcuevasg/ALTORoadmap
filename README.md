# Roadmap Único de Desarrollo — Gestión Legal ALTO

Sitio web de una sola página para la presentación al **Comité TI** del **Roadmap Único de Desarrollo — Gestión Legal ALTO**. Fase actual: **Fase 3: Acuerdo** (parte de las Brechas Consolidadas y Macroproyectos del Informe 2.5). Con la identidad visual de [ALTO](https://www.alto.us/) (colores, tipografía Raleway y efectos de scroll).

> Sponsor del proyecto: **Roberto Carrasco (CTO)** · Junio 2026 · Versión Comité · Uso Interno y Confidencial

## 📁 Estructura

```
.
├── index.html      # Contenido de la presentación (Informe 2.5)
├── styles.css      # Sistema de diseño ALTO + componentes
├── script.js       # Animaciones, barra de progreso, navegación, contadores
├── .nojekyll       # Evita que GitHub Pages procese con Jekyll
└── assets/         # Imágenes / logos (opcional)
```

## 🧭 Secciones (en orden)

1. **Hero** — título del informe, fecha y quien presenta
2. **Contexto** — ALTO/Alliance, Beta vs Legacy y la restricción de TI ("ALTO no puede operar en Betas diferentes")
3. **Fases** — las 4 fases del roadmap (Levantamiento ✓ · Enfrentamiento ✓ · **Acuerdo ● (actual)** · Planeación ○)
4. **Cifras** — 117 brechas (MX 53 · CL 45 · CO 15 · USA 4), 62% nuevo desarrollo, 16 transversales, 44 por verificar
5. **Diagnóstico** — el patrón de 3 capas y el orden de resolución ("el dashboard sale del dato, no al revés")
6. **Macroproyectos** — explorador interactivo: se hace clic en cada MP (MP1–MP9) y se muestra solo su detalle (qué es, ejemplo "Hoy", transversalidad, qué decidir primero, países)
7. **Estrategia** — las 4 lecturas para la discusión de mínimos comunes
8. **Glosario** — términos operativos (Evento, Caso legal, Discovery, Viewer, etc.)
9. **Próximos pasos** — F2 (cerrada) → F3: Acuerdo (actual) → F4: Planeación Estratégica

> Fuente: documentos del Drive del roadmap, principalmente **Informe 2.5 (Versión Comité)**.

## ✏️ Editar contenido

Todo el texto está en **`index.html`**. Cada macroproyecto tiene un botón en `.mp-list` (`<button class="mp-tab">`) y su panel de detalle en `.mp-stage` (`<article class="mp-panel">`), enlazados por `data-mp`/`id`. Los números animados de la sección "Cifras" se controlan con el atributo `data-count`.

## 🎨 Identidad ALTO (en `styles.css`, sección `:root`)

| Token | Valor | Uso |
|-------|-------|-----|
| `--primary` | `#4073B8` | Azul ALTO |
| `--secondary` | `#E74243` | Rojo de marca (acentos, CTA) |
| `--text` | `#1A3350` | Texto navy |
| `--bg` / `--bg-secondary` | `#F0F2F2` / `#edf2f8` | Fondos |
| `--bg-dark` | `#2A313E` | Footer / sección oscura |
| Tipografía | **Raleway** | Fuente oficial de ALTO |

## 🚀 Desplegar en GitHub Pages

```bash
git init
git add .
git commit -m "Roadmap Gestión Legal ALTO — Informe 2.5"
git branch -M main
git remote add origin https://github.com/<usuario>/<repo>.git
git push -u origin main
```

Luego en GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**.
En ~1 minuto estará en `https://<usuario>.github.io/<repo>/`.

## 👀 Ver localmente

```bash
python3 -m http.server 8000   # abre http://localhost:8000
```

Sin build ni dependencias: HTML/CSS/JS estático.
