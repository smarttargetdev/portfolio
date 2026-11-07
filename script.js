(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  let R = null;
  let lang = 'pt-BR';
  let theme = 'dark';

  const UI = {
    'pt-BR': {
      nav: ['Início', 'Sobre', 'Stack', 'Experiência', 'Resumo', 'Formação', 'Contato'],
      tag: 'Aberto a propostas',
      lead: 'Mais de 30 anos transformando processos corporativos em sistemas confiáveis: do firmware ao micro-frontend, do mercado financeiro ao chão de fábrica.',
      work: 'Ver experiência →', contact: 'Entrar em contato',
      stats: ['Experiência', 'Stack', 'Local', 'Status'],
      statsV: ['+30 anos', '.NET, C#, Angular, React', 'São Caetano do Sul, SP', 'Aberto a propostas'],
      about: 'Sobre', stack: 'Stack técnico', exp: 'Trajetória', sum: 'Resumo de qualificações',
      edu: 'Formação e idiomas', degrees: 'Formação', langs: 'Idiomas', cont: 'Vamos conversar',
      contLead: 'Aberto a propostas, colaborações e papo técnico.',
      copy: 'Copiar e-mail', copied: 'E-mail copiado!', more: 'Ver mais', less: 'Ver menos',
      footL: 'Construído com HTML, CSS e JavaScript.', footR: 'Pressione ` para abrir o terminal',
      cur: 'Atual', fabAria: 'Abrir terminal',
    },
    'en-US': {
      nav: ['Home', 'About', 'Stack', 'Experience', 'Summary', 'Education', 'Contact'],
      tag: 'Open to work',
      lead: 'Over 30 years turning corporate processes into reliable systems: from firmware to micro-frontends, from financial markets to the factory floor.',
      work: 'See experience →', contact: 'Get in touch',
      stats: ['Experience', 'Stack', 'Location', 'Status'],
      statsV: ['30+ years', '.NET, C#, React', 'São Caetano do Sul, SP', 'Open to work'],
      about: 'About', stack: 'Tech stack', exp: 'Career', sum: 'Summary of qualifications',
      edu: 'Education & languages', degrees: 'Education', langs: 'Languages', cont: "Let's talk",
      contLead: 'Open to offers, collaborations and tech chat.',
      copy: 'Copy email', copied: 'Email copied!', more: 'Show more', less: 'Show less',
      footL: 'Built with HTML, CSS and JavaScript.', footR: 'Press ` to open the terminal',
      cur: 'Current', fabAria: 'Open terminal',
    },
  };
  const T = (o) => (o == null ? '' : typeof o === 'string' ? o : o[lang] || o['pt-BR'] || '');
  const U = () => UI[lang];
  const contact = (id) => R.contactInfo.find((c) => c.id === id);
  const sec = () => R.sections;

  /* ---------- storage seguro ---------- */
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignora */ } },
  };

  /* ---------- render ---------- */
  function render() {
    const u = U();
    document.documentElement.lang = lang;
    document.title = `${R.header.fullName} — ${T(R.header.targetPosition).split('|')[0].trim()}`;
    const ids = ['hero', 'about', 'stack', 'experience', 'summary', 'education', 'contact'];
    $('navLinks').innerHTML = ids.map((id, i) => `<a href="#${id}">${u.nav[i]}</a>`).join('');
    $('brandName').textContent = R.header.fullName.split(' ').filter((_, i, a) => i === 0 || i === a.length - 1).join(' ');
    $('langBtn').textContent = lang === 'pt-BR' ? 'PT | en' : 'pt | EN';
    $('termFab').innerHTML = `<kbd>\`</kbd> terminal`;

    $('heroTag').textContent = u.tag;
    $('heroTitle').textContent = T(R.header.targetPosition).replace(' | ', ' · ');
    $('heroLead').textContent = u.lead;
    $('ctaWork').textContent = u.work;
    $('ctaContact').textContent = u.contact;
    $('heroCode').innerHTML =
      `<span class="k">public class</span> <span class="t">Osvandir</span> {\n` +
      `  <span class="k">string</span> Role = <span class="s">"Software Architect"</span>;\n` +
      `  <span class="k">string[]</span> Stack = <span class="k">[</span>\n` +
      `    <span class="s">".NET"</span>,\n` +
      `    <span class="s">"C#"</span>,\n` +
      `    <span class="s">"Angular"</span>,\n` +
      `    <span class="s">"React"</span>\n` +
      `  <span class="k">]</span>;\n` +
      `  <span class="k">string</span> City = <span class="s">"São Caetano do Sul"</span>;\n` +
      `  <span class="k">int</span> Experience = <span class="s">30</span>;\n` +
      `  <span class="k">bool</span> Hiring = <span class="k">true</span>;\n}<span class="caret"></span>`;
    $('heroStats').innerHTML = u.stats.map((s, i) => `<div><dt>${esc(s)}</dt><dd>${esc(u.statsV[i])}</dd></div>`).join('');

    // sobre
    $('tAbout').textContent = T(sec().objective.title) === '' ? u.about : u.about;
    $('aboutText').innerHTML =
      `<h3>${esc(T(sec().objective.title))}</h3><p>${esc(T(sec().objective.content))}</p>` +
      `<h3>${esc(T(sec().personalProfile.title))}</h3><p>${esc(T(sec().personalProfile.content))}</p>`;
    const loc = contact('location'), em = contact('email'), ph = contact('phone'), wa = contact('whatsapp');
    const edu0 = sec().education.items[0];
    $('aboutFacts').innerHTML =
      `<div><dt>${esc(T(loc.label))}</dt><dd><a href="${loc.href}" target="_blank" rel="noopener">${esc(T(loc.value))}</a></dd></div>` +
      `<div><dt>${esc(T(em.label))}</dt><dd><a href="${em.href}">${esc(em.value)}</a></dd></div>` +
      `<div><dt>${esc(T(ph.label))}</dt><dd><a href="${ph.href}">${esc(ph.value)}</a></dd></div>` +
      `<div><dt>${esc(T(wa.label))}</dt><dd><a href="${wa.href}" target="_blank" rel="noopener">${esc(wa.value)}</a></dd></div>` +
      `<div><dt>${esc(u.degrees)}</dt><dd>${esc(T(edu0.degree))} · ${esc(edu0.institution)}</dd></div>`;

    // stack
    $('tStack').textContent = u.stack;
    $('stackGrid').innerHTML = sec().expertiseAreas.categories.map((c) => {
      const txt = T(c.items);
      const short = txt.length < 160;
      const body = short
        ? `<div class="chips">${txt.split(/,\s*|\s+e\s+|\s+and\s+/).filter(Boolean).map((x) => `<span class="chip">${esc(x.trim())}</span>`).join('')}</div>`
        : `<p class="long">${esc(txt)}</p>`;
      return `<article class="card"><h3>${esc(T(c.name))}</h3>${body}</article>`;
    }).join('');

    // experiência
    $('tExp').textContent = u.exp;
    $('timeline').innerHTML = sec().professionalExperience.items.map((it, i) => {
      const lis = it.highlights.map((h) => `<li>${esc(T(h))}</li>`).join('');
      const cur = i === 0 && !it.endDate ? `<span class="badge">${u.cur}</span>` : '';
      return `<li><span class="when">${esc(T(it.period))}</span>` +
        `<h3 class="role">${esc(T(it.role))}<span class="badge">${esc(T(it.contractType))}</span>${cur}</h3>` +
        `<p class="co">${esc(it.company)}</p><ul>${lis}</ul></li>`;
    }).join('');

    // resumo
    $('tSum').textContent = u.sum;
    $('summaryText').innerHTML = sec().qualificationsSummary.paragraphs.map((p) => `<p>${esc(T(p))}</p>`).join('');

    // formação
    $('tEdu').textContent = u.edu;
    $('tDegrees').textContent = u.degrees;
    $('tLangs').textContent = u.langs;
    $('eduList').innerHTML = sec().education.items.map((e) => `<li>${esc(T(e.degree))}<small>${esc(e.institution)}</small></li>`).join('');
    $('langList').innerHTML = sec().languageProficiency.items.map((l) => `<li>${esc(T(l.language))}<small>${esc(T(l.level))}</small></li>`).join('');

    // contato
    $('tContact').textContent = u.cont;
    $('mailBig').textContent = em.value;
    $('mailBig').href = em.href;
    $('contactLead').textContent = u.contLead;
    $('contactBtns').innerHTML =
      `<button class="btn primary" type="button" id="copyMail">${u.copy}</button>` +
      `<a class="btn" href="${wa.href}" target="_blank" rel="noopener">WhatsApp ↗</a>` +
      `<a class="btn" href="${ph.href}">${esc(T(ph.label))} ↗</a>`;
    $('copyMail').onclick = copyMail;

    $('footL').textContent = u.footL;
    $('footR').innerHTML = `© ${esc(R.header.fullName)} · ${esc(u.footR)}`;
    observe();
  }

  function toast(msg) {
    const t = document.createElement('div');
    t.className = 'toast'; t.textContent = msg; t.setAttribute('role', 'status');
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 1800);
  }
  function copyMail() {
    const m = contact('email').value;
    const done = () => toast(U().copied);
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(m).then(done, done);
    else done();
  }

  /* ---------- tema / idioma / menu / scroll-spy ---------- */
  function setTheme(t) {
    theme = t;
    document.documentElement.dataset.theme = t;
    $('themeBtn').textContent = t === 'dark' ? '☀' : '☾';
    store.set('theme', t);
  }
  function setLang(l) {
    lang = l; store.set('lang', l);
    render(); prompt();
  }
  let io;
  function observe() {
    if (io) io.disconnect();
    const links = [...document.querySelectorAll('#navLinks a')];
    io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
    }), { rootMargin: '-40% 0px -55% 0px' });
    document.querySelectorAll('main section').forEach((s) => io.observe(s));
    links.forEach((a) => a.addEventListener('click', () => $('navLinks').classList.remove('open')));
  }

  /* ---------- terminal ---------- */
  const out = () => $('termOut');
  const history = []; let hi = 0;
  const line = (html, cls = '') => {
    const d = document.createElement('div');
    d.className = 'ln ' + cls; d.innerHTML = html;
    out().appendChild(d); out().scrollTop = out().scrollHeight;
  };
  const raw = (s, cls) => line(esc(s), cls);
  const prompt = () => { $('termPrompt').textContent = 'osvandir@portfolio:~$'; };
  const pad = (s, n) => String(s).padEnd(n, ' ');

  const files = ['about.txt', 'skills.txt', 'experience.txt', 'education.txt', 'languages.txt', 'contact.txt', 'resume.json'];

  const cmds = {
    help() {
      const rows = [
        ['help', 'lista os comandos / list commands'],
        ['whoami', 'quem sou eu / who am I'],
        ['about', 'objetivo e perfil / objective & profile'],
        ['skills [categoria]', 'áreas de conhecimento / expertise'],
        ['experience [n]', 'experiência profissional / work history'],
        ['education', 'formação acadêmica / education'],
        ['languages', 'idiomas / languages'],
        ['contact', 'meios de contato / contact info'],
        ['ls · cat <arquivo>', 'navegar nos arquivos / browse files'],
        ['neofetch', 'resumo do sistema / system summary'],
        ['lang pt|en', 'trocar idioma / switch language'],
        ['theme dark|light', 'trocar tema / switch theme'],
        ['goto <seção>', 'rolar até a seção / jump to section'],
        ['clear · exit', 'limpar / fechar'],
      ];
      rows.forEach(([a, b]) => line(`<span class="hl">${esc(pad(a, 22))}</span><span class="dim">${esc(b)}</span>`));
    },
    whoami() {
      raw(R.header.fullName, 'hl');
      raw(T(R.header.targetPosition));
      raw(T(contact('location').value), 'dim');
    },
    about() {
      raw(T(sec().objective.title).toUpperCase(), 'hl'); raw(T(sec().objective.content)); raw('');
      raw(T(sec().personalProfile.title).toUpperCase(), 'hl'); raw(T(sec().personalProfile.content));
    },
    skills(args) {
      const cats = sec().expertiseAreas.categories;
      const q = args.join(' ').toLowerCase();
      const list = q ? cats.filter((c) => T(c.name).toLowerCase().includes(q) || c.name['pt-BR'].toLowerCase().includes(q)) : cats;
      if (!list.length) return raw(`categoria não encontrada: ${q}`, 'err');
      list.forEach((c) => {
        line(`<span class="hl">${esc(T(c.name))}</span>`);
        raw('  ' + T(c.items));
        if (list.length > 1) raw('');
      });
      if (!q) raw(lang === 'pt-BR' ? 'Dica: skills <categoria>, ex.: skills cloud' : 'Tip: skills <category>, e.g. skills cloud', 'dim');
    },
    experience(args) {
      const items = sec().professionalExperience.items;
      const n = parseInt(args[0], 10);
      if (n >= 1 && n <= items.length) {
        const it = items[n - 1];
        line(`<span class="hl">${esc(T(it.role))}</span> @ ${esc(it.company)}`);
        raw(`${T(it.period)} · ${T(it.contractType)}`, 'dim');
        it.highlights.forEach((h) => raw('• ' + T(h)));
        return;
      }
      items.forEach((it, i) => line(`<span class="dim">${esc(pad(i + 1, 3))}</span><span class="hl">${esc(pad(T(it.period), 22))}</span>${esc(it.company)} <span class="dim">— ${esc(T(it.role))}</span>`));
      raw(lang === 'pt-BR' ? 'Detalhes: experience <nº>' : 'Details: experience <n>', 'dim');
    },
    education() {
      sec().education.items.forEach((e) => line(`<span class="hl">${esc(T(e.degree))}</span> — ${esc(e.institution)}`));
    },
    languages() {
      sec().languageProficiency.items.forEach((l) => line(`<span class="hl">${esc(T(l.language))}</span>: ${esc(T(l.level))}`));
    },
    contact() {
      R.contactInfo.forEach((c) => {
        const v = T(c.value);
        const val = c.href && c.href !== 'null' ? `<a href="${esc(c.href)}" target="_blank" rel="noopener">${esc(v)}</a>` : esc(v);
        if (c.id === 'birthDate') return;
        line(`<span class="hl">${esc(pad(T(c.label), 14))}</span>${val}`);
      });
    },
    ls() { raw(files.join('  ')); },
    cat(args) {
      const f = args[0];
      const map = { 'about.txt': 'about', 'skills.txt': 'skills', 'experience.txt': 'experience', 'education.txt': 'education', 'languages.txt': 'languages', 'contact.txt': 'contact' };
      if (!f) return raw('uso: cat <arquivo>', 'err');
      if (f === 'resume.json') return raw(JSON.stringify({ name: R.header.fullName, position: T(R.header.targetPosition), email: contact('email').value }, null, 2));
      if (map[f]) return cmds[map[f]]([]);
      raw(`cat: ${f}: arquivo não encontrado`, 'err');
    },
    neofetch() {
      const yrs = new Date().getFullYear() - 1994;
      const info = [
        ['user', 'osvandir@portfolio'], ['role', T(R.header.targetPosition)], ['uptime', `${yrs}+ years coding`],
        ['shell', 'portfolio-sh 1.0'], ['langs', 'C#, C++, Python, Java, TS'], ['cloud', 'AWS · Azure · GCP'],
        ['os', 'Windows · Linux · Android'], ['status', 'open to work'],
      ];
      info.forEach(([k, v]) => line(`<span class="hl">${esc(pad(k, 8))}</span>${esc(v)}`));
    },
    lang(args) {
      const a = (args[0] || '').toLowerCase();
      if (a === 'pt') { setLang('pt-BR'); raw('Idioma: Português (BR)', 'hl'); }
      else if (a === 'en') { setLang('en-US'); raw('Language: English (US)', 'hl'); }
      else raw('uso: lang pt|en', 'err');
    },
    theme(args) {
      const a = (args[0] || '').toLowerCase();
      if (a === 'dark' || a === 'light') { setTheme(a); raw(`theme: ${a}`, 'hl'); } else raw('uso: theme dark|light', 'err');
    },
    goto(args) {
      const m = { home: 'hero', about: 'about', sobre: 'about', stack: 'stack', skills: 'stack', experience: 'experience', experiencia: 'experience', summary: 'summary', resumo: 'summary', education: 'education', formacao: 'education', contact: 'contact', contato: 'contact' };
      const id = m[(args[0] || '').toLowerCase()];
      if (!id) return raw('uso: goto home|about|stack|experience|summary|education|contact', 'err');
      document.getElementById(id).scrollIntoView(); raw(`→ #${id}`, 'dim');
    },
    clear() { out().innerHTML = ''; },
    exit() { closeTerm(); },
    welcome() {
      raw('Hello World! Type help to see available commands.', 'hl');
    },
    sudo() { raw('osvandir is not in the sudoers file. This incident will be reported.', 'err'); },
  };
  cmds.dir = cmds.ls; cmds.projects = cmds.experience; cmds.cls = cmds.clear; cmds.quit = cmds.exit;

  function run(input) {
    const s = input.trim();
    line(`<span class="cmd">osvandir@portfolio:~$</span> ${esc(s)}`);
    if (!s) return;
    history.push(s); hi = history.length;
    const [c, ...args] = s.split(/\s+/);
    const fn = cmds[c.toLowerCase()];
    if (fn) fn(args);
    else raw(`${c}: command not found. Type help.`, 'err');
    out().scrollTop = out().scrollHeight;
  }

  let welcomed = false;
  function openTerm() {
    $('term').hidden = false; $('termFab').hidden = true;
    if (!welcomed) { welcomed = true; line('<span class="cmd">osvandir@portfolio:~$</span> welcome'); cmds.welcome(); }
    $('termInput').focus();
  }
  function closeTerm() { $('term').hidden = true; $('termFab').hidden = false; $('termFab').focus(); }

  function bindTerminal() {
    $('termFab').addEventListener('click', openTerm);
    $('termClose').addEventListener('click', closeTerm);
    $('termForm').addEventListener('submit', (e) => { e.preventDefault(); const v = $('termInput').value; $('termInput').value = ''; run(v); });
    $('termInput').addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') { e.preventDefault(); if (hi > 0) $('termInput').value = history[--hi]; }
      else if (e.key === 'ArrowDown') { e.preventDefault(); hi = Math.min(hi + 1, history.length); $('termInput').value = history[hi] || ''; }
      else if (e.key === 'Tab') {
        e.preventDefault();
        const v = $('termInput').value.trim();
        const m = Object.keys(cmds).filter((k) => k.startsWith(v));
        if (m.length === 1) $('termInput').value = m[0] + ' ';
      } else if (e.key === 'l' && e.ctrlKey) { e.preventDefault(); cmds.clear(); }
    });
    document.addEventListener('keydown', (e) => {
      const typing = /^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName);
      if (e.key === '`' && !typing) { e.preventDefault(); $('term').hidden ? openTerm() : closeTerm(); }
      else if (e.key === 'Escape' && !$('term').hidden) closeTerm();
    });
    $('termOut').addEventListener('click', () => { if (!getSelection().toString()) $('termInput').focus(); });
  }

  /* ---------- init ---------- */
  async function init() {
    $('themeBtn').addEventListener('click', () => setTheme(theme === 'dark' ? 'light' : 'dark'));
    $('langBtn').addEventListener('click', () => setLang(lang === 'pt-BR' ? 'en-US' : 'pt-BR'));
    $('menuBtn').addEventListener('click', () => $('navLinks').classList.toggle('open'));
    bindTerminal();
    setTheme(store.get('theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
    try {
      const res = await fetch('resume.json');
      if (!res.ok) throw new Error(res.status);
      R = await res.json();
    } catch (err) {
      document.querySelector('main').innerHTML =
        '<section class="wrap"><h2 class="sec">resume.json</h2><p class="lead">Não foi possível carregar o resume.json. Abra o site por um servidor local (ex.: <code>python -m http.server</code>) em vez de abrir o arquivo direto.</p></section>';
      return;
    }
    lang = store.get('lang') || R.language.default || 'pt-BR';
    render();
  }
  init();
})();
