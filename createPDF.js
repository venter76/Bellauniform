const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function createPdf(url) {
  try {
    const browser = await puppeteer.launch({
      executablePath: process.env.LOCAL_CHROME_PATH, // Use the correct environment variable.
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    // Add logging for debugging purposes.
    page.on('console', (message) => console.log(`Console log: ${message.text()}`));
    page.on('error', (error) => console.error(`Page error: ${error}`));
    page.on('pageerror', (error) => console.error(`Page error: ${error}`));

    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

    const pdfData = await page.pdf();

    await browser.close();

    return pdfData;
  } catch (error) {
    console.error('Error during PDF generation:', error);
    throw new Error('Error generating PDF');
  }
}

module.exports = createPdf;
