const { chromium } = require('playwright');
const [,, html, out, only] = process.argv;
const styles = ['muster','lexikon','musterbuch','still'];
const farben = ['tabak','moos','cognac','sand','terrakotta','oliv','marine','indigo','petrol','taube','rauch','mitternacht','bordeaux','ochsenblut','ziegel','rost','kirsche','rosenholz'];
const jobs = [['cover','x','00-cover']];
styles.forEach((s,i) => { jobs.push(['divider', s, `${i+1}-00-${s}`]); farben.forEach((c,j) => jobs.push([s, c, `${i+1}-${String(j+1).padStart(2,'0')}-${s}-${c}`])); });
(async () => {
  const b = await chromium.launch({executablePath:'/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell'});
  const p = await b.newPage({ viewport: { width: 1080, height: 1440 } });
  const errs=[]; p.on('pageerror', e => errs.push(e.message));
  for (const [s,c,name] of jobs) {
    if (only && !name.includes(only)) continue;
    await p.goto(`file://${html}?s=${s}&c=${c}`); await p.waitForSelector('body[data-ready]', {timeout: 60000});
    await (await p.$('#post')).screenshot({ path: `${out}/${name}.jpg`, type: 'jpeg', quality: 92 });
  }
  console.log(errs.join('\n') || 'no errors'); await b.close();
})();
