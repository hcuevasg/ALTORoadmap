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
  //  El contenido en español de MP1 a MP5 lo redactó Constanza (30/09/2026):
  //  `titulo` y `gancho` son el frente de su tarjeta; `queNosPasa`, `laClave`,
  //  `ganamos` y `comoAcerca` son el reverso. El inglés es traducción propia y
  //  conviene que ella lo revise.
  //
  //  MP6 a MP9 siguen sin texto: mientras `titulo` esté vacío, la tarjeta
  //  muestra el aviso de "texto en preparación" y nada más hay que tocar.
  //
  //  `icono` elige el dibujo en el que se transforma el número al pasar por
  //  encima (ver ICONOS más abajo). `esencia` es el rótulo bajo el número.
  //
  const MP = [
    {
      n: 1, zona: 'trans', pct: '14,9%', entradas: 18, icono: 'escudo',
      title: { es: 'Gobierno, calidad y estandarización del dato', en: 'Data Governance, Quality and Standardization' },
      corto: { es: 'Gobierno y calidad del dato', en: 'Data governance & quality' },
      rol: { es: 'Sin esto, ninguna de las seis cajas del flujo se sostiene.', en: 'Without this, none of the six boxes in the flow holds up.' },
      esencia: { es: 'Información confiable', en: 'Reliable information' },
      titulo: { es: 'Información en la que podamos confiar', en: 'Information we can trust' },
      gancho: { es: 'Si la información no es confiable, nada de lo que construyamos encima lo será.', en: 'If the information is not reliable, nothing we build on top of it will be.' },
      frecuencia: { es: '1 de cada 7 problemas', en: '1 in every 7 problems' },
      paises: { es: 'México, Chile, Colombia', en: 'Mexico, Chile, Colombia' },
      queNosPasa: {
        es: 'La información está incompleta, mal escrita, atrasada, sin reglas comunes y sin responsable. Cuando el sistema no tiene dónde registrar algo, o es lento, cada equipo arma su propia versión en archivos, chats y correos aparte, y la información se divide todavía más. Una misma persona aparece varias veces y un mismo caso dice cosas distintas según dónde se mire. Es tan grave que ni siquiera podemos ver quién vuelve a delinquir.',
        en: 'The information is incomplete, badly written, out of date, without common rules and without an owner. When the system has nowhere to record something, or is slow, each team builds its own version in separate files, chats and emails, and the information fragments further. The same person appears several times and the same case says different things depending on where you look. It is so serious that we cannot even see who is reoffending.',
      },
      laClave: {
        es: 'Está en la causa, es decir, en los registros de la fiscalía y el tribunal. Desde ahí se completan el evento, el sujeto y el resultado.',
        en: 'It is in the case — that is, in the records of the prosecutor’s office and the court. From there the event, the subject and the outcome are completed.',
      },
      ganamos: [
        { t: { es: 'Decisiones bien tomadas', en: 'Well-made decisions' }, d: { es: 'El cliente y la gerencia deciden con nuestros números. Si el número está malo, la decisión también.', en: 'The client and management decide using our numbers. If the number is wrong, so is the decision.' } },
        { t: { es: 'Credibilidad', en: 'Credibility' }, d: { es: 'Lo que le informamos al cliente es lo mismo que consta en la justicia. Nuestras cifras resisten cualquier revisión.', en: 'What we report to the client is the same as what the courts hold on record. Our figures withstand any review.' } },
        { t: { es: 'Análisis de verdad', en: 'Real analysis' }, d: { es: 'La estrategia nos pide trabajar “con inteligencia y análisis”. No hay análisis posible sobre información incorrecta.', en: 'The strategy asks us to work “with intelligence and analysis”. No analysis is possible on incorrect information.' } },
      ],
      comoAcerca: {
        es: 'Es la base de los otros ocho proyectos y el camino para ser “el socio confiable y estratégico de nuestros clientes”.',
        en: 'It is the base of the other eight projects and the path to being “our clients’ trusted, strategic partner”.',
      },
      detalle: { label: { es: '18 de 121 · 14,9%', en: '18 of 121 · 14.9%' },
        ids: ['MX-005','MX-015','MX-001','MX-042','MX-026','MX-049','CL-017','CL-019','CL-020','CL-022','CL-023','CL-024','CO-005','CO-009','CO-012','CO-013','CO-014'] },
    },
    {
      n: 2, zona: 'reco', pct: '15,7%', entradas: 19, icono: 'tablero',
      title: { es: 'Reportería, dashboards y autoservicio', en: 'Reporting, Dashboards and Self-Service' },
      corto: { es: 'Reportería y autoservicio', en: 'Reporting & self-service' },
      rol: { es: 'Entrega la recomendación en forma utilizable para decidir.', en: 'Delivers the recommendation in a form usable for deciding.' },
      esencia: { es: 'Vista por cliente', en: 'A view per client' },
      titulo: { es: 'Cada cliente ve lo que le importa', en: 'Each client sees what matters to them' },
      gancho: { es: 'Una misma base de información. A cada cliente, la parte que necesita.', en: 'One single base of information. To each client, the part they need.' },
      frecuencia: { es: '1 de cada 6 problemas', en: '1 in every 6 problems' },
      paises: { es: 'México, Chile, Colombia', en: 'Mexico, Chile, Colombia' },
      queNosPasa: {
        es: 'Cada informe al cliente se arma a mano. Se junta información de varias planillas, archivos y sistemas, se copia a una presentación y se envía por correo. Cada pedido urgente obliga a empezar de nuevo. El sistema muestra siempre lo mismo y no deja elegir qué mostrar, así que el cliente siente que le falta información.',
        en: 'Every client report is built by hand. Information is gathered from several spreadsheets, files and systems, copied into a presentation and sent by email. Every urgent request means starting over. The system always shows the same thing and does not let you choose what to show, so the client feels information is missing.',
      },
      laClave: {
        es: 'Un informe amplio, construido una sola vez, que abarque todos los temas. La información ya está por debajo. A cada cliente le mostramos la parte que necesita, y si quiere ver más, se la mostramos.',
        en: 'One broad report, built once, covering every topic. The information is already underneath. We show each client the part they need, and if they want to see more, we show them.',
      },
      ganamos: [
        { t: { es: 'Tiempo para lo legal', en: 'Time for legal work' }, d: { es: 'El equipo deja de armar informes y vuelve a su trabajo jurídico.', en: 'The team stops assembling reports and returns to its legal work.' } },
        { t: { es: 'Respuesta rápida', en: 'Fast response' }, d: { es: 'Si el cliente pide algo nuevo, se lo mostramos sin empezar de cero.', en: 'If the client asks for something new, we show it without starting from scratch.' } },
        { t: { es: 'Una sola cifra', en: 'A single figure' }, d: { es: 'Todos los abogados informan con la misma base, así que el número es el mismo para todos.', en: 'Every lawyer reports from the same base, so the number is the same for everyone.' } },
      ],
      comoAcerca: {
        es: 'Es la cara de ALTO frente al cliente. Responde al pilar de experiencia del cliente: “Expandir el valor de nuestra entrega para ser el mejor socio de seguridad.”',
        en: 'It is ALTO’s face to the client. It answers the client-experience pillar: “Expand the value of what we deliver to be the best security partner.”',
      },
      detalle: { label: { es: '19 de 121 · 15,7%', en: '19 of 121 · 15.7%' },
        ids: ['MX-008','MX-001','MX-021','MX-022','MX-025','MX-007','MX-011','MX-017','MX-009','MX-015','MX-045','MX-050','CL-013','CL-016','CL-011','CL-014','CL-015','CO-010','CO-001'] },
    },
    {
      n: 3, zona: 'base', pct: '21,5%', entradas: 26, icono: 'consola',
      title: { es: 'Gestión operativa integral', en: 'Comprehensive Operational Management' },
      corto: { es: 'Gestión operativa integral', en: 'Integral operations management' },
      rol: { es: 'Genera información desde la operación.', en: 'Generates information from operations.' },
      esencia: { es: 'El trabajo, dentro', en: 'The work, inside' },
      titulo: { es: 'El equipo trabaja y se gestiona dentro del sistema', en: 'The team works and is managed inside the system' },
      gancho: { es: 'El abogado opera dentro. El coordinador mide y controla desde dentro.', en: 'The lawyer operates inside. The coordinator measures and controls from inside.' },
      frecuencia: { es: '1 de cada 5 problemas · el macroproyecto que más reúne', en: '1 in every 5 problems · the macroproject that gathers the most' },
      paises: { es: 'México, Chile, Colombia, Estados Unidos', en: 'Mexico, Chile, Colombia, United States' },
      queNosPasa: {
        es: 'El sistema sirve para registrar después, no para trabajar. El abogado no tiene dentro lo que necesita para su día a día, así que trabaja en correos, chats, papel y planillas aparte. El coordinador no tiene tableros de control: el sistema no mide lo que necesitamos para saber si cumplimos las metas de la empresa. Cada uno mide a su manera.',
        en: 'The system is for recording afterwards, not for working. The lawyer does not have inside what the day-to-day requires, so they work in emails, chats, paper and separate spreadsheets. The coordinator has no control dashboards: the system does not measure what we need in order to know whether we are meeting the company’s targets. Everyone measures their own way.',
      },
      laClave: {
        es: '“La plataforma legal no puede ser solo un registro. Tiene que ser una plataforma de gestión legal.” (Jorge Nazer, Presidente). Es de gestión cuando el trabajo ocurre dentro: ahí el abogado opera y el coordinador mide y controla.',
        en: '“The legal platform cannot be just a record. It has to be a legal management platform.” (Jorge Nazer, President). It becomes management when the work happens inside: that is where the lawyer operates and the coordinator measures and controls.',
      },
      ganamos: [
        { t: { es: 'Sin planillas paralelas', en: 'No parallel spreadsheets' }, d: { es: 'La información entra una vez, cuando pasa.', en: 'Information goes in once, when it happens.' } },
        { t: { es: 'Procesos iguales para todos', en: 'The same processes for everyone' }, d: { es: 'Y lo que se repite se puede automatizar.', en: 'And whatever repeats can be automated.' } },
        { t: { es: 'Medir y controlar la operación', en: 'Measure and control operations' }, d: { es: 'Medimos lo que necesitamos para cumplir las metas de la empresa y sabemos, día a día, si lo estamos logrando.', en: 'We measure what we need in order to meet the company’s targets and we know, day by day, whether we are getting there.' } },
      ],
      comoAcerca: {
        es: 'Responde al pilar de sostenibilidad financiera: “Mantener un enfoque de productividad y eficiencia en el manejo operativo y financiero para asegurar el logro de objetivos.”',
        en: 'It answers the financial-sustainability pillar: “Maintain a focus on productivity and efficiency in operational and financial management to secure the achievement of objectives.”',
      },
      detalle: { label: { es: '26 de 121 · 21,5%', en: '26 of 121 · 21.5%' },
        ids: ['MX-004','MX-035','MX-046','MX-031','MX-014','MX-038','MX-016','MX-002','MX-034','MX-030','MX-023','MX-017','MX-028','MX-018','MX-052','MX-029','CL-008','CL-007','CL-009','CL-010','CL-025','CO-007','CO-008','USA-001','USA-002','USA-003'] },
    },
    {
      n: 4, zona: 'base', pct: '11,6%', entradas: 14, icono: 'expediente',
      title: { es: 'Gestión documental, evidencia, búsqueda y acceso', en: 'Document Management, Evidence, Search and Access' },
      corto: { es: 'Documental, evidencia y búsqueda', en: 'Documents, evidence & search' },
      rol: { es: 'Extrae y captura datos desde la evidencia.', en: 'Extracts and captures data from evidence.' },
      esencia: { es: 'La fuente oficial', en: 'The official source' },
      titulo: { es: 'Cada caso con sus documentos oficiales', en: 'Every case with its official documents' },
      gancho: { es: 'Si tenemos la fuente oficial, tenemos la certeza.', en: 'If we have the official source, we have certainty.' },
      frecuencia: { es: '1 de cada 9 problemas', en: '1 in every 9 problems' },
      paises: { es: 'México, Chile, Colombia', en: 'Mexico, Chile, Colombia' },
      queNosPasa: {
        es: 'No tenemos un lugar donde guardar los documentos del caso. La evidencia, las fotos y los documentos están repartidos en correos, chats y carpetas personales. Lo más valioso, el expediente judicial, no tiene dónde quedar.',
        en: 'We have nowhere to keep the case documents. The evidence, the photos and the documents are scattered across emails, chats and personal folders. The most valuable item, the court file, has nowhere to live.',
      },
      laClave: {
        es: 'Contar con la fuente oficial. Con el expediente judicial completo verificamos nuestra información y completamos lo que nos falta. Desde ahí llenamos con certeza el evento, el sujeto, la causa y el resultado.',
        en: 'Having the official source. With the complete court file we verify our information and fill in what is missing. From there we complete the event, the subject, the case and the outcome with certainty.',
      },
      ganamos: [
        { t: { es: 'Información verificada y completa', en: 'Verified, complete information' }, d: { es: 'Lo que registramos se compara con la fuente oficial, y lo que falta se completa desde ahí.', en: 'What we record is checked against the official source, and what is missing is completed from it.' } },
        { t: { es: 'Menos tiempo buscando', en: 'Less time searching' }, d: { es: 'Se ve sin descargar y se encuentra con una sola búsqueda.', en: 'It is viewed without downloading and found with a single search.' } },
        { t: { es: 'La evidencia queda en la empresa', en: 'The evidence stays in the company' }, d: { es: 'No en chats ni en carpetas personales.', en: 'Not in chats or personal folders.' } },
      ],
      comoAcerca: {
        es: 'Es lo que nos permite “perseguir con inteligencia y análisis los delitos que más les importan”.',
        en: 'It is what lets us “prosecute, with intelligence and analysis, the crimes that matter most to them”.',
      },
      detalle: { label: { es: '14 de 121 · 11,6%', en: '14 of 121 · 11.6%' },
        ids: ['MX-006','MX-037','MX-033','MX-019','MX-032','CL-002','CL-001','CL-003','CL-021','CL-006','CL-012','CL-042','CL-040','CO-006'] },
    },
    {
      n: 5, zona: 'base', pct: '6,6%', entradas: 8, icono: 'escrito',
      title: { es: 'Automatización documental jurídica e IA legal asistida', en: 'Legal Document Automation and Assisted Legal AI' },
      corto: { es: 'Automatización e IA legal', en: 'Legal automation & AI' },
      rol: { es: 'Construye la base, pero entra después: no es condición de partida.', en: 'Also builds the base, but comes later: it is not a starting condition.' },
      esencia: { es: 'El escrito sale solo', en: 'The brief writes itself' },
      titulo: { es: 'Los escritos de trámite, listos desde el sistema', en: 'Routine filings, ready from the system' },
      gancho: { es: 'El sistema arma lo repetitivo. El abogado firma y se dedica a lo importante.', en: 'The system assembles what repeats. The lawyer signs and gets on with what matters.' },
      frecuencia: { es: 'Lo pidieron los tres países · 1 de cada 15 problemas', en: 'Requested by all three countries · 1 in every 15 problems' },
      paises: { es: 'México, Chile, Colombia', en: 'Mexico, Chile, Colombia' },
      queNosPasa: {
        es: 'La mayoría de nuestros escritos son de mero trámite: simples y repetitivos. Aun así, cada abogado los arma copiando y pegando desde sus propios formatos, y vuelve a escribir a mano datos que el sistema ya tiene.',
        en: 'Most of our filings are routine: simple and repetitive. Even so, each lawyer assembles them by copying and pasting from their own formats, and retypes by hand data the system already holds.',
      },
      laClave: {
        es: 'Es lo mínimo de cualquier plataforma legal. Con los datos dentro, el escrito sale solo desde una plantilla aprobada: el abogado marca la norma que quiere aplicar, lo descarga, lo firma y lo presenta. La inteligencia artificial apoya la investigación jurídica (leyes, sentencias y doctrina), con abogados capacitados para usarla.',
        en: 'It is the minimum for any legal platform. With the data inside, the filing comes out on its own from an approved template: the lawyer picks the rule to apply, downloads it, signs it and files it. AI supports legal research (statutes, rulings and doctrine), with lawyers trained to use it.',
      },
      ganamos: [
        { t: { es: 'Eficiencia operativa', en: 'Operational efficiency' }, d: { es: 'Las tareas manuales y repetitivas se automatizan, y el abogado se dedica a la estrategia del caso.', en: 'Manual, repetitive tasks are automated, and the lawyer focuses on case strategy.' } },
        { t: { es: 'Un motivo para trabajar dentro', en: 'A reason to work inside' }, d: { es: 'Si el abogado carga bien sus datos, el escrito sale solo. Mientras mejor la información, menos trabajo.', en: 'If the lawyer enters their data properly, the filing comes out on its own. The better the information, the less work.' } },
        { t: { es: 'Formatos iguales y aprobados', en: 'Consistent, approved formats' }, d: { es: 'La misma calidad en todo el servicio, ajustada a cada país.', en: 'The same quality across the whole service, adjusted to each country.' } },
      ],
      comoAcerca: {
        es: 'Responde al pilar de nuestra gente y cultura: “Evolucionamos a equipos más especializados, analíticos y consultivos.”',
        en: 'It answers the people-and-culture pillar: “We are evolving towards more specialized, analytical and consultative teams.”',
      },
      detalle: { label: { es: '8 de 121 · 6,6%', en: '8 of 121 · 6.6%' },
        ids: ['MX-013','MX-043','MX-041','CL-004','CL-005','CL-031','CL-018','CO-010'] },
    },
    {
      n: 6, zona: 'patron', pct: '9,1%', entradas: 11, icono: 'red',
      title: { es: 'Inteligencia criminal y gestión integral del infractor', en: 'Criminal Intelligence and Comprehensive Offender Management' },
      corto: { es: 'Inteligencia criminal y del infractor', en: 'Criminal & offender intelligence' },
      rol: { es: 'Produce el patrón: recurrencia, vínculos y reincidencia.', en: 'Produces the pattern: recurrence, links and repeat offending.' },
      esencia: { es: 'Conectar los hechos', en: 'Connect the facts' },
      titulo: { es: 'Ver qué conecta a los hechos', en: 'See what connects the facts' },
      gancho: { es: 'Con una foto o un video vemos en qué otros eventos y casos aparece la misma persona, aunque no sepamos su nombre.', en: 'With a photo or a video we can see in which other events and cases the same person appears, even when we do not know their name.' },
      frecuencia: { es: 'Lo pidieron los cuatro países · 1 de cada 11 problemas', en: 'Requested by all four countries · 1 in every 11 problems' },
      paises: { es: 'México, Chile, Colombia, Estados Unidos', en: 'Mexico, Chile, Colombia, United States' },
      queNosPasa: {
        es: 'Lo que sabemos de cada persona está repartido y no se conecta. Para saber si un detenido ya cayó antes, se manda su foto a un grupo de chat y alguien lo busca a mano en una planilla. Las bandas se descubren leyendo los relatos uno por uno, o porque alguien se acuerda.',
        en: 'What we know about each person is scattered and does not connect. To find out whether a detainee has been caught before, their photo is sent to a chat group and someone searches a spreadsheet by hand. Gangs are discovered by reading the accounts one by one, or because someone remembers.',
      },
      laClave: {
        es: 'Conectar los hechos. Lo importante no es solo el nombre, sino ver dónde más aparece la misma persona. Así llegamos a las dos últimas cajas del flujo: el patrón y la recomendación.',
        en: 'Connecting the facts. What matters is not only the name, but seeing where else the same person appears. That is how we reach the last two boxes of the flow: the pattern and the recommendation.',
      },
      ganamos: [
        { t: { es: 'Vincular sin nombre', en: 'Link without a name' }, d: { es: 'Una foto o un video muestra en cuántos eventos y casos aparece la misma persona. Y si en alguno ya estaba identificada, ahora sabemos quién es.', en: 'A photo or a video shows in how many events and cases the same person appears. And if they were already identified in one of them, now we know who they are.' } },
        { t: { es: 'Prevenir, no solo perseguir', en: 'Prevent, not just prosecute' }, d: { es: 'Con lo que se repite, le recomendamos al cliente qué hacer antes de que vuelva a pasar.', en: 'From what repeats, we recommend to the client what to do before it happens again.' } },
        { t: { es: 'Una red que crece', en: 'A network that grows' }, d: { es: 'Cada caso nuevo hace más valioso todo lo que ya sabemos.', en: 'Every new case makes everything we already know more valuable.' } },
      ],
      comoAcerca: {
        es: 'Es el centro del objetivo: “ayudándolos a prevenir y perseguir con inteligencia y análisis los delitos que más les importan”.',
        en: 'It is the heart of the objective: “helping them prevent and prosecute, with intelligence and analysis, the crimes that matter most to them”.',
      },
      detalle: { label: { es: '11 de 121 · 9,1%', en: '11 of 121 · 9.1%' },
        ids: ['MX-003','MX-006','MX-039','MX-024','MX-011','CL-034','CL-036','CL-037','CL-038','CO-011','USA-004'] },
    },
    {
      n: 7, zona: 'base', pct: '4,1%', entradas: 5, icono: 'sincro',
      title: { es: 'Integraciones externas e interoperabilidad institucional', en: 'External Integrations and Institutional Interoperability' },
      corto: { es: 'Integraciones institucionales', en: 'Institutional integrations' },
      rol: { es: 'Enriquece con fuentes externas.', en: 'Enriches with external sources.' },
      esencia: { es: 'Siempre al día', en: 'Always up to date' },
      titulo: { es: 'Sincronizados con la justicia', en: 'In sync with the courts' },
      gancho: { es: 'Cada movimiento de la causa llega solo a nuestro sistema.', en: 'Every movement in the case reaches our system on its own.' },
      frecuencia: { es: 'Lo pidieron los tres países · 1 de cada 24 problemas', en: 'Requested by all three countries · 1 in every 24 problems' },
      paises: { es: 'México, Chile, Colombia', en: 'Mexico, Chile, Colombia' },
      queNosPasa: {
        es: 'Hoy nos conectamos con la justicia a mano. Alguien entra causa por causa a las páginas de tribunales y fiscalías para ver si hubo novedades, y lo que encuentra lo copia en nuestro sistema. Mientras tanto, nuestra información queda atrasada respecto de la causa real. En México, además, los abogados hacen fila horas para presentar denuncias por delitos menores.',
        en: 'Today we connect to the courts by hand. Someone goes case by case into the court and prosecution websites to see whether anything has changed, and copies whatever they find into our system. Meanwhile our information falls behind the real case. In Mexico, on top of that, lawyers queue for hours to file complaints for minor offences.',
      },
      laClave: {
        es: 'Sincronizar. Cada movimiento de la causa (una resolución, una audiencia, un cambio de estado) llega solo a nuestro sistema y crea la tarea que corresponde. Y donde la institución lo permita, presentamos por sus canales digitales.',
        en: 'Synchronizing. Every movement in the case (a ruling, a hearing, a change of status) reaches our system on its own and creates the task that follows. And wherever the institution allows it, we file through their digital channels.',
      },
      ganamos: [
        { t: { es: 'Siempre al día', en: 'Always up to date' }, d: { es: 'Lo que dice nuestro sistema es lo mismo que dice la justicia.', en: 'What our system says is the same as what the courts say.' } },
        { t: { es: 'Cada movimiento con su tarea', en: 'Every movement with its task' }, d: { es: 'Llega la novedad y el abogado sabe qué hacer.', en: 'The update arrives and the lawyer knows what to do.' } },
        { t: { es: 'Abogados donde importan', en: 'Lawyers where they matter' }, d: { es: 'Menos consultas y filas, más tiempo en audiencias.', en: 'Fewer lookups and queues, more time in hearings.' } },
      ],
      comoAcerca: {
        es: 'Responde al pilar de productos y servicios: “Pasamos de servicios operativos a soluciones de alto valor.”',
        en: 'It answers the products-and-services pillar: “We move from operational services to high-value solutions.”',
      },
      detalle: { label: { es: '5 de 121 · 4,1%', en: '5 of 121 · 4.1%' },
        ids: ['MX-020','CL-030','CL-041','CO-015','CO-004'] },
    },
    {
      n: 8, zona: 'base', pct: '11,6%', entradas: 14, icono: 'balanza',
      title: { es: 'Proceso de gestión de causas y procedimiento penal configurable', en: 'Case Management Process and Configurable Criminal Procedure' },
      corto: { es: 'Procedimiento penal configurable', en: 'Configurable criminal procedure' },
      rol: { es: 'Genera dato jurídico estructurado.', en: 'Generates structured legal data.' },
      esencia: { es: 'Un proceso, cuatro países', en: 'One process, four countries' },
      titulo: { es: '', en: '' }, gancho: { es: '', en: '' },
      frecuencia: { es: '1 de cada 9 problemas', en: '1 in every 9 problems' },
      paises: { es: 'México, Chile, Colombia', en: 'Mexico, Chile, Colombia' },
      queNosPasa: { es: '', en: '' }, laClave: { es: '', en: '' }, ganamos: [], comoAcerca: { es: '', en: '' },
      detalle: { label: { es: '14 de 121 · 11,6%', en: '14 of 121 · 11.6%' }, ids: [] },
    },
    {
      n: 9, zona: 'trans', pct: '5,0%', entradas: 6, icono: 'movil',
      title: { es: 'Condiciones habilitantes para la implementación', en: 'Enabling Conditions for Implementation' },
      corto: { es: 'Condiciones habilitantes', en: 'Enabling conditions' },
      rol: { es: 'Condiciona la ejecución del resto del roadmap.', en: 'Conditions the execution of the rest of the roadmap.' },
      esencia: { es: 'Que se pueda usar', en: 'Make it usable' },
      titulo: { es: '', en: '' }, gancho: { es: '', en: '' },
      frecuencia: { es: '1 de cada 20 problemas', en: '1 in every 20 problems' },
      paises: { es: 'México, Chile, Colombia', en: 'Mexico, Chile, Colombia' },
      queNosPasa: { es: '', en: '' }, laClave: { es: '', en: '' }, ganamos: [], comoAcerca: { es: '', en: '' },
      detalle: { label: { es: '6 de 121 · 5,0%', en: '6 of 121 · 5.0%' }, ids: [] },
    },
  ];

  // ---- Iconos en los que se transforma el número al pasar por encima ----
  // Trazo simple, en la línea de los que ya usa el sitio (24px, stroke 2).
  const ICONOS = {
    escudo:     '<path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
    tablero:    '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/><path d="M13 16h4"/><path d="M13 12.5h4"/>',
    consola:    '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h4"/><path d="M7 13h7"/><path d="M7 17h5"/><path d="M17 8.5l1.6 1.6L21 7.7"/>',
    expediente: '<path d="M4 4a2 2 0 0 1 2-2h7l5 5v6"/><path d="M13 2v5h5"/><circle cx="12" cy="16" r="4"/><path d="M15 19l3.5 3.5"/>',
    escrito:    '<path d="M6 2h8l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M14 2v5h5"/><path d="M8.5 13.5l1 2.2 2.2 1-2.2 1-1 2.2-1-2.2-2.2-1 2.2-1z"/><path d="M15 12.5l.6 1.3 1.4.6-1.4.6-.6 1.3-.6-1.3-1.4-.6 1.4-.6z"/>',
    red:        '<circle cx="5" cy="7" r="2.2"/><circle cx="18.5" cy="5.5" r="2.2"/><circle cx="12" cy="13" r="2.6"/><circle cx="6" cy="19" r="2.2"/><circle cx="18" cy="18.5" r="2.2"/><path d="M6.8 8.4l3.6 3.1"/><path d="M16.6 7l-2.9 4"/><path d="M10.6 15.1l-3 2.3"/><path d="M13.9 14.7l2.7 2.4"/>',
    huella:     '<path d="M12 11a2 2 0 0 1 2 2c0 2.5-.4 5-1.2 7"/><path d="M8.5 20.5A14 14 0 0 0 10 13a2 2 0 0 1 4 0c0 1.2-.1 2.4-.3 3.5"/><path d="M5.5 17.5A17 17 0 0 0 6.5 13a5.5 5.5 0 0 1 9.4-3.9"/><path d="M18 15.5c.3-1.6.4-2.6.4-2.5A6.4 6.4 0 0 0 9 7.3"/><path d="M4 9.5A9 9 0 0 1 19.6 8"/>',
    sincro:     '<path d="M20.5 11a8.5 8.5 0 0 0-14.6-5.1L3 8.8"/><path d="M3 4.5v4.6h4.6"/><path d="M3.5 13a8.5 8.5 0 0 0 14.6 5.1L21 15.2"/><path d="M21 19.5v-4.6h-4.6"/>',
    enlace:     '<path d="M10 13a5 5 0 0 0 7.1 0l2.5-2.5a5 5 0 0 0-7.1-7.1L11 4.9"/><path d="M14 11a5 5 0 0 0-7.1 0l-2.5 2.5a5 5 0 0 0 7.1 7.1L13 19.1"/>',
    balanza:    '<path d="M12 3v18"/><path d="M7 21h10"/><path d="M5 7h14"/><path d="M5 7l-3 6a3 3 0 0 0 6 0z"/><path d="M19 7l3 6a3 3 0 0 1-6 0z"/>',
    movil:      '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18.5h2"/><path d="M9.5 6.5h5"/>',
  };

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
    laFuente:    { es: 'La certeza', en: 'The certainty' },
    certezaAca:  { es: 'La certeza está acá.', en: 'The certainty sits here.' },
    certezaAcaD: { es: 'Desde la causa —los registros de la fiscalía y el tribunal— se completan el evento, el sujeto y el resultado.', en: 'From the case —the records of the prosecutor’s office and the court— the event, the subject and the outcome are completed.' },
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
    // Frente y reverso de la tarjeta
    verExplicacion: { es: 'Ver explicación', en: 'See the explanation' },
    volverFrente:   { es: 'Volver', en: 'Back' },
    declarados:     { es: 'declarados por los equipos legales', en: 'reported by the legal teams' },
    queNosPasa:     { es: 'Qué nos pasa', en: 'What is happening to us' },
    laClave:        { es: 'La clave', en: 'The key' },
    queGanamos:     { es: 'Qué ganamos', en: 'What we gain' },
    comoAcerca:     { es: 'Cómo nos acerca a la estrategia', en: 'How it moves us toward the strategy' },
    verDetalle:     { es: 'Ver detalle', en: 'See detail' },
    ocultarDetalle: { es: 'Ocultar detalle', en: 'Hide detail' },
    verIcono:       { es: 'Pasa por encima para ver el ícono', en: 'Hover to see the icon' },

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

  return { CAJAS, ZONAS, MP, ICONOS, AGREGADOS, BENEFICIOS, BLOQUES, GANANCIAS, ALLIANCE, UI };
})();
