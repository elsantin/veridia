# Veridia - Automatización Inteligente

Landing page profesional para Veridia, agencia de automatización inteligente especializada en IPA, RPA avanzado e integración de IA.

## 📋 Descripción

Veridia es una landing page estática bilingüe (ES/EN) diseñada para convertir visitantes en leads calificados. El sitio comunica claramente los problemas que resuelve la automatización inteligente, los servicios ofrecidos, la metodología de trabajo y el valor medible que aporta a los negocios.

**Público objetivo:** Decisores de negocio (founders, directores de operaciones, gerentes) que buscan optimizar procesos manuales, reducir costos operativos e integrar sistemas desconectados.

## 🚀 Características Principales

- **Bilingüe (ES/EN):** Sistema de traducciones dinámico con `data-lang-key`
- **Tema Claro/Oscuro:** Toggle persistente con variables CSS
- **Responsive:** Diseño mobile-first con Tailwind CSS
- **Animaciones:** Fade-in reveals, canvas de partículas en footer, video hero
- **SEO-friendly:** Estructura semántica, meta tags, accesibilidad WCAG AA
- **Formulario de contacto:** Captura de leads con validación

## 📁 Estructura del Proyecto

```
veridia/
├── index.html          # Estructura principal de la landing
├── style.css           # Estilos personalizados y variables de tema
├── script.js           # Lógica de interacción (idioma, tema, animaciones)
├── hero-loop.mp4       # Video de fondo para la sección Hero
├── hero-veridia.png    # Poster del video Hero
├── images/             # Recursos gráficos
├── agents.md           # Guía completa para agentes IA
├── CHANGELOG.md        # Registro de cambios
└── ROADMAP.md          # Hoja de ruta y mejoras futuras
```

## 🛠️ Stack Tecnológico

- **HTML5** semántico
- **Tailwind CSS** (vía CDN) para layout responsive
- **CSS personalizado** para diseño custom y sistema de temas
- **JavaScript Vanilla** para interactividad
- **Lucide Icons** para iconografía moderna
- **Google Fonts (Inter)** para tipografía

## 📦 Instalación y Uso

Este proyecto es una landing page estática. No requiere instalación de dependencias.

### Opción 1: Abrir directamente

```bash
# Clonar el repositorio
git clone https://github.com/elsantin/veridia.git
cd veridia

# Abrir index.html en tu navegador
start index.html  # Windows
```

### Opción 2: Servidor local (recomendado)

```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (npx)
npx http-server -p 8000
```

Luego abre `http://localhost:8000` en tu navegador.

## 🎨 Personalización

### Cambiar colores del tema

Edita las variables CSS en `style.css`:

```css
:root {
  --accent: #00c8ff; /* Cyan principal */
  --violet-accent: #8b5cf6; /* Violeta de acento */
  --bg-dark-primary: #08080c; /* Fondo oscuro */
}

[data-theme="light"] {
  --accent: #0099cc; /* Cyan para modo claro */
}
```

### Agregar/editar textos

1. **Actualiza el HTML:** Asegúrate de que el elemento tenga un atributo `data-lang-key` único.
2. **Actualiza las traducciones en `script.js`:**

```javascript
const translations = {
  en: { mi_nueva_clave: "My new text" },
  es: { mi_nueva_clave: "Mi nuevo texto" },
};
```

## 🌐 Despliegue

### Netlify / Vercel (Recomendado)

Conecta tu repositorio y despliega automáticamente.

- Build command: (ninguno)
- Publish directory: `./`

### GitHub Pages

Habilita GitHub Pages en Settings > Pages, Source: main branch.

## 📝 Secciones de la Landing

1. **Hero:** Mensaje principal + CTA + Video de fondo
2. **Problemas:** Dolores operativos que resuelve la automatización
3. **Servicios:** IPA, RPA Avanzado, Integración IA, Soluciones a Medida
4. **Enfoque:** Metodología de 5 pasos
5. **Valor:** Beneficios medibles
6. **Stack:** Ecosistema de herramientas low-code/no-code
7. **Caso de Uso:** Ejemplo de automatización de leads
8. **Contacto:** Formulario + email directo
9. **Footer:** Links, canvas animado, copyright

## 📄 Licencia

Todos los derechos reservados © Veridia

## 📞 Contacto

- **Email:** hola@veridia.com

---

**Nota para desarrolladores:** Consulta `agents.md` para una guía completa sobre cómo trabajar con este proyecto.
