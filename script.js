// ============================================================
//  ALTO Roadmap — interactions
// ============================================================

// --- AOS scroll animations (same lib ALTO uses) ---
if (window.AOS) {
  AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 80 });
}

// --- Scroll progress bar + header shadow + scroll-to-top ---
const progress = document.getElementById('scrollProgress');
const header = document.getElementById('siteHeader');
const scrollTopBtn = document.getElementById('scrollTop');

function onScroll() {
  const scrollTop = window.scrollY;
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docH > 0 ? (scrollTop / docH) * 100 : 0;
  if (progress) progress.style.width = pct + '%';
  if (header) header.classList.toggle('scrolled', scrollTop > 20);
  if (scrollTopBtn) scrollTopBtn.classList.toggle('show', scrollTop > 600);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- Mobile nav toggle ---
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  mainNav.classList.toggle('open');
});
mainNav?.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    mainNav.classList.remove('open');
  })
);

// --- Active nav link on scroll (scroll-spy) ---
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.main-nav a')];
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navLinks.forEach((l) =>
          l.classList.toggle('active', l.getAttribute('href') === '#' + id)
        );
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);
sections.forEach((s) => spy.observe(s));

// --- Brechas fuera del corte: list by country + detail modal ---
const fueraList = document.getElementById('fueraList');
const fueraTabs = [...document.querySelectorAll('.fuera-tab')];
const COUNTRY_FULL = { MX: 'México', CL: 'Chile', CO: 'Colombia', USA: 'USA' };
const MP_NAMES = {
  1: 'Gobierno y calidad del dato',
  2: 'Reportería y autoservicio',
  3: 'Gestión operativa integral',
  4: 'Documental, evidencia y búsqueda',
  5: 'Automatización e IA legal',
  6: 'Inteligencia criminal y del infractor',
  7: 'Integraciones institucionales',
  8: 'Procedimiento penal configurable',
  9: 'Condiciones habilitantes',
};
const modal = document.getElementById('fueraModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function esc(s) { const d = document.createElement('div'); d.textContent = s == null ? '' : s; return d.innerHTML; }

function openFueraModal(b) {
  const cc = (b.code || '').split('-')[0];
  // Datos enriquecidos del Anexo/planilla (GAP, Sugerencia TI, obs USA/Chile fusionadas)
  const d = (window.BRECHAS_DETAIL && window.BRECHAS_DETAIL[b.code]) || {};
  const mpList = (b.mp || []).map((n) => 'MP' + n + ' · ' + (MP_NAMES[n] || ''));
  const niv = d.niv || b.niv;
  const tipo = d.tipo && d.tipo !== 'N/A' ? d.tipo : '';
  const actual = b.actual || d.actual;
  const futura = b.futura || d.futura;
  const obs = d.obs || b.obs || {};

  let html = '<div class="modal-head">'
    + '<span class="modal-code' + (cc === 'USA' ? ' us' : '') + '">' + esc(b.code) + '</span>'
    + '<span class="modal-country">' + esc(COUNTRY_FULL[cc] || cc) + (niv ? ' · ' + esc(niv) : '') + '</span>'
    + (tipo ? '<span class="modal-tipo">' + esc(tipo) + '</span>' : '')
    + '</div>';
  html += '<h3 id="modalTitle">' + esc(b.tit || d.tit) + '</h3>';
  if (mpList.length) {
    html += '<div class="modal-subsume"><span class="ms-label">Su dolor se subsume en</span><span class="ms-mp">' + esc(mpList.join('  ·  ')) + '</span></div>';
    html += '<p class="modal-subsume-note">No pasó al corte como solicitud literal, pero el dolor operativo que evidencia se retoma en este macroproyecto del Anexo Técnico (no es una migración de la redacción original, sino del macrodolor identificado).</p>';
  } else {
    html += '<div class="modal-subsume excluded"><span class="ms-label">Sin macroproyecto de destino</span><span class="ms-mp">Excluida o resuelta</span></div>';
    html += '<p class="modal-subsume-note">Su dolor no se subsume en ninguna cartera: corresponde a gestión organizacional, ya está resuelta (ticket/migración a Beta) o es una mejora local en evaluación, según el Anexo Técnico.</p>';
  }
  html += '<div class="modal-flow">'
    + '<div class="mf-block"><h4>Descripción actual</h4><p>' + (actual ? esc(actual) : '<span class="modal-empty">Funcionalidad nueva — no existe hoy.</span>') + '</p></div>'
    + '<div class="mf-arrow">&rarr;</div>'
    + '<div class="mf-block future"><h4>Descripción futura</h4><p>' + (futura ? esc(futura) : '<span class="modal-empty">Sin descripción.</span>') + '</p></div>'
    + '</div>';

  // GAP + Sugerencia de TI (igual que en las brechas de los macroproyectos)
  html += '<div class="modal-extra modal-gap"><h4>GAP · qué ganamos al resolverlo</h4><p>'
    + (d.gap ? esc(d.gap) : '<span class="modal-empty">Sin GAP declarado.</span>') + '</p></div>';
  const hasSug = d.sug && !/^sin sugerencia/i.test(d.sug.trim()) && d.sug.trim() !== 'N/A';
  html += '<div class="modal-extra modal-sug"><h4>Sugerencia de TI</h4><p>'
    + (hasSug ? esc(d.sug) : '<span class="modal-empty">Sin sugerencia específica de TI.</span>') + '</p></div>';

  // Enfrentamiento: comentarios de los OTROS países (obs USA/Chile ya fusionadas).
  const order = ['MX', 'CL', 'CO', 'USA'];
  const others = order.filter((k) => k !== cc);
  html += '<div class="modal-comments"><h4>Comentarios de los otros países (enfrentamiento)</h4><div class="mc-grid">';
  others.forEach((k) => {
    const raw = obs[k] || '';
    const empty = !raw || /^no hicieron observaci/i.test(raw.trim());
    const txt = empty ? '<span class="modal-empty">No hacen observaciones.</span>' : esc(raw);
    html += '<div class="mc' + (k === 'USA' ? ' us' : '') + '"><span class="mc-name">' + COUNTRY_FULL[k] + '</span><p>' + txt + '</p></div>';
  });
  html += '</div></div>';
  modalBody.innerHTML = html;
  modalBody.parentElement.scrollTop = 0;
  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add('open'));
  document.body.style.overflow = 'hidden';
}

// --- Detalle de una brecha contenida en un macroproyecto (reusa la misma modal) ---
// Igual que la modal de "fuera del corte" pero sin el bloque "su dolor se subsume en",
// y con dos bloques añadidos: GAP y Sugerencia de TI.
function openBrechaDetalle(code) {
  const d = (window.BRECHAS_DETAIL && window.BRECHAS_DETAIL[code]) || null;
  if (!d || !modal || !modalBody) return;
  const cc = (code.split('-')[0] || '').toUpperCase();
  const isUS = cc === 'USA';
  const tipo = d.tipo && d.tipo !== 'N/A' ? d.tipo : '';

  let html = '<div class="modal-head">'
    + '<span class="modal-code' + (isUS ? ' us' : '') + '">' + esc(code) + '</span>'
    + '<span class="modal-country">' + esc(COUNTRY_FULL[cc] || cc) + (d.niv ? ' · ' + esc(d.niv) : '') + '</span>'
    + (tipo ? '<span class="modal-tipo">' + esc(tipo) + '</span>' : '')
    + '</div>';
  html += '<h3 id="modalTitle">' + esc(d.tit || code) + '</h3>';

  // Descripción actual → futura
  html += '<div class="modal-flow">'
    + '<div class="mf-block"><h4>Descripción actual</h4><p>' + (d.actual ? esc(d.actual) : '<span class="modal-empty">Funcionalidad nueva — no existe hoy.</span>') + '</p></div>'
    + '<div class="mf-arrow">&rarr;</div>'
    + '<div class="mf-block future"><h4>Descripción futura</h4><p>' + (d.futura ? esc(d.futura) : '<span class="modal-empty">Sin descripción.</span>') + '</p></div>'
    + '</div>';

  // GAP
  html += '<div class="modal-extra modal-gap"><h4>GAP · qué ganamos al resolverlo</h4><p>'
    + (d.gap ? esc(d.gap) : '<span class="modal-empty">Sin GAP declarado.</span>') + '</p></div>';

  // Sugerencia de TI
  const hasSug = d.sug && !/^sin sugerencia/i.test(d.sug.trim()) && d.sug.trim() !== 'N/A';
  html += '<div class="modal-extra modal-sug"><h4>Sugerencia de TI</h4><p>'
    + (hasSug ? esc(d.sug) : '<span class="modal-empty">Sin sugerencia específica de TI.</span>') + '</p></div>';

  // Comentarios de los otros países (enfrentamiento)
  const order = ['MX', 'CL', 'CO', 'USA'];
  const others = order.filter((k) => k !== cc);
  html += '<div class="modal-comments"><h4>Comentarios de los otros países (enfrentamiento)</h4><div class="mc-grid">';
  others.forEach((k) => {
    const raw = d.obs && d.obs[k] ? d.obs[k] : '';
    const empty = !raw || /^no hicieron observaci/i.test(raw.trim());
    const txt = empty ? '<span class="modal-empty">No hacen observaciones.</span>' : esc(raw);
    html += '<div class="mc' + (k === 'USA' ? ' us' : '') + '"><span class="mc-name">' + COUNTRY_FULL[k] + '</span><p>' + txt + '</p></div>';
  });
  html += '</div></div>';

  modalBody.innerHTML = html;
  modalBody.parentElement.scrollTop = 0;
  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add('open'));
  document.body.style.overflow = 'hidden';
}
window.openBrechaDetalle = openBrechaDetalle;

function closeFueraModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { modal.hidden = true; }, 320);
}

modalClose?.addEventListener('click', closeFueraModal);
modal?.addEventListener('click', (e) => { if (e.target === modal) closeFueraModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal && !modal.hidden) closeFueraModal(); });

// --- Glosario operativo: botón del header abre una modal ---
const glosarioBtn = document.getElementById('glosarioBtn');
const glosarioModal = document.getElementById('glosarioModal');
const glosarioClose = document.getElementById('glosarioClose');

function openGlosario() {
  if (!glosarioModal) return;
  glosarioModal.hidden = false;
  requestAnimationFrame(() => glosarioModal.classList.add('open'));
  document.body.style.overflow = 'hidden';
}
function closeGlosario() {
  if (!glosarioModal) return;
  glosarioModal.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { glosarioModal.hidden = true; }, 320);
}
glosarioBtn?.addEventListener('click', openGlosario);
glosarioClose?.addEventListener('click', closeGlosario);
glosarioModal?.addEventListener('click', (e) => { if (e.target === glosarioModal) closeGlosario(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && glosarioModal && !glosarioModal.hidden) closeGlosario(); });

// --- Taxonomía de transversalidad: botón del header abre una modal ---
const taxBtn = document.getElementById('taxonomiaBtn');
const taxModal = document.getElementById('taxonomiaModal');
const taxClose = document.getElementById('taxonomiaClose');

function openTax() {
  if (!taxModal) return;
  taxModal.hidden = false;
  requestAnimationFrame(() => taxModal.classList.add('open'));
  document.body.style.overflow = 'hidden';
}
function closeTax() {
  if (!taxModal) return;
  taxModal.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { taxModal.hidden = true; }, 320);
}
taxBtn?.addEventListener('click', openTax);
taxClose?.addEventListener('click', closeTax);
taxModal?.addEventListener('click', (e) => { if (e.target === taxModal) closeTax(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && taxModal && !taxModal.hidden) closeTax(); });

function renderFuera(country) {
  const list = (window.BRECHAS_FUERA && window.BRECHAS_FUERA[country]) || [];
  fueraList.textContent = '';
  list.forEach((b) => {
    const item = document.createElement('div');
    item.className = 'fuera-item';
    item.setAttribute('role', 'button');
    item.tabIndex = 0;
    const code = document.createElement('span');
    code.className = 'fuera-code';
    code.textContent = b.code;
    item.appendChild(code);
    const body = document.createElement('div');
    body.className = 'fuera-body';
    const h = document.createElement('h4');
    h.textContent = b.tit;
    body.appendChild(h);
    const tags = document.createElement('div');
    tags.className = 'fuera-tags';
    if (b.niv) { const n = document.createElement('span'); n.className = 'nivel'; n.textContent = b.niv; tags.appendChild(n); }
    if (b.tipo && b.tipo !== 'N/A') { const t = document.createElement('span'); t.className = 'tipo'; t.textContent = b.tipo; tags.appendChild(t); }
    body.appendChild(tags);
    item.appendChild(body);
    const go = document.createElement('span');
    go.className = 'fuera-go';
    go.textContent = '→';
    item.appendChild(go);
    item.addEventListener('click', () => openFueraModal(b));
    item.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openFueraModal(b); } });
    fueraList.appendChild(item);
  });
}

if (fueraList && fueraTabs.length) {
  fueraTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      fueraTabs.forEach((t) => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      renderFuera(tab.dataset.c);
    });
  });
  renderFuera('MX');
}

// --- CEO quote: word-by-word reveal on scroll (inspired by valentincheval.design) ---
document.querySelectorAll('.ceo-text').forEach((ceoText) => {
  const HL = /core|dato|único|alto|estructura|dolores|nueve/i;
  const words = ceoText.textContent.trim().split(/\s+/);
  ceoText.textContent = '';
  words.forEach((w, i) => {
    const word = document.createElement('span');
    word.className = 'word';
    const inner = document.createElement('span');
    inner.className = 'word-in' + (HL.test(w) ? ' hl' : '');
    inner.textContent = w;
    inner.style.transitionDelay = i * 26 + 'ms';
    word.appendChild(inner);
    ceoText.appendChild(word);
    ceoText.appendChild(document.createTextNode(' '));
  });
  new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { ceoText.classList.add('revealed'); obs.disconnect(); }
      });
    },
    { threshold: 0.25 }
  ).observe(ceoText);
});

// --- Animated count-up for stats ---
const counters = document.querySelectorAll('.stat-num[data-count]');
const countObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        el.textContent = Math.round(eased * target).toString();
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
counters.forEach((c) => countObserver.observe(c));
