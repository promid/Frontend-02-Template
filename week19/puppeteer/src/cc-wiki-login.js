const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('https://xxx.xxx.com', { waitUntil: 'networkidle2' });
  await page.waitFor('.wrapper #username');
  await page.waitFor('#password_box');
  await page.type('#password_box', "Dbq1991@c20202", {delay: 50})
  await page.type('.wrapper #username', "bedong", {delay: 50})
  await page.click('.signInButton')
  await page.waitFor('#altusio-root')
  await page.screenshot({path: 'image/cc-' + Date.now() + '.png'})
  await page.goto('https://wiki.xxx.com')
  await page.waitFor('input[value="Sign On"]')
  await page.screenshot({path: 'image/wiki-' + Date.now() + '.png'})
  await browser.close();
})();