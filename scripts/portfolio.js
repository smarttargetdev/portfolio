(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  let R = null;
  let lang = 'pt-BR';
  let theme = 'dark';

  const UI = {
    'pt-BR': {
      nav: ['Início', 'Sobre', 'Stack', 'Projetos', 'Formação', 'Contato'],
      tag: 'Engenheiro de Software | .NET / C# / C++ / Python | Agentes de IA & Cloud (AWS/Azure/GCP/Cloudflare) | Microserviços | Sistemas Críticos',
      title: 'Projeto sistemas, resolvo problemas e escrevo código que dura.',
      lead: 'Engenheiro de software sênior especializado em .NET, C#, C++, Python, agentes de IA e cloud (AWS/Azure/GCP/Cloudflare) com mais de 30 anos de experiência em desenvolvimento no setor bancário e no mercado financeiro, além de indústria e pesquisa tecnológica — construindo microsserviços e sistemas críticos.',
      work: 'Ver projetos →', contact: 'Entrar em contato',
      stats: ['Experiência', 'Stack', 'Local', 'Status'],
      statsV: ['+30 anos', '.NET · C# · C++ · IA · Cloud', 'São Caetano do Sul, SP', '● Aberto a propostas'],
      role: 'Engenheiro de Software', city: 'São Caetano do Sul, BR',
      about: 'Sobre', aboutS: '',
      aboutP: [
        'Desenvolvedor com mais de 30 anos de atuação na engenharia, arquitetura e desenvolvimento de soluções computacionais de alta complexidade e missão crítica.',
        'Tendo sólida formação teórica e grande experiência, meu perfil une visão estratégica de arquitetura de software, desenvolvimento full stack, engenharia de baixo nível (drivers, firmwares e RTOS), desenvolvimento de sistemas distribuídos, microsserviços, ecossistemas em nuvem e inteligência artificial.',
        'Ao longo da minha carreira, especializei-me na criação de sistemas para o setor bancário e mercado financeiro (Itaú, Easyinvest, BM&F/B3), além de conduzir projetos para órgãos governamentais (FIESP, FAPESP, SSP-SP, Secretarias da Educação e da Cultura), setores comerciais e industriais, além de soluções de tecnologia assistiva.',
      ],
      resumo: 'Em resumo',
      facts: [['Local', 'São Caetano do Sul – SP'], ['Educação', 'Ciências da Computação (IMES)'], ['Foco', '.NET · C++ · Python · Agentes de IA · Cloud'], ['Idiomas', 'Português · Inglês'], ['Metodologias', 'Agile · Scrum · Kanban'], ['Experiência', '+30 anos'], ['Setores', 'Bancário · Mercado Financeiro · Indústria · Governo · Pesquisa']],
      areas: [
        ['Bancário e mercado financeiro', 'Itaú, Easyinvest, Banco Alfa e B3: sincronização de senhas entre AS400 e alta plataforma via IBM MQ, remessa de numerário para caixas eletrônicos, sistema de investimentos de renda fixa e variável, autorização com JWT e sustentação de sistemas de negociação na B3.'],
        ['.NET e C++', 'Back-end em C# e .NET Core (WebAPI, WCF, Entity Framework) e C/C++ de baixo nível: Win32, drivers, threading e IPC.'],
        ['Python e IA', 'Pesquisa na FAPESP com Python e TensorFlow (voz para LIBRAS em FPGAs e NPUs) e uso de agentes de IA como OpenAI, Claude, Gemini e n8n.'],
        ['Cloud e microsserviços', 'AWS (RDS, S3, EC2), Azure e GCP; microsserviços, micro-frontends, Docker, Kubernetes e CI/CD.'],
        ['Dados', 'SQL Server, Oracle, MySQL e MongoDB: procedures, triggers, transações e bulk operations.'],
        ['Segurança e infraestrutura', 'JWT, SSO/MFA, PKI, TLS e SAML; Active Directory, LDAP, DNS e GPO, com migração de redes NT4 e AD.'],
      ],
      stack: 'Stack Técnico', stackS: '',
      workT: 'Projetos em Destaque', workS: '',
      journey: 'Trajetória', journeyS: '',
      edu: 'Formação & Idiomas', eduS: '',
      degrees: 'Formação', langs: 'Idiomas', meth: 'Metodologias', methV: ['Agile', 'Scrum', 'Kanban', 'DevOps', 'CI/CD'],
      cont: 'Vamos conversar',
      contLead: 'Aberto a propostas para Engenheiro de Software (ou Arquiteto de Software), especialmente nos setores bancário e financeiro, para colaborações e bate-papo técnico.',
      fixo: 'fixo', copy: 'Copiar e-mail', copied: 'E-mail copiado!', cv: 'Currículo',
      footL: 'Construído com HTML, CSS e bastante café.', footR: 'Pressione ` para abrir o terminal',
      cur: 'Atual',
    },
    'en-US': {
      nav: ['Home', 'About', 'Stack', 'Projects', 'Education', 'Contact'],
      tag: 'Software Engineer | .NET / C# / C++ / Python | AI Agents & Cloud (AWS/Azure/GCP/Cloudflare) | Microservices | Mission-Critical Systems',
      title: 'I design systems, solve problems and write code that lasts.',
      lead: 'Senior software engineer specialized in .NET, C#, C++, Python, AI agents and cloud (AWS/Azure/GCP/Cloudflare) with 30+ years of experience in banking and financial markets, plus industry and technology research — building microservices and mission-critical systems.',
      work: 'See projects →', contact: 'Get in touch',
      stats: ['Experience', 'Stack', 'Location', 'Status'],
      statsV: ['30+ years', '.NET · C# · C++ · AI · Cloud', 'São Caetano do Sul, SP', '● Open to work'],
      role: 'Software Engineer', city: 'São Caetano do Sul, BR',
      about: 'About', aboutS: '',
      aboutP: [
        'Developer with 30+ years in the engineering, architecture and development of highly complex, mission-critical computing solutions.',
        'With a solid theoretical background and extensive experience, my profile combines strategic software architecture vision, full-stack development, low-level engineering (drivers, firmware and RTOS), distributed systems, microservices, cloud ecosystems and artificial intelligence.',
        'Throughout my career I specialized in building systems for banking and financial markets (Itaú, Easyinvest, BM&F/B3), and also led projects for government bodies (FIESP, FAPESP, SSP-SP, the State Education and Culture Secretariats), commercial and industrial sectors, and assistive-technology solutions.',
      ],
      resumo: 'At a glance',
      facts: [['Location', 'São Caetano do Sul – SP'], ['Education', 'Computer Science (IMES)'], ['Focus', '.NET · C++ · Python · AI Agents · Cloud'], ['Languages', 'Portuguese · English'], ['Methodologies', 'Agile · Scrum · Kanban'], ['Experience', '30+ years'], ['Sectors', 'Banking · Financial Markets · Industry · Government · Research']],
      areas: [
        ['Banking & financial markets', 'Itaú, Easyinvest, Banco Alfa and B3: password synchronization between AS400 and the mainstream platform via IBM MQ, cash replenishment for ATMs, fixed- and variable-income investment systems, JWT authorization and support of trading systems at B3.'],
        ['.NET & C++', 'Back-end in C# and .NET Core (WebAPI, WCF, Entity Framework) and low-level C/C++: Win32, drivers, threading and IPC.'],
        ['Python & AI', 'FAPESP research with Python and TensorFlow (speech to LIBRAS on FPGAs and NPUs) and use of AI agents such as OpenAI, Claude, Gemini and n8n.'],
        ['Cloud & microservices', 'AWS (RDS, S3, EC2), Azure and GCP; microservices, micro-frontends, Docker, Kubernetes and CI/CD.'],
        ['Data', 'SQL Server, Oracle, MySQL and MongoDB: procedures, triggers, transactions and bulk operations.'],
        ['Security & infrastructure', 'JWT, SSO/MFA, PKI, TLS and SAML; Active Directory, LDAP, DNS and GPO, with NT4 and AD network migrations.'],
      ],
      stack: 'Tech Stack', stackS: '',
      workT: 'Featured Projects', workS: '',
      journey: 'Career', journeyS: '',
      edu: 'Education & Languages', eduS: '',
      degrees: 'Education', langs: 'Languages', meth: 'Methodologies', methV: ['Agile', 'Scrum', 'Kanban', 'DevOps', 'CI/CD'],
      cont: "Let's talk",
      contLead: 'Open to offers for Software Engineer (or Software Architect) roles, especially in banking and finance, as well as collaborations and tech chat.',
      fixo: 'landline', copy: 'Copy email', copied: 'Email copied!', cv: 'Résumé',
      footL: 'Built with HTML, CSS and plenty of coffee.', footR: 'Press ` to open the terminal',
      cur: 'Current',
    },
  };
  // [empresa, destaque, título PT, título EN, tecnologias]
  const LINKS = { linkedin: 'https://www.linkedin.com/in/osilvajr', cv: 'https://cv.smarttarget.com.br' };
  const WA_ICON = '<svg class="wa" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';
  const PROJECTS = [
    [2, 0, 'Sincronização de Senhas de Usuário', 'User password synchronization', ['C#', '.NET Core', 'IBM MQ Series', 'SQL Server', 'Splunk'], 'Banco Itaú S/A.', { d: { 'pt-BR': 'Desenvolvimento de subsistema de sincronização de senhas de correntistas entre baixa e alta plataforma (IBM AS400↔SQL Server) através de enfileiramento de mensagens, com coleta e tratamento de logs.', 'en-US': 'Development of a subsystem to synchronize the passwords of bank account holders between low-end and high-end platforms (IBM AS400↔SQL Server) through message queuing, with log collection and processing.' } }],
    [2, 1, 'Gestão de Remessa para Caixa Eletrônico', 'ATM cash replenishment', ['C#', '.NET Core', 'WebAPI', 'AWS RDS', 'React'], 'Banco Itaú S/A.', { d: { 'pt-BR': 'Desenvolvimento de sistema de gestão de remessa de numerários para caixa eletrônico e gestão de carro forte.', 'en-US': 'Development of a system for managing cash shipments to ATMs and armored-truck management.' } }],
    [2, 4, 'Gestão de Riscos em Plataforma de Petróleo', 'Oil platform risk management', ['C#', '.NET Core', 'WebAPI', 'Oracle 19c', 'Angular'], 'Petrobras S/A.', { d: { 'pt-BR': 'Desenvolvimento de sistema de gerenciamento de riscos em plataforma de petróleo.', 'en-US': 'Development of a risk management system for oil platforms.' } }],
    [2, 3, 'Sistema de investimentos (CDB/RDB/Tesouro)', 'Investment system (CDB/RDB/Treasury)', ['VB.Net', 'VB6', 'ASP 3'], 'Banco Itaú S/A', { d: { 'pt-BR': 'Sustentação de sistema bancário de investimentos (CDB/RDB/Tesouro) do Itaú em VB.Net, VB6 e ASP3 utilizando armazenamento de dados.', 'en-US': 'Maintenance of the Itaú banking investment system (CDB/RDB/Treasury) in VB.Net, VB6 and ASP3 using data storage.' } }],
    [2, 2, 'Micro-frontend de gestão de ativos de RH', 'HR assets management micro-frontend', ['Angular', 'Micro-frontend'], 'Banco Itaú S/A'],
    [3, 0, 'Autorização de acesso com JWT', 'Access authorization with JWT', ['React', '.NET Core', 'JWT', 'AWS'], 'Easyinvest Banco de Investimentos S/A'],
    [13, 0, 'Sistema de salvados (sinistro de veículos)', 'Salvage system (vehicle claims)', ['Visual Basic 6', 'SQL Server'], 'Banco Alfa'],
    [1, 0, 'Tradução de voz para LIBRAS', 'Speech-to-LIBRAS translation', ['Python', 'TensorFlow', 'FPGA', 'NPU']],
    [13, 1, 'Controle cardiológico de stents', 'Cardiac stent tracking', ['C#', '.NET', 'SQL Server'], 'Instituto Dante Pazzanese'],
    [7, 0, 'Sustentação de sistemas de negociação', 'Trading systems support', ['C++', 'Java', 'Cobol', 'TIBCO']],
    [0, 0, 'Gestão de Estoque', 'Inventory management', ['C#', 'C++', 'VB.NET', 'PowerShell', 'Angular', 'SQL Server'], 'Scania S/A.', { d: { 'pt-BR': 'Sustentação em diversos subsistemas de gestão de estoque, contemplando todo o processo de recebimento, armazenamento e expedição de peças automotivas.', 'en-US': 'Support for several inventory management subsystems, covering the entire process of receiving, storing and shipping automotive parts.' } }],
    [4, 0, 'Vistoria do Corpo de Bombeiros', 'Fire Department inspections', ['C#', '.NET', 'MVP', 'EF', 'SQL Server'], 'Secretaria de Segurança Pública do Estado de São Paulo', { d: { 'pt-BR': 'Desenvolvimento de módulo em sistema de vistoria de incêndios do Corpo de Bombeiros.', 'en-US': 'Development of a module for the Fire Department fire inspection system.' } }],
    [8, 0, 'Secretaria escolar mobile e web', 'School administration: mobile & web', ['WebAPI', 'WCF', 'Oracle 11g']],
    [9, 0, 'Certificado de Origem', 'Certificate of Origin', ['ASP.NET', 'Entity Framework', 'SQL Server']],
    [11, 0, 'Nota Fiscal Eletrônica', 'Electronic Invoice (NF-e)', ['C#', 'WinForms', 'WebForms', 'MVP', 'Oracle 10i', 'Telerik'], '', { co: 'Hiperdata Consultoria Ltda.', d: { 'pt-BR': 'Sistema modular de Nota Fiscal Eletrônica, programado em C#, com interfaces visuais em WinForms e WebForms, arquitetura MVP, com armazenamento de dados em servidor Oracle 10i e integração com serviços do SEFAZ.', 'en-US': 'Modular electronic invoice (NF-e) system, written in C#, with WinForms and WebForms user interfaces, MVP architecture, with data stored on an Oracle 10i server and integration with SEFAZ services.' } }],
    [12, 0, 'Nota Fiscal Paulista em três camadas', 'Nota Fiscal Paulista, three-tier', ['C#', 'WinForms', '3-Tier', 'SQL Server']],
    [11, 3, 'Rastreamento de veículos CAOA', 'CAOA vehicle tracking', ['C#', 'C++', 'SOA', 'Windows Mobile']],
    [12, 3, 'Ponto de Venda de Moda', 'Fashion point of sale', ['ASP3', 'VB6', 'COM', 'ActiveX', 'SQL Server'], 'Compugraf Telecomunicações Ltda.', { d: { 'pt-BR': 'Desenvolvimento de aplicativo de frente de loja (PDV) para o grupo Armani/Dolce & Gabbana/Ermenegildo Zegna com autenticação biométrica.', 'en-US': 'Development of a front-of-store (POS) application for the Armani/Dolce & Gabbana/Ermenegildo Zegna group with biometric authentication.' } }],
    [12, 4, 'Tarifação de Chamadas de PABX', 'PABX call billing', ['C', 'C++', 'Sybase'], '', { co: 'Compugraf Telecomunicações Ltda.', d: { 'pt-BR': 'Sustentação e implementação de novas funcionalidades em sistema de monitoramento, gravação e tarifação de chamadas para PABX (Tadiran).', 'en-US': 'Maintenance and implementation of new features in a call monitoring, recording and billing system for PABX (Tadiran).' } }],
    [14, 0, 'Automação de Tratamento Térmico de Materiais', 'Heat-treatment process automation', ['C++', 'VB6', 'ATL', 'COM', 'ActiveX', 'MySQL'], 'Sotratel – Sociedade de Tratamento Térmico Ltda.', { d: { 'pt-BR': 'Desenvolvimento de sistema de identificação de peças, automação e controle de qualidade do processo de tratamento térmico de materiais (recozimento, cementação, têmpera, revenimento).', 'en-US': 'Development of a system for part identification, automation and quality control of the heat-treatment process for materials (annealing, carburizing, quenching, tempering).' } }],
  ];

  const T = (o) => (o == null ? '' : typeof o === 'string' ? o : o[lang] || o['pt-BR'] || '');
  const U = () => UI[lang];
  const contact = (id) => R.contactInfo.find((c) => c.id === id);
  const sec = () => R.sections;

  /* ---------- storage seguro ---------- */
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignora */ } },
  };

  /* divide texto por separador ignorando o que está entre parênteses */
  function splitTop(txt, sep) {
    const out = []; let d = 0, cur = '';
    for (let i = 0; i < txt.length; i++) {
      const ch = txt[i];
      if (ch === '(') d++; else if (ch === ')') d = Math.max(0, d - 1);
      if (d === 0 && txt.startsWith(sep, i)) { out.push(cur); cur = ''; i += sep.length - 1; continue; }
      cur += ch;
    }
    out.push(cur);
    return out.map((x) => x.trim()).filter(Boolean);
  }
  function splitItems(txt) {
    const w = lang === 'en-US' ? 'and' : 'e';
    const parts = splitTop(txt, ',').map((p) => p.replace(/^and\s+/, ''));
    const out = [];
    parts.forEach((piece, idx) => {
      let p = piece, m;
      const re = new RegExp('\\)\\s+' + w + '\\s+');
      while ((m = re.exec(p))) { out.push(p.slice(0, m.index + 1)); p = p.slice(m.index + m[0].length); }
      const two = p.match(new RegExp('^(\\S+)\\s+' + w + '\\s+(\\S+)$'));
      const bits = p.split(' ' + w + ' ');
      if (two) out.push(two[1], two[2]);
      else if (idx === parts.length - 1 && !p.includes('(') && bits.length === 2) out.push(...bits);
      else out.push(p);
    });
    return out.filter(Boolean);
  }

  const SMALL = { 'pt-BR': ['de', 'do', 'da', 'dos', 'das', 'e', 'a', 'o', 'para', 'em'], 'en-US': ['and', 'of', 'the', 'for', 'in', 'a', 'an', 'to'] };
  function titleCase(s) {
    return s.split(' ').map((w, i) => {
      if (/[A-Z]/.test(w.slice(1)) || (w === w.toUpperCase() && /[A-Z]/.test(w))) return w;
      if (i > 0 && SMALL[lang].includes(w.toLowerCase())) return w.toLowerCase();
      return w.charAt(0).toUpperCase() + w.slice(1);
    }).join(' ');
  }
  /* Infraestrutura, Segurança e Sistemas Operacionais: Title Case; grupos "rótulo (a, b e c)" viram rótulo + um chip por item */
  function infraItems(txt) {
    const out = [];
    splitItems(txt).forEach((p) => {
      const inc = p.match(/^(.*?)\s+(?:incluindo|including)\s+(.*)$/i);
      if (inc) { out.push({ t: titleCase(inc[1].replace(/^the\s+/i, '')), g: true }, { t: titleCase(inc[2]) }); return; }
      const m = p.match(/^(.*?)\s*\((.*)\)$/);
      if (m) { out.push({ t: titleCase(m[1]), g: true }); splitItems(m[2]).forEach((x) => out.push({ t: titleCase(x) })); }
      else out.push({ t: titleCase(p) });
    });
    return out;
  }

  /* remove os chips-rótulo de Infraestrutura, Segurança e Sistemas Operacionais, mantendo os subitens */
  function dropInfraGroups(c, arr) { return arr.filter((x) => !x.g); }

  /* ---------- render ---------- */
  const set = (id, v) => { $(id).textContent = v; };
  function render() {
    const u = U();
    document.documentElement.lang = lang;
    document.title = lang === 'pt-BR' ? 'Osvandir Júnior – Engenheiro de Software' : 'Osvandir Júnior – Software Engineer';
    const ids = ['hero', 'about', 'stack', 'work', 'edu', 'contact'];
    $('navLinks').innerHTML = ids.map((id, i) => `<a href="#${id}">${u.nav[i]}</a>`).join('');
    set('brandInitials', R.header.hero.brand.initials);
    set('brandName', R.header.hero.brand.name);
    set('langBtn', lang === 'pt-BR' ? 'PT | en' : 'pt | EN');
    $('termFab').innerHTML = '<kbd>`</kbd> terminal';

    set('heroTag', u.tag); set('heroTitle', u.title); set('heroLead', u.lead);
    set('ctaWork', u.work); set('ctaContact', u.contact);
    $('heroCode').innerHTML =
      `<span class="k">public class</span> <span class="t">Osvandir</span> {\n` +
      `  <span class="k">string</span> Role  = <span class="s">"${esc(u.role)}"</span>;\n` +
      `  <span class="k">string[]</span> Stack = [\n` +
      `    <span class="s">".NET"</span>,\n` +
      `    <span class="s">"C#"</span>,\n` +
      `    <span class="s">"C++"</span>,\n` +
      `    <span class="s">"Python"</span>,\n` +
      `    <span class="s">"IA"</span>,\n` +
      `    <span class="s">"Cloud"</span>\n` +
      `  ];\n` +
      `  <span class="k">string</span> City  = <span class="s">"São Caetano do Sul, SP"</span>;\n` +
      `  <span class="k">int</span> Experience = <span class="s">30</span>;\n` +
      `  <span class="k">bool</span> Hiring = <span class="k">true</span>;\n}<span class="caret"></span>`;
    $('heroStats').innerHTML = u.stats.map((s, i) => `<div><dt>${esc(s)}</dt><dd>${esc(u.statsV[i])}</dd></div>`).join('');

    // sobre
    set('tAbout', u.about); set('sAbout', u.aboutS); set('tResumo', u.resumo);
    $('aboutText').innerHTML = u.aboutP.map((p) => `<p>${esc(p)}</p>`).join('');
    $('aboutFacts').innerHTML = u.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');
    $('aboutAreas').innerHTML = u.areas.map(([t, d]) => `<article class="card"><h3>${esc(t)}</h3><p>${esc(d)}</p></article>`).join('');

    // stack
    set('tStack', u.stack); set('sStack', u.stackS);
    const groups = []; let prog = null;
    sec().expertiseAreas.categories.forEach((c) => {
      if (['Programação', 'Frontend', 'Scripting'].includes(c.name['pt-BR'])) {
        if (!prog) { prog = { name: T(c.name), items: [] }; groups.push(prog); }
        splitItems(T(c.items)).forEach((x) => { if (!prog.items.some((y) => y.toLowerCase() === x.toLowerCase())) prog.items.push(x); });
      } else groups.push({ name: T(c.name), items: ['Infraestrutura', 'Segurança', 'Sistemas Operacionais'].includes(c.name['pt-BR']) ? dropInfraGroups(c, infraItems(T(c.items))) : splitItems(T(c.items)) });
    });
    /* mescla as metodologias da antiga seção Formação & Idiomas no card Metodologias do Stack */
    groups.forEach((g) => {
      if (/^(metodolog|methodolog)/i.test(g.name)) u.methV.forEach((x) => { if (!g.items.some((y) => y.toLowerCase() === x.toLowerCase())) g.items.push(x); });
    });
    $('stackGrid').innerHTML = groups.map((g) => {
      const wide = g.items.map((x) => x.t || x).join(', ').length >= 160;
      return `<article class="card${wide ? ' wide' : ''}"><h3>${esc(g.name)}</h3><div class="chips">${g.items.map((x) => typeof x === 'string' ? `<span class="chip">${esc(x)}</span>` : `<span class="chip${x.g ? ' grp' : ''}">${esc(x.t)}</span>`).join('')}</div></article>`;
    }).join('');

    // projetos
    set('tWork', u.workT); set('sWork', u.workS);
    const items = sec().professionalExperience.items;
    $('projGrid').innerHTML = PROJECTS.map(([ci, hi, tp, te, tech, org, x = {}], i) => {
      const it = items[ci];
      return `<article class="card proj"><span class="n">${String(i + 1).padStart(2, '0')}</span>` +
        `<h3>${esc(lang === 'pt-BR' ? tp : te)}</h3>` +
        `<span class="meta">${esc(x.co || org || it.company)}</span>` +
        `<p>${esc((x.d && x.d[lang]) || T(it.highlights[hi]))}</p>` +
        `<div class="chips">${tech.map((x) => `<span class="chip">${esc(x)}</span>`).join('')}</div></article>`;
    }).join('');

    // formação
    set('tEdu', u.edu); set('sEdu', u.eduS);
    set('tDegrees', u.degrees); set('tLangs', u.langs);
    $('eduList').innerHTML = sec().education.items.map((e) => `<li>${esc(T(e.degree))}<small>${esc(e.institution)}</small></li>`).join('');
    $('langList').innerHTML = sec().languageProficiency.items.map((l) => `<li>${esc(T(l.language))}<small>${esc(T(l.level))}</small></li>`).join('');

    // contato
    const em = contact('email'), ph = contact('phone'), wa = contact('whatsapp');
    set('tContact', u.cont);
    set('mailBig', em.value); $('mailBig').href = em.href;
    set('contactLead', u.contLead);
    $('phones').innerHTML = `📞 <a href="${ph.href}">${esc(ph.value)}</a><br>${WA_ICON} <a href="${wa.href}" target="_blank" rel="noopener">${esc(wa.value)}</a>`;
    $('contactBtns').innerHTML =
      `<button class="btn primary" type="button" id="copyMail">${u.copy}</button>` +
      `<a class="btn" href="${wa.href}" target="_blank" rel="noopener">${WA_ICON}WhatsApp ↗</a>` +
      `<a class="btn" href="${LINKS.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>` +
      `<a class="btn" href="${LINKS.cv}" target="_blank" rel="noopener">${esc(u.cv)} ↗</a>`;
    $('copyMail').onclick = copyMail;

    set('footL', u.footL);
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
        ['projects [n]', 'projetos em destaque / featured projects'],
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
      line(`<span class="hl">${esc(pad('LinkedIn', 14))}</span><a href="${LINKS.linkedin}" target="_blank" rel="noopener">${LINKS.linkedin}</a>`);
      line(`<span class="hl">${esc(pad(U().cv, 14))}</span><a href="${LINKS.cv}" target="_blank" rel="noopener">${LINKS.cv}</a>`);
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
      const m = { home: 'hero', about: 'about', sobre: 'about', stack: 'stack', skills: 'stack', projects: 'work', projetos: 'work', education: 'edu', formacao: 'edu', contact: 'contact', contato: 'contact' };
      const id = m[(args[0] || '').toLowerCase()];
      if (!id) return raw('uso: goto home|about|stack|projects|education|contact', 'err');
      document.getElementById(id).scrollIntoView(); raw(`→ #${id}`, 'dim');
    },
    clear() { out().innerHTML = ''; },
    exit() { closeTerm(); },
    welcome() {
      raw('Hello World! Type help to see available commands.', 'hl');
    },
    sudo() { raw('osvandir is not in the sudoers file. This incident will be reported.', 'err'); },
  };
  cmds.projects = function (args) {
    const items = sec().professionalExperience.items;
    const n = parseInt(args[0], 10);
    if (n >= 1 && n <= PROJECTS.length) {
      const [ci, hi, tp, te, tech, org, x = {}] = PROJECTS[n - 1];
      line(`<span class="hl">${esc(lang === 'pt-BR' ? tp : te)}</span> @ ${esc(x.co || org || items[ci].company)}`);
      raw(tech.join(' · '), 'dim'); raw((x.d && x.d[lang]) || T(items[ci].highlights[hi]));
      return;
    }
    PROJECTS.forEach(([ci, , tp, te, , org, x = {}], i) => line(`<span class="dim">${esc(pad(i + 1, 3))}</span><span class="hl">${esc(lang === 'pt-BR' ? tp : te)}</span> <span class="dim">— ${esc(x.co || org || items[ci].company)}</span>`));
    raw(lang === 'pt-BR' ? 'Detalhes: projects <nº>' : 'Details: projects <n>', 'dim');
  };
  cmds.dir = cmds.ls; cmds.cls = cmds.clear; cmds.quit = cmds.exit;

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
      const res = await fetch('datum/portfolio.json');
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
