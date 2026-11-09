# AutoMail AI — Flujos agénticos S10-A

Trabajo Práctico de cierre del año — Desarrollo de Sistemas Web Front-End.

## 1. Nombre del trabajo

AutoMail AI — Atención al cliente y correo

## 2. Descripción y objetivo del TP

Landing page pública y estática que presenta dos propuestas de automatización agéntica (R1 y R2) para la startup AutoMail AI, enfocadas en la clasificación de correos y la atención al cliente. El objetivo es explicar las propuestas y representar gráficamente los recorridos de decisión a partir de dos sentencias asignadas por el docente, sin implementar backend, APIs, integración de correo ni modelos de IA ejecutables.

## 3. Institución

IFTS 29.
Bloque asignado: Respuesta y atención humana.

## 4. Nombre del grupo

Grupo #19 -NameLess-

## 5. Integrantes y aporte concreto de cada integrante

### Leandro Maselli

- **GitHub:** `https://myselfproductions.me/DSWF_2A_2C26_Desarrollo-de-Sistemas-Web-Front-End/`
- **Ciudad:** La Plata, Argentina
- **Aporte concreto:** Me encargué de armar las instrucciones y los prompts para el agente de programación, y de supervisar cómo quedaba la estructura base de la landing.

### Javier Canteros

- **GitHub:** `https://zirocool3.github.io/pfo1-CanterosJavier/`
- **Ciudad:** Resistencia, Chaco, Argentina
- **Aporte concreto:** Me ocupé de analizar y desarmar las dos sentencias que nos tocaron (qué datos hacían falta, las condiciones y las consecuencias) y de escribir los textos de los desplegables.

### Maximiliano Quinteros

- **GitHub:** `https://github.com/Maxi22xT/Maximiliano-Quinteros-Front-End-IFST-29`
- **Ciudad:** Córdoba, Argentina
- **Aporte concreto:** Hice el diseño y los gráficos de los dos diagramas de flujo agéntico (cómo van los datos, las decisiones, las acciones y dónde interviene la persona).

### Damián Pelisare

- **GitHub:** `https://github.com/Damian-E/ifts_frontEnd`
- **Ciudad:** Buenos Aires, Argentina
- **Aporte concreto:** Probé la landing en desktop, revisé que anduvieran la navegación y los desplegables, y le pasé las correcciones al agente de IA.

### Nidia Elías

- **GitHub:** `https://nidia-elias.github.io/portfolio/`
- **Ciudad:** Mar de Ajo, La Costa, Argentina
- **Aporte concreto:** Escribí la documentación en el README (las herramientas, aplicaciones y modelos de IA que usamos) y revisé que funcionaran los enlaces del repositorio y de la landing.

## 6. Descripción de R1

**Título:** R1 — Respuesta aprobada y envío controlado.

**Objetivo:** Proponer un agente que analice una solicitud de correo y compruebe las diez condiciones de la sentencia R1 antes de solicitar el envío de una respuesta previamente aprobada. El agente no redacta libremente una respuesta nueva ni envía automáticamente si falta alguna condición.

**Sentencia original:** “Si el correo es una consulta frecuente clara, existe una respuesta aprobada, no requiere personalización, no contiene un reclamo, no es VIP, urgente ni sospechoso, existe permiso de respuesta automática y no tiene una respuesta enviada ni en curso, el sistema solicita enviar la respuesta aprobada.”

**Condición lógica:** conjunción de diez requisitos que deben cumplirse simultáneamente (consulta frecuente y clara Y respuesta aprobada Y no requiere personalización Y no contiene reclamo Y no es VIP Y no es urgente Y no es sospechoso Y existe permiso de respuesta automática Y no tiene respuesta enviada Y no tiene respuesta en curso).

## 7. Descripción de R2

**Título:** R2 — Atención prioritaria con derivación humana.

**Objetivo:** Proponer un agente que identifique correos de clientes VIP o marcados como urgentes, siempre que no sean sospechosos, y los derive a una persona sin responder automáticamente.

**Sentencia original:** “Si un correo no es sospechoso y además es de un cliente VIP o está marcado como urgente, el sistema lo deriva a una persona sin responder automáticamente. La condición «no sospechoso» se aplica a ambas alternativas.”

**Condición lógica:** R2 = NO sospechoso Y (VIP O urgente), equivalente a ¬S ∧ (V ∨ U).

## 7.1 Matriz de verdad de comprobación

La validación se realizó comparando las condiciones lógicas con los casos de prueba previstos para cada regla.

### R1 — respuesta aprobada y envío controlado

**Regla lógica:** R1 = C1 ∧ C2 ∧ C3 ∧ C4 ∧ C5 ∧ C6 ∧ C7 ∧ C8 ∧ C9 ∧ C10

- C1: consulta frecuente y clara
- C2: existe respuesta aprobada
- C3: no requiere personalización
- C4: no contiene reclamo
- C5: no es VIP
- C6: no es urgente
- C7: no es sospechoso
- C8: existe permiso de respuesta automática
- C9: no tiene respuesta enviada
- C10: no tiene respuesta en curso

| Caso | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 | C10 | Resultado |
|------|----|----|----|----|----|----|----|----|----|-----|-----------|
| R1-A | S | S | S | S | S | S | S | S | S | S | Solicita enviar la respuesta aprobada |
| R1-B | N | S | S | S | S | S | S | S | S | S | No autoriza el envío |
| R1-C | S | N | S | S | S | S | S | S | S | S | No autoriza el envío |
| R1-D | S | S | N | S | S | S | S | S | S | S | No autoriza el envío |
| R1-E | S | S | S | N | S | S | S | S | S | S | No autoriza el envío |
| R1-F | S | S | S | S | N | S | S | S | S | S | No autoriza el envío por ser VIP |
| R1-G | S | S | S | S | S | N | S | S | S | S | No autoriza el envío por ser urgente |
| R1-H | S | S | S | S | S | S | N | S | S | S | No autoriza el envío por sospecha |
| R1-I | S | S | S | S | S | S | S | N | S | S | No autoriza el envío sin permiso |
| R1-J | S | S | S | S | S | S | S | S | N | S | No autoriza el envío si ya fue enviada |
| R1-K | S | S | S | S | S | S | S | S | S | N | No autoriza el envío si ya está en curso |

### R2 — atención prioritaria y derivación humana

**Regla lógica:** R2 = ¬S ∧ (V ∨ U)

| Caso | Sospechoso | VIP | Urgente | Resultado |
|------|------------|-----|---------|-----------|
| R2-A | N | S | N | Se deriva a persona sin responder automáticamente |
| R2-B | N | N | S | Se deriva a persona sin responder automáticamente |
| R2-C | N | S | S | Se deriva a persona sin responder automáticamente |
| R2-D | N | N | N | R2 no se activa |
| R2-E | S | S | N | R2 no se activa |
| R2-F | S | N | S | R2 no se activa |
| R2-G | S | S | S | R2 no se activa |

**Conclusión:** la lógica implementada coincide con la definición formal de ambas reglas y con los resultados esperados de control de flujo.

## 8. Tecnologías utilizadas

- HTML5 (semántico)
- CSS3 (sin frameworks)
- JavaScript vanilla (sin dependencias)
- SVG para diagramas vectoriales (incrustados inline)

## 9. Herramientas de IA utilizadas

Para este TP se alternaron varias herramientas. En cada una se distingue la **aplicación** (el entorno donde se trabajó) del **modelo** (el que se seleccionó dentro de ella). Todo el código se generó con agentes; no se editó a mano.

| Aplicación (entorno) | Modelo seleccionado | Para qué se usó | Correcciones pedidas |
| :-- | :-- | :-- | :-- |
| VS Code + extensión Cline | Claude 3.5 Sonnet | Estructura HTML, estilos CSS, JavaScript, diagramas SVG y lógica de R1 y R2 | Corrección de encoding, logo más grande, ajustes de navegación |
| VS Code + extensión Cline | GPT-4o | [completar: qué hizo este modelo en Cline] | [completar] |
| Cursor | [modelo no informado / completar] | [completar, si realmente se usó] | [completar] |
| ChatGPT (web) | GPT-4o | Borrador de las propuestas y despiece de las condiciones de las sentencias | Ajuste del tono de los beneficios |
| [completar: app de la auditoría] | GPT-6 Luna | Auditoría final del proyecto | [completar] |
| Claude (aplicación) | modelo no informado | Revisión final contra la rúbrica del TP3 | Ver sección 19, punto 6 |

## 10. Aplicación o entorno de programación

VS Code (con la extensión Cline), Cursor y ChatGPT web, según se indica en la tabla de la sección 9.

## 11. Modelos de IA seleccionados

Claude 3.5 Sonnet, GPT-4o y GPT-6 Luna (auditoría). El detalle de cuál se usó en cada aplicación y para qué está en la tabla de la sección 9.

## 12. Para qué se utilizó cada herramienta y modelo

- **Corrección de encoding de caracteres**: Auditoría y fix de caracteres corruptos (ci³, agénticos) en index.html usando análisis de bytes UTF-8/Windows-1252
- **Diseño y layout**: Desarrollo HTML5 semántico, CSS3 custom properties, diseño responsive mobile-first
- **Lógica de reglas R1 y R2**: Implementación JavaScript vanilla sin dependencias, simuladores demostrativos con lógica de decisión completa
- **Diagramas SVG inline**: Diagramas de decisión R1 y R2 con rutas SÍ/NO, arañas de flujo y descriptores de accesibilidad
- **Accesibilidad**: Atributos aria-label, focus-visible outlines, elementos semanticamente correctos, detalles/summary para desplegables
- **Codificación de caracteres**: Declaración <meta charset="UTF-8"> en todos los HTML, archivos consistentes en UTF-8 sin BOM
- **Validación**: Búsqueda exhaustiva de patrones corruptos, verificación visual de caracteres en navegador, diff completo de cambios
- **Contenido del TP**: Documentación completa en README, sentencias R1 y R2 literales, diagramas completos con casos de prueba R1-A a R1-K y R2-A a R2-G

## 13. Cambios o iteraciones solicitados al agente

- Corrección integral de encoding de caracteres: Solicitud para auditar y corregir todos los problemas de codificación del proyecto, no solo ejemplos mencionados (ci³, agénticos, etc.)
- Actualización de logo: Solicitud para aumentar tamaño y visibilidad del logo en la landing page
- Actualización de README: Solicitud para completar puntos pendientes de metadatos (integrantes, herramientas IA, entorno de desarrollo)
- Corrección de navegación: Solicitud para arreglar caracteres corruptos en enlaces de navegación (R1� y R2� Atención)
- Validación de funcionamiento: Solicitud para ejecutar pruebas de simuladores R1 y R2 y validar renders en navegador
- Conservación de contenido: Solicitud para mantener íntegramente el contenido, significado, diseño y comportamiento existente
- Corrección sin doble codificación: Solicitud para no convertir archivos a ciegas ni aplicar reemplazos globales indiscriminados

## 14. Pruebas realizadas y resultados

- Se verificó que las sentencias R1 y R2 se muestren completa y literalmente
- Se construyeron dos diagramas SVG inline (R1 y R2) con caminos SÍ y NO rotulados
- Se implementaron desplegables funcionales con <details>/<summary> para R1 y R2
- Se incluyó la sección de casos de prueba (R1-A a R1-K y R2-A a R2-G)
- Se incluyó un simulador demostrativo local con resultados ficticios para R1 y R2
- Se verificó navegación interna por anclas y foco de teclado visible
- **Auditoría de codificación de caracteres**: Búsqueda exhaustiva de patrones corruptos (Ã, Â, â€, �) en todos los archivos del proyecto utilizando expresión regular en 6 archivos
- **Validación de correcciones**: Re-scaneo post-corrección de index.html confirmó 0 caracteres de reemplazo � restantes
- **Verificación visual**: Revisión estática del HTML, CSS, JavaScript y README en busca de caracteres alterados
- **Confirmación de codificación**: Verificación que el servidor entregue HTML con charset UTF-8 y que el navegador interprete correctamente tildes (í) y eñes
- **Diff completo**: Revisión de todos los cambios para detectar modificaciones innecesarias o pérdida de contenido
- **Pruebas de caracteres específicos**: Búsqueda y corrección de dos puntos corruptos (:) y tilde (í) en navegación R1/R2 de index.html

## 15. Instrucciones para ejecutar la landing localmente

1. Clonar o descargar este repositorio.
2. Abrir el archivo `index.html` directamente en cualquier navegador web moderno.
3. No se requiere servidor, instalación de dependencias ni conexión a internet para el funcionamiento básico (el logo y los recursos son locales).

## 16. Instrucciones para publicar el sitio

El sitio es estático y puede publicarse en cualquier servicio de hosting estático (por ejemplo GitHub Pages, Netlify, Vercel o similar).

1. Subir los archivos del repositorio al servicio de hosting elegido.
2. Asegurar que `index.html` esté en la raíz.
3. [PENDIENTE: el equipo debe completar la URL de la landing publicada una vez realizada la publicación.]

## 17. URL del repositorio

[URL del repo Grupo #19](https://github.com/leoroan/DSWF_2A_2C26_Desarrollo-de-Sistemas-Web-Front-End-TP3)

## 18. URL de la landing publicada

[en gh-Pages](http://myselfproductions.me/DSWF_2A_2C26_Desarrollo-de-Sistemas-Web-Front-End-TP3/)
[en Vercel](https://isft29dswftp3.vercel.app/)

## 19. Proceso de Trabajo y Construcción Agéntica ("Cómo lo hicimos")

Para desarrollar este TP3 organizamos nuestro trabajo en etapas iterativas, coordinando las decisiones de diseño y lógica en equipo mientras guiamos al agente de programación para la generación del código sin modificarlo manualmente [3, 6, 7].

---

### 1. Despiece de sentencias y definición de propuestas (Pasos 3 y 4)

Lo primero que hicimos fue reunirnos a analizar el bloque de sentencias que nos asignó el docente [1, 8]. Para no perder la lógica proposicional original de las reglas, armamos dos fichas breves en las que desglosamos [1]:

- **Información y datos necesarios** que requiere el sistema [1].
- **Condiciones lógicas** (manteniendo los conectores "y", "o" y negaciones) [1].
- **Consecuencias** derivadas de cada caso [1].

A partir de este desglose redactamos las dos propuestas conceptuales, definiendo qué función cumpliría un futuro agente automatizado, en qué momentos consultaría herramientas y cuándo solicitaría la intervención o revisión de una persona [1].

---

### 2. Diseño de los diagramas de flujo agénticos (Paso 5)

Con la lógica de las dos sentencias aclarada, diseñamos la estructura de los dos diagramas de flujo [2]. Seguimos el esquema de lectura solicitado (Inicio → Datos de entrada → Evaluación de condición → Acciones/Resultados) [2, 9]. En aquellos caminos donde la regla original no definía una alternativa explícita, acordamos en equipo agregar derivaciones a revisión humana y lo registramos como una decisión propia de diseño del grupo [2, 10].

---

### 3. Encargo al agente y construcción por etapas (Paso 6)

Le entregamos al agente de programación la consigna completa, la presentación de la startup asignada, las fichas con las sentencias, las propuestas redactadas y los diagramas de flujo [3]. Para evitar errores y mantener el control sobre el resultado, le pedimos trabajar en tres etapas sucesivas [3]:

1. **Estructura HTML base:** maquetado general, secciones principales y contenedor para los desplegables [3].
2. **Contenido y diagramas:** inyección de los textos redactados, inclusión del logo original de la startup y armado de los componentes visuales de los flujos [3].
3. **Diseño y estilos CSS:** jerarquía visual, paleta de colores acorde a la startup e interactividad [3].

---

### 4. Pruebas de escritorio, accesibilidad e iteraciones (Paso 7)

Una vez generada la primera versión de la landing, realizamos las comprobaciones en pantalla de computadora (desktop) [3]:

- Verificamos que el logo original de la startup no se viera cortado ni deformado [3].
- Comprobamos la legibilidad de ambos diagramas de flujo [3].
- Probamos la apertura y cierre de los desplegables tanto con el **clic del mouse** como mediante la **navegación por teclado** (teclas Tab, Enter y Espacio) [3].
- Simulamos recorridos para casos donde la condición lógica se cumplía y casos donde no se cumplía en ambas propuestas [3].

#### 🔄 Evidencia de iteraciones y correcciones pedidas al agente:

- **Problema 1 (Interacción):** Los desplegables abrían correctamente con el mouse pero no permitían foco ni apertura mediante teclado.
  - _Pedido de cambio:_ Le solicitamos al agente ajustar los atributos de accesibilidad (`tabindex="0"`, `aria-expanded` y listener de eventos de teclado `keydown`) en los botones de los desplegables.
- **Problema 2 (Diseño visual):** La imagen del diagrama de flujo en pantallas intermedias se desbordaba horizontalmente en la interfaz desktop.
  - _Pedido de cambio:_ Le pedimos aplicar reglas CSS de ajuste responsive (`max-width: 100%; height: auto;`) y centrado dentro de la tarjeta contenedora.

---

### 5. Registro de Herramientas de IA y Modelos Utilizados (Punto 8)

| Aplicación (Entorno de trabajo) | Modelo de IA (Nombre exacto) | Uso principal en el proyecto                                                                                 | Cambios e iteraciones solicitados                                                                 |
| :------------------------------ | :--------------------------- | :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| **Cursor**                      | `Claude 3.5 Sonnet`          | Generación de la estructura HTML, hojas de estilo CSS e interactividad JavaScript de la landing page [3, 6]. | Corrección de accesibilidad en menúes desplegables y ajuste de diagramas legibles en desktop [3]. |
| **ChatGPT (Web)**               | `GPT-4o`                     | Asistencia en la redacción preliminar de propuestas y despiece de condiciones de las sentencias [1].         | Refinado de tono para sintetizar los beneficios de cada solución en dos frases [2].               |

_(Nota: Si alguna aplicación utilizada no informa la denominación exacta del modelo dentro de su interfaz, se registra como **"modelo no informado"** conforme a la consigna [4])._
