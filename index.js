const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('https://www.haxball.com/headless', { waitUntil: 'networkidle2' });

  // Możesz ustawić prosty komunikat w logach
  console.log('Serwer HaxBall 24/7 uruchomiony! Otwórz w przeglądarce https://www.haxball.com/play?c=XXXXX');
})();
