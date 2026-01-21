# Registro de Cambios

Todos los cambios notables en este proyecto serán documentados en este archivo.

---

## [2026-01-21] - Optimización de Hero en Modo Claro

### Modificado

- **Overlay del Hero (modo claro):** Reducido drásticamente de `0.6` a `0.05` (casi transparente) para permitir que el video de fondo se vea claramente sin el "velo blanco". El header blanco es suficiente para indicar el modo claro.
- **Textos hero (`.hero-trust-copy`, `.hero-scroll-cue`):** Unificados para usar el mismo color blanco (`rgba(255, 255, 255, 0.9)`) en ambos modos (claro y oscuro), garantizando legibilidad sobre el video oscuro.
- **Título hero "Automatizados." (dark mode):** Agregado color cyan (`var(--accent-lighter)`) con sombra suave para mantener consistencia visual con light mode. Ahora la palabra clave destaca en ambos temas.

### Corregido

- **Legibilidad de textos hero en light mode:** Los textos con degradado oscuro eran ilegibles sobre el video sin overlay. Se simplificó a color blanco sólido.

---

## [2026-01-21] - Mejoras de Accesibilidad Visual y Refinamiento de UI

### Agregado

- **Glassmorphism en timeline nodes:** Efecto de desenfoque (`backdrop-filter: blur(18px)`) en los círculos numerados de la sección "Caso de Uso" para mejorar legibilidad de los números sobre la línea animada.
- **Degradado oscuro en textos del Hero (modo claro):** Aplicado degradado cyan-violeta oscuro a `.hero-trust-copy` y `.hero-scroll-cue` para mejorar contraste sobre el video de fondo con overlay reducido.
- **Sombra multi-capa en texto de acento del Hero:** Implementada técnica de "double layer shadow" en `.text-accent` (modo claro) para garantizar legibilidad sobre video dinámico.

### Modificado

- **Opacidad del overlay del Hero (modo claro):** Reducida de `0.75` a `0.6` para permitir mayor visibilidad del video de fondo, manteniendo legibilidad del texto.
- **Color de textos del Hero (modo claro):** Cambiados a blanco (`#ffffff`) con sombras para adaptarse al overlay más transparente.
- **Alineación de la línea animada del timeline:** Corregida la posición vertical de `.timeline-dots-line` para que pase exactamente por el centro de los 3 círculos numerados. Se agregó `bottom: auto` para evitar conflictos con estilos móviles.

### Corregido

- **Bug de alineación del timeline:** La línea de puntos animados no atravesaba correctamente los círculos numerados debido a herencia de propiedades `bottom` de la versión móvil.

---

## [Versión Inicial] - Landing Page Veridia

### Agregado

- **Estructura HTML completa** con secciones: Hero, Problemas, Servicios, Enfoque, Valor, Stack, Caso de Uso, Contacto, Footer.
- **Sistema bilingüe (ES/EN):** Traducciones dinámicas con `data-lang-key` y toggle de idioma en header.
- **Sistema de temas (claro/oscuro):** Variables CSS con persistencia en `localStorage`.
- **Animaciones:**
  - Fade-in reveals con IntersectionObserver
  - Canvas de partículas animadas en footer
  - Video hero con controles de pausa/play
- **Navegación responsive:** Menú móvil con hamburger, smooth scroll con offset de header.
- **Formulario de contacto:** Captura de leads (solo frontend, sin backend).
- **Iconografía:** Integración de Lucide Icons para UI moderna.
- **Tipografía:** Google Fonts (Inter) para diseño profesional.
- **SEO básico:** Meta tags, estructura semántica, accesibilidad inicial.

### Tecnologías Utilizadas

- HTML5, CSS3 (custom + Tailwind CDN), JavaScript Vanilla
- Lucide Icons, Google Fonts

---

**Formato:** Este changelog sigue las convenciones de [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/).
