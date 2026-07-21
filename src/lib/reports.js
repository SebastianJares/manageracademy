import { ARCHETYPES, SKILLS, TRAITS } from '../data/questions';
import { scoreBand } from './scoring';

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const slugify = (value = 'profil') => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '') || 'profil';

const downloadBlob = (blob, filename) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const list = (items) => `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;

export const buildAnalysisHtml = (profile) => {
  const primary = ARCHETYPES[profile.primary];
  const secondary = ARCHETYPES[profile.secondary];
  const { analysis } = profile;
  const skillRows = Object.entries(profile.skills)
    .sort(([, a], [, b]) => b - a)
    .map(([key, score]) => `
      <tr>
        <td><strong>${escapeHtml(SKILLS[key].label)}</strong><small>${escapeHtml(SKILLS[key].description)}</small></td>
        <td>${score}</td>
        <td>${profile.selfReportedSkills[key]}</td>
        <td>${profile.situationalSkills[key]}</td>
        <td>${escapeHtml(scoreBand(score))}</td>
      </tr>`).join('');
  const traitRows = Object.entries(profile.traits).map(([key, score]) => `
    <div class="trait"><span>${escapeHtml(TRAITS[key].lowPole)}</span><div><i style="left:${score}%"></i></div><span>${escapeHtml(TRAITS[key].highPole)}</span><strong>${score}</strong></div>`).join('');
  const patterns = analysis.patterns.length
    ? analysis.patterns.map((pattern) => `<article><h3>${escapeHtml(pattern.title)}</h3><p>${escapeHtml(pattern.text)}</p><p class="action"><strong>Co zkusit:</strong> ${escapeHtml(pattern.action)}</p></article>`).join('')
    : '<p>Profil neukazuje výraznou kombinaci, která by vyžadovala zvláštní varování. Sledujte především vztah mezi nejsilnější a nejslabší dovedností.</p>';

  return `<!doctype html>
<html lang="cs">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Manažerská analýza – ${escapeHtml(profile.identity.name)}</title>
  <style>
    :root{font-family:Inter,Arial,sans-serif;color:#172033;background:#edf2f7}*{box-sizing:border-box}body{margin:0;padding:32px;background:#edf2f7;line-height:1.55}.page{max-width:980px;margin:auto;background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 18px 60px #17203322}.hero{padding:46px;background:linear-gradient(135deg,#0b1530,#162f55);color:white}.hero small{letter-spacing:.16em;text-transform:uppercase;color:#73e2c3}.hero h1{font-size:42px;line-height:1.05;margin:14px 0 8px}.hero h2{font-size:21px;font-weight:500;color:#c7d8f2;margin:0}.hero p{max-width:760px;color:#dce8fa}.content{padding:38px}.meta{display:flex;gap:12px;flex-wrap:wrap;margin-top:22px}.pill{border:1px solid #ffffff33;border-radius:999px;padding:7px 12px;font-size:13px}.section{margin:0 0 40px}.section>h2{font-size:27px;margin:0 0 8px;color:#11203a}.lead{color:#50627b;margin-top:0}.role-grid,.two{display:grid;grid-template-columns:1fr 1fr;gap:18px}.card,article{border:1px solid #dfe7f0;background:#f8fafc;border-radius:16px;padding:20px}.card h3,article h3{margin:0 0 8px;color:#17385d}.card p,article p{margin:8px 0}.action{border-left:3px solid #29b88f;padding-left:12px}.traits{display:grid;gap:12px;margin-top:20px}.trait{display:grid;grid-template-columns:130px 1fr 130px 36px;align-items:center;gap:10px;font-size:13px}.trait>div{height:7px;background:#dbe5ef;border-radius:10px;position:relative}.trait i{position:absolute;width:13px;height:13px;border-radius:50%;background:#7658e8;top:50%;transform:translate(-50%,-50%)}table{width:100%;border-collapse:collapse;margin-top:16px;font-size:14px}th,td{text-align:left;padding:12px 10px;border-bottom:1px solid #e5ebf2}th{color:#65758a;font-size:12px;text-transform:uppercase}td small{display:block;color:#6a7889}.insight{border-left:4px solid #7658e8}.insight h3{display:flex;justify-content:space-between;gap:10px}.score{font-size:13px;color:#7658e8}.risk{color:#744c19;background:#fff9ec;border-color:#f1ddb8}.development{color:#17385d;background:#f0f8f6;border-color:#bfe4d9}.week{display:grid;grid-template-columns:86px 1fr;gap:14px;align-items:start}.week strong{color:#167b63}.reading a{color:#245ec7;text-decoration:none}.reading small{display:block;color:#6f7d8d}.notice{background:#fff7e8;border:1px solid #efd49d;border-radius:14px;padding:18px;color:#60491e}.footer{padding:22px 38px;background:#f3f6fa;color:#66758a;font-size:12px}.print{position:fixed;right:20px;bottom:20px;border:0;border-radius:999px;background:#172f55;color:white;padding:12px 18px;cursor:pointer;box-shadow:0 8px 30px #17203344}@media(max-width:720px){body{padding:0}.page{border-radius:0}.hero,.content{padding:26px}.hero h1{font-size:32px}.role-grid,.two{grid-template-columns:1fr}.trait{grid-template-columns:95px 1fr 95px 30px;font-size:11px}table{font-size:12px}}@media print{body{background:white;padding:0}.page{box-shadow:none;max-width:none}.print{display:none}.section{break-inside:avoid}.hero{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
  </style>
</head>
<body>
<main class="page">
  <header class="hero">
    <small>Manažerská akademie · detailní sebereflexe</small>
    <h1>${escapeHtml(profile.identity.name)}</h1>
    <h2>${escapeHtml(profile.identity.role)} · ${escapeHtml(profile.title)}</h2>
    <p>${escapeHtml(analysis.summary)}</p>
    <div class="meta"><span class="pill">${escapeHtml(analysis.alignment.label)}</span><span class="pill">Kvalita odpovědí: ${escapeHtml(profile.responseQuality.label)}</span><span class="pill">${new Date(profile.createdAt).toLocaleDateString('cs-CZ')}</span></div>
  </header>
  <div class="content">
    <section class="section">
      <h2>1. Jaký manažer pravděpodobně jste</h2>
      <p class="lead">Role je pracovní metafora, nikoli typ osobnosti nebo diagnóza.</p>
      <div class="role-grid">
        <div class="card"><h3>${escapeHtml(primary.label)} · hlavní role</h3><p>${escapeHtml(analysis.role.overview)}</p><strong>Typické opory</strong>${list(analysis.role.strengths)}</div>
        <div class="card"><h3>${escapeHtml(secondary.label)} · doplňující role</h3><p>${escapeHtml(analysis.secondaryRole.overview)}</p><strong>Pod tlakem</strong><p>${escapeHtml(analysis.role.underPressure)}</p></div>
      </div>
    </section>
    <section class="section">
      <h2>2. Osobnostní kontext</h2>
      <p class="lead">Póly nejsou dobré a špatné. Ukazují, co vám pravděpodobně jde přirozeněji a co může vyžadovat vědomější volbu.</p>
      <div class="traits">${traitRows}</div>
      <div class="two" style="margin-top:18px">${profile.traitSummary.map((item) => `<div class="card"><h3>${escapeHtml(item.label)} · ${item.score}</h3><p>${escapeHtml(item.text)}</p></div>`).join('')}</div>
    </section>
    <section class="section">
      <h2>3. Mapa manažerských dovedností</h2>
      <p class="lead">Souhrnný index kombinuje deklarovanou četnost chování (65 %) a volby v modelových situacích (35 %). Nejde o populační percentil.</p>
      <table><thead><tr><th>Dovednost</th><th>Index</th><th>Sebehod.</th><th>Situace</th><th>Interpretace</th></tr></thead><tbody>${skillRows}</tbody></table>
      <p>${escapeHtml(analysis.alignment.note)}</p>
    </section>
    <section class="section">
      <h2>4. Pravděpodobné silné stránky</h2>
      <p class="lead">Jde o relativně nejsilnější části tohoto profilu. U každé je uvedené také riziko přehnaného použití.</p>
      <div class="two">${analysis.strengths.map((item) => `<article class="insight"><h3>${escapeHtml(item.label)} <span class="score">${item.score} · ${escapeHtml(scoreBand(item.score))}</span></h3><p>${escapeHtml(item.why)}</p><p><strong>Opora v datech:</strong> ${escapeHtml(item.evidence)}</p><p class="risk"><strong>Stín silné stránky:</strong> ${escapeHtml(item.watchout)}</p></article>`).join('')}</div>
    </section>
    <section class="section">
      <h2>5. Pravděpodobná rozvojová místa</h2>
      <p class="lead">Nižší výsledek neznamená neschopnost. Může ukazovat menší četnost, situační nejistotu nebo oblast, kde jste na sebe přísnější.</p>
      <div class="two">${analysis.development.map((item) => `<article class="development"><h3>${escapeHtml(item.label)} <span class="score">${item.score}</span></h3><p>${escapeHtml(item.why)}</p><p><strong>Opora v datech:</strong> ${escapeHtml(item.evidence)}</p><p class="action"><strong>Začněte zde:</strong> ${escapeHtml(item.firstStep)}</p></article>`).join('')}</div>
    </section>
    <section class="section">
      <h2>6. Vzorce, které stojí za ověření</h2>
      <p class="lead">Následující hypotézy vznikají kombinací výsledků. Ověřte je na konkrétních situacích, ne pouze pocitem.</p>
      <div class="two">${patterns}</div>
    </section>
    <section class="section">
      <h2>7. Doporučený začátek · ${escapeHtml(analysis.priority.label)}</h2>
      <p class="lead">Místo současné práce na všem doporučuje profil jeden čtyřtýdenní experiment.</p>
      ${analysis.plan.map((step, index) => `<article class="week"><strong>Týden ${index + 1}</strong><span>${escapeHtml(step.replace(/^Týden \d+:\s*/, ''))}</span></article>`).join('')}
    </section>
    <section class="section">
      <h2>8. Literatura a zdroje</h2>
      <div class="two">${analysis.readings.map((item) => `<article class="reading"><small>${escapeHtml(item.type)}</small><h3><a href="${escapeHtml(item.url)}">${escapeHtml(item.title)}</a></h3><p><strong>${escapeHtml(item.author)}</strong></p><p>${escapeHtml(item.why)}</p></article>`).join('')}</div>
    </section>
    <section class="notice"><strong>Jak výsledek používat</strong><p>${escapeHtml(profile.responseQuality.note)} Tento nástroj není standardizovaný český psychologický test. Výsledek není vhodný pro výběr, hodnocení ani diagnózu člověka. Největší hodnotu získá v rozhovoru s koučem a porovnáním s konkrétní 180°/360° zpětnou vazbou.</p></section>
  </div>
  <footer class="footer">Manažerská akademie · soukromý sebereflexní výstup · verze metodiky 2</footer>
</main>
<button class="print" onclick="window.print()">Vytisknout / uložit jako PDF</button>
</body>
</html>`;
};

export const downloadAnalysis = (profile) => {
  const html = buildAnalysisHtml(profile);
  downloadBlob(new Blob([html], { type: 'text/html;charset=utf-8' }), `manazerska-analyza-${slugify(profile.identity.name)}.html`);
};

const utf8ToBase64 = (value) => {
  const bytes = new TextEncoder().encode(value);
  let binary = '';
  for (let index = 0; index < bytes.length; index += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000));
  }
  return btoa(binary);
};

const wrapBase64 = (value) => value.match(/.{1,76}/g)?.join('\r\n') ?? '';

export const buildOutlookEml = (profile, cardDataUrl) => {
  const slug = slugify(profile.identity.name);
  const boundary = `manager-academy-${Date.now().toString(16)}`;
  const subject = `Manažerský profil – ${profile.identity.name}`;
  const body = `Dobrý den,\n\nv příloze posílám profilovou kartu a detailní analýzu výsledku Manažerské akademie.\n\nHlavní role: ${ARCHETYPES[profile.primary].label}\nDoplňující role: ${ARCHETYPES[profile.secondary].label}\nPriorita rozvoje: ${profile.analysis.priority.label}\n\nTento výstup je sebereflexní a není psychologickou diagnózou ani podkladem pro personální rozhodnutí.\n`;
  const analysisBase64 = wrapBase64(utf8ToBase64(buildAnalysisHtml(profile)));
  const bodyBase64 = wrapBase64(utf8ToBase64(body));
  const cardBase64 = wrapBase64((cardDataUrl?.split(',')[1] ?? ''));

  return [
    'X-Unsent: 1',
    'To: sjares@dpd.cz',
    `Subject: =?UTF-8?B?${utf8ToBase64(subject)}?=`,
    `Date: ${new Date().toUTCString()}`,
    'MIME-Version: 1.0',
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    'Content-Transfer-Encoding: base64',
    '',
    bodyBase64,
    '',
    `--${boundary}`,
    `Content-Type: text/html; name="manazerska-analyza-${slug}.html"`,
    'Content-Transfer-Encoding: base64',
    `Content-Disposition: attachment; filename="manazerska-analyza-${slug}.html"`,
    '',
    analysisBase64,
    '',
    `--${boundary}`,
    `Content-Type: image/png; name="profilova-karta-${slug}.png"`,
    'Content-Transfer-Encoding: base64',
    `Content-Disposition: attachment; filename="profilova-karta-${slug}.png"`,
    '',
    cardBase64,
    '',
    `--${boundary}--`,
    '',
  ].join('\r\n');
};

export const downloadOutlookDraft = (profile, cardDataUrl) => {
  const eml = buildOutlookEml(profile, cardDataUrl);
  downloadBlob(new Blob([eml], { type: 'message/rfc822' }), `odeslat-profil-${slugify(profile.identity.name)}.eml`);
};
