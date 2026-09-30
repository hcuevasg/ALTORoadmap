// ============================================================
//  Roadmap ALTO — Presentación ejecutiva (versión 2)
//  Contenido único y bilingüe de la presentación.
//
//  Fuente: borrador "Flujo_MP_socio_estratégico_ALTO v2.7".
//  Orden acordado en la reunión del 30/09/2026:
//    lámina 4 → los nueve macroproyectos → lámina 9 → 11 → 12
//    y la lámina 10 en una pestaña aparte (alliance.html).
//
//  Cada texto es { es, en }. Nada de contenido en el HTML: todo vive aquí
//  para poder corregirlo en un solo lugar.
// ============================================================

window.V2 = (function () {
  'use strict';

  // ---- Las seis cajas del flujo (lámina 4) ----
  // z = zona del flujo a la que pertenece la caja.
  const CAJAS = [
    { n: 1, z: 'base',   t: { es: 'Evento',         en: 'Event' },          s: { es: 'Qué ocurrió',              en: 'What happened' } },
    { n: 2, z: 'base',   t: { es: 'Sujeto',         en: 'Subject' },        s: { es: 'Quién participa',          en: 'Who is involved' } },
    { n: 3, z: 'base',   t: { es: 'Causa',          en: 'Case' },           s: { es: 'Qué ocurre jurídicamente', en: 'What happens legally' } },
    { n: 4, z: 'base',   t: { es: 'Resultado',      en: 'Outcome' },        s: { es: 'Qué se obtiene',           en: 'What is obtained' } },
    { n: 5, z: 'patron', t: { es: 'Patrón',         en: 'Pattern' },        s: { es: 'Qué se repite',            en: 'What repeats' } },
    { n: 6, z: 'reco',   t: { es: 'Recomendación',  en: 'Recommendation' }, s: { es: 'Qué conviene hacer',       en: 'What should be done' } },
  ];

  // ---- Las zonas del flujo y los macroproyectos que las construyen ----
  // Láminas 5, 6 y 7. El borrador asigna los cinco macroproyectos de la base
  // al bloque completo, no una caja por macroproyecto.
  const ZONAS = {
    base: {
      mps: [3, 4, 7, 8, 5],
      arco: { es: 'Mejorar el presente', en: 'Improve the present' },
      t: { es: 'La base estructurada', en: 'The structured base' },
      nota: {
        es: 'Las cuatro cajas de la base se construyen con los mismos cinco macroproyectos: el borrador los asigna al bloque completo, no caja por caja. MP5 construye también, pero entra después: no es condición de partida.',
        en: 'The four base boxes are built by the same five macroprojects: the draft assigns them to the block as a whole, not box by box. MP5 also builds, but comes later: it is not a starting condition.',
      },
    },
    patron: {
      mps: [6],
      arco: { es: 'Ser socio estratégico', en: 'Be a strategic partner' },
      t: { es: 'El patrón', en: 'The pattern' },
      nota: {
        es: 'A esta escala y en cuatro países dejamos de ver casos sueltos y empezamos a ver patrones.',
        en: 'At this scale and across four countries we stop seeing isolated cases and start seeing patterns.',
      },
    },
    reco: {
      mps: [2],
      arco: { es: 'Ser socio estratégico', en: 'Be a strategic partner' },
      t: { es: 'La recomendación', en: 'The recommendation' },
      nota: {
        es: 'Dos tipos de recomendación: para la operación de ALTO y para la experiencia del cliente. No es adivinar dónde va a ocurrir algo, sino usar la información que nace de la operación.',
        en: 'Two kinds of recommendation: for ALTO’s own operation and for the client experience. It is not about guessing where something will happen, but about using the information the operation itself produces.',
      },
    },
    trans: {
      mps: [1, 9],
      arco: { es: 'Lo transversal', en: 'Cross-cutting' },
      t: { es: 'Atraviesa las seis cajas', en: 'Runs through all six boxes' },
      nota: {
        es: 'No pertenecen a una etapa del flujo: la condicionan entera.',
        en: 'They do not belong to one stage of the flow: they condition all of it.',
      },
    },
  };

  // ---- Los nueve macroproyectos (lámina 1) ----
  //
  //  *** `explica` ESTÁ VACÍO A PROPÓSITO ***
  //  Es el dorso de cada tarjeta: la explicación nivel A1 que está redactando
  //  Constanza. Cuando llegue su borrador, se pega aquí y la tarjeta se llena
  //  sola — no hay que tocar ni el HTML ni el CSS ni el JS.
  //  Mientras esté vacío, la tarjeta muestra el aviso de "texto pendiente".
  //
  const MP = [
    {
      n: 1, zona: 'trans', pct: '14,9%', entradas: 18,
      title: { es: 'Gobierno, calidad y estandarización del dato', en: 'Data Governance, Quality and Standardization' },
      corto: { es: 'Gobierno y calidad del dato', en: 'Data governance & quality' },
      rol: { es: 'Sin esto, ninguna de las seis cajas del flujo se sostiene.', en: 'Without this, none of the six boxes in the flow holds up.' },
      explica: { es: '', en: '' },
    },
    {
      n: 2, zona: 'reco', pct: '15,7%', entradas: 19,
      title: { es: 'Reportería, dashboards y autoservicio', en: 'Reporting, Dashboards and Self-Service' },
      corto: { es: 'Reportería y autoservicio', en: 'Reporting & self-service' },
      rol: { es: 'Entrega la recomendación en forma utilizable para decidir.', en: 'Delivers the recommendation in a form usable for deciding.' },
      explica: { es: '', en: '' },
    },
    {
      n: 3, zona: 'base', pct: '21,5%', entradas: 26,
      title: { es: 'Gestión operativa integral', en: 'Comprehensive Operational Management' },
      corto: { es: 'Gestión operativa integral', en: 'Integral operations management' },
      rol: { es: 'Genera información desde la operación.', en: 'Generates information from operations.' },
      explica: { es: '', en: '' },
    },
    {
      n: 4, zona: 'base', pct: '11,6%', entradas: 14,
      title: { es: 'Gestión documental, evidencia, búsqueda y acceso', en: 'Document Management, Evidence, Search and Access' },
      corto: { es: 'Documental, evidencia y búsqueda', en: 'Documents, evidence & search' },
      rol: { es: 'Extrae y captura datos desde la evidencia.', en: 'Extracts and captures data from evidence.' },
      explica: { es: '', en: '' },
    },
    {
      n: 5, zona: 'base', pct: '6,6%', entradas: 8,
      title: { es: 'Automatización documental jurídica e IA legal asistida', en: 'Legal Document Automation and Assisted Legal AI' },
      corto: { es: 'Automatización e IA legal', en: 'Legal automation & AI' },
      rol: { es: 'Construye la base, pero entra después: no es condición de partida.', en: 'Also builds the base, but comes later: it is not a starting condition.' },
      explica: { es: '', en: '' },
    },
    {
      n: 6, zona: 'patron', pct: '9,1%', entradas: 11,
      title: { es: 'Inteligencia criminal y gestión integral del infractor', en: 'Criminal Intelligence and Comprehensive Offender Management' },
      corto: { es: 'Inteligencia criminal y del infractor', en: 'Criminal & offender intelligence' },
      rol: { es: 'Produce el patrón: recurrencia, vínculos y reincidencia.', en: 'Produces the pattern: recurrence, links and repeat offending.' },
      explica: { es: '', en: '' },
    },
    {
      n: 7, zona: 'base', pct: '4,1%', entradas: 5,
      title: { es: 'Integraciones externas e interoperabilidad institucional', en: 'External Integrations and Institutional Interoperability' },
      corto: { es: 'Integraciones institucionales', en: 'Institutional integrations' },
      rol: { es: 'Enriquece con fuentes externas.', en: 'Enriches with external sources.' },
      explica: { es: '', en: '' },
    },
    {
      n: 8, zona: 'base', pct: '11,6%', entradas: 14,
      title: { es: 'Proceso de gestión de causas y procedimiento penal configurable', en: 'Case Management Process and Configurable Criminal Procedure' },
      corto: { es: 'Procedimiento penal configurable', en: 'Configurable criminal procedure' },
      rol: { es: 'Genera dato jurídico estructurado.', en: 'Generates structured legal data.' },
      explica: { es: '', en: '' },
    },
    {
      n: 9, zona: 'trans', pct: '5,0%', entradas: 6,
      title: { es: 'Condiciones habilitantes para la implementación', en: 'Enabling Conditions for Implementation' },
      corto: { es: 'Condiciones habilitantes', en: 'Enabling conditions' },
      rol: { es: 'Condiciona la ejecución del resto del roadmap.', en: 'Conditions the execution of the rest of the roadmap.' },
      explica: { es: '', en: '' },
    },
  ];

  // ---- Los doce proyectos que hay que agregar (lámina 9) ----
  // `mp` = macroproyecto al que le dan profundidad (mapeo de la lámina 10).
  // `br` = tiene brecha de terreno que lo respalda; si no, viene del diseño
  //        del sistema único.
  const AGREGADOS = [
    { n: 1,  mp: 3, br: false, g: { es: 'Operación legal', en: 'Legal operations' },
      t: { es: 'Compromiso de trabajo legal', en: 'Legal work commitment' },
      d: { es: 'La unidad de gestión: entrada, asignación, ejecución, validación y cierre con resultado verificable.', en: 'The unit of management: intake, assignment, execution, validation and closure with a verifiable outcome.' } },
    { n: 2,  mp: 3, br: false, g: { es: 'Operación legal', en: 'Legal operations' },
      t: { es: 'Compromisos con terceros', en: 'Commitments with third parties' },
      d: { es: 'Policía, fiscalía, tribunal, cliente, perito, testigo: plazo comprometido y acción siguiente prearmada.', en: 'Police, prosecutor, court, client, expert, witness: a committed deadline and the next action pre-set.' } },
    { n: 3,  mp: 8, br: false, g: { es: 'Análisis del caso', en: 'Case analysis' },
      t: { es: 'Teoría del caso', en: 'Case theory' },
      d: { es: 'La estructura sobre la que se ordenan la prueba, la cronología y la estrategia de cada causa.', en: 'The structure on which the evidence, the chronology and the strategy of each case are organized.' } },
    { n: 4,  mp: 8, br: false, g: { es: 'Análisis del caso', en: 'Case analysis' },
      t: { es: 'Cronología del caso', en: 'Case chronology' },
      d: { es: 'Línea de tiempo del hecho y del proceso, construida desde los registros y no a mano.', en: 'A timeline of the incident and of the proceedings, built from the records and not by hand.' } },
    { n: 5,  mp: 6, br: false, g: { es: 'Análisis del caso', en: 'Case analysis' },
      t: { es: 'Grafo del caso', en: 'Case graph' },
      d: { es: 'Mapa de relaciones con fuente, grado de certeza y estado de cada vínculo.', en: 'A map of relationships with source, degree of certainty and status for each link.' } },
    { n: 6,  mp: 6, br: true,  g: { es: 'Análisis del caso', en: 'Case analysis' },
      t: { es: 'Investigación de persecución penal', en: 'Criminal prosecution investigation' },
      d: { es: 'Los investigadores dentro de Alliance: su información y sus imágenes viven en el sistema.', en: 'Investigators inside Alliance: their information and their images live in the system.' } },
    { n: 7,  mp: 4, br: true,  g: { es: 'Prueba y audiencia', en: 'Evidence and hearing' },
      t: { es: 'Cadena de custodia', en: 'Chain of custody' },
      d: { es: 'Trazabilidad y resguardo de la evidencia desde su captura hasta su presentación.', en: 'Traceability and safekeeping of evidence from capture to presentation.' } },
    { n: 8,  mp: 4, br: true,  g: { es: 'Prueba y audiencia', en: 'Evidence and hearing' },
      t: { es: 'Revisión probatoria por lotes', en: 'Batch evidence review' },
      d: { es: 'Revisar volúmenes de material probatorio de forma estructurada y no pieza por pieza.', en: 'Reviewing volumes of evidentiary material in a structured way, not piece by piece.' } },
    { n: 9,  mp: 3, br: false, g: { es: 'Prueba y audiencia', en: 'Evidence and hearing' },
      t: { es: 'Preparación y modo audiencia', en: 'Hearing preparation and hearing mode' },
      d: { es: 'Declaraciones, contrainterrogatorio y la carpeta disponible en la audiencia misma.', en: 'Statements, cross-examination and the case folder available at the hearing itself.' } },
    { n: 10, mp: 8, br: true,  g: { es: 'Prueba y audiencia', en: 'Evidence and hearing' },
      t: { es: 'Recursos y ejecución penal', en: 'Appeals and sentence enforcement' },
      d: { es: 'El ciclo no termina en la sentencia: impugnación, cumplimiento y condiciones.', en: 'The cycle does not end at the verdict: challenge, compliance and conditions.' } },
    { n: 11, mp: 6, br: true,  g: { es: 'Conocimiento', en: 'Knowledge' },
      t: { es: 'Inteligencia sobre el sistema judicial', en: 'Intelligence on the judicial system' },
      d: { es: 'Cómo falla cada tribunal y cada juez. Hoy se guarda el tribunal y la fiscalía, no el juez ni el fiscal.', en: 'How each court and each judge fails. Today we store the court and the prosecutor’s office, not the judge or the prosecutor.' } },
    { n: 12, mp: 5, br: false, g: { es: 'Conocimiento', en: 'Knowledge' },
      t: { es: 'Jurisprudencia y doctrina', en: 'Case law and doctrine' },
      d: { es: 'Dos repositorios: sentencias y jurisprudencia por un lado, doctrina por otro.', en: 'Two repositories: rulings and case law on one side, doctrine on the other.' } },
  ];

  // ---- Lo que pide el levantamiento (lámina 11) ----
  // Porcentaje de brechas que MENCIONAN cada beneficio. No es ahorro y no
  // suma 100: una brecha puede declarar más de un beneficio.
  const BENEFICIOS = [
    { k: 'manual',  t: { es: 'tiempo y trabajo manual',  en: 'time and manual work' } },
    { k: 'cliente', t: { es: 'experiencia del cliente',  en: 'client experience' } },
    { k: 'escalar', t: { es: 'capacidad de escalar',     en: 'ability to scale' } },
    { k: 'calidad', t: { es: 'calidad del dato',         en: 'data quality' } },
    { k: 'control', t: { es: 'trazabilidad y control',   en: 'traceability and control' } },
    { k: 'plazos',  t: { es: 'riesgo de plazos',         en: 'deadline risk' } },
    { k: 'analisis',t: { es: 'análisis y decisión',      en: 'analysis and decision' } },
  ];

  const BLOQUES = [
    {
      k: 'base', mps: 'MP3 · MP4 · MP5 · MP7 · MP8', brechas: 66,
      t: { es: 'Mejorar el presente', en: 'Improve the present' },
      s: { es: 'la base', en: 'the base' },
      v: { manual: 80, cliente: 35, escalar: 29, calidad: 29, control: 27, plazos: 30, analisis: 5 },
    },
    {
      k: 'trans', mps: 'MP1 · MP9', brechas: 23,
      t: { es: 'Lo transversal', en: 'Cross-cutting' },
      s: { es: 'MP1 y MP9', en: 'MP1 and MP9' },
      v: { manual: 57, cliente: 39, escalar: 39, calidad: 39, control: 35, plazos: 17, analisis: 39 },
    },
    {
      k: 'socio', mps: 'MP2 · MP6', brechas: 29,
      t: { es: 'Ser socio estratégico', en: 'Be a strategic partner' },
      s: { es: 'MP6 y MP2', en: 'MP6 and MP2' },
      v: { manual: 76, cliente: 52, escalar: 52, calidad: 24, control: 10, plazos: 7, analisis: 38 },
    },
  ];

  // ---- Qué se gana (lámina 12) ----
  const GANANCIAS = [
    {
      k: 'base',
      t: { es: 'Mejorar el presente', en: 'Improve the present' },
      s: { es: 'la base estructurada', en: 'the structured base' },
      gana: { es: 'Dejar de fabricar información a mano. Hoy el equipo reconstruye en planillas y drives lo que el sistema debería entregar.', en: 'Stop building information by hand. Today the team rebuilds in spreadsheets and drives what the system should deliver.' },
      hacer: { es: 'MP3, MP4, MP7 y MP8 para que el evento, el sujeto, la causa y el resultado nazcan completos. MP5 construye también, pero entra después: no es condición de partida.', en: 'MP3, MP4, MP7 and MP8 so that the event, the subject, the case and the outcome are born complete. MP5 also builds, but comes later: it is not a starting condition.' },
      result: { es: 'La capacidad del equipo deja de crecer al mismo ritmo que el volumen de casos. Es la condición de escalar.', en: 'The team’s capacity stops growing at the same rate as case volume. This is the condition for scaling.' },
      medir: { es: 'Casos con las cuatro cajas completas al cierre · horas de back office dedicadas a armar información', en: 'Cases with all four boxes complete at closing · back-office hours spent assembling information' },
    },
    {
      k: 'trans',
      t: { es: 'Lo transversal', en: 'Cross-cutting' },
      s: { es: 'MP1 y MP9', en: 'MP1 and MP9' },
      gana: { es: 'Que el dato sea confiable a la primera y que la plataforma se pueda usar donde ocurre el trabajo.', en: 'That data is reliable the first time and that the platform can be used where the work happens.' },
      hacer: { es: 'MP1 para campos, catálogos y responsables de la calidad. MP9 para acceso móvil, soporte y para nivelar el estándar de litigación.', en: 'MP1 for fields, catalogs and quality owners. MP9 for mobile access, support and leveling the litigation standard.' },
      result: { es: 'No produce ganancia propia: condiciona la de los otros dos. Sin esto, todo lo demás se construye sobre dato que nadie defiende.', en: 'It produces no gain of its own: it conditions the other two. Without this, everything else is built on data no one stands behind.' },
      medir: { es: 'Registros que pasan validación sin corrección posterior', en: 'Records that pass validation without later correction' },
    },
    {
      k: 'socio',
      t: { es: 'Ser socio estratégico', en: 'Be a strategic partner' },
      s: { es: 'MP6 y MP2', en: 'MP6 and MP2' },
      gana: { es: 'Pasar de entregar información a entregar recomendación.', en: 'Move from delivering information to delivering recommendation.' },
      hacer: { es: 'MP6 produce el patrón: recurrencia, vínculos y reincidencia. MP2 lo entrega en forma utilizable para decidir.', en: 'MP6 produces the pattern: recurrence, links and repeat offending. MP2 delivers it in a form usable for deciding.' },
      result: { es: 'El cliente deja de pedirnos datos y empieza a pedirnos criterio. Es lo que sostiene ser socio confiable y estratégico.', en: 'The client stops asking us for data and starts asking us for judgment. That is what sustains being a trusted, strategic partner.' },
      medir: { es: 'Recomendaciones entregadas y adoptadas por cliente · consultas resueltas por autoservicio', en: 'Recommendations delivered and adopted by the client · queries resolved through self-service' },
    },
  ];

  // ---- Alliance, central de operaciones legales (lámina 10) ----
  // Se construye de abajo hacia arriba. Texto y posiciones tal como están en
  // la lámina: aquí no se reinterpreta nada, solo se diseña. Por eso `lab`
  // repite el rótulo exacto que usa la lámina 10 para cada macroproyecto,
  // que en algunos casos es más corto que el título formal.
  const ALLIANCE = {
    cima: {
      t: { es: 'Socio estratégico', en: 'Strategic partner' },
      s: { es: 'lo que queremos ser', en: 'what we want to be' },
      cajas: [
        { n: 5, t: { es: 'Patrón', en: 'Pattern' }, s: { es: 'Qué se repite', en: 'What repeats' } },
        { n: 6, t: { es: 'Recomendación', en: 'Recommendation' }, s: { es: 'Qué conviene hacer', en: 'What should be done' } },
      ],
      con: [
        { mp: 6, lab: { es: 'Inteligencia criminal y gestión integral del infractor', en: 'Criminal intelligence and comprehensive offender management' } },
        { mp: 2, lab: { es: 'Reportería, dashboards y autoservicio', en: 'Reporting, dashboards and self-service' } },
      ],
      puente: { es: 'Con las cuatro cajas resueltas se llega al patrón', en: 'With the four boxes resolved, the pattern becomes reachable' },
    },
    base: {
      t: { es: 'La base estructurada', en: 'The structured base' },
      s: { es: 'lo que hoy define a ALTO', en: 'what defines ALTO today' },
      cajas: [
        { n: 1, t: { es: 'Evento', en: 'Event' } },
        { n: 2, t: { es: 'Sujeto', en: 'Subject' } },
        { n: 3, t: { es: 'Causa', en: 'Case' } },
        { n: 4, t: { es: 'Resultado', en: 'Outcome' } },
      ],
      con: [
        { mp: 8, lab: { es: 'Gestión de causas y procedimiento', en: 'Case management and procedure' } },
        { mp: 7, lab: { es: 'Integraciones externas', en: 'External integrations' } },
        { mp: 5, lab: { es: 'Automatización documental e IA', en: 'Document automation and AI' } },
        { mp: 4, lab: { es: 'Gestión documental y evidencia', en: 'Document management and evidence' } },
        { mp: 3, lab: { es: 'Gestión operativa integral', en: 'Comprehensive operational management' } },
      ],
    },
    transversales: [
      { mp: 1, lab: { es: 'Gobierno, calidad y estandarización del dato', en: 'Data governance, quality and standardization' } },
      { mp: 9, lab: { es: 'Condiciones habilitantes: tecnología, arquitectura, seguridad y escalabilidad', en: 'Enabling conditions: technology, architecture, security and scalability' } },
    ],
    cierre: {
      es: 'Los doce proyectos agregados no son una capa nueva: le dan profundidad a los macroproyectos que ya existen.',
      en: 'The twelve added projects are not a new layer: they give depth to the macroprojects that already exist.',
    },
  };

  // ---- Rótulos de interfaz ----
  const UI = {
    // Navegación
    navFlujo:   { es: 'El flujo', en: 'The flow' },
    navMacro:   { es: 'Macroproyectos', en: 'Macroprojects' },
    navAgregar: { es: 'Qué falta', en: "What's missing" },
    navPide:    { es: 'Qué se pide', en: 'What is asked' },
    navGana:    { es: 'Qué se gana', en: 'What is gained' },
    navAlliance:{ es: 'Alliance', en: 'Alliance' },
    navRespaldo:{ es: 'Versión completa', en: 'Full version' },

    // Flujo
    fnHint:   { es: 'Pulsa una caja del flujo —o la banda transversal— para ver qué macroproyectos la construyen.', en: 'Click a box in the flow —or the cross-cutting band— to see which macroprojects build it.' },
    verNueve: { es: 'Ver los nueve', en: 'Show all nine' },
    bandaTrans: { es: 'Lo transversal · atraviesa las seis cajas', en: 'Cross-cutting · runs through all six boxes' },

    // Tarjetas
    anterior:    { es: 'Macroproyecto anterior', en: 'Previous macroproject' },
    siguiente:   { es: 'Macroproyecto siguiente', en: 'Next macroproject' },
    pendiente:   { es: 'Texto en preparación', en: 'Text in preparation' },
    pendienteD:  { es: 'La explicación de este macroproyecto está siendo redactada y se incorpora apenas esté lista.', en: 'The explanation for this macroproject is being written and will be added as soon as it is ready.' },
    enElFlujo:   { es: 'En el flujo', en: 'In the flow' },
    brechas:     { es: 'brechas', en: 'gaps' },
    delTotal:    { es: 'del levantamiento', en: 'of the assessment' },
    seConcreta:  { es: 'Se concreta en', en: 'Becomes' },

    // Zonas (chip)
    zona_base:   { es: 'La base', en: 'The base' },
    zona_patron: { es: 'Patrón', en: 'Pattern' },
    zona_reco:   { es: 'Recomendación', en: 'Recommendation' },
    zona_trans:  { es: 'Transversal', en: 'Cross-cutting' },

    // Proyectos agregados
    conBrecha:  { es: 'con brecha de terreno', en: 'backed by a field gap' },
    delDiseno:  { es: 'del diseño del sistema único', en: 'from the single-system design' },
    daProfundidad: { es: 'Le da profundidad a', en: 'Gives depth to' },
    verTodos:   { es: 'Ver los doce', en: 'Show all twelve' },

    // Lámina 11
    matrizHint: { es: 'Pulsa un beneficio para aislarlo, o un bloque para verlo completo.', en: 'Click a benefit to isolate it, or a block to see it in full.' },
    deLasBrechas: { es: 'de las brechas lo menciona', en: 'of the gaps mention it' },

    // Lámina 12
    queSeGana:  { es: 'Qué se gana', en: 'What is gained' },
    queHacer:   { es: 'Qué hay que hacer', en: 'What has to be done' },
    elResultado:{ es: 'El resultado', en: 'The result' },
    queMedir:   { es: 'Qué mediríamos', en: 'What we would measure' },

    // Alliance
    conQue: { es: 'Con qué se construye', en: 'What it is built with' },
    transversales: { es: 'Transversales', en: 'Cross-cutting' },
  };

  return { CAJAS, ZONAS, MP, AGREGADOS, BENEFICIOS, BLOQUES, GANANCIAS, ALLIANCE, UI };
})();
