/* =========================================
   AutoMail AI — Flujos agénticos S10-A
   Script de interacción (vanilla JS)
   ========================================= */

(function () {
  "use strict";

  /* --- Resaltar enlace de navegación según sección visible --- */
  const secciones = document.querySelectorAll("section[id]");
  const enlaces = document.querySelectorAll(".nav-list a[href^='#']");

  function observarSecciones() {
    const opciones = { root: null, rootMargin: "-20% 0% -65% 0%", threshold: 0 };
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          const id = entrada.target.getAttribute("id");
          enlaces.forEach((enlace) => {
            enlace.classList.toggle("activo", enlace.getAttribute("href") === "#" + id);
          });
        }
      });
    }, opciones);
    secciones.forEach((sec) => observador.observe(sec));
  }

  if (secciones.length && enlaces.length) {
    observarSecciones();
  }

  /* --- Estilo opcional para enlace activo --- */
  const estilo = document.createElement("style");
  estilo.textContent = ".nav-list a.activo { color: var(--color-celeste) !important; }";
  document.head.appendChild(estilo);

  /* --- Simulador R1 --- */
  function evaluarR1() {
    const inputs = document.querySelectorAll('input[name="r1"]');
    const valores = {};
    inputs.forEach((input) => { valores[input.value] = input.checked; });

    // Condiciones positivas (deben estar marcadas)
    const consulta = valores.consulta === true;
    const respuestaAprobada = valores.respuesta_aprobada === true;
    const permiso = valores.permiso === true;

    // Condiciones negativas (deben estar SIN marcar)
    const noPersonalizacion = valores.personalizacion === false;
    const noReclamo = valores.reclamo === false;
    const noVip = valores.vip === false;
    const noUrgente = valores.urgente === false;
    const noSospechoso = valores.sospechoso === false;
    const noEnviada = valores.enviada === false;
    const noEnCurso = valores.en_curso === false;

    const todas = consulta && respuestaAprobada && noPersonalizacion && noReclamo &&
      noVip && noUrgente && noSospechoso && permiso && noEnviada && noEnCurso;

    const resultado = document.getElementById("resultado-r1");
    if (todas) {
      resultado.textContent = "R1: Se cumplen las diez condiciones → se SOLICITA enviar la respuesta aprobada.";
      resultado.style.color = "#15803d";
    } else {
      const fallos = [];
      if (!consulta) fallos.push("no es consulta frecuente y clara");
      if (!respuestaAprobada) fallos.push("no existe respuesta aprobada");
      if (!noPersonalizacion) fallos.push("requiere personalización");
      if (!noReclamo) fallos.push("contiene un reclamo");
      if (!noVip) fallos.push("el cliente es VIP");
      if (!noUrgente) fallos.push("está marcado como urgente");
      if (!noSospechoso) fallos.push("es sospechoso");
      if (!permiso) fallos.push("no existe permiso de respuesta automática");
      if (!noEnviada) fallos.push("ya tiene respuesta enviada");
      if (!noEnCurso) fallos.push("ya tiene respuesta en curso");

      resultado.textContent = "R1: No se solicita el envío automático. Condición(es) que falla(n): " + fallos.join(", ") + ".";
      resultado.style.color = "#b45309";
    }
  }

  /* --- Simulador R2 --- */
  function evaluarR2() {
    const inputs = document.querySelectorAll('input[name="r2"]');
    const valores = {};
    inputs.forEach((input) => { valores[input.value] = input.checked; });

    const sospechoso = valores.sospechoso === true;
    const vip = valores.vip === true;
    const urgente = valores.urgente === true;

    // R2 = NO sospechoso Y (VIP O urgente)
    const activa = !sospechoso && (vip || urgente);

    const resultado = document.getElementById("resultado-r2");
    if (activa) {
      resultado.textContent = "R2: No sospechoso Y (VIP O urgente) → se DERIVA a una persona sin responder automáticamente.";
      resultado.style.color = "#15803d";
    } else {
      let motivo = "";
      if (sospechoso) {
        motivo = "El correo es sospechoso, por lo que R2 no se activa aunque sea VIP o urgente.";
      } else {
        motivo = "El correo no es VIP ni urgente, por lo que R2 no se activa.";
      }
      resultado.textContent = "R2: " + motivo + " No se responde automáticamente por esta propuesta.";
      resultado.style.color = "#b45309";
    }
  }

  /* Exponer funciones al ámbito global para los onclick del HTML */
  window.evaluarR1 = evaluarR1;
  window.evaluarR2 = evaluarR2;

  /* --- Desplegables accesibles: asegurar atributo aria-expanded --- */
  const detalles = document.querySelectorAll("details");
  detalles.forEach((detalle) => {
    const resumen = detalle.querySelector("summary");
    function actualizarAria() {
      resumen.setAttribute("aria-expanded", detalle.open ? "true" : "false");
    }
    detalle.addEventListener("toggle", actualizarAria);
    actualizarAria();
  });

})();
