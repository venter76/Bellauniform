const puppeteer = require('puppeteer-core');

async function createPDF(url) {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 250, // slow down by 250ms
      executablePath: process.env.CHROME_PATH,
      // Use the correct environment variable for your Chrome or Chromium path
    //   executablePath: process.env.LOCAL_CHROME_PATH,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.emulateMediaType('screen');
    const pdf = await page.pdf({ format: 'A4' });

    await browser.close();

    return pdf;
  } catch (error) {
    console.error('Error during PDF generation:', error);
    throw new Error('Error generating PDF');
  }
}

module.exports = createPDF;







