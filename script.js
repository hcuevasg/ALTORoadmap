// ============================================================
//  ALTO Roadmap — interactions (bilingüe ES/EN)
// ============================================================
const I = window.I18N;

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

// ============================================================
//  i18n helpers
// ============================================================
function CFULL(c) { return I ? I.country(c) : c; }
function MPN(n) { return I ? I.mpName(n) : ''; }
function U(k) { return I ? I.ui(k) : k; }
function NIV(v) { return I ? I.niv(v) : v; }
function TIPO(v) { return I ? I.tipo(v) : v; }
function isEN() { return I && I.lang === 'en'; }

// Datos enriquecidos por brecha: texto del idioma activo; niv/tipo desde el ES (mapeados).
function getDetail(code) {
  const es = (window.BRECHAS_DETAIL && window.BRECHAS_DETAIL[code]) || null;
  const en = (window.BRECHAS_DETAIL_EN && window.BRECHAS_DETAIL_EN[code]) || null;
  if (!es && !en) return null;
  const src = (isEN() && en) ? en : (es || en);
  return {
    tit: src.tit, actual: src.actual, futura: src.futura, gap: src.gap, sug: src.sug,
    obs: src.obs || {}, niv: es ? es.niv : '', tipo: es ? es.tipo : '',
  };
}
function isEmptyObs(raw) { return !raw || /^(no hicieron observaci|no comments)/i.test(raw.trim()); }
function hasSugg(s) { return s && !/^(sin sugerencia|no suggestion)/i.test(s.trim()) && s.trim() !== 'N/A'; }

// Títulos en inglés de las 25 brechas "fuera del corte"
const FUERA_TIT_EN = {
  'MX-005': 'Internal operational reports generation',
  'MX-010': 'Dedicated channel for operational improvement ideas',
  'MX-017': 'Results report (closing report)',
  'MX-019': 'Remote collection of in-store event information',
  'MX-020': 'Digital filing of complaints with the Public Prosecutor’s Office',
  'MX-023': 'Task assignment, follow-up and traceability',
  'MX-027': 'Case-file completeness checklist',
  'MX-029': 'Notifications for merchandise recovery',
  'MX-030': 'Management flow for postponed or cancelled appointments',
  'MX-032': 'Reordering of the event-creation flow',
  'MX-035': 'Real-time log for event assignment',
  'MX-038': 'Decouple lawyer assignment from event closing',
  'MX-040': '3-Level strategy',
  'MX-047': 'Service records',
  'MX-048': 'Trend analysis on assignments and updates',
  'MX-049': 'Dedicated fields for the Walmart Bitácora report',
  'CL-008': 'Automated assignment and distribution of hearings and cases',
  'CL-019': 'Consolidation and traceability of detention controls and associated events',
  'CL-026': 'Performance, stability and UX improvements for Alliance/Beta',
  'CL-028': 'Automated legal classification via UTM-value integration',
  'CL-039': 'Automated creation and recording of legal cases from events',
  'CL-043': 'Infrastructure and connectivity for CCTV event review',
  'CO-003': 'Unified management of multiple proceedings',
  'CO-009': 'Process optimization by removing redundancies',
  'USA-002': 'Event tracking pipeline',
};
function fueraTit(code, fallback) { return (isEN() && FUERA_TIT_EN[code]) ? FUERA_TIT_EN[code] : fallback; }

// ============================================================
//  Modal de detalle de brecha (compartida)
// ============================================================
const fueraList = document.getElementById('fueraList');
const fueraTabs = [...document.querySelectorAll('.fuera-tab')];
const modal = document.getElementById('fueraModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
let lastModal = null;
let activeFueraCountry = 'MX';

function esc(s) { const d = document.createElement('div'); d.textContent = s == null ? '' : s; return d.innerHTML; }

function flowBlocks(actual, futura) {
  return '<div class="modal-flow">'
    + '<div class="mf-block"><h4>' + esc(U('descActual')) + '</h4><p>' + (actual ? esc(actual) : '<span class="modal-empty">' + esc(U('funcNueva')) + '</span>') + '</p></div>'
    + '<div class="mf-arrow">&rarr;</div>'
    + '<div class="mf-block future"><h4>' + esc(U('descFutura')) + '</h4><p>' + (futura ? esc(futura) : '<span class="modal-empty">' + esc(U('sinDescripcion')) + '</span>') + '</p></div>'
    + '</div>';
}
function gapSugBlocks(d) {
  let h = '<div class="modal-extra modal-gap"><h4>' + esc(U('gapTitle')) + '</h4><p>'
    + (d.gap ? esc(d.gap) : '<span class="modal-empty">' + esc(U('sinGap')) + '</span>') + '</p></div>';
  h += '<div class="modal-extra modal-sug"><h4>' + esc(U('sugTitle')) + '</h4><p>'
    + (hasSugg(d.sug) ? esc(d.sug) : '<span class="modal-empty">' + esc(U('sinSug')) + '</span>') + '</p></div>';
  return h;
}
function commentsBlock(obs, cc) {
  const order = ['MX', 'CL', 'CO', 'USA'];
  let h = '<div class="modal-comments"><h4>' + esc(U('comentariosOtros')) + '</h4><div class="mc-grid">';
  order.filter((k) => k !== cc).forEach((k) => {
    const raw = obs[k] || '';
    const txt = isEmptyObs(raw) ? '<span class="modal-empty">' + esc(U('noObs')) + '</span>' : esc(raw);
    h += '<div class="mc' + (k === 'USA' ? ' us' : '') + '"><span class="mc-name">' + esc(CFULL(k)) + '</span><p>' + txt + '</p></div>';
  });
  return h + '</div></div>';
}
function showModal() {
  modalBody.parentElement.scrollTop = 0;
  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add('open'));
  document.body.style.overflow = 'hidden';
}

function openFueraModal(b) {
  if (!modal || !modalBody) return;
  const code = b.code; const cc = (code || '').split('-')[0];
  const d = getDetail(code) || {};
  const niv = NIV(d.niv || b.niv);
  const tipo = (d.tipo && d.tipo !== 'N/A') ? TIPO(d.tipo) : '';
  const obs = (d.obs && Object.keys(d.obs).length) ? d.obs : (b.obs || {});
  const mpList = (b.mp || []).map((n) => 'MP' + n + ' · ' + MPN(n));

  let html = '<div class="modal-head">'
    + '<span class="modal-code' + (cc === 'USA' ? ' us' : '') + '">' + esc(code) + '</span>'
    + '<span class="modal-country">' + esc(CFULL(cc)) + (niv ? ' · ' + esc(niv) : '') + '</span>'
    + (tipo ? '<span class="modal-tipo">' + esc(tipo) + '</span>' : '')
    + '</div>';
  html += '<h3 id="modalTitle">' + esc(fueraTit(code, b.tit || d.tit)) + '</h3>';
  if (mpList.length) {
    html += '<div class="modal-subsume"><span class="ms-label">' + esc(U('subLabel')) + '</span><span class="ms-mp">' + esc(mpList.join('  ·  ')) + '</span></div>';
    html += '<p class="modal-subsume-note">' + esc(U('subNote')) + '</p>';
  } else {
    html += '<div class="modal-subsume excluded"><span class="ms-label">' + esc(U('sinMP')) + '</span><span class="ms-mp">' + esc(U('excl')) + '</span></div>';
    html += '<p class="modal-subsume-note">' + esc(U('exclNote')) + '</p>';
  }
  html += flowBlocks(d.actual || b.actual, d.futura || b.futura);
  html += gapSugBlocks(d);
  html += commentsBlock(obs, cc);
  modalBody.innerHTML = html;
  lastModal = { type: 'fuera', b };
  showModal();
}

function openBrechaDetalle(code) {
  const d = getDetail(code);
  if (!d || !modal || !modalBody) return;
  const cc = (code.split('-')[0] || '').toUpperCase();
  const niv = NIV(d.niv);
  const tipo = (d.tipo && d.tipo !== 'N/A') ? TIPO(d.tipo) : '';

  let html = '<div class="modal-head">'
    + '<span class="modal-code' + (cc === 'USA' ? ' us' : '') + '">' + esc(code) + '</span>'
    + '<span class="modal-country">' + esc(CFULL(cc)) + (niv ? ' · ' + esc(niv) : '') + '</span>'
    + (tipo ? '<span class="modal-tipo">' + esc(tipo) + '</span>' : '')
    + '</div>';
  html += '<h3 id="modalTitle">' + esc(d.tit || code) + '</h3>';
  html += flowBlocks(d.actual, d.futura);
  html += gapSugBlocks(d);
  html += commentsBlock(d.obs || {}, cc);
  modalBody.innerHTML = html;
  lastModal = { type: 'brecha', code };
  showModal();
}
window.openBrechaDetalle = openBrechaDetalle;

function closeFueraModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  lastModal = null;
  setTimeout(() => { modal.hidden = true; }, 320);
}

modalClose?.addEventListener('click', closeFueraModal);
modal?.addEventListener('click', (e) => { if (e.target === modal) closeFueraModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal && !modal.hidden) closeFueraModal(); });

// --- Glosario operativo: botón del header abre una modal ---
const glosarioBtn = document.getElementById('glosarioBtn');
const glosarioModal = document.getElementById('glosarioModal');
const glosarioClose = document.getElementById('glosarioClose');
function openGlosario() { if (!glosarioModal) return; glosarioModal.hidden = false; requestAnimationFrame(() => glosarioModal.classList.add('open')); document.body.style.overflow = 'hidden'; }
function closeGlosario() { if (!glosarioModal) return; glosarioModal.classList.remove('open'); document.body.style.overflow = ''; setTimeout(() => { glosarioModal.hidden = true; }, 320); }
glosarioBtn?.addEventListener('click', openGlosario);
glosarioClose?.addEventListener('click', closeGlosario);
glosarioModal?.addEventListener('click', (e) => { if (e.target === glosarioModal) closeGlosario(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && glosarioModal && !glosarioModal.hidden) closeGlosario(); });

// --- Taxonomía de transversalidad: botón del header abre una modal ---
const taxBtn = document.getElementById('taxonomiaBtn');
const taxModal = document.getElementById('taxonomiaModal');
const taxClose = document.getElementById('taxonomiaClose');
function openTax() { if (!taxModal) return; taxModal.hidden = false; requestAnimationFrame(() => taxModal.classList.add('open')); document.body.style.overflow = 'hidden'; }
function closeTax() { if (!taxModal) return; taxModal.classList.remove('open'); document.body.style.overflow = ''; setTimeout(() => { taxModal.hidden = true; }, 320); }
taxBtn?.addEventListener('click', openTax);
taxClose?.addEventListener('click', closeTax);
taxModal?.addEventListener('click', (e) => { if (e.target === taxModal) closeTax(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && taxModal && !taxModal.hidden) closeTax(); });

// --- Brechas fuera del corte: lista por país ---
function renderFuera(country) {
  if (!fueraList) return;
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
    h.textContent = fueraTit(b.code, b.tit);
    body.appendChild(h);
    const tags = document.createElement('div');
    tags.className = 'fuera-tags';
    if (b.niv) { const n = document.createElement('span'); n.className = 'nivel'; n.textContent = NIV(b.niv); tags.appendChild(n); }
    if (b.tipo && b.tipo !== 'N/A') { const t = document.createElement('span'); t.className = 'tipo'; t.textContent = TIPO(b.tipo); tags.appendChild(t); }
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
      activeFueraCountry = tab.dataset.c;
      renderFuera(activeFueraCountry);
    });
  });
  renderFuera(activeFueraCountry);
}

// --- CEO quote: word-by-word reveal on scroll (bilingüe) ---
let ceoObserved = false;
function renderCeo() {
  const ceoText = document.querySelector('.ceo-text');
  if (!ceoText) return;
  const text = I ? I.ceo() : ceoText.textContent;
  const HL = /core|dato|data|único|unique|alto|estructura|structure|dolores|pains|nueve|nine|born|registro|record/i;
  const words = text.trim().split(/\s+/);
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
  if (!ceoObserved) {
    new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) ceoText.classList.add('revealed'); }); },
      { threshold: 0.25 }
    ).observe(ceoText);
    ceoObserved = true;
  } else {
    ceoText.classList.add('revealed');
  }
}
renderCeo();

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
        const eased = 1 - Math.pow(1 - p, 3);
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

// ============================================================
//  i18n: re-render dinámico al cambiar de idioma + init
// ============================================================
if (I) {
  I.onChange(() => {
    if (fueraList && fueraTabs.length) renderFuera(activeFueraCountry);
    renderCeo();
    if (lastModal && modal && !modal.hidden) {
      if (lastModal.type === 'fuera') openFueraModal(lastModal.b);
      else openBrechaDetalle(lastModal.code);
    }
  });
  I.init();
}
