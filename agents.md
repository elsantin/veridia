# Veridia – Guía para Agentes IA

## 1. Contexto del Proyecto

- **Nombre de la marca:** Veridia
- **Tipo de negocio:** Agencia de automatización inteligente y low-code (IPA, RPA avanzado, Integraciones con IA, soluciones a medida).
- **Formato actual:** Landing page estática en HTML + Tailwind CDN + CSS personalizado + JavaScript vanilla.
- **Objetivo principal del sitio:**
  - Generar **leads calificados** que agenden una consulta o envíen el formulario de contacto.
  - Comunicar claridad sobre **problemas que resuelve**, **servicios**, **metodología** y **valor económico (ROI)** de la automatización.

Cuando propongas cambios de contenido o estructura, prioriza siempre **claridad del mensaje** y **conversiones (contacto/consulta)** por encima de aspectos puramente técnicos.

---

## 2. Tono de Voz y Estilo

- **Idioma principal:** Español neutro profesional. Versión en inglés ya existe y debe mantenerse consistente.
- **Personalidad:**
  - Profesional, estratégico y confiado.
  - Claro, directo y sin jerga técnica innecesaria.
  - Cercano pero no informal.
- **Enfoque de comunicación:**
  - Orientado a **beneficios de negocio** (tiempo, costos, escalabilidad, riesgo) más que a detalles técnicos.
  - Usar ejemplos concretos cuando sea útil.

Cuando generes textos nuevos:

- Evita párrafos muy largos.
- Utiliza subtítulos, bullets y frases concretas.
- Refuerza ideas como: eficiencia, reducción de costos, crecimiento escalable, automatización inteligente, orquestación, integración.

---

## 3. Público Objetivo

- **Decisores de negocio:** founders, directores de operaciones, gerentes de áreas que sufren procesos manuales.
- **Dolores principales:**
  - Procesos manuales lentos y repetitivos.
  - Costos operativos altos.
  - Sistemas desconectados, datos dispersos.
  - Necesidad de crecer sin disparar la plantilla.
- **Motivación:** encontrar un partner que entienda su negocio y pueda diseñar una **hoja de ruta de automatización** clara, con foco en ROI.

Todo el copy debe hablar a estas personas, no a desarrolladores técnicos.

---

## 4. Estructura Actual del Sitio

Archivos principales:

- `index.html` – estructura de la landing.
- `style.css` – estilos globales y refinamientos visuales.
- `script.js` – interacción (cambio de idioma, animaciones, scroll, menú móvil, etc.).

### Secciones clave en `index.html`

1. **Header / Navegación fija**

   - Logo "Veridia".
   - Menú con anclas: `#home`, `#services`, `#approach`, `#value`, `#contact`.
   - Botón de cambio de idioma (`EN / ES` en escritorio, `EN/ES` en móvil).

2. **Hero (`#home`)**

   - Mensaje principal sobre automatización inteligente.
   - CTA principal: botón "Iniciar Consulta" que baja a la sección de contacto.

3. **Problemas (`#problems`)**

   - Tarjetas que describen los principales dolores: procesos manuales, costos, sistemas desconectados.

4. **Servicios (`#services`)**

   - Cuatro bloques principales:
     - IPA
     - RPA Avanzado
     - Integración IA
     - Soluciones a Medida

5. **Enfoque / Metodología (`#approach`)**

   - Explica el método de Veridia (diagnóstico, diseño ROI, implementación, tecnología, soporte).
   - Tiene una parte visual (SVG) que representa pasos.

6. **Valor Potencial (`#value`)**

   - Beneficios clave: eficiencia radical, reducción de costos, crecimiento escalable.
   - CTA secundaria para estimar impacto.

7. **Contacto (`#contact`)**

   - Formulario con campos: nombre, email, empresa opcional, desafío/interés.
   - Mensaje de contacto por email (`hola@veridia.com`).

8. **Footer**
   - Resumen de marca.
   - Links a secciones y capacidades.
   - Email de contacto.
   - Año dinámico y enlaces a política de privacidad y términos.
   - Canvas con animación de fondo.

---

## 5. Stack Técnico y Comportamiento

- **HTML estático** con Tailwind CSS vía CDN.
- **`style.css`** añade diseño custom: colores, tipografía, cards, botones, animaciones, layout responsive.
- **`script.js`** controla:
  - Sistema de **traducciones** (`translations` en ES/EN) usando `data-lang-key` en los elementos.
  - Botones de cambio de idioma (desktop y móvil) que alternan `currentLang` y actualizan el contenido.
  - Menú móvil (abre/cierra el panel y alterna iconos de menú/hamburguesa).
  - Smooth scroll con compensación de la altura del header.
  - Animaciones de aparición (`.fade-in-reveal` + IntersectionObserver).
  - Indicador de scroll superior y estado "link activo" en el menú según la sección visible.
  - Animación del canvas en el footer (partículas).

**Importante para agentes IA:**

- No romper el sistema de `data-lang-key` ni sobrescribirlo con texto plano sin clave.
- Mantener la estructura de IDs de secciones (`#home`, `#services`, etc.) porque se usan para navegación, scroll y estado activo del menú.

---

## 6. Reglas para Modificar Contenido

Cuando propongas o apliques cambios sobre este proyecto:

1. **Conservar bilingüismo**

   - Si agregas o editas texto visible:
     - Actualiza **tanto** la versión en español **como** la inglesa en `translations` de `script.js`.
     - Usa claves nuevas `data-lang-key` consistentes (`section_newitem_title`, `section_newitem_desc`, etc.).

2. **Mantener coherencia visual**

   - Usa las clases existentes (`card`, `btn`, `btn-accent`, `section-title`, etc.).
   - Evita introducir frameworks nuevos (React, Next, etc.) dentro de este proyecto a menos que sea una migración planificada.

3. **Foco en conversión**

   - Revisa que siempre exista un CTA claro hacia `#contact` o hacia un punto de conversión definido.
   - Evita sobrecargar la página con texto; prioriza claridad + bloques visuales.

4. **Compatibilidad móvil**
   - Respeta las estructuras de Tailwind utilizadas (`grid`, `md:`, `lg:`).
   - Si creas nuevas secciones, asegúrate de que funcionen bien en mobile (`max-width`, paddings, stacks).

---

## 7. Posibles Extensiones Futuras (sugerencias para la IA)

Cuando el usuario pida mejoras o nuevas funcionalidades, considera estas líneas de evolución:

- **Captura de leads mejorada**

  - Añadir integración real del formulario con un backend sencillo, servicio de email o herramienta no-code (ej: formulario conectado a Airtable, Notion, Supabase o similar).
  - Crear una página de gracias o mensaje de confirmación más claro tras el envío del formulario.

- **Casos de uso y ejemplos**

  - Añadir una sección con 3–5 casos de uso típicos (facturación, atención al cliente, backoffice, etc.).
  - Mostrar ejemplos antes/después en términos de horas ahorradas, reducción de errores, etc.

- **Prueba social**

  - Sección de testimonios o logos de clientes (aunque sean placeholders al principio).

- **Recursos educativos**
  - Micro sección tipo "Guías" o "Insights" con 2–3 recursos sobre automatización inteligente.

En todos los casos, mantén el layout sencillo y la navegación limpia.

---

## 8. Instrucciones para Otros Agentes IA

Cuando otro agente IA trabaje en este repositorio, debe:

1. **Leer primero este archivo `agents.md`** antes de hacer cambios.
2. **Revisar `index.html`, `style.css` y `script.js`** para entender cómo está implementada la UI y la lógica.
3. **Preguntar al usuario** (Santiago) antes de:
   - Cambiar radicalmente el diseño.
   - Añadir nuevas dependencias o frameworks.
   - Modificar el comportamiento del formulario de contacto.
4. **Comentar en español al explicar cambios**, pero mantener el código en inglés y con buena legibilidad.

---

## 9. Cómo puede ayudarte un agente IA en este proyecto

Ejemplos de tareas que un agente IA puede realizar bien:

- **Copywriting y posicionamiento**

  - Refinar titulares y subtítulos para dejar más claro el valor de Veridia.
  - Adaptar mensajes para distintos segmentos (pymes, startups, empresas más grandes).

- **Estructura y UX**

  - Reorganizar secciones para mejorar el flujo: problema → servicio → metodología → valor → prueba social → contacto.
  - Proponer variantes de layout sin romper el diseño actual.

- **Implementación técnica ligera**
  - Ajustar estilos en `style.css` para mejorar legibilidad o contraste.
  - Optimizar el JS para que sea más simple de mantener sin agregar complejidad.

Siempre con la prioridad: **que funcione, sea claro para el usuario final y represente bien a Veridia como agencia de automatización low-code.**

---

## 10. Stack de Automatización Low-Code / No-Code Preferido

Este proyecto se puede utilizar como ejemplo de cómo Veridia diseña experiencias de cara al cliente para servicios de automatización low-code/no-code. Cuando un agente IA proponga flujos, casos de uso o integraciones, debe tener en mente el siguiente stack de referencia (no obligatorio, pero recomendado):

- **Orquestación y automatización de procesos**

  - Make (Integromat)
  - Zapier
  - n8n
  - Pabbly / alternativas similares

- **Bases de datos y backoffice**

  - Airtable
  - Notion (bases de datos)
  - Supabase
  - Google Sheets (para prototipos rápidos)

- **Canales y front-ends operativos**

  - Formularios web (como el de esta landing)
  - Email (Gmail/Outlook)
  - Slack / Microsoft Teams
  - WhatsApp API / Messenger (a través de proveedores externos)

- **Herramientas para analítica y reporting**
  - Google Looker Studio o dashboards conectados a Airtable/Notion/Supabase
  - Hojas de cálculo conectadas vía automatizaciones

**Lineamientos para la IA al usar este stack:**

- Priorizar **soluciones low-code/no-code** antes de sugerir código a medida.
- Explicar siempre el flujo **de extremo a extremo** en lenguaje de negocio:
  - Origen de datos → procesamiento → automatización → salida/resultado visible.
- Cuando se proponga una integración concreta, indicar:
  - **Sistemas involucrados** (ej. CRM, facturación, soporte).
  - **Eventos disparadores** (ej. nuevo lead, factura emitida, ticket creado).
  - **Acciones automáticas** (ej. actualización de registros, envío de correos, creación de tareas).
- Evitar herramientas excesivamente complejas o poco accesibles si no aportan una mejora clara frente a las opciones low-code/no-code.

---

## 11. Este Proyecto como Caso de Uso de Portafolio

Esta landing puede y debe usarse como **pieza de portafolio** para demostrar cómo Veridia comunica y estructura proyectos de automatización.

Cuando un agente IA la utilice como referencia:

- **Enfoque narrativo sugerido para el portafolio**

  - Presentar el sitio como:
    “Landing de agencia de automatización inteligente y low-code diseñada para convertir visitas en consultas estratégicas”.
  - Destacar que la página está pensada para **decisores de negocio** (founders, dirección de operaciones, gerencias), no para perfiles técnicos.
  - Enfatizar las secciones clave como parte del caso de uso:
    - Hero: posicionamiento claro y promesa de valor.
    - Problemas: dolores operativos frecuentes (procesos manuales, costos, sistemas desconectados).
    - Servicios: tipos de automatización ofrecidos (IPA, RPA avanzado, Integración IA, soluciones a medida).
    - Metodología: enfoque paso a paso (diagnóstico, diseño ROI, implementación, tecnología, soporte).
    - Valor: beneficios cuantificables (eficiencia, costos, escalabilidad).
    - Contacto: mecanismo de conversión (formulario + email directo).

- **Cómo describir este proyecto en un portafolio**

  - Tipo de proyecto: **Landing page estratégica para agencia de automatización low-code/IPA/RPA**.
  - Objetivo: **captura de leads calificados y explicación clara de la propuesta de valor**.
  - Rol de Veridia:
    - Diseño de narrativa.
    - Definición de estructura de secciones orientada a conversión.
    - Traducción de capacidades técnicas (IPA/RPA/IA) a lenguaje de negocio.

- **Lineamientos para agregar contenido de caso de estudio**

  - Si se crean secciones tipo “Caso de Estudio” o “Resultados”:
    - Usar ejemplos realistas y coherentes (ej. “reducción del tiempo de procesamiento”, “menos errores manuales”).
    - Evitar datos numéricos muy específicos si el usuario no los ha proporcionado (marcar como ejemplo o simulación).
    - Indicar claramente cuando algo sea un **ejemplo genérico** y no un resultado de un cliente real.

- **Reutilización de esta página en otros contextos**
  - Esta estructura puede servir como plantilla para:
    - Otras agencias de automatización.
    - Páginas de servicio específicas (ej. “Automatización de facturación”, “Automatización de soporte al cliente”).
  - Un agente IA puede:
    - Mantener la arquitectura (problema → solución → metodología → valor → contacto).
    - Adaptar dolores, servicios y ejemplos de resultados al nuevo contexto.

Al ampliar este sitio como caso de uso de portafolio, la prioridad sigue siendo:
**claridad, foco en beneficios de negocio y demostración de cómo la automatización inteligente resuelve problemas concretos.**
