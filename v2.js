// ============================================================
//  Roadmap ALTO — Presentación ejecutiva (versión 2)
//  Todo el contenido viene de datos_v2.js; aquí solo se arma el DOM
//  y se manejan las interacciones.
// ============================================================
(function () {
  'use strict';

  const D = window.V2;
  if (!D) return;

  // ============================================================
  //  Idioma
  //  El HTML está en español. Aquí guardamos solo el override en
  //  inglés de los textos estáticos (data-i18n); lo dinámico se
  //  vuelve a renderizar al cambiar de idioma.
  // ============================================================
  const EN = {
    'hero.eyebrow': 'Executive presentation',
    'hero.title': 'Unified Development<br />Roadmap',
    'hero.legal': '<span class="accent">Legal Management</span> ALTO',
    'hero.sub': 'Where the information comes from, what has to be built to have it, and what each operation gains once it does.',
    'hero.flagsLabel': 'A regional operation',
    'flag.mx': 'Mexico', 'flag.co': 'Colombia', 'flag.cl': 'Chile', 'flag.us': 'United States', 'flag.es': 'Spain',
    'hero.tagDate': 'September 2026',
    'hero.tagConf': 'Internal Use & Confidential',
    'hero.presenterName': 'Project sponsor: Roberto Carrasco',
    'hero.presenterRole': 'CTO · ALTO',

    'marquee': '<span>Single platform</span><i>•</i><span>Common model</span><i>•</i><span>Operational intelligence</span><i>•</i><span>Governed data</span><i>•</i><span>Scalability</span><i>•</i><span>Traceability</span><i>•</i><span>Single platform</span><i>•</i><span>Common model</span><i>•</i><span>Operational intelligence</span><i>•</i><span>Governed data</span><i>•</i><span>Scalability</span><i>•</i><span>Traceability</span><i>•</i>',
    'ceo.role': 'Jorge Nazer · President, ALTO',
    'ceo.date': 'Thursday, June 11, 2026',

    'flujo.kicker': 'ALTO’s strategy, in six boxes',
    'flujo.h2': 'From information to decision',
    'flujo.lead': 'Today the certainty sits in <strong>the case</strong>. From there the event, the subject and the outcome are completed — and only with those four boxes filled do the pattern and the recommendation appear.',
    'obj.label': 'The objective',
    'obj.text': '“To be our clients’ trusted, strategic partner, helping them prevent and prosecute — with intelligence and analysis — the crimes that matter most to them, so that together we build safer communities.”',
    'obj.note': 'The full chain is the operational answer to “with intelligence and analysis”.',

    'macro.kicker': 'From 117 gaps to a structure',
    'macro.h2': 'The nine macroprojects',
    'macro.lead': 'The 117 gaps raised in Mexico, Chile, Colombia and the United States are not 117 separate requests: they are nine shared pains. Move through them one at a time: with the arrows, the numbered rail or the ← → keys.',

    'agr.kicker': 'What is missing for a single legal management system',
    'agr.h2': 'The projects to be added',
    'agr.lead': 'None of the twelve repeats a workstream from the nine macroprojects: they give them depth. Five are backed by gaps raised in the field; the other seven are the missing complement.',
    'agr.nota': 'Criteria that cut across them: two usage experiences, litigator and portfolio coordinator · universal core with a local package per country.',

    'pide.kicker': 'What the 117 gaps expect to solve',
    'pide.h2': 'What the assessment asks for',
    'pide.titular': 'of the gaps ask for the same thing: <strong>stop doing it by hand</strong>. Time and manual work is the benefit that repeats most across the three blocks of the roadmap. This is not a legal request: it is capacity.',
    'pide.pie': 'Base: the 110 gaps with an assigned macroproject. The percentages <strong>do not add up to 100</strong> because one gap can state more than one benefit; eight gaps count in two blocks. What is measured is <strong>how many gaps mention each benefit</strong>, not how much is saved.',

    'gana.kicker': 'What is gained, what has to be done, what the result is',
    'gana.h2': 'What each operation gains',
    'gana.lead': 'The gains are not invented: they come from what the teams stated in the assessment. The metrics in the footer are a <strong>proposal, not a commitment</strong>: none is measured today.',

    'footer.brand': 'Unified Development Roadmap — Legal Management. Executive presentation for the committee.',
    'footer.link': 'Full roadmap version',
    'footer.date': 'September 2026',
    'footer.conf': 'Internal Use & Confidential',

    // --- alliance.html ---
    'al.kicker': 'Built from the bottom up',
    'al.h2': 'Alliance<br /><span class="al-h2-sub">Legal Operations Hub</span>',
    'al.lead': 'The base comes first: event, subject, case and outcome. With those four boxes resolved the pattern becomes reachable, and from the pattern the recommendation. The cross-cutting macroprojects hold up the whole building.',
    'al.footerLink': 'Back to the presentation',
  };

  const CEO_TEXT = {
    es: 'La plataforma legal no puede ser solo un registro. Tiene que ser una plataforma de gestión legal: ahí está nuestro core, de ahí nace el dato y eso es lo que hace único a ALTO.',
    en: 'The legal platform cannot be just a record. It has to be a legal management platform: that is where our core is, that is where the data is born, and that is what makes ALTO unique.',
  };
  // Dos páginas comparten este script; el título depende de cuál se cargó.
  const ES_ALLIANCE = !!document.getElementById('allianceMap');
  const META = ES_ALLIANCE
    ? { es: 'Alliance · Central de Operaciones Legales', en: 'Alliance · Legal Operations Hub' }
    : { es: 'Presentación ejecutiva · Roadmap Gestión Legal ALTO', en: 'Executive presentation · ALTO Legal Management Roadmap' };

  let lang = (function () { try { return localStorage.getItem('alto_lang') || 'es'; } catch (e) { return 'es'; } })();
  const t = (o) => (o ? (o[lang] != null ? o[lang] : o.es) : '');
  const U = (k) => t(D.UI[k]);

  // ============================================================
  //  Utilidades de DOM
  // ============================================================
  const el = (tag, cls, txt) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  };
  const $ = (s) => document.querySelector(s);

  // ============================================================
  //  1 · El flujo (lámina 4)
  // ============================================================
  const flowHost = $('#flowNav');
  let activeZ = null;

  function irAMP(n) {
    if (!slides.length) return;
    const idx = D.MP.findIndex((m) => m.n === n);
    if (idx < 0) return;
    verSlide(idx);
    const host = $('#mpSlider');
    const top = host.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top: Math.max(0, top), behavior: reduced ? 'auto' : 'smooth' });
  }

  function pintarZona() {
    if (!flowHost) return;
    flowHost.querySelectorAll('[data-z]').forEach((n) => {
      const on = activeZ != null && n.dataset.z === activeZ;
      n.classList.toggle('active', on);
      n.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    const panel = flowHost.querySelector('.fn-panel');
    panel.textContent = '';
    if (activeZ == null) {
      panel.appendChild(el('p', 'fn-hint', U('fnHint')));
    } else {
      const z = D.ZONAS[activeZ];
      // El detalle va dentro de una tarjeta abisagrada que gira al abrirse.
      const persp = el('div', 'fn-persp');
      const card = el('div', 'fn-card');

      const head = el('div', 'fn-panel-head');
      head.appendChild(el('span', 'fn-panel-arco', t(z.arco)));
      head.appendChild(el('h3', 'fn-panel-t', t(z.t)));
      const reset = el('button', 'fn-reset', U('verNueve'));
      reset.type = 'button';
      reset.addEventListener('click', () => selZona(null));
      head.appendChild(reset);
      card.appendChild(head);

      const body = el('div', 'fn-card-body');
      const grid = el('div', 'fn-mps');
      z.mps.forEach((n, i) => {
        const mp = D.MP.find((m) => m.n === n);
        const chip = el('button', 'fn-mp');
        chip.type = 'button';
        chip.style.setProperty('--d', (140 + i * 70) + 'ms');
        chip.appendChild(el('span', 'fn-mp-id', 'MP' + n));
        chip.appendChild(el('span', 'fn-mp-name', t(mp.corto)));
        chip.appendChild(el('span', 'fn-mp-rol', t(mp.rol)));
        chip.addEventListener('click', () => irAMP(n));
        grid.appendChild(chip);
      });
      body.appendChild(grid);
      body.appendChild(el('p', 'fn-panel-note', t(z.nota)));
      card.appendChild(body);

      persp.appendChild(card);
      panel.appendChild(persp);

      // Arranca cerrada y se abre en el siguiente frame, para que la
      // transición corra también cuando se pasa de una zona a otra.
      void card.offsetWidth;
      card.classList.add('abierto');
    }

    // atenuar en el riel los macroproyectos que no pertenecen a la zona elegida
    const sel = activeZ == null ? null : D.ZONAS[activeZ].mps;
    document.querySelectorAll('.mps-dot').forEach((c) => {
      c.classList.toggle('dim', sel != null && sel.indexOf(Number(c.dataset.mp)) === -1);
    });
  }

  function selZona(z) { activeZ = z; pintarZona(); }

  function renderFlujo() {
    if (!flowHost) return;
    flowHost.textContent = '';

    const arcs = el('div', 'fn-arcs');
    arcs.appendChild(el('span', 'fn-arc a-base', t(D.ZONAS.base.arco)));
    arcs.appendChild(el('span', 'fn-arc a-socio', t(D.ZONAS.patron.arco)));
    flowHost.appendChild(arcs);

    const wrap = el('div', 'fn-cajas-wrap');
    const row = el('div', 'fn-cajas');
    D.CAJAS.forEach((c) => {
      const b = el('button', 'fn-caja z-' + c.z);
      b.type = 'button';
      b.dataset.z = c.z;
      b.setAttribute('aria-pressed', 'false');
      b.appendChild(el('span', 'fn-caja-n', String(c.n)));
      b.appendChild(el('span', 'fn-caja-t', t(c.t)));
      b.appendChild(el('span', 'fn-caja-s', t(c.s)));
      b.addEventListener('click', () => selZona(activeZ === c.z ? null : c.z));
      if (c.n === 3) {
        // La causa es el cuadro que hay que mirar: va marcado siempre.
        b.classList.add('fuente');
        b.appendChild(el('span', 'fn-caja-tag', U('laFuente')));
      }
      row.appendChild(b);
    });
    wrap.appendChild(row);

    // La causa es hoy el único registro con certeza: desde ahí se completan el
    // evento, el sujeto y el resultado. Se dice con la caja destacada y este
    // pie; se probó dibujar curvas desde la caja 3 y quedaban encima del texto.
    const pie = el('p', 'fn-fuente-pie');
    pie.appendChild(el('strong', null, U('certezaAca')));
    pie.appendChild(document.createTextNode(' ' + U('certezaAcaD')));
    wrap.appendChild(pie);

    flowHost.appendChild(wrap);

    const band = el('button', 'fn-band');
    band.type = 'button';
    band.dataset.z = 'trans';
    band.setAttribute('aria-pressed', 'false');
    band.appendChild(el('span', 'fn-band-label', U('bandaTrans')));
    const chips = el('span', 'fn-band-chips');
    D.ZONAS.trans.mps.forEach((n) => {
      const mp = D.MP.find((m) => m.n === n);
      chips.appendChild(el('span', 'fn-band-mp', 'MP' + n + ' · ' + t(mp.corto)));
    });
    band.appendChild(chips);
    band.addEventListener('click', () => selZona(activeZ === 'trans' ? null : 'trans'));
    flowHost.appendChild(band);

    flowHost.appendChild(el('div', 'fn-panel'));
    pintarZona();
  }



  // ============================================================
  //  2 · Los nueve macroproyectos — presentador de uno en uno
  //
  //  Un macroproyecto por pantalla, con capas superpuestas: la forma
  //  de color al fondo, el número gigante que se sale del marco y la
  //  tarjeta con el texto. Se avanza con las flechas, con el riel
  //  numerado, con las teclas ← → o arrastrando en pantalla táctil.
  //
  //  El cuerpo de cada uno es `mp.explica`. Mientras ese campo esté
  //  vacío en datos_v2.js se muestra el aviso de texto pendiente: es
  //  el hueco reservado para la redacción de Constanza.
  // ============================================================
  let slides = [];
  let dots = [];
  let actual = 0;

  function verSlide(i, dir) {
    if (!slides.length) return;
    const n = D.MP.length;
    const destino = ((i % n) + n) % n;
    if (dir == null) dir = destino > actual ? 1 : (destino < actual ? -1 : 0);

    slides.forEach((s, k) => {
      const on = k === destino;
      s.classList.remove('entra-der', 'entra-izq');
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-hidden', on ? 'false' : 'true');
      // al salir, la tarjeta vuelve a su frente y el número a ser número
      if (!on) {
        const card = s.querySelector('.mps-card');
        if (card && card.classList.contains('vuelta')) girar(card, false);
        const vis = s.querySelector('.mps-visual');
        if (vis) vis.classList.remove('on');
      }
    });
    dots.forEach((d, k) => {
      d.classList.toggle('active', k === destino);
      d.setAttribute('aria-selected', k === destino ? 'true' : 'false');
      d.tabIndex = k === destino ? 0 : -1;
    });

    aplicarAlto();

    if (dir !== 0 && !reduced) {
      const s = slides[destino];
      void s.offsetWidth; // reinicia la animación aunque se repita la dirección
      s.classList.add(dir > 0 ? 'entra-der' : 'entra-izq');
    }
    actual = destino;
  }

  function svgIcono(clave) {
    const d = D.ICONOS[clave];
    if (!d) return null;
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('class', 'mps-icono');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '1.6');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = d;
    return svg;
  }

  // Cara frontal: el titular de Constanza, su gancho y cuánto pesa.
  function caraFrente(mp, card) {
    const f = el('div', 'mps-face mps-front');
    const eyebrow = el('div', 'mps-eyebrow');
    eyebrow.appendChild(el('span', 'mps-eyebrow-id', 'MP' + mp.n));
    eyebrow.appendChild(el('span', 'mps-eyebrow-formal', t(mp.title)));
    f.appendChild(eyebrow);

    const conTexto = !!t(mp.titulo);
    f.appendChild(el('h3', 'mps-title', conTexto ? t(mp.titulo) : t(mp.title)));
    if (conTexto) f.appendChild(el('p', 'mps-gancho', t(mp.gancho)));

    const frec = el('p', 'mps-frec');
    frec.appendChild(el('strong', null, t(mp.frecuencia)));
    frec.appendChild(document.createTextNode(' ' + U('declarados') + ' · ' + t(mp.paises)));
    f.appendChild(frec);

    if (conTexto) {
      const btn = el('button', 'mps-ver');
      btn.type = 'button';
      btn.appendChild(el('span', null, U('verExplicacion')));
      btn.appendChild(el('span', 'mps-ver-flecha', '\u2192'));
      btn.addEventListener('click', () => girar(card, true));
      f.appendChild(btn);
    } else {
      const pend = el('div', 'mps-pendiente');
      pend.appendChild(el('span', 'mps-pend-badge', U('pendiente')));
      pend.appendChild(el('p', 'mps-pend-text', U('pendienteD')));
      f.appendChild(pend);
    }
    return f;
  }

  // Cara trasera: la explicación completa, con los códigos de brecha plegados.
  function caraReverso(mp, card) {
    const b = el('div', 'mps-face mps-back');
    b.appendChild(el('span', 'mps-back-id', 'MP' + mp.n + ' · ' + t(mp.title)));

    const bloque = (k, texto) => {
      const w = el('div', 'mps-bloque');
      w.appendChild(el('span', 'mps-bloque-label', U(k)));
      w.appendChild(el('p', 'mps-bloque-text', texto));
      return w;
    };
    b.appendChild(bloque('queNosPasa', t(mp.queNosPasa)));
    b.appendChild(bloque('laClave', t(mp.laClave)));

    if (mp.ganamos.length) {
      const g = el('div', 'mps-bloque');
      g.appendChild(el('span', 'mps-bloque-label', U('queGanamos')));
      const lista = el('ul', 'mps-ganamos');
      mp.ganamos.forEach((x) => {
        const li = el('li');
        li.appendChild(el('strong', null, t(x.t) + '. '));
        li.appendChild(document.createTextNode(t(x.d)));
        lista.appendChild(li);
      });
      g.appendChild(lista);
      b.appendChild(g);
    }
    b.appendChild(bloque('comoAcerca', t(mp.comoAcerca)));

    // Códigos de brecha: escondidos hasta que alguien los pida.
    if (mp.detalle.ids.length) {
      const det = el('div', 'mps-detalle');
      const tog = el('button', 'mps-detalle-tog');
      tog.type = 'button';
      tog.setAttribute('aria-expanded', 'false');
      tog.textContent = '\u25b8 ' + U('verDetalle');
      const cuerpo = el('div', 'mps-detalle-cuerpo');
      cuerpo.appendChild(el('span', 'mps-detalle-label', t(mp.detalle.label)));
      const ids = el('div', 'mps-detalle-ids');
      mp.detalle.ids.forEach((id) => ids.appendChild(el('span', 'mps-id', id)));
      cuerpo.appendChild(ids);
      tog.addEventListener('click', () => {
        const abierto = det.classList.toggle('abierto');
        tog.setAttribute('aria-expanded', abierto ? 'true' : 'false');
        tog.textContent = (abierto ? '\u25be ' : '\u25b8 ') + U(abierto ? 'ocultarDetalle' : 'verDetalle');
      });
      det.appendChild(tog);
      det.appendChild(cuerpo);
      b.appendChild(det);
    }

    const volver = el('button', 'mps-volver');
    volver.type = 'button';
    volver.textContent = '\u2190 ' + U('volverFrente');
    volver.addEventListener('click', () => girar(card, false));
    b.appendChild(volver);
    return b;
  }

  function girar(card, alReverso) {
    card.classList.toggle('vuelta', alReverso);
    aplicarAlto();
    const f = card.querySelector('.mps-front');
    const b = card.querySelector('.mps-back');
    if (f) f.setAttribute('aria-hidden', alReverso ? 'true' : 'false');
    if (b) b.setAttribute('aria-hidden', alReverso ? 'false' : 'true');
  }

  function renderSlider() {
    const host = $('#mpSlider');
    if (!host) return;
    const previo = actual;
    host.textContent = '';
    slides = [];
    dots = [];

    const stage = el('div', 'mps-stage');

    D.MP.forEach((mp) => {
      const s = el('article', 'mps-slide z-' + mp.zona);
      s.dataset.mp = mp.n;
      s.setAttribute('aria-hidden', 'true');

      s.appendChild(el('div', 'mps-shape'));

      // El número se transforma en el ícono del macroproyecto al pasar por
      // encima; en pantalla táctil, al tocarlo.
      const visual = el('button', 'mps-visual');
      visual.type = 'button';
      visual.setAttribute('aria-label', t(mp.esencia));
      visual.title = U('verIcono');
      const ghost = el('span', 'mps-ghost', String(mp.n).padStart(2, '0'));
      ghost.setAttribute('aria-hidden', 'true');
      visual.appendChild(ghost);
      const ico = svgIcono(mp.icono);
      if (ico) visual.appendChild(ico);
      visual.appendChild(el('span', 'mps-esencia', t(mp.esencia)));
      visual.addEventListener('click', () => visual.classList.toggle('on'));
      s.appendChild(visual);

      const flip = el('div', 'mps-flip');
      const card = el('div', 'mps-card');
      card.appendChild(caraFrente(mp, card));
      if (t(mp.titulo)) card.appendChild(caraReverso(mp, card));
      girar(card, false);
      flip.appendChild(card);
      s.appendChild(flip);

      stage.appendChild(s);
      slides.push(s);
    });

    const prev = el('button', 'mps-nav prev');
    prev.type = 'button';
    prev.setAttribute('aria-label', U('anterior'));
    prev.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>';
    prev.addEventListener('click', () => verSlide(actual - 1, -1));

    const next = el('button', 'mps-nav next');
    next.type = 'button';
    next.setAttribute('aria-label', U('siguiente'));
    next.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>';
    next.addEventListener('click', () => verSlide(actual + 1, 1));

    stage.appendChild(prev);
    stage.appendChild(next);
    host.appendChild(stage);

    // riel numerado: sigue permitiendo ver los nueve de un vistazo y saltar
    const riel = el('div', 'mps-rail');
    riel.setAttribute('role', 'tablist');
    riel.setAttribute('aria-label', U('navMacro'));
    D.MP.forEach((mp, k) => {
      const d = el('button', 'mps-dot z-' + mp.zona);
      d.type = 'button';
      d.dataset.mp = mp.n;
      d.setAttribute('role', 'tab');
      d.setAttribute('aria-selected', 'false');
      d.title = 'MP' + mp.n + ' · ' + t(mp.corto);
      d.appendChild(el('span', 'mps-dot-n', String(mp.n)));
      d.appendChild(el('span', 'mps-dot-t', t(mp.corto)));
      d.addEventListener('click', () => verSlide(k));
      riel.appendChild(d);
      dots.push(d);
    });
    host.appendChild(riel);

    riel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); verSlide(actual + 1, 1); dots[actual].focus(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); verSlide(actual - 1, -1); dots[actual].focus(); }
    });

    let x0 = null;
    stage.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend', (e) => {
      if (x0 == null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 45) verSlide(actual + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
      x0 = null;
    });

    verSlide(previo, 0);
    pintarZona();
    ajustarAlto();
  }

  // Las láminas van superpuestas en absoluto y cada tarjeta tiene dos caras de
  // alto muy distinto, así que medimos las dos una vez y después el escenario
  // sigue a la cara que esté a la vista.
  function ajustarAlto() {
    const stage = document.querySelector('.mps-stage');
    if (!stage || !slides.length) return;

    if (window.matchMedia('(max-width: 900px)').matches) {
      stage.style.minHeight = '';
      slides.forEach((s) => { s.querySelector('.mps-card').style.height = ''; });
      return;
    }

    slides.forEach((s) => {
      const visible = s.classList.contains('is-active');
      if (!visible) { s.style.visibility = 'hidden'; s.style.display = 'grid'; s.style.opacity = '0'; }
      const card = s.querySelector('.mps-card');
      const antes = card.style.height;
      card.style.height = 'auto';

      const medir = (cara) => {
        if (!cara) return 0;
        const pos = cara.style.position, tr = cara.style.transform;
        cara.style.position = 'static';
        cara.style.transform = 'none';
        const h = Math.ceil(cara.getBoundingClientRect().height);
        cara.style.position = pos;
        cara.style.transform = tr;
        return h;
      };
      s.dataset.hf = medir(s.querySelector('.mps-front'));
      s.dataset.hb = medir(s.querySelector('.mps-back')) || s.dataset.hf;

      card.style.height = antes;
      if (!visible) { s.style.visibility = ''; s.style.display = ''; s.style.opacity = ''; }
    });

    aplicarAlto();
  }

  // Ajusta el escenario a la cara que está a la vista en la lámina activa.
  function aplicarAlto() {
    const stage = document.querySelector('.mps-stage');
    if (!stage || !slides.length) return;
    if (window.matchMedia('(max-width: 900px)').matches) return;
    slides.forEach((s, k) => {
      const card = s.querySelector('.mps-card');
      const cara = (k === actual && card.classList.contains('vuelta')) ? s.dataset.hb : s.dataset.hf;
      card.style.height = (Number(cara) || 420) + 'px';
    });
    const activa = slides[actual];
    const h = Number(activa.querySelector('.mps-card').classList.contains('vuelta') ? activa.dataset.hb : activa.dataset.hf) || 420;
    stage.style.minHeight = Math.max(380, Math.round(h / 0.86)) + 'px';
  }

  // ============================================================
  //  3 · Los doce proyectos que hay que agregar (lámina 9)
  // ============================================================
  let filtroG = null;

  function renderAgregados() {
    const cont = $('#agrFiltros');
    const grid = $('#agrGrid');
    if (!cont || !grid) return;

    // filtros por grupo, en el orden en que aparecen
    cont.textContent = '';
    const grupos = [];
    D.AGREGADOS.forEach((a) => { const g = t(a.g); if (grupos.indexOf(g) === -1) grupos.push(g); });

    const todos = el('button', 'agr-f' + (filtroG == null ? ' active' : ''), U('verTodos'));
    todos.type = 'button';
    todos.addEventListener('click', () => { filtroG = null; renderAgregados(); });
    cont.appendChild(todos);

    grupos.forEach((g) => {
      const n = D.AGREGADOS.filter((a) => t(a.g) === g).length;
      const b = el('button', 'agr-f' + (filtroG === g ? ' active' : ''));
      b.type = 'button';
      b.appendChild(el('span', 'agr-f-t', g));
      b.appendChild(el('span', 'agr-f-n', String(n)));
      b.addEventListener('click', () => { filtroG = (filtroG === g ? null : g); renderAgregados(); });
      cont.appendChild(b);
    });

    grid.textContent = '';
    D.AGREGADOS.forEach((a) => {
      if (filtroG != null && t(a.g) !== filtroG) return;
      const mp = D.MP.find((m) => m.n === a.mp);
      const card = el('article', 'agr');
      const head = el('div', 'agr-head');
      head.appendChild(el('span', 'agr-n', String(a.n).padStart(2, '0')));
      head.appendChild(el('h3', 'agr-t', t(a.t)));
      card.appendChild(head);
      card.appendChild(el('span', 'agr-g', t(a.g)));
      card.appendChild(el('p', 'agr-d', t(a.d)));

      const pie = el('div', 'agr-pie');
      const link = el('button', 'agr-mp');
      link.type = 'button';
      link.appendChild(el('span', 'agr-mp-label', U('daProfundidad')));
      link.appendChild(el('span', 'agr-mp-id', 'MP' + a.mp + ' · ' + t(mp.corto)));
      link.addEventListener('click', () => irAMP(a.mp));
      pie.appendChild(link);
      pie.appendChild(el('span', 'agr-src ' + (a.br ? 'br' : 'dis'), U(a.br ? 'conBrecha' : 'delDiseno')));
      card.appendChild(pie);

      grid.appendChild(card);
    });
  }

  // ============================================================
  //  4 · Lo que pide el levantamiento (lámina 11)
  //  Matriz beneficio × bloque. El valor es el % de brechas que
  //  MENCIONAN el beneficio, no un ahorro: por eso no suma 100.
  // ============================================================
  let selBen = null;
  let selBloq = null;

  function renderMatriz() {
    const host = $('#matriz');
    if (!host) return;
    host.textContent = '';

    host.appendChild(el('p', 'matriz-hint', U('matrizHint')));

    const tabla = el('div', 'mtz');

    // cabecera: una columna vacía + los siete beneficios
    const head = el('div', 'mtz-row mtz-head');
    head.appendChild(el('div', 'mtz-cell mtz-corner'));
    D.BENEFICIOS.forEach((b) => {
      const c = el('button', 'mtz-cell mtz-ben' + (selBen === b.k ? ' active' : ''), t(b.t));
      c.type = 'button';
      c.addEventListener('click', () => { selBen = (selBen === b.k ? null : b.k); selBloq = null; renderMatriz(); });
      head.appendChild(c);
    });
    tabla.appendChild(head);

    D.BLOQUES.forEach((bl) => {
      const row = el('div', 'mtz-row' + (selBloq === bl.k ? ' active' : ''));
      const lab = el('button', 'mtz-cell mtz-bloq b-' + bl.k);
      lab.type = 'button';
      lab.appendChild(el('span', 'mtz-bloq-t', t(bl.t)));
      lab.appendChild(el('span', 'mtz-bloq-s', t(bl.s) + ' · ' + bl.brechas + ' ' + U('brechas')));
      lab.appendChild(el('span', 'mtz-bloq-mps', bl.mps));
      lab.addEventListener('click', () => { selBloq = (selBloq === bl.k ? null : bl.k); selBen = null; renderMatriz(); });
      row.appendChild(lab);

      D.BENEFICIOS.forEach((b) => {
        const v = bl.v[b.k];
        const apagada = (selBen != null && selBen !== b.k) || (selBloq != null && selBloq !== bl.k);
        const c = el('div', 'mtz-cell mtz-v' + (apagada ? ' off' : ''));
        // la intensidad del relleno codifica el valor; el número siempre se lee
        c.style.setProperty('--v', v / 100);
        c.appendChild(el('span', 'mtz-v-num', v + '%'));
        c.appendChild(el('span', 'mtz-v-ben', t(b.t)));
        c.title = t(b.t) + ' — ' + v + '% ' + U('deLasBrechas');
        row.appendChild(c);
      });
      tabla.appendChild(row);
    });

    host.appendChild(tabla);
  }

  // ============================================================
  //  5 · Qué se gana (lámina 12)
  // ============================================================
  function renderGana() {
    const host = $('#ganaGrid');
    if (!host) return;
    host.textContent = '';

    D.GANANCIAS.forEach((g) => {
      const card = el('article', 'gana b-' + g.k);
      const head = el('div', 'gana-head');
      head.appendChild(el('h3', 'gana-t', t(g.t)));
      head.appendChild(el('span', 'gana-s', t(g.s)));
      card.appendChild(head);

      [['queSeGana', g.gana, 'gain'], ['queHacer', g.hacer, 'do'], ['elResultado', g.result, 'res']].forEach(([k, val, cls]) => {
        const b = el('div', 'gana-b ' + cls);
        b.appendChild(el('span', 'gana-b-label', U(k)));
        b.appendChild(el('p', 'gana-b-text', t(val)));
        card.appendChild(b);
      });

      const med = el('div', 'gana-medir');
      med.appendChild(el('span', 'gana-medir-label', U('queMedir')));
      med.appendChild(el('p', 'gana-medir-text', t(g.medir)));
      card.appendChild(med);

      host.appendChild(card);
    });
  }

  // ============================================================
  //  Alliance, central de operaciones legales (lámina 10)
  //  Se dibuja de abajo hacia arriba, con el texto y las posiciones
  //  de la lámina. Aquí no se reinterpreta nada: solo se diseña.
  // ============================================================
  function bloqueMP(c) {
    const agr = D.AGREGADOS.filter((a) => a.mp === c.mp);
    const b = el('div', 'al-mp' + (agr.length ? ' con-agr' : ''));
    const head = el('div', 'al-mp-head');
    head.appendChild(el('span', 'al-mp-id', 'MP' + c.mp));
    if (agr.length) head.appendChild(el('span', 'al-mp-mas', '+' + agr.length));
    b.appendChild(head);
    b.appendChild(el('span', 'al-mp-lab', t(c.lab)));
    if (agr.length) {
      const list = el('ul', 'al-mp-agr');
      agr.forEach((a) => list.appendChild(el('li', null, t(a.t))));
      b.appendChild(list);
    }
    return b;
  }

  function renderAlliance() {
    const host = $('#allianceMap');
    if (!host) return;
    const A = D.ALLIANCE;
    host.textContent = '';

    // --- cima: socio estratégico ---
    const cima = el('section', 'al-piso al-cima');
    const ch = el('div', 'al-piso-head');
    ch.appendChild(el('h3', 'al-piso-t', t(A.cima.t)));
    ch.appendChild(el('span', 'al-piso-s', t(A.cima.s)));
    cima.appendChild(ch);

    const cCajas = el('div', 'al-cajas dos');
    A.cima.cajas.forEach((c) => {
      const box = el('div', 'al-caja alta');
      box.appendChild(el('span', 'al-caja-n', 'Caja ' + c.n));
      box.appendChild(el('span', 'al-caja-t', t(c.t)));
      box.appendChild(el('span', 'al-caja-s', t(c.s)));
      cCajas.appendChild(box);
    });
    cima.appendChild(cCajas);

    const cCon = el('div', 'al-con');
    cCon.appendChild(el('span', 'al-con-label', U('conQue')));
    const cList = el('div', 'al-mps');
    A.cima.con.forEach((c) => cList.appendChild(bloqueMP(c)));
    cCon.appendChild(cList);
    cima.appendChild(cCon);
    host.appendChild(cima);

    // --- puente ---
    const puente = el('div', 'al-puente');
    puente.appendChild(el('span', 'al-puente-flecha', '▲'));
    puente.appendChild(el('span', 'al-puente-t', t(A.cima.puente)));
    host.appendChild(puente);

    // --- base estructurada ---
    const base = el('section', 'al-piso al-base');
    const bh = el('div', 'al-piso-head');
    bh.appendChild(el('h3', 'al-piso-t', t(A.base.t)));
    bh.appendChild(el('span', 'al-piso-s', t(A.base.s)));
    base.appendChild(bh);

    const bCajas = el('div', 'al-cajas cuatro');
    A.base.cajas.forEach((c) => {
      const box = el('div', 'al-caja');
      box.appendChild(el('span', 'al-caja-n', String(c.n)));
      box.appendChild(el('span', 'al-caja-t', t(c.t)));
      bCajas.appendChild(box);
    });
    base.appendChild(bCajas);

    const bCon = el('div', 'al-con');
    bCon.appendChild(el('span', 'al-con-label', U('conQue')));
    const bList = el('div', 'al-mps');
    A.base.con.forEach((c) => bList.appendChild(bloqueMP(c)));
    bCon.appendChild(bList);
    base.appendChild(bCon);
    host.appendChild(base);

    // --- cimiento transversal ---
    const trans = el('section', 'al-piso al-trans');
    trans.appendChild(el('span', 'al-con-label', U('transversales')));
    const tList = el('div', 'al-mps');
    A.transversales.forEach((c) => tList.appendChild(bloqueMP(c)));
    trans.appendChild(tList);
    host.appendChild(trans);

    const cierre = $('#alCierre');
    if (cierre) cierre.textContent = t(A.cierre);
  }

  // ============================================================
  //  Idioma: aplicar y re-renderizar
  // ============================================================
  function aplicarEstatico() {
    document.documentElement.lang = lang;
    document.title = t(META);
    document.querySelectorAll('[data-i18n]').forEach((n) => {
      const k = n.getAttribute('data-i18n');
      if (n.__es === undefined) n.__es = n.innerHTML;
      n.innerHTML = (lang === 'en' && EN[k] != null) ? EN[k] : n.__es;
    });
    document.querySelectorAll('[data-t]').forEach((n) => { n.textContent = U(n.getAttribute('data-t')); });
    const ceo = $('#ceoText');
    if (ceo) ceo.textContent = CEO_TEXT[lang] || CEO_TEXT.es;
    document.querySelectorAll('#langToggle [data-l]').forEach((b) => {
      const on = b.getAttribute('data-l') === lang;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function renderTodo() {
    aplicarEstatico();
    renderFlujo();
    renderSlider();
    renderAgregados();
    renderMatriz();
    renderGana();
    renderAlliance();
  }

  function setLang(next) {
    if (next === lang) return;
    lang = next;
    try { localStorage.setItem('alto_lang', lang); } catch (e) {}
    renderTodo();
  }

  // ============================================================
  //  Shell: barra de progreso, menú, scroll-spy, volver arriba
  // ============================================================
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const progress = $('#scrollProgress');
  const header = $('#siteHeader');
  const scrollTopBtn = $('#scrollTop');

  function onScroll() {
    const y = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    if (header) header.classList.toggle('scrolled', y > 20);
    if (scrollTopBtn) scrollTopBtn.classList.toggle('show', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => ajustarAlto());

  scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }));

  const navToggle = $('#navToggle');
  const mainNav = $('#mainNav');
  navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    mainNav.classList.toggle('open');
  });
  mainNav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    mainNav.classList.remove('open');
  }));

  const links = [...document.querySelectorAll('.main-nav a[href^="#"]')];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));

  // Flechas del teclado para recorrer los nueve macroproyectos cuando la
  // sección está a la vista y el foco no está en un campo de texto.
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const host = $('#mpSlider');
    if (!host || /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) return;
    const r = host.getBoundingClientRect();
    if (r.bottom < 120 || r.top > window.innerHeight - 120) return;
    e.preventDefault();
    verSlide(actual + (e.key === 'ArrowRight' ? 1 : -1), e.key === 'ArrowRight' ? 1 : -1);
  });

  // ============================================================
  //  Arranque
  // ============================================================
  renderTodo();
  onScroll();

  $('#langToggle')?.querySelectorAll('[data-l]').forEach((b) => {
    b.addEventListener('click', () => setLang(b.getAttribute('data-l')));
  });

  if (window.AOS) {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 80 });
    // Entrar por un enlace profundo posiciona la página sin generar scroll y
    // AOS deja la sección en opacity:0 hasta que alguien mueve la rueda.
    window.addEventListener('load', () => AOS.refreshHard());
    window.addEventListener('hashchange', () => AOS.refresh());
  }
})();
