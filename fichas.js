// ============================================================
//  ALTO Roadmap — Fichas de los nueve macroproyectos
//  Una ficha por macroproyecto, misma estructura en las nueve:
//   1) El dolor · 2) Líneas de trabajo · 3) Transversalidad
//   4) Botones por país → brechas (ID + título) · 5) El encargo
//  La suma de brechas de los cuatro países = nº de entradas.
// ============================================================

(function () {
  'use strict';

  // ---- Metadatos de país (botones siempre los cuatro) ----
  const CO_ORDER = ['MX', 'CL', 'CO', 'USA'];
  const CO_META = {
    MX:  { name: 'México',   flag: 'assets/flags/mx.png' },
    CL:  { name: 'Chile',    flag: 'assets/flags/cl.png' },
    CO:  { name: 'Colombia', flag: 'assets/flags/co.png' },
    USA: { name: 'USA',      flag: 'assets/flags/us.png', us: true },
  };

  // ---- Etiquetas de brecha ----
  const TAG_CLASS = {
    'subsunción':   'sub',
    '2º dolor':     'dol2',
    'config. local':'cfg',
    'Transversal':  'tx',
    'en ticket':    'note',
    'reclasificada':'note',
  };

  // helper para construir líneas de trabajo (planas o agrupadas)
  const flat  = (items)        => [{ items }];
  const group = (g, items, c)  => ({ g, items, cond: !!c });

  // ---- Datos de los nueve macroproyectos ----
  const MP = [
    {
      n: 1, pct: '14,9%',
      title: 'Gobierno, calidad y estandarización del dato',
      dolor: 'Que la información operativa nazca y viva dentro de la plataforma, con campos, catálogos estandarizados y responsables de la calidad.',
      lineas: flat(['campos faltantes', 'calidad y responsabilidad del registro', 'catálogos y listas cerradas', 'registro estandarizado de productos', 'datos maestros de personas', 'subclasificación de incidentes', 'trazabilidad de acciones', 'campos obligatorios y validaciones con valor', 'gobierno de la actualización']),
      entradas: 18, paises: 'México, Chile, Colombia', nota: '',
      brechas: {
        MX: [
          { id: 'MX-005', t: 'campos faltantes para el registro' },
          { id: 'MX-015', t: 'tablero de control de eventos por Estado' },
          { id: 'MX-015', t: 'calidad y responsabilidad del registro', tag: '2º dolor' },
          { id: 'MX-001', t: 'campos detrás de reportes a clientes y autoridades' },
          { id: 'MX-042', t: 'campos y comprobantes de acuerdos reparatorios' },
          { id: 'MX-026', t: 'subclasificación de incidentes' },
          { id: 'MX-049', t: 'campos por cliente', tag: 'config. local' },
        ],
        CL: [
          { id: 'CL-020', t: 'datos maestros de personas' },
          { id: 'CL-022', t: 'estandarización de notas y catálogo de delitos' },
          { id: 'CL-019', t: 'controles de detención en planillas', tag: 'subsunción' },
          { id: 'CL-024', t: 'doble digitación con registros externos' },
          { id: 'CL-017', t: 'actualización masiva de marcas' },
          { id: 'CL-023', t: 'gobierno de la actualización de causas' },
        ],
        CO: [
          { id: 'CO-005', t: 'catálogos y listas cerradas' },
          { id: 'CO-014', t: 'registro estandarizado de productos' },
          { id: 'CO-012', t: 'trazabilidad de acciones' },
          { id: 'CO-013', t: 'campos obligatorios y validaciones con valor' },
          { id: 'CO-009', t: 'validaciones redundantes', tag: 'subsunción' },
        ],
        USA: [],
      },
    },
    {
      n: 2, pct: '15,7%',
      title: 'Reportería, dashboards y autoservicio',
      dolor: 'Que el cliente consulte solo el estado de sus asuntos y que la operación vea su negocio desde la plataforma, sin fabricar la visibilidad a mano.',
      lineas: [
        group('Cliente', ['consulta autónoma', 'entregables por plantilla', 'reportería configurable', 'visibilidad de la interfaz del cliente']),
        group('Interno', ['tablero de control', 'reportería ejecutiva', 'consolidación de fuentes', 'repositorio histórico', 'exportaciones con campos relevantes']),
      ],
      entradas: 19, paises: 'México, Chile, Colombia', nota: '1 transversal.',
      brechas: {
        MX: [
          { id: 'MX-008', t: 'consulta autónoma del estado', tag: 'Transversal' },
          { id: 'MX-001', t: 'reportes a clientes y autoridades a mano' },
          { id: 'MX-021', t: 'adopción del autoservicio' },
          { id: 'MX-022', t: 'reportes con contenido seleccionable' },
          { id: 'MX-025', t: 'consultas espontáneas desde Excel' },
          { id: 'MX-007', t: 'visibilidad de la interfaz del cliente' },
          { id: 'MX-011', t: 'información preventiva al cliente' },
          { id: 'MX-017', t: 'resumen automático tras la flagrancia' },
          { id: 'MX-009', t: 'canal de denuncias hacia ALTO' },
          { id: 'MX-015', t: 'tablero de control de la coordinación' },
          { id: 'MX-045', t: 'reportería ejecutiva' },
          { id: 'MX-050', t: 'reportes de acuerdos reparatorios' },
        ],
        CL: [
          { id: 'CL-013', t: 'comunicados, informes y presentaciones a clientes' },
          { id: 'CL-016', t: 'panel del cliente CGE' },
          { id: 'CL-011', t: 'consolidación de fuentes' },
          { id: 'CL-014', t: 'repositorio histórico consolidado' },
          { id: 'CL-015', t: 'exportación con campos relevantes' },
        ],
        CO: [
          { id: 'CO-010', t: 'boletines e informes por plantilla' },
          { id: 'CO-001', t: 'exportación con filtros personalizados' },
        ],
        USA: [],
      },
    },
    {
      n: 3, pct: '21,5%',
      title: 'Gestión operativa integral',
      dolor: 'El día a día de la operación dentro del sistema: asignar con información, administrar la agenda y controlar pendientes y resultados.',
      lineas: [
        group('Asignaciones', ['visibilidad del recurso', 'vista de eventos', 'consola de carga', 'aviso inmediato', 'desacople registro/asignación']),
        group('Agenda', ['citas en la plataforma', 'ciclo de la cita', 'vista continua de audiencias']),
        group('Control', ['seguimiento y alertas', 'alertas segmentadas', 'registro único del resultado', 'protocolos al asignar', 'revisiones programadas']),
      ],
      entradas: 26, paises: 'México, Chile, Colombia, USA', nota: 'La cartera más grande, con evidencia en los cuatro países.',
      brechas: {
        MX: [
          { id: 'MX-004', t: 'georreferencia del recurso' },
          { id: 'MX-035', t: 'vista de eventos para asignar', tag: 'subsunción' },
          { id: 'MX-046', t: 'asignación con papel y memoria' },
          { id: 'MX-031', t: 'sin consola de ocupación' },
          { id: 'MX-014', t: 'aviso tardío al abogado' },
          { id: 'MX-038', t: 'desacople registro/asignación' },
          { id: 'MX-016', t: 'la jornada en el teléfono' },
          { id: 'MX-002', t: 'citas por correo en Excel' },
          { id: 'MX-034', t: 'doble registro de citas' },
          { id: 'MX-030', t: 'cita pospuesta/cancelada/reagendada' },
          { id: 'MX-023', t: 'tareas de solicitudes de clientes', tag: 'subsunción' },
          { id: 'MX-017', t: 'registro único del resultado' },
          { id: 'MX-028', t: 'resultado de cada diligencia' },
          { id: 'MX-018', t: 'panel inicial de pendientes' },
          { id: 'MX-052', t: 'protocolos del cliente al asignar' },
          { id: 'MX-029', t: 'alertas calendarizadas del recupero', tag: 'config. local' },
        ],
        CL: [
          { id: 'CL-008', t: 'distribución manual de audiencias', tag: 'subsunción' },
          { id: 'CL-007', t: 'vista continua de audiencias' },
          { id: 'CL-009', t: 'reagendamiento, tareas y testigos' },
          { id: 'CL-010', t: 'alertas segmentadas' },
          { id: 'CL-025', t: 'alerta de eventos prioritarios incompletos' },
        ],
        CO: [
          { id: 'CO-007', t: 'errores de la asignación manual' },
          { id: 'CO-008', t: 'tareas y eventos sin seguimiento' },
        ],
        USA: [
          { id: 'USA-001', t: 'responsable y estado de cada evento', tag: 'Transversal' },
          { id: 'USA-002', t: 'seguimiento de eventos sin caso', tag: 'subsunción' },
          { id: 'USA-003', t: 'revisiones proactivas programadas' },
        ],
      },
    },
    {
      n: 4, pct: '11,6%',
      title: 'Gestión documental, evidencia, búsqueda y acceso',
      dolor: 'Que la documentación y la evidencia entren fácil, se vean sin descargarse y se encuentren desde un punto único de búsqueda.',
      lineas: [
        group('Repositorio y captura', ['repositorio centralizado', 'visualización sin descarga', 'recepción de documentación externa', 'carga sin restricciones', 'captura del evento']),
        group('Búsqueda', ['buscador universal', 'acceso directo a un registro', 'vista rápida con datos clave', 'buscar y crear imputados en un flujo']),
      ],
      entradas: 14, paises: 'México, Chile, Colombia', nota: '10 de 14 transversales — la cartera proporcionalmente más transversal.',
      brechas: {
        MX: [
          { id: 'MX-006', t: 'carga de fotografías tan simple como compartirlas', tag: 'Transversal' },
          { id: 'MX-037', t: 'guardado parcial temprano', tag: 'Transversal' },
          { id: 'MX-033', t: 'buscador de cuentas y tiendas', tag: 'Transversal' },
          { id: 'MX-019', t: 'levantamiento remoto del evento', tag: 'subsunción' },
          { id: 'MX-032', t: 'reordenamiento del flujo de creación', tag: 'en ticket' },
        ],
        CL: [
          { id: 'CL-002', t: 'repositorio centralizado', tag: 'Transversal' },
          { id: 'CL-001', t: 'visualización sin descarga', tag: 'Transversal' },
          { id: 'CL-003', t: 'recepción de documentación externa', tag: 'Transversal' },
          { id: 'CL-021', t: 'buscador universal', tag: 'Transversal' },
          { id: 'CL-006', t: 'búsqueda sin pasos previos', tag: 'Transversal' },
          { id: 'CL-012', t: 'acceso directo a un evento', tag: 'Transversal' },
          { id: 'CL-042', t: 'vista rápida con datos clave', tag: 'Transversal' },
          { id: 'CL-040', t: 'buscar y crear imputados en un flujo' },
        ],
        CO: [
          { id: 'CO-006', t: 'carga de evidencia sin restricciones' },
        ],
        USA: [],
      },
    },
    {
      n: 5, pct: '6,6%',
      title: 'Automatización documental jurídica e IA legal asistida',
      dolor: 'Que los escritos se generen desde plantillas autocompletadas con los datos que el sistema ya tiene, con IA bajo revisión profesional.',
      lineas: flat(['plantillas y portafolio de escritos por país', 'autocompletado desde el caso', 'lectura de expedientes ilegibles', 'IA de apoyo a análisis y redacción', 'documentos del sistema siempre actualizados']),
      entradas: 8, paises: 'México, Chile, Colombia', nota: '1 transversal. Precedente: querellas masivas, caso Telefónica Chile.',
      brechas: {
        MX: [
          { id: 'MX-013', t: 'carga documental repetitiva y expedientes ilegibles', tag: 'Transversal' },
          { id: 'MX-043', t: 'escritos con estructura homologada' },
          { id: 'MX-041', t: 'agente de estrategia jurídica' },
        ],
        CL: [
          { id: 'CL-004', t: 'plantillas de escritos autocompletadas' },
          { id: 'CL-005', t: 'autocompletado de datos del caso' },
          { id: 'CL-031', t: 'apoyo de IA para informes extensos' },
          { id: 'CL-018', t: 'documentos con datos desactualizados y SIAU' },
        ],
        CO: [
          { id: 'CO-010', t: 'informes y tasaciones por plantilla' },
        ],
        USA: [],
      },
    },
    {
      n: 6, pct: '9,1%',
      title: 'Inteligencia criminal y gestión integral del infractor',
      dolor: 'Que la red de datos de ALTO produzca inteligencia — que al ingresar un nombre o una foto, el sistema entregue causas, reincidencias y vínculos.',
      lineas: flat(['coincidencias automáticas al ingreso', 'identificación por fotografía e historial', 'alertas de reincidencia', 'detección y etiquetado de bandas', 'vista única del infractor y mapeo de relaciones', 'análisis de video/CCTV', 'fuentes externas de identificación']),
      entradas: 11, paises: 'México, Chile, Colombia, USA', nota: '3 transversales y 4 LATAM. El proyecto Offender (piloto USA) cubre la primera parte.',
      brechas: {
        MX: [
          { id: 'MX-003', t: 'la información no produce coincidencias' },
          { id: 'MX-006', t: 'identificación de reincidentes por fotografía', tag: 'Transversal' },
          { id: 'MX-039', t: 'alerta de reincidentes al cargar el nombre' },
          { id: 'MX-024', t: 'detección y etiquetado de bandas' },
          { id: 'MX-011', t: 'lecturas preventivas del sistema' },
        ],
        CL: [
          { id: 'CL-034', t: 'alertas y reportes por criterios de priorización' },
          { id: 'CL-036', t: 'análisis de video, imágenes y CCTV' },
          { id: 'CL-037', t: 'fuentes externas de identificación' },
          { id: 'CL-038', t: 'integración de insumos investigativos' },
        ],
        CO: [
          { id: 'CO-011', t: 'vista única y completa del infractor', tag: 'Transversal' },
        ],
        USA: [
          { id: 'USA-004', t: 'gestión integral de infractores y mapeo de relaciones', tag: 'Transversal' },
        ],
      },
    },
    {
      n: 7, pct: '4,1%',
      title: 'Integraciones externas e interoperabilidad institucional',
      dolor: 'Conectar la plataforma con las instituciones de justicia en ambas direcciones: consultar movimientos y presentar actuaciones por sus canales digitales.',
      lineas: flat(['conexión con el Poder Judicial', 'consulta automatizada de movimientos (SIAU, SPOA y equivalentes)', 'automatización de actualizaciones procesales', 'presentación digital de denuncias', 'marco de conectores bidireccional por institución y país']),
      entradas: 5, paises: 'México, Chile, Colombia', nota: 'La cartera más pequeña, con el mayor costo unitario (100 h-h semanales). Transversalidad por consolidar.',
      brechas: {
        MX: [
          { id: 'MX-020', t: 'presentación digital de denuncias ante fiscalías', tag: 'reclasificada' },
        ],
        CL: [
          { id: 'CL-030', t: 'conexión con el Poder Judicial' },
          { id: 'CL-041', t: 'consulta automatizada de movimientos SIAU' },
        ],
        CO: [
          { id: 'CO-015', t: 'integración con fuentes externas (SPOA)' },
          { id: 'CO-004', t: 'automatización de actualizaciones de información legal' },
        ],
        USA: [],
      },
    },
    {
      n: 8, pct: '11,6%',
      title: 'Proceso de gestión de causas y procedimiento penal configurable',
      dolor: 'Un proceso de gestión único y corporativo, sobre el cual el procedimiento penal de cada país se incorpora por configuración.',
      lineas: flat(['flujo legal flexible y no lineal', 'registro unificado de resultados, penas y condiciones', 'continuidad procesal e identificadores', 'salidas alternativas configurables por país', 'procesos con múltiples imputados', 'motor de plazos e hitos con umbrales por jurisdicción', 'clasificación automática de eventos']),
      entradas: 14, paises: 'México, Chile, Colombia', nota: 'USA con contraste por resolver. 3 de las 5 configuraciones locales del levantamiento están aquí.',
      brechas: {
        MX: [
          { id: 'MX-042', t: 'acuerdo reparatorio como salida del procedimiento' },
          { id: 'MX-044', t: 'semáforos sobre plazos de cada fase' },
          { id: 'MX-051', t: 'alertas de hitos y plazos' },
          { id: 'MX-027', t: 'lista de control de diligencias por carpeta', tag: 'config. local' },
          { id: 'MX-040', t: 'estrategia legal por niveles', tag: 'config. local' },
        ],
        CL: [
          { id: 'CL-032', t: 'registro unificado de resultados y penas' },
          { id: 'CL-033', t: 'edición de identificadores y continuidad procesal' },
          { id: 'CL-029', t: 'historial del caso y corrección de tareas' },
          { id: 'CL-027', t: 'causas de criminalidad interna con flujo propio' },
          { id: 'CL-008', t: 'audiencias comunes a varios imputados', tag: 'subsunción' },
          { id: 'CL-028', t: 'calificación jurídica por valor de la especie', tag: 'config. local' },
          { id: 'CL-035', t: 'clasificación automática de eventos al ingreso' },
        ],
        CO: [
          { id: 'CO-002', t: 'flujo legal flexible y no lineal', tag: 'Transversal' },
          { id: 'CO-003', t: 'procesos con múltiples infractores', tag: 'subsunción' },
        ],
        USA: [],
      },
    },
    {
      n: 9, pct: '5,0%',
      title: 'Condiciones habilitantes para la implementación',
      dolor: 'Las condiciones de base para que la plataforma rinda: acceso móvil, equipamiento, soporte oportuno, estándar profesional sistematizado y marcos de cumplimiento.',
      lineas: [
        group(null, ['acceso móvil directo a Beta', 'equipamiento móvil suficiente', 'infraestructura para CCTV', 'priorización del soporte TI por impacto en causas', 'nivelación del estándar de litigación', 'canal formal de reportes de delitos internos']),
        group('Condicionan al resto del roadmap', ['modelo de soporte de BI para LATAM', 'gobierno de uso de IA'], true),
      ],
      entradas: 6, paises: 'México, Chile, Colombia', nota: 'Sostiene al resto del roadmap.',
      brechas: {
        MX: [
          { id: 'MX-016', t: 'acceso móvil directo a Beta' },
          { id: 'MX-012', t: 'nivelación del estándar de litigación' },
          { id: 'MX-009', t: 'canal formal de reportes de delitos internos' },
        ],
        CL: [
          { id: 'CL-044', t: 'equipamiento móvil suficiente' },
          { id: 'CL-043', t: 'infraestructura para trabajo con CCTV', tag: 'subsunción' },
          { id: 'CL-045', t: 'priorización del soporte TI' },
        ],
        CO: [],
        USA: [],
      },
    },
  ];

  // ============================================================
  //  Render (bilingüe: usa window.MP_FICHAS_EN / FICHAS_T_EN en EN)
  // ============================================================
  const host = document.getElementById('mpFichas');
  if (!host) return;

  const el = (tag, cls, txt) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  };

  // ---- helpers de idioma ----
  const I = window.I18N;
  const isEN = () => I && I.lang === 'en';
  function U(k) { return I ? I.ui(k) : k; }
  function CN(code) { return I ? I.country(code) : (CO_META[code] || {}).name; }
  function TG(t) { return I ? I.tagLabel(t) : t; }
  function tEN(t) { return (isEN() && window.FICHAS_T_EN && window.FICHAS_T_EN[t]) ? window.FICHAS_T_EN[t] : t; }
  function mpData(mp) {
    const en = (isEN() && window.MP_FICHAS_EN && window.MP_FICHAS_EN[mp.n]) ? window.MP_FICHAS_EN[mp.n] : null;
    if (!en) return { title: mp.title, dolor: mp.dolor, paises: mp.paises, nota: mp.nota, lineas: mp.lineas };
    let lineas = en.lineas || mp.lineas;
    // arrastrar el flag `cond` (estilo "condiciona al resto") desde el ES por índice
    if (en.lineas) lineas = en.lineas.map((g, i) => ({ g: g.g, items: g.items, cond: (mp.lineas[i] && mp.lineas[i].cond) || g.cond }));
    return {
      title: en.title || mp.title,
      dolor: en.dolor || mp.dolor,
      paises: en.paises || mp.paises,
      nota: (en.nota != null ? en.nota : mp.nota),
      lineas: lineas,
    };
  }

  function buildLineas(lineas) {
    const wrap = el('div', 'fc-lineas-wrap');
    lineas.forEach((grp) => {
      const block = el('div', 'fc-line-group' + (grp.cond ? ' cond' : ''));
      if (grp.g) block.appendChild(el('span', 'fc-line-glabel', grp.g));
      const chips = el('div', 'fc-chips');
      grp.items.forEach((it) => chips.appendChild(el('span', 'fc-chip', it)));
      block.appendChild(chips);
      wrap.appendChild(block);
    });
    return wrap;
  }

  function buildCountryPanel(panel, mp, code) {
    const list = mp.brechas[code] || [];
    const meta = CO_META[code];
    const cname = CN(code);
    panel.textContent = '';

    const head = el('div', 'fc-cd-head');
    head.appendChild(el('span', 'fc-cd-flag' + (meta.us ? ' us' : ''), cname));
    head.appendChild(el('span', 'fc-cd-count',
      (list.length === 1 ? U('cd1') : U('cdN').replace('%n', list.length))));
    panel.appendChild(head);

    if (!list.length) {
      panel.appendChild(el('p', 'fc-empty', U('cdEmpty').replace('%c', cname)));
      return;
    }

    const ul = el('div', 'fc-brechas');
    list.forEach((b) => {
      const has = window.BRECHAS_DETAIL && window.BRECHAS_DETAIL[b.id];
      const row = el('div', 'fc-brecha' + (meta.us ? ' us' : '') + (has ? '' : ' nodet'));
      row.appendChild(el('span', 'fc-brecha-code', b.id));
      row.appendChild(el('span', 'fc-brecha-title', tEN(b.t)));
      if (b.tag) {
        row.appendChild(el('span', 'fc-tag ' + (TAG_CLASS[b.tag] || 'note'), TG(b.tag)));
      }
      if (has) {
        row.appendChild(el('span', 'fc-brecha-go', '→'));
        row.setAttribute('role', 'button');
        row.tabIndex = 0;
        row.title = U('verDetalle') + ' ' + b.id;
        const open = () => { if (window.openBrechaDetalle) window.openBrechaDetalle(b.id); };
        row.addEventListener('click', open);
        row.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
        });
      }
      ul.appendChild(row);
    });
    panel.appendChild(ul);
  }

  function buildFicha(mp) {
    const d = mpData(mp);
    const item = el('div', 'mp-item');
    item.dataset.mp = mp.n;

    // --- Row (cabecera del acordeón) ---
    const row = el('button', 'mp-row');
    row.type = 'button';
    row.setAttribute('aria-expanded', 'false');
    row.appendChild(el('span', 'mp-row-id', 'MP' + mp.n));
    row.appendChild(el('span', 'mp-row-title', d.title));
    row.appendChild(el('span', 'mp-row-pct', mp.pct));
    row.appendChild(el('span', 'mp-row-ic'));
    item.appendChild(row);

    const detail = el('div', 'mp-detail');
    const inner = el('div', 'mp-detail-inner');

    // 1) El dolor
    const b1 = el('div', 'fc-block fc-dolor');
    b1.appendChild(el('span', 'fc-step', '1'));
    b1.appendChild(el('h4', 'fc-h', U('elDolor')));
    b1.appendChild(el('p', 'fc-dolor-text', d.dolor));
    inner.appendChild(b1);

    // 2) Líneas de trabajo
    const b2 = el('div', 'fc-block fc-lineas');
    b2.appendChild(el('span', 'fc-step', '2'));
    b2.appendChild(el('h4', 'fc-h', U('lineas')));
    b2.appendChild(buildLineas(d.lineas));
    inner.appendChild(b2);

    // 3) Transversalidad
    const b3 = el('div', 'fc-block fc-trans');
    b3.appendChild(el('span', 'fc-step', '3'));
    b3.appendChild(el('h4', 'fc-h', U('transversalidad')));
    const metrics = el('div', 'fc-metrics');
    const m1 = el('div', 'fc-metric');
    m1.appendChild(el('span', 'fc-metric-v', String(mp.entradas)));
    m1.appendChild(el('span', 'fc-metric-k', U('entradas')));
    const m2 = el('div', 'fc-metric');
    m2.appendChild(el('span', 'fc-metric-v', mp.pct));
    m2.appendChild(el('span', 'fc-metric-k', U('delLevantamiento')));
    const m3 = el('div', 'fc-metric fc-metric-wide');
    m3.appendChild(el('span', 'fc-metric-v sm', d.paises));
    m3.appendChild(el('span', 'fc-metric-k', U('paisesEvidencia')));
    metrics.appendChild(m1); metrics.appendChild(m2); metrics.appendChild(m3);
    b3.appendChild(metrics);
    if (d.nota) b3.appendChild(el('p', 'fc-trans-note', d.nota));
    inner.appendChild(b3);

    // 4) Botones por país → brechas
    const b4 = el('div', 'fc-block fc-paises-block');
    b4.appendChild(el('span', 'fc-step', '4'));
    b4.appendChild(el('h4', 'fc-h', U('brechasPorPais')));
    b4.appendChild(el('p', 'fc-hint', U('hint')));

    const btns = el('div', 'fc-country-btns');
    const panel = el('div', 'fc-country-panel');
    panel.hidden = true;

    CO_ORDER.forEach((code) => {
      const meta = CO_META[code];
      const count = (mp.brechas[code] || []).length;
      const btn = el('button', 'fc-cbtn' + (meta.us ? ' us' : '') + (count ? '' : ' empty'));
      btn.type = 'button';
      btn.dataset.c = code;
      btn.setAttribute('aria-pressed', 'false');
      const img = document.createElement('img');
      img.className = 'fc-cbtn-flag';
      img.src = meta.flag; img.alt = ''; img.setAttribute('aria-hidden', 'true');
      btn.appendChild(img);
      btn.appendChild(el('span', 'fc-cbtn-name', CN(code)));
      btn.appendChild(el('span', 'fc-cbtn-n', String(count)));

      btn.addEventListener('click', () => {
        const wasActive = btn.classList.contains('active');
        btns.querySelectorAll('.fc-cbtn').forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        if (wasActive) {
          panel.hidden = true;
        } else {
          btn.classList.add('active');
          btn.setAttribute('aria-pressed', 'true');
          buildCountryPanel(panel, mp, code);
          panel.hidden = false;
        }
        // dejar crecer el acordeón abierto para acomodar el panel
        if (item.classList.contains('active')) detail.style.maxHeight = 'none';
      });
      btns.appendChild(btn);
    });
    b4.appendChild(btns);
    b4.appendChild(panel);
    inner.appendChild(b4);

    detail.appendChild(inner);
    item.appendChild(detail);
    return { item, row, detail };
  }

  // ============================================================
  //  Acordeón + render (re-render al cambiar de idioma)
  // ============================================================
  let built = [];
  let staggerSet = false;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function openItem(b) {
    b.item.classList.add('active');
    b.row.setAttribute('aria-expanded', 'true');
    b.detail.style.maxHeight = b.detail.scrollHeight + 'px';
    const done = (e) => {
      if (e.propertyName !== 'max-height') return;
      b.detail.removeEventListener('transitionend', done);
      if (b.item.classList.contains('active')) b.detail.style.maxHeight = 'none';
    };
    b.detail.addEventListener('transitionend', done);
  }
  function closeItem(b) {
    b.item.querySelectorAll('.fc-cbtn.active').forEach((c) => {
      c.classList.remove('active');
      c.setAttribute('aria-pressed', 'false');
    });
    const panel = b.item.querySelector('.fc-country-panel');
    if (panel) panel.hidden = true;
    b.item.classList.remove('active');
    b.row.setAttribute('aria-expanded', 'false');
    b.detail.style.maxHeight = b.detail.scrollHeight + 'px';
    requestAnimationFrame(() => requestAnimationFrame(() => { b.detail.style.maxHeight = '0px'; }));
  }

  function renderAll() {
    host.textContent = '';
    built = MP.map(buildFicha);
    built.forEach((b) => host.appendChild(b.item));

    built.forEach((b) => {
      b.row.addEventListener('click', () => {
        const willOpen = !b.item.classList.contains('active');
        built.forEach((o) => { if (o !== b && o.item.classList.contains('active')) closeItem(o); });
        if (willOpen) openItem(b); else closeItem(b);
      });
    });

    if (built[0]) {
      built[0].item.classList.add('active');
      built[0].row.setAttribute('aria-expanded', 'true');
      built[0].detail.style.maxHeight = 'none';
    }

    if (!prefersReduced) {
      host.classList.add('stagger');
      built.forEach((b, i) => b.item.style.setProperty('--d', i * 70 + 'ms'));
      if (!staggerSet) {
        new IntersectionObserver((entries, obs) => {
          entries.forEach((e) => { if (e.isIntersecting) { host.classList.add('revealed'); obs.disconnect(); } });
        }, { threshold: 0.08 }).observe(host);
        staggerSet = true;
      } else {
        host.classList.add('revealed');
      }
    }
  }

  renderAll();
  if (I) I.onChange(renderAll);
})();
