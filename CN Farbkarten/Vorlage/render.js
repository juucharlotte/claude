const { chromium } = require('playwright');
const [,, html, out, only] = process.argv;
const styles = ['muster','lexikon','musterbuch','formel','still'];
const farben = ['tabak','moos','cognac','sand','terrakotta','oliv'];
(async () => {
  const b = await chromium.launch({executablePath:'/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell'});
  const p = await b.newPage({ viewport: { width: 1080, height: 1440 } });
  const errs=[]; p.on('pageerror', e => errs.push(e.message));
  for (const s of styles) for (const c of farben) {
    if (only && !`${s}-${c}`.includes(only)) continue;
    await p.goto(`file://${html}?s=${s}&c=${c}`); await p.waitForSelector('body[data-ready]', {timeout: 60000});
    await (await p.$('#post')).screenshot({ path: `${out}/${s}-${c}.png` });
  }
  console.log(errs.join('\n') || 'no errors'); await b.close();
})();
