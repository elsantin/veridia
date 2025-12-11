/* =================================================== */
/* =============== INICIO JAVASCRIPT ================= */
/* =================================================== */

// --- Initialize Lucide Icons ---
document.addEventListener("DOMContentLoaded", () => {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});

// --- Language Data ---
const translations = {
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_approach: "Approach",
    nav_value: "Potential Value",
    nav_contact: "Contact Us",
    hero_title:
      "Efficiency and Future. <span class='text-accent'>Automated.</span>",
    hero_subtitle:
      "Veridia designs and implements intelligent automation solutions that transform your operation and boost your growth.",
    hero_cta: "Start Consultation",
    problems_title: "Overcome Operational Limits",
    problems_subtitle:
      "Identify the barriers holding back your progress and discover how automation breaks them down.",
    problem1_title: "Slow Manual Processes",
    problem1_desc: "Free your team from repetitive, error-prone tasks.",
    problem2_title: "High Operational Costs",
    problem2_desc:
      "Optimize resources and reduce unnecessary expenses efficiently.",
    problem3_title: "Disconnected Systems",
    problem3_desc:
      "Integrate your platforms for a complete view and unified data.",
    services_title: "Intelligent Automation Solutions",
    service1_title: "IPA",
    service1_desc: "Orchestration of complex workflows with AI.",
    service2_title: "Advanced RPA",
    service2_desc: "Adaptable bots for critical tasks.",
    service3_title: "AI Integration",
    service3_desc: "Insights with Machine Learning and analytics.",
    service4_title: "Custom Solutions",
    service4_desc: "Unique development for specific challenges.",
    approach_tag: "Veridia Methodology",
    approach_title: "Strategic Collaboration, Measurable Results",
    approach_subtitle:
      "We integrate with your team to design and implement the perfect automation roadmap, focused on your key objectives.",
    approach_step1: "Diagnosis",
    approach_step2: "ROI Design",
    approach_step3: "Implementation",
    approach_step4: "Technology",
    approach_step5: "Support",
    approach_item1:
      "<strong class='list-strong'>Deep Diagnosis:</strong> Complete understanding of your processes and potential.",
    approach_item2:
      "<strong class='list-strong'>ROI-Focused Design:</strong> Custom solutions for maximum impact.",
    approach_item3:
      "<strong class='list-strong'>Agile Implementation:</strong> Iterative and transparent delivery.",
    approach_item4:
      "<strong class='list-strong'>Cutting-Edge Technology:</strong> Smart use of the best tools.",
    approach_item5:
      "<strong class='list-strong'>Continuous Support:</strong> Accompaniment in optimization and evolution.",
    value_title: "Measurable Transformation",
    value_subtitle:
      "Intelligent automation generates real, quantifiable value for your business.",
    value1_title: "Radical Efficiency",
    value1_desc: "Process acceleration and resource liberation.",
    value2_title: "Cost Reduction",
    value2_desc: "Expense optimization and profitability improvement.",
    value3_title: "Scalable Growth",
    value3_desc: "Capacity to expand without operational limitations.",
    value_cta: "Estimate Impact",
    // Stack Section
    stack_tag: "Technology Ecosystem",
    stack_title: "Tools that Power Your Business",
    stack_subtitle:
      "We work with the best low-code and no-code platforms to create fast, scalable solutions without technical friction.",
    stack_cat1_title: "Orchestration",
    stack_cat2_title: "Databases",
    stack_cat3_title: "Channels",
    stack_cat4_title: "Analytics",
    // Use Case Section
    usecase_tag: "Use Case",
    usecase_title: "Automation in Action",
    usecase_subtitle:
      "A real example of how we transform manual processes into intelligent workflows.",
    usecase_example_tag: "Example",
    usecase_example_title: "Automated Lead Management",
    usecase_time: "Implementation: 2-3 weeks",
    usecase_step1_label: "Trigger",
    usecase_step1_title: "New Lead Captured",
    usecase_step1_desc:
      "Web form, email or CRM integration detects a new prospect.",
    usecase_step2_label: "Process",
    usecase_step2_title: "Enrichment + Scoring",
    usecase_step2_desc:
      "AI analyzes the lead, assigns score and categorizes automatically.",
    usecase_step3_label: "Action",
    usecase_step3_title: "Notification + Follow-up",
    usecase_step3_desc:
      "Alerts sales team, creates CRM task and sends personalized email.",
    usecase_metric1: "Less manual time",
    usecase_metric2: "Response speed",
    usecase_metric3: "Lost leads",
    contact_title: "Start the Conversation",
    contact_subtitle:
      "Discover how Veridia can design the perfect automation solution for your company.",
    form_name: "Name",
    form_name_placeholder: "Your Full Name",
    form_email: "Email",
    form_email_placeholder: "your.email@company.com",
    form_company: "Company (Optional)",
    form_company_placeholder: "Your Company Name",
    form_message: "Your main challenge or interest",
    form_message_placeholder:
      "Ex: Optimize billing, explore AI for data analysis...",
    form_submit: "Send Message",
    contact_email_prompt: "Or contact us via email:",
    footer_desc: "Intelligent automation for the future of business.",
    footer_nav: "Navigate",
    footer_capabilities: "Capabilities",
    footer_contact: "Contact",
    service_ipa_short: "IPA",
    service_rpa_short: "Advanced RPA",
    service_ai_short: "AI Integration",
    service_custom_short: "Custom Solutions",
    footer_rights: "All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
  },
  es: {
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_approach: "Nuestro Enfoque",
    nav_value: "Valor Potencial",
    nav_contact: "Contáctanos",
    hero_title:
      "Eficiencia y Futuro. <span class='text-accent'>Automatizados.</span>",
    hero_subtitle:
      "Veridia diseña e implementa soluciones de automatización inteligente que transforman tu operación y potencian tu crecimiento.",
    hero_scroll_text: "Desplázate para explorar",
    sticky_cta_label: "Iniciar consulta",
    problems_title: "Supera los Límites Operativos",
    problems_subtitle:
      "Identifica las barreras que frenan tu progreso y descubre cómo la automatización las derriba.",
    problem1_title: "Procesos Manuales Lentos",
    problem1_desc:
      "Libera a tu equipo de tareas repetitivas y propensas a errores.",
    problem2_title: "Costos Operativos Altos",
    problem2_desc:
      "Optimiza recursos y reduce gastos innecesarios con eficiencia.",
    problem3_title: "Sistemas Desconectados",
    problem3_desc:
      "Integra tus plataformas para una visión completa y datos unificados.",
    services_title: "Soluciones de Automatización Inteligente",
    service1_title: "IPA",
    service1_desc: "Orquestación de flujos complejos con IA.",
    service2_title: "RPA Avanzado",
    service2_desc: "Bots adaptables para tareas críticas.",
    service3_title: "Integración IA",
    service3_desc: "Insights con Machine Learning y analítica.",
    service4_title: "Soluciones a Medida",
    service4_desc: "Desarrollo único para desafíos específicos.",
    approach_tag: "Metodología Veridia",
    approach_title: "Colaboración Estratégica, Resultados Medibles",
    approach_subtitle:
      "Nos integramos con tu equipo para diseñar e implementar la hoja de ruta de automatización perfecta, enfocada en tus objetivos clave.",
    approach_step1: "Diagnóstico",
    approach_step2: "Diseño ROI",
    approach_step3: "Implementación",
    approach_step4: "Tecnología",
    approach_step5: "Soporte",
    approach_item1:
      "<strong class='list-strong'>Diagnóstico Profundo:</strong> Entendimiento completo de tus procesos y potencial.",
    approach_item2:
      "<strong class='list-strong'>Diseño Centrado en ROI:</strong> Soluciones a medida para un impacto máximo.",
    approach_item3:
      "<strong class='list-strong'>Implementación Ágil:</strong> Entrega iterativa y transparente.",
    approach_item4:
      "<strong class='list-strong'>Tecnología de Vanguardia:</strong> Uso inteligente de las mejores herramientas.",
    approach_item5:
      "<strong class='list-strong'>Soporte Continuo:</strong> Acompañamiento en la optimización y evolución.",
    value_title: "Transformación Medible",
    value_subtitle:
      "La automatización inteligente genera valor real y cuantificable para tu negocio.",
    value1_title: "Eficiencia Radical",
    value1_desc: "Aceleración de procesos y liberación de recursos.",
    value2_title: "Reducción de Costos",
    value2_desc: "Optimización de gastos y mejora de rentabilidad.",
    value3_title: "Crecimiento Escalable",
    value3_desc: "Capacidad para expandirse sin limitaciones operativas.",
    value_cta: "Estimar Impacto",
    // Stack Section
    stack_tag: "Ecosistema Tecnológico",
    stack_title: "Herramientas que Potencian tu Negocio",
    stack_subtitle:
      "Trabajamos con las mejores plataformas low-code y no-code para crear soluciones rápidas, escalables y sin fricciones técnicas.",
    stack_cat1_title: "Orquestación",
    stack_cat2_title: "Bases de Datos",
    stack_cat3_title: "Canales",
    stack_cat4_title: "Analítica",
    // Use Case Section
    usecase_tag: "Caso de Uso",
    usecase_title: "Automatización en Acción",
    usecase_subtitle:
      "Un ejemplo real de cómo transformamos procesos manuales en flujos inteligentes.",
    usecase_example_tag: "Ejemplo",
    usecase_example_title: "Gestión Automatizada de Leads",
    usecase_time: "Implementación: 2-3 semanas",
    usecase_step1_label: "Disparador",
    usecase_step1_title: "Nuevo Lead Capturado",
    usecase_step1_desc:
      "Formulario web, email o integración CRM detecta un nuevo prospecto.",
    usecase_step2_label: "Proceso",
    usecase_step2_title: "Enriquecimiento + Scoring",
    usecase_step2_desc:
      "IA analiza el lead, asigna puntuación y categoriza automáticamente.",
    usecase_step3_label: "Acción",
    usecase_step3_title: "Notificación + Seguimiento",
    usecase_step3_desc:
      "Alerta al equipo de ventas, crea tarea en CRM y envía email personalizado.",
    usecase_metric1: "Menos tiempo manual",
    usecase_metric2: "Velocidad de respuesta",
    usecase_metric3: "Leads perdidos",
    contact_title: "Inicia la Conversación",
    contact_subtitle:
      "Descubre cómo Veridia puede diseñar la solución de automatización perfecta para tu empresa.",
    form_name: "Nombre",
    form_name_placeholder: "Tu Nombre Completo",
    form_email: "Correo Electrónico",
    form_email_placeholder: "tu.correo@empresa.com",
    form_company: "Empresa (Opcional)",
    form_company_placeholder: "Nombre de tu Compañía",
    form_message: "Tu principal desafío o interés",
    form_message_placeholder:
      "Ej: Optimizar facturación, explorar IA para análisis...",
    form_submit: "Enviar Mensaje",
    contact_email_prompt: "O contáctanos vía email:",
    footer_desc: "Automatización inteligente para el futuro de los negocios.",
    footer_nav: "Navegar",
    footer_capabilities: "Capacidades",
    footer_contact: "Contacto",
    service_ipa_short: "IPA",
    service_rpa_short: "RPA Avanzado",
    service_ai_short: "AI Integration",
    service_custom_short: "Custom Solutions",
    footer_rights: "Todos los derechos reservados.",
    footer_privacy: "Política de Privacidad",
    footer_terms: "Términos de Servicio",
  },
};

let currentLang = "es"; // Default language set to Spanish as per HTML

/**
 * Sets the language for the website content.
 * @param {string} lang - The language code ('en' or 'es').
 */
function setLanguage(lang) {
  currentLang = lang;
  const htmlElement = document.getElementById("html-lang");
  if (htmlElement) htmlElement.lang = lang; // Update the lang attribute on <html>

  document.querySelectorAll("[data-lang-key]").forEach((element) => {
    const key = element.getAttribute("data-lang-key");
    if (translations[lang]?.[key]) {
      // Handle different element types (inputs, text content)
      if (element.hasAttribute("placeholder")) {
        element.placeholder = translations[lang][key];
      } else if (element.tagName === "TEXT") {
        // Handle text nodes within SVG
        element.textContent = translations[lang][key];
      } else {
        element.innerHTML = translations[lang][key]; // Use innerHTML to allow tags like <span> or <strong>
      }
    } else {
      console.warn(
        `Translation key "${key}" not found for language "${lang}".`
      );
    }
  });
}

/**
 * Toggles the website language between English and Spanish.
 */
function toggleLanguage() {
  const newLang = currentLang === "es" ? "en" : "es";
  setLanguage(newLang);
}
// --- Hero Video Controls, Sticky CTA and Back-to-Top ---
document.addEventListener("DOMContentLoaded", () => {
  const heroVideo = document.querySelector("#home video");
  const videoToggleBtn = document.getElementById("hero-video-toggle");
  const backToTopBtn = document.getElementById("back-to-top");
  const stickyCtaBtn = document.getElementById("sticky-cta");

  // Pause / Play hero background video
  if (heroVideo && videoToggleBtn) {
    videoToggleBtn.addEventListener("click", () => {
      if (heroVideo.paused) {
        heroVideo.play();
        videoToggleBtn.setAttribute("aria-label", "Pausar animación de fondo");
        const icon = videoToggleBtn.querySelector("[data-lucide]");
        if (icon) icon.setAttribute("data-lucide", "pause");
      } else {
        heroVideo.pause();
        videoToggleBtn.setAttribute(
          "aria-label",
          "Reanudar animación de fondo"
        );
        const icon = videoToggleBtn.querySelector("[data-lucide]");
        if (icon) icon.setAttribute("data-lucide", "play");
      }
      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
    });
  }

  // Back to top button visibility and behavior
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Sticky CTA scroll to contact
  if (stickyCtaBtn) {
    stickyCtaBtn.classList.remove("hidden");
    stickyCtaBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

// --- Background Canvas Animation (Footer ONLY) ---
// ***** CODE REACTIVATED *****
const canvas = document.getElementById("footer-canvas");
const ctx = canvas ? canvas.getContext("2d") : null;
let particles = [];
let width = 0;
let height = 0;
let animationFrameId = null;
const footerElement = document.querySelector("footer.footer"); // Target footer directly

/**
 * Resizes the canvas to match the footer dimensions and recreates particles.
 * @returns {boolean} - True if the canvas was resized, false otherwise.
 */
function resizeCanvas() {
  if (!canvas || !footerElement) {
    console.error("Canvas or Footer element not found for resize.");
    return false;
  }
  // Use offsetWidth/offsetHeight for dimensions including padding/border
  const newWidth = Math.floor(footerElement.offsetWidth);
  const newHeight = Math.floor(footerElement.offsetHeight);

  // Only resize if dimensions are valid and have changed significantly
  if (newWidth > 0 && newHeight > 0) {
    if (Math.abs(newWidth - width) > 1 || Math.abs(newHeight - height) > 1) {
      width = canvas.width = newWidth;
      height = canvas.height = newHeight;
      console.log(`Canvas resized to: ${width}x${height}`);
      particles = []; // Reset particles on resize
      createParticles();
      return true; // Indicate resize occurred
    }
    return false; // No significant size change
  } else {
    // Handle cases where footer might be temporarily hidden or has no size
    console.warn(
      `Footer dimensions invalid (${newWidth}x${newHeight}), skipping resize & particle creation.`
    );
    width = canvas.width = 0; // Set canvas size to 0 if footer is not measurable
    height = canvas.height = 0;
    particles = [];
    return false;
  }
}

/**
 * Represents a single particle in the animation.
 */
class Particle {
  constructor() {
    // Don't create if canvas has no dimensions
    if (width === 0 || height === 0) return;
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 1.7 + 0.9; // Particle size range
    this.speedX = Math.random() * 0.55 - 0.275; // Horizontal speed range
    this.speedY = Math.random() * 0.55 - 0.275; // Vertical speed range (used for initial drift, y is mainly controlled by sine wave)
    const isViolet = Math.random() < 0.35; // 35% chance of being violet
    // Set color with random opacity
    this.color = isViolet
      ? `rgba(168, 85, 247, ${Math.random() * 0.7 + 0.45})`
      : `rgba(0, 209, 255, ${Math.random() * 0.6 + 0.4})`;
    // Sine wave properties for vertical movement
    this.angle = Math.random() * Math.PI * 2;
    this.amplitude = Math.random() * 40 + 18; // How far up/down it moves
    this.frequency = Math.random() * 0.01 + 0.006; // How fast it oscillates
    this.baseY = this.y; // Store initial y to oscillate around
  }

  /** Updates the particle's position. */
  update() {
    if (!width || !height) return; // Don't update if canvas isn't sized

    // Move horizontally
    this.x += this.speedX;
    // Move vertically using a sine wave
    this.y = this.baseY + Math.sin(this.angle) * this.amplitude;
    this.angle += this.frequency; // Increment angle for oscillation

    // Wrap particle around screen edges horizontally
    if (this.x < -this.size) this.x = width + this.size;
    if (this.x > width + this.size) this.x = -this.size;
    // Wrap particle around screen edges vertically (adjusting baseY)
    if (this.y < -this.size) {
      this.baseY = height + this.size - Math.sin(this.angle) * this.amplitude; // Reset base Y relative to the bottom
      this.y = height + this.size;
    }
    if (this.y > height + this.size) {
      this.baseY = -this.size - Math.sin(this.angle) * this.amplitude; // Reset base Y relative to the top
      this.y = -this.size;
    }
  }

  /** Draws the particle on the canvas. */
  draw() {
    if (!ctx) return;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); // Draw a circle
    ctx.fill();
  }
}

/**
 * Creates the initial set of particles based on canvas size.
 */
function createParticles() {
  if (!width || !height || !canvas) return; // Ensure canvas is ready
  // Adjust particle count based on canvas area (more particles for larger areas)
  const particleCount = Math.max(30, Math.floor((width * height) / 14000)); // Ensure minimum count
  particles = []; // Clear existing particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
  console.log(`Created ${particles.length} particles.`);
}

/**
 * Draws lines connecting nearby particles.
 */
function connectParticles() {
  if (!ctx || particles.length === 0) return;
  let opacityValue = 0.09; // Base opacity for lines
  const maxDistance = 150; // Maximum distance to draw a line

  for (let a = 0; a < particles.length; a++) {
    for (let b = a + 1; b < particles.length; b++) {
      // Start from a+1 to avoid duplicates and self-connection
      // Calculate distance between two particles
      let distance = Math.sqrt(
        Math.pow(particles[a].x - particles[b].x, 2) +
          Math.pow(particles[a].y - particles[b].y, 2)
      );

      // If particles are close enough, draw a line
      if (distance < maxDistance) {
        opacityValue = 1 - distance / maxDistance; // Line fades out with distance
        const lineColor = `rgba(80, 170, 255, ${opacityValue * 0.35})`; // Line color with calculated opacity
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 0.55; // Thin lines
        ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

/**
 * The main animation loop. Clears canvas, updates and draws particles, connects them, and requests the next frame.
 */
function animate() {
  if (!ctx || !canvas || !width || !height) {
    // Don't run animation if canvas is not ready or has no size
    console.warn("Animation stopped: Canvas/context/size invalid.");
    animationFrameId = null; // Ensure we know the animation is stopped
    return;
  }
  // Clear the canvas for the next frame
  ctx.clearRect(0, 0, width, height);

  // Update and draw each particle
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  // Draw connecting lines
  connectParticles();

  // Request the next frame
  animationFrameId = requestAnimationFrame(animate);
}

// --- Resize Handling for Canvas ---
let resizeTimeout;
let footerResizeObserver = null;

/**
 * Handles window/footer resize events, debouncing the actual resize logic.
 */
function handleResize() {
  console.log("Handling resize...");
  // Stop any existing animation frame to prevent drawing during resize
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
    console.log("Cancelled existing animation frame.");
  }

  // Resize the canvas and check if dimensions actually changed
  const resized = resizeCanvas();

  // Restart animation only if resize occurred OR if it wasn't running but should be
  if (
    resized &&
    width > 0 &&
    height > 0 &&
    particles.length > 0 &&
    !animationFrameId
  ) {
    animate(); // Restart animation immediately after successful resize
    console.log("Animation restarted after resize.");
  } else if (
    !animationFrameId &&
    width > 0 &&
    height > 0 &&
    particles.length > 0
  ) {
    // If no resize occurred but animation wasn't running, start it
    animate();
    console.log("Animation started after resize check (no size change).");
  } else {
    // Log why animation didn't start/restart
    console.log(
      `Animation not started/restarted. Resized: ${resized}, Width: ${width}, Height: ${height}, Particles: ${particles.length}, FrameID: ${animationFrameId}`
    );
  }
}

// Use ResizeObserver if available for better performance, otherwise fallback to window resize
if (typeof ResizeObserver !== "undefined" && footerElement && canvas) {
  footerResizeObserver = new ResizeObserver((entries) => {
    // Debounce the resize handling
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 200); // Debounce time (ms)
  });
  footerResizeObserver.observe(footerElement); // Observe the footer element itself
  console.log("ResizeObserver attached to footer.");
} else if (canvas) {
  // Fallback for older browsers
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 250); // Slightly longer debounce for window resize
  });
  console.log("Attached window resize listener (fallback).");
}
// ***** END OF REACTIVATED CANVAS LOGIC *****

// --- Throttle Function ---
// Limits how often a function can be called. Useful for scroll/resize events.
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// --- Initialization and Event Listeners ---
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  const header = document.getElementById("main-header");
  const initialHeaderHeight = header ? header.offsetHeight : 72; // Get initial height

  // --- Language Switcher Setup ---
  const langSwitchDesktop = document.getElementById("lang-switch");
  const langSwitchMobile = document.getElementById("lang-switch-mobile");
  if (langSwitchDesktop)
    langSwitchDesktop.addEventListener("click", toggleLanguage);
  if (langSwitchMobile)
    langSwitchMobile.addEventListener("click", toggleLanguage);
  setLanguage(currentLang); // Set initial language based on `currentLang` variable

  // --- Footer Year ---
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();

  // --- Mobile Menu Toggle ---
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIconOpen = document.getElementById("menu-icon-open");
  const menuIconClose = document.getElementById("menu-icon-close");
  const mobileMenuLinksContainer = document.getElementById("mobile-menu-links"); // Container for links

  if (
    mobileMenuButton &&
    mobileMenu &&
    menuIconOpen &&
    menuIconClose &&
    mobileMenuLinksContainer
  ) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden"); // Toggle visibility of the menu container
      menuIconOpen.classList.toggle("hidden"); // Toggle open icon
      menuIconClose.classList.toggle("hidden"); // Toggle close icon
    });
    // Add event listener to the *container* for mobile links
    mobileMenuLinksContainer.addEventListener("click", (e) => {
      // Check if the clicked element is an anchor link within the container
      if (
        e.target &&
        e.target.tagName === "A" &&
        e.target.getAttribute("href")?.startsWith("#")
      ) {
        // Close the menu only if a link was clicked
        mobileMenu.classList.add("hidden");
        menuIconOpen.classList.remove("hidden");
        menuIconClose.classList.add("hidden");
      }
    });
  }

  // --- Smooth Scrolling for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      // Ensure it's a valid internal link
      if (!targetId || targetId === "#" || targetId.length <= 1) return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) {
        console.warn("Smooth scroll target not found:", targetId);
        return; // Exit if target doesn't exist
      }

      e.preventDefault(); // Prevent default jump

      // Close mobile menu if a link inside it is clicked (check if the link is a descendant)
      if (
        mobileMenu &&
        !mobileMenu.classList.contains("hidden") &&
        this.closest("#mobile-menu")
      ) {
        mobileMenu.classList.add("hidden");
        menuIconOpen.classList.remove("hidden");
        menuIconClose.classList.add("hidden");
      }

      // Calculate scroll position considering the *current* header height
      const currentHeaderHeight =
        document.getElementById("main-header")?.offsetHeight ||
        initialHeaderHeight;
      const elementPosition = targetElement.getBoundingClientRect().top; // Position relative to viewport
      const offsetPosition =
        window.pageYOffset + elementPosition - currentHeaderHeight; // Calculate final scroll position

      // Perform smooth scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });

  // --- Intersection Observer for fade-in animations ---
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Add 'visible' class to trigger CSS animation
        // Optional: Unobserve after animation to save resources
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  // Observe all elements with the 'fade-in-reveal' class
  document.querySelectorAll(".fade-in-reveal").forEach((el) => {
    observer.observe(el);
  });

  // --- Scroll-based Effects (Header, Indicator, Active Link) ---
  const scrollIndicator = document.getElementById("scroll-indicator");
  const scrollThreshold = 50; // Pixels to scroll before changing header style
  const sections = document.querySelectorAll("main section[id]"); // Get all sections with an ID in main
  const desktopNavLinks = document.querySelectorAll(
    "#desktop-menu-links a.nav-link"
  ); // Desktop nav links
  const mobileNavLinks = document.querySelectorAll(
    "#mobile-menu-links a.nav-link-mobile"
  ); // Mobile nav links

  /** Updates the active state of navigation links based on scroll position. */
  function updateActiveLink() {
    let currentSectionId = "";
    const scrollPosition = window.pageYOffset;
    // Offset to activate link slightly before section top reaches header bottom
    const activationOffset =
      (document.getElementById("main-header")?.offsetHeight ||
        initialHeaderHeight) + 50;

    // Find the current section in view
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      // Check if the scroll position is within the bounds of this section (considering offset)
      if (
        scrollPosition >= sectionTop - activationOffset &&
        scrollPosition < sectionTop + sectionHeight - activationOffset
      ) {
        currentSectionId = section.getAttribute("id");
      }
    });

    // Handle edge case: Before the first section (likely 'home')
    if (
      currentSectionId === "" &&
      scrollPosition < (sections[0]?.offsetTop || 0) - activationOffset
    ) {
      currentSectionId = "home"; // Default to home if very top
    }
    // Handle edge case: Scrolled to the very bottom (activate last link)
    else if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 50
    ) {
      // Near bottom
      const lastSection = sections[sections.length - 1];
      if (lastSection) currentSectionId = lastSection.getAttribute("id"); // Use the ID of the actual last section
    }

    // Update desktop links
    desktopNavLinks.forEach((link) => {
      link.classList.remove("nav-link-active"); // Remove active class from all
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("nav-link-active"); // Add active class to the current one
      }
    });
    // Update mobile links
    mobileNavLinks.forEach((link) => {
      link.classList.remove("nav-link-active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("nav-link-active");
      }
    });
  }

  /** Handles scroll events to update header style, scroll indicator, and active links. */
  function handleScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Header Appearance Logic
    if (header) {
      if (scrollTop > scrollThreshold) {
        header.classList.add("header-scrolled"); // Add scrolled class
      } else {
        header.classList.remove("header-scrolled"); // Remove scrolled class
      }
    }

    // Scroll Indicator Logic
    if (scrollIndicator) {
      const totalScroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight; // Total scrollable height
      const scrollPercentage =
        totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
      scrollIndicator.style.width = `${Math.min(scrollPercentage, 100)}%`; // Update width
    }

    // Active Link Logic
    updateActiveLink();
  }

  // Initial call to set states on page load
  handleScroll();

  // Add throttled scroll listener
  window.addEventListener("scroll", throttle(handleScroll, 100)); // Throttle to 100ms
}); // End DOMContentLoaded

// --- Actions on Window Load ---
// ***** REACTIVATED Canvas Animation Logic Trigger *****
window.addEventListener("load", () => {
  console.log("Window fully loaded (including images, CSS)");
  // Initialize canvas animation only if canvas and context exist
  if (canvas && ctx) {
    console.log("Footer canvas and context found, initializing animation.");
    // Wrap initialization in a function to allow retries if needed
    const initializeCanvasAnimation = () => {
      console.log("Attempting to initialize canvas animation...");
      if (resizeCanvas()) {
        // Try resizing first, returns true if size changed
        console.log("Canvas resized on load.");
      }
      // Check if canvas has valid dimensions and particles were created
      if (width > 0 && height > 0 && particles.length > 0) {
        if (!animationFrameId) {
          // Start animation only if not already running
          animate();
          console.log("Footer animation started on window load.");
        } else {
          console.log("Animation already running.");
        }
      } else {
        console.error(
          `Cannot start animation on load: width=${width}, height=${height}, particles=${particles.length}.`
        );
        // Optional: Retry after a short delay if dimensions were initially 0
        if ((width === 0 || height === 0) && footerElement) {
          console.log("Retrying resize/animate after small delay...");
          // Use setTimeout to call the function itself after a delay
          setTimeout(initializeCanvasAnimation, 300); // Retry after 300ms
        }
      }
    };
    initializeCanvasAnimation(); // Call the initialization function
  } else {
    console.warn(
      `Footer canvas element (${canvas}) or 2D context (${ctx}) not found on window load. Animation skipped.`
    );
  }
});
// ***** END OF REACTIVATED CANVAS LOGIC TRIGGER *****

/* =================================================== */
/* =============== FIN JAVASCRIPT ==================== */
/* =================================================== */
