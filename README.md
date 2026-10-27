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

- **Leandro Maselli** — github.com/leoroan: Análisis y desarrollo de las reglas de automatización R1 y R2, diseño de la landing page, corrección de codificación de caracteres y documentación del proyecto.

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

## 8. Tecnologías utilizadas

- HTML5 (semántico)
- CSS3 (sin frameworks)
- JavaScript vanilla (sin dependencias)
- SVG para diagramas vectoriales (incrustados inline)

## 9. Herramientas de IA utilizadas

Herramienta Cline como agente de desarrollo utilizado para la creación completa del proyecto AutoMail AI: estructura, código, estilado, diseño, corrección de encoding, lógica de reglas R1 y R2, diagramas SVG y validación de caracteres.

## 10. Aplicación o entorno de programación utilizado

VS Code con Cline como agente de desarrollo utilizado para la codificación, corrección de encoding, diseño de estilos y implementación de la lógica de las reglas R1 y R2.

## 11. Modelo de IA seleccionado

Modelos de Nvidia: "Nemotron" 3.5 y flash. (freemium)

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

[PENDIENTE: Proximamente]

## 18. URL de la landing publicada

[PENDIENTE] to be anounced.
