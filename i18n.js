// ============================================================
//  ALTO Roadmap — i18n (ES por defecto, toggle EN/ES persistente)
//  Estrategia: el HTML está en español; aquí guardamos SOLO el
//  override en inglés (keyeado por data-i18n). Al cambiar de idioma
//  se cachea el ES original del DOM y se aplica EN, o se restaura ES.
// ============================================================
window.I18N = (function () {
  'use strict';

  // ---- Overrides en inglés para el contenido estático (data-i18n) ----
  const EN = {
    'nav.proyecto': 'The Project',
    'nav.fases': 'Phases',
    'nav.datos': 'Data',
    'nav.macro': 'Macroprojects',
    'nav.estrategia': 'Strategic Reading',
    'nav.pasos': 'Next Steps',
    'btn.v2': 'Executive presentation',
    'btn.glosario': 'Glossary',
    'btn.taxonomia': 'Taxonomy',

    'hero.eyebrow': 'Phase 3: Agreement',
    'hero.title': 'Unified Development<br />Roadmap',
    'hero.legal': '<span class="accent">Legal Management</span> ALTO',
    'hero.sub': 'Consolidated Gaps and Macroprojects. From 117 gaps raised to nine macroprojects that steer a regional legal-tech roadmap.',
    'hero.flagsLabel': 'A regional operation',
    'flag.mx': 'Mexico', 'flag.co': 'Colombia', 'flag.cl': 'Chile', 'flag.us': 'United States', 'flag.es': 'Spain',
    'hero.tagDate': 'June 2026',
    'hero.tagConf': 'Internal Use & Confidential',
    'hero.presenterName': 'Project sponsor: Roberto Carrasco',
    'hero.presenterRole': 'CTO · ALTO',

    'marquee': '<span>Single platform</span><i>•</i><span>Common model</span><i>•</i><span>Operational intelligence</span><i>•</i><span>Governed data</span><i>•</i><span>Scalability</span><i>•</i><span>Traceability</span><i>•</i><span>Single platform</span><i>•</i><span>Common model</span><i>•</i><span>Operational intelligence</span><i>•</i><span>Governed data</span><i>•</i><span>Scalability</span><i>•</i><span>Traceability</span><i>•</i>',
    'ceo.date': 'Thursday, June 11, 2026',

    'ctx.h2': 'The strategic objective',
    'ctx.band': 'Enable a single legal-management platform for the countries where ALTO operates, avoiding country-specific versions and consolidating a common model that allows us to <strong>capture impact</strong>, <strong>activate cross-cutting opportunities</strong> and <strong>scale the best practices and operational intelligence</strong> developed by the teams.',
    'ctx.objBadge': 'To get there',
    'ctx.objH3': 'Four <span class="grad">strategic objectives</span>',
    'obj1.h3': 'Define common tools for legal work',
    'obj1.p': 'Define a shared set of capabilities, modules, workflows, recording criteria and work tools, preserving the local parameterization needed to incorporate each country’s legal, procedural and operational differences.',
    'obj2.h3': 'Turn local experience into common capability',
    'obj2.p': 'Capture the operational intelligence developed by each country’s legal teams, identifying good practices that increase the legal team’s capabilities and scale learnings group-wide.',
    'obj3.h3': 'Prioritize developments by impact and opportunity',
    'obj3.p': 'Order the roadmap initiatives by their real contribution to legal operations, their ability to solve relevant needs and their potential to generate cross-cutting value.',
    'obj4.h3': 'Strengthen traceability, control and scalability',
    'obj4.p': 'Move toward a more traceable, governed and scalable legal operation, enabling a coherent technological evolution that supports ALTO’s future scalability.',
    'card1.h3': 'ALTO and Alliance',
    'card1.p': 'ALTO protects assets. Its clients —mainly retail— outsource protection and report through <strong>Alliance</strong>, the platform with which ALTO delivers the service.',
    'card2.h3': 'Beta and Legacy',
    'card2.p': 'Alliance runs today on its <strong>Beta</strong> version; the previous one, <strong>Legacy</strong>, is being retired. All countries run on Beta, except Colombia, whose migration is in progress.',
    'card3.h3': 'The roadmap thesis',
    'card3.p': 'ALTO is not facing 117 isolated requests, but <strong>nine functional macroprojects</strong> that make it possible to steer a regional legal-tech roadmap.',

    'fases.kicker': 'The roadmap',
    'fases.h2': 'Four successive phases',
    'fases.lead': 'Phase 2 (Comparison) was closed with the consolidation of the 117 gaps. We are in <strong>Phase 3: Agreement</strong>, where the common minimums for unifying the platform are defined.',
    'st.completed': '✓ Completed', 'st.progress': '● In progress', 'st.notstarted': '○ Not started',
    'ph1.h3': 'Assessment', 'ph1.p': 'Current situation (AS-IS) by country. <strong>117 gaps documented.</strong>',
    'ph2.h3': 'Comparison', 'ph2.p': 'Cross-country comparative review and consolidation of the 117 gaps (Report 2.5). <strong>Closed.</strong>',
    'ph3.h3': 'Agreement', 'ph3.p': 'Definition of the common minimums for unifying the platform. <strong>We are here.</strong>',
    'ph4.h3': 'Strategic Planning', 'ph4.p': 'Corporate plan for the platform’s evolution over the coming months and years.',

    'cif.kicker': 'Quantitative scope',
    'cif.h2': '117 raised, 92 shared',
    'cif.lead': 'From the cross-country comparison, 92 of the 117 gaps showed shared evidence and advanced to Report 2.5. That filtering changes the composition of the assessment.',
    'stat1': 'Gaps raised (Phase 1)', 'stat2': 'Advanced to Report 2.5', 'stat3': 'Left out (local & one-off)', 'stat4': 'Common to two or more countries',
    'cif.compLabel': 'Composition of the assessment (117 gaps)',
    'cif.countryBars': '<div class="cbar"><span class="cbar-name">Mexico</span><div class="cbar-track"><div class="cbar-fill" style="width:100%">53</div></div></div><div class="cbar"><span class="cbar-name">Chile</span><div class="cbar-track"><div class="cbar-fill" style="width:85%">45</div></div></div><div class="cbar"><span class="cbar-name">Colombia</span><div class="cbar-track"><div class="cbar-fill" style="width:28%">15</div></div></div><div class="cbar"><span class="cbar-name">USA</span><div class="cbar-track"><div class="cbar-fill" style="width:8%">4</div></div></div>',
    'cif.transLabel': 'Cross-cutting level',
    'tc1.h4': 'Cross-cutting', 'tc1.count': '17 gaps', 'tc1.p': 'Need common to all four countries (Mexico, Chile, Colombia and USA).',
    'tc2.h4': 'LATAM', 'tc2.count': '49 gaps', 'tc2.p': 'Common to Mexico, Chile and Colombia (includes those flagged for review).',
    'tc3.h4': 'Multi-country', 'tc3.count': '26 gaps', 'tc3.p': 'Confirmed in two countries; a third likely based on external evidence.',
    'cif.transNote': 'Together, these three levels represent <strong>79% of the gaps common to two or more countries</strong>. The “review” flag does not cast doubt on the countries already confirmed; it only leaves open whether an additional country ratifies the gap and raises its cross-cutting level (from two to three, or from three to four countries).',
    'cif.solLabel': 'Type of solution — before and after the cut',
    'cif.solTables': '<div class="sol-table"><span class="sol-th">Across the 117 raised</span><table><thead><tr><th>Type</th><th>Count</th><th>%</th></tr></thead><tbody><tr><td>New development</td><td>73</td><td>62.4%</td></tr><tr><td>Configuration</td><td>19</td><td>16.2%</td></tr><tr><td>Modify functionality</td><td>19</td><td>16.2%</td></tr><tr><td>Other</td><td>6</td><td>5.1%</td></tr></tbody></table></div><div class="sol-table"><span class="sol-th">Across the 92 shared</span><table><thead><tr><th>Type</th><th>Count</th><th>%</th></tr></thead><tbody><tr><td>New development</td><td>62</td><td>67.4%</td></tr><tr><td>Configuration</td><td>13</td><td>14.1%</td></tr><tr><td>Modify functionality</td><td>12</td><td>13.0%</td></tr><tr><td>Other</td><td>5</td><td>5.4%</td></tr></tbody></table></div>',
    'cif.solNote': 'These percentages are a snapshot, not a closing. If a country claims a gap currently outside the cut, the universe adjusts — as has happened in every phase.',

    'fuera.kicker': 'Literal gap vs. operational pain',
    'fuera.h2': 'The 25 that didn’t advance as their own line',
    'fuera.lead': 'They are not discarded. Consolidation does not work on each country’s literal request, but on the <strong>operational pain</strong> that request reveals. These gaps did not advance to the cut as a specific or local request, but their pain is taken up —<strong>by subsumption</strong>— within one of the nine macroprojects. Open each gap to see which macroproject its pain is subsumed into.',
    'fuera.tabMX': 'Mexico <span>16</span>', 'fuera.tabCL': 'Chile <span>6</span>', 'fuera.tabCO': 'Colombia <span>2</span>', 'fuera.tabUSA': 'USA <span>1</span>',

    'thesis.text': 'The assessment delivered a <span class="t-soft">list</span>; consolidation delivers a <span class="t-strong">structure</span>. Beneath the 117 gaps there are <span class="t-strong">9 common pains</span>, and within each one, its own workstreams.',
    'thesis.tag': 'The logic of the nine macroprojects',

    'macro.kicker': 'The nine macroprojects',
    'macro.h2': 'From gaps to portfolios',
    'macro.lead': 'One card per macroproject, with the same structure across the nine: the pain, the workstreams, the cross-cutting reach and the gaps that make it up, country by country.',
    'enc.kicker': 'The ask',
    'enc.h3': 'What’s expected of you today',
    'enc.sub': 'Three concrete things, for each macroproject.',
    'enc1.h4': 'Confirm the cross-cutting reach',
    'enc1.p': 'For each macroproject, tell us whether that pain is also yours or not. A need being common to several countries is what makes it a candidate for a common minimum; being local is also a valid and necessary answer.',
    'enc2.h4': 'Observe how you’d solve it',
    'enc2.p': 'Not the technical detail, but your operation’s view: what cannot be missing, which constraint of your own must be respected, what experience you already have that serves the rest.',
    'enc3.h4': 'Provide input to prioritize',
    'enc3.p': 'Which macroprojects are urgent for your country and which can wait — the basis for the prioritization conversation coming in the next sub-stages of Phase 3.',
    'mpleg.title': 'How to read the gap labels',
    'mpleg.sub': '<span class="fc-tag sub">subsumption</span> local gap incorporated for its function',
    'mpleg.dol2': '<span class="fc-tag dol2">2nd pain</span> the same gap counted as a second entry',
    'mpleg.cfg': '<span class="fc-tag cfg">local config</span> per-country parameterization',
    'mpleg.tx': '<span class="fc-tag tx">Cross-cutting</span> gap common to all four countries',

    'seq.kicker': 'The sequence that orders the roadmap',
    'seq.h2': 'The nine macroprojects have an order',
    'seq.lead': 'They are not tackled in just any sequence. Beneath them all there is a three-layer pattern that sets where to start and why.',
    'lay1.h3': 'Missing fields <span class="layer-mp">MP1</span>', 'lay1.p': 'The platform lacks fields and structures to record the information the operation needs.',
    'lay2.h3': 'Data lives outside <span class="layer-mp">MP1</span>', 'lay2.p': 'As a result, data is born and lives outside the platform —spreadsheets, drives, messaging— with manual handoffs and no owner of its quality.',
    'lay3.h3': 'No exploitation capacity <span class="layer-mp">MP2</span>', 'lay3.p': 'Even if the data existed, there is not enough BI capacity to build the reporting the countries require, even though the tools (Discovery, Viewer, Insights) already exist.',
    'order.flow': '<span>Operational flow</span><i>→</i><span>Fields</span><i>→</i><span>Quality data</span><i>→</i><span>Reporting</span>',
    'order.quote': 'First the operational flow is ordered (MP3), because adding fields onto a deficient process would be digitizing the inefficiency; then the fields that flow requires (MP1); with the fields in use, data is born with quality; and only then does reporting deliver (MP2). <strong>The dashboard comes from the data, not the other way around.</strong>',
    'seq.closer': 'That is why the diagnosis does not belong to a single macroproject: it is the thread connecting MP1, MP2 and MP3 and it sets the roadmap’s investment sequence.',

    'est.kicker': 'Strategic readings',
    'est.h2': 'Four conclusions for the common-minimums discussion',
    'est.lead': 'Beyond the portfolios, the exercise reveals overarching readings as input for the agreement.',
    'str1.h3': 'A common model based on shared learning',
    'str1.p': 'The operations have more in common than it seemed: they face similar problems and needs, but solve them in isolation. The opportunity is to turn scattered experience into shared knowledge and replicable best practices.',
    'str2.h3': 'A measurable legal operation',
    'str2.p': 'The challenge is not only to record better, but to build a measurable operation: times, load per stage, compliance, results and deviations — to distinguish what creates value from what persists out of inertia and to eliminate waste.',
    'str3.h3': 'From passive record to active tool',
    'str3.p': 'The platform must guide, warn and accompany: identify critical milestones, deadlines and protocol deviations. A tool that only records knows ex post; one that guides and validates prevents errors and reduces risk.',
    'str4.h3': 'Criminal management aligned to purpose',
    'str4.p': 'Link the technical management of the case to indicators of outcome, impact and deterrence. The goal is not only to handle cases well, but to ensure the legal effort contributes measurably to more efficient processes and to prevention.',

    'cierre.kicker': 'Next steps',
    'cierre.h2': 'What comes after today',
    'cierre.lead': 'This meeting is activity 3.1, which opens Phase 3. What we gather today feeds the drafting of the agreement, its validation and the start of planning.',
    'tl.f3tag': 'Phase 3', 'tl.f3name': '· Agreement', 'tl.f4tag': 'Phase 4', 'tl.f4name': '· Planning',
    'tl.here': 'We are here',
    'tl31.h3': 'Agreement working session', 'tl31.date': 'Jun 19–Jul 03', 'tl31.owner': 'All',
    'tl31.prod': 'Present the nine macroprojects and gather from each country the confirmation of cross-cutting reach, the observations on how to solve, and the prioritization input.',
    'tl32.h3': 'Drafting the agreement', 'tl32.date': 'Jun 30–Jul 21', 'tl32.owner': 'Legal-Tech / IT',
    'tl32.prod': 'Integrate what was gathered and draft the Common Minimums Document: what is standardized as a corporate minimum and what is kept as local configuration, with its prioritization.',
    'tl33.h3': 'Final agreement review', 'tl33.date': 'Jul 22–Aug 13', 'tl33.owner': 'IT Committee',
    'tl33.prod': 'Formal review and validation of the agreement by the Committee (CEO · CFO · CTO · Country Managers). Its closing enables Phase 4.',
    'tl4.h3': 'Start of Planning', 'tl4.date': 'from Aug 14', 'tl4.owner': 'IT Sponsor',
    'tl4.prod': 'On the agreed common minimums, build the technical roadmap and the final implementation schedule.',
    'tl.closer': 'The roadmap’s end date will be defined in Phases 3 and 4. <strong>The Common Minimums Agreement is the formal basis of all corporate planning for the unified platform.</strong>',

    'footer.brand': 'Unified Development Roadmap — Legal Management. Agreement working session 3.1: Consolidated Gaps and Macroprojects.',
    'footer.phase': 'Phase 3: Agreement', 'footer.date': 'June 2026', 'footer.conf': 'Internal Use & Confidential',

    'gl.code': 'Glossary', 'gl.country': 'To read the cards', 'gl.title': 'Operational glossary',
    'gl.list': '<div class="gl"><dt>Event</dt><dd>Section of Alliance where client reports come in; the first link in the service.</dd></div><div class="gl"><dt>Legal case</dt><dd>Created from the event when a lawyer is assigned; the assignment is the trigger that creates it.</dd></div><div class="gl"><dt>Beta / Legacy</dt><dd>Current version and previous version of Alliance; Colombia still runs on Legacy.</dd></div><div class="gl"><dt>Discovery</dt><dd>Alliance’s dashboards and reports layer.</dd></div><div class="gl"><dt>Viewer</dt><dd>Alliance’s expert search tool, oriented to investigating over data sets.</dd></div><div class="gl"><dt>Insights</dt><dd>Configurable alerts: they are requested, BI configures them, and they become automatic.</dd></div><div class="gl"><dt>Datalake</dt><dd>Corporate data repository from which views and data extracts are generated.</dd></div><div class="gl"><dt>Sábana (data extract)</dt><dd>Bulk data export in a spreadsheet, used as a source for reports and control.</dd></div><div class="gl"><dt>Guardia Legal (Legal Guard)</dt><dd>Mexico’s lawyer team that handles events by phone and performs their initial recording.</dd></div><div class="gl"><dt>Offender project</dt><dd>Offender-profile management module under development, with USA as pilot (Stage 1).</dd></div>',

    'tax.code': 'Taxonomy', 'tax.country': 'How each gap is classified', 'tax.title': 'Taxonomy: cross-cutting level of each gap',
    'tax.list': '<div class="gl"><dt><span class="tax-chip l1">Local</span></dt><dd>Raised or validated by a single country, with no concrete evidence of application in others.<br><em class="tax-uso">A need of its own country.</em></dd></div><div class="gl"><dt><span class="tax-chip l2">Local / Review</span></dt><dd>Raised by a single country, but with a concrete signal that it could apply to another.<br><em class="tax-uso">Born local; could become multi-country.</em></dd></div><div class="gl"><dt><span class="tax-chip l3">Multi-country</span></dt><dd>Raised or validated by 2 countries, without enough evidence to raise it to LATAM or Cross-cutting.<br><em class="tax-uso">There is partial convergence.</em></dd></div><div class="gl"><dt><span class="tax-chip l4">Multi-country / Review</span></dt><dd>Raised by 2 countries, with a concrete signal it could escalate to LATAM or Cross-cutting.<br><em class="tax-uso">Review if a third country joins.</em></dd></div><div class="gl"><dt><span class="tax-chip l5">LATAM</span></dt><dd>Raised or validated by Mexico + Colombia + Chile.<br><em class="tax-uso">Consolidated LATAM regional need.</em></dd></div><div class="gl"><dt><span class="tax-chip l6">LATAM / Review</span></dt><dd>Validated by MX + CO + CL, with a concrete signal it could also apply to USA or the group.<br><em class="tax-uso">Pending review of whether it scales to the group.</em></dd></div><div class="gl"><dt><span class="tax-chip l7">Cross-cutting</span></dt><dd>Applies to all 4 countries or corresponds to a structural product/group capability.<br><em class="tax-uso">Corporate or architecture capability.</em></dd></div>',
    'tax.note': 'This taxonomy makes it possible to measure cross-cutting reach objectively and to distinguish common minimums from local configurations.',
  };

  // ---- Meta + aria ----
  const META = {
    title: { es: 'Roadmap Único de Desarrollo · Gestión Legal ALTO', en: 'Unified Development Roadmap · ALTO Legal Management' },
    desc: { es: 'Roadmap Único de Desarrollo, Gestión Legal ALTO — Fase 3: Acuerdo. Brechas Consolidadas y Macroproyectos (Informe 2.5).', en: 'Unified Development Roadmap, ALTO Legal Management — Phase 3: Agreement. Consolidated Gaps and Macroprojects (Report 2.5).' },
  };

  // ---- Mapas para el contenido dinámico (fichas.js / script.js) ----
  const COUNTRY = { MX: { es: 'México', en: 'Mexico' }, CL: { es: 'Chile', en: 'Chile' }, CO: { es: 'Colombia', en: 'Colombia' }, USA: { es: 'USA', en: 'USA' } };
  const MP_NAME = {
    1: { es: 'Gobierno y calidad del dato', en: 'Data governance & quality' },
    2: { es: 'Reportería y autoservicio', en: 'Reporting & self-service' },
    3: { es: 'Gestión operativa integral', en: 'Integral operations management' },
    4: { es: 'Documental, evidencia y búsqueda', en: 'Documents, evidence & search' },
    5: { es: 'Automatización e IA legal', en: 'Legal automation & AI' },
    6: { es: 'Inteligencia criminal y del infractor', en: 'Criminal & offender intelligence' },
    7: { es: 'Integraciones institucionales', en: 'Institutional integrations' },
    8: { es: 'Procedimiento penal configurable', en: 'Configurable criminal procedure' },
    9: { es: 'Condiciones habilitantes', en: 'Enabling conditions' },
  };
  const NIV = {
    'Local': 'Local', 'Local / Revisar': 'Local / Review',
    'Multipaís': 'Multi-country', 'Multipaís / Revisar': 'Multi-country / Review',
    'LATAM': 'LATAM', 'LATAM / Revisar': 'LATAM / Review', 'Transversal': 'Cross-cutting',
  };
  const TIPO = {
    'Nuevo Desarrollo': 'New development', 'Configuración': 'Configuration',
    'Modificar Funcionalidad': 'Modify functionality', 'Otros': 'Other', 'N/A': 'N/A',
  };
  const TAG = {
    'subsunción': 'subsumption', '2º dolor': '2nd pain', 'config. local': 'local config',
    'Transversal': 'Cross-cutting', 'en ticket': 'in ticket', 'reclasificada': 'reclassified',
  };
  const UI = {
    elDolor: { es: 'El dolor', en: 'The pain' },
    lineas: { es: 'Líneas de trabajo', en: 'Workstreams' },
    transversalidad: { es: 'Transversalidad', en: 'Cross-cutting reach' },
    entradas: { es: 'entradas', en: 'entries' },
    delLevantamiento: { es: 'del levantamiento', en: 'of the assessment' },
    paisesEvidencia: { es: 'países con evidencia', en: 'countries with evidence' },
    brechasPorPais: { es: 'Brechas canalizadas, por país', en: 'Gaps channeled, by country' },
    hint: { es: 'Pulsa un país para desplegar todas sus brechas en este macroproyecto, con su ID y título.', en: 'Tap a country to expand all its gaps in this macroproject, with their ID and title.' },
    cd1: { es: '1 brecha canalizada a este macroproyecto', en: '1 gap channeled to this macroproject' },
    cdN: { es: '%n brechas canalizadas a este macroproyecto', en: '%n gaps channeled to this macroproject' },
    cdEmpty: { es: 'Sin brechas canalizadas a este macroproyecto desde %c.', en: 'No gaps channeled to this macroproject from %c.' },
    verDetalle: { es: 'Ver detalle de', en: 'View detail of' },
    comentariosOtros: { es: 'Comentarios de los otros países (enfrentamiento)', en: 'Comments from the other countries (comparison)' },
    gapTitle: { es: 'GAP · qué ganamos al resolverlo', en: 'GAP · what we gain by solving it' },
    sugTitle: { es: 'Sugerencia de TI', en: 'IT suggestion' },
    descActual: { es: 'Descripción actual', en: 'Current description' },
    descFutura: { es: 'Descripción futura', en: 'Future description' },
    funcNueva: { es: 'Funcionalidad nueva — no existe hoy.', en: 'New functionality — does not exist today.' },
    sinDescripcion: { es: 'Sin descripción.', en: 'No description.' },
    sinGap: { es: 'Sin GAP declarado.', en: 'No GAP stated.' },
    sinSug: { es: 'Sin sugerencia específica de TI.', en: 'No specific IT suggestion.' },
    noObs: { es: 'No hacen observaciones.', en: 'No comments.' },
    subLabel: { es: 'Su dolor se subsume en', en: 'Its pain is subsumed into' },
    subNote: { es: 'No pasó al corte como solicitud literal, pero el dolor operativo que evidencia se retoma en este macroproyecto del Anexo Técnico (no es una migración de la redacción original, sino del macrodolor identificado).', en: 'It did not advance as a literal request, but the operational pain it reveals is taken up in this macroproject of the Technical Annex (it is not a migration of the original wording, but of the identified macro-pain).' },
    sinMP: { es: 'Sin macroproyecto de destino', en: 'No destination macroproject' },
    excl: { es: 'Excluida o resuelta', en: 'Excluded or resolved' },
    exclNote: { es: 'Su dolor no se subsume en ninguna cartera: corresponde a gestión organizacional, ya está resuelta (ticket/migración a Beta) o es una mejora local en evaluación, según el Anexo Técnico.', en: 'Its pain is not subsumed into any portfolio: it concerns organizational management, is already resolved (ticket/migration to Beta), or is a local improvement under evaluation, per the Technical Annex.' },
    fueraCount1: { es: '1 brecha que da cuenta de esta necesidad', en: '1 gap that reflects this need' },
    fueraCountN: { es: '%n brechas que dan cuenta de esta necesidad', en: '%n gaps that reflect this need' },
  };

  const CEO = {
    es: 'La plataforma legal no puede ser solo un registro. Tiene que ser una plataforma de gestión legal: ahí está nuestro core, de ahí nace el dato y eso es lo que hace único a ALTO.',
    en: 'The legal platform cannot be just a record. It has to be a legal management platform: that is where our core is, that is where the data is born, and that is what makes ALTO unique.',
  };

  // ============================================================
  let lang = (function () { try { return localStorage.getItem('alto_lang') || 'es'; } catch (e) { return 'es'; } })();
  const callbacks = [];

  function pick(o) { return o ? (o[lang] != null ? o[lang] : o.es) : ''; }
  function ui(k) { const o = UI[k]; return o ? pick(o) : k; }
  function country(c) { return COUNTRY[c] ? pick(COUNTRY[c]) : c; }
  function mpName(n) { return MP_NAME[n] ? pick(MP_NAME[n]) : ''; }
  function niv(v) { return lang === 'en' ? (NIV[v] || v) : v; }
  function tipo(v) { return lang === 'en' ? (TIPO[v] || v) : v; }
  function tagLabel(v) { return lang === 'en' ? (TAG[v] || v) : v; }
  function ceo() { return CEO[lang] || CEO.es; }

  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = META.title[lang] || META.title.es;
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', META.desc[lang] || META.desc.es);
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (el.__es === undefined) el.__es = el.innerHTML;
      el.innerHTML = (lang === 'en' && EN[key] != null) ? EN[key] : el.__es;
    });
    // toggle UI
    document.querySelectorAll('#langToggle [data-l]').forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-l') === lang);
      b.setAttribute('aria-pressed', b.getAttribute('data-l') === lang ? 'true' : 'false');
    });
  }

  function set(next) {
    if (next === lang) return;
    lang = next;
    try { localStorage.setItem('alto_lang', lang); } catch (e) {}
    applyStatic();
    callbacks.forEach((cb) => { try { cb(lang); } catch (e) {} });
  }

  function onChange(cb) { callbacks.push(cb); }

  function init() {
    applyStatic();
    const tg = document.getElementById('langToggle');
    if (tg) tg.querySelectorAll('[data-l]').forEach((b) => {
      b.addEventListener('click', () => set(b.getAttribute('data-l')));
    });
  }

  return {
    get lang() { return lang; },
    pick, ui, country, mpName, niv, tipo, tagLabel, ceo, onChange, set, init,
  };
})();
