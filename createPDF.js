
// This uses pdfkit to render the HTML as a PDF

// const PDFDocument = require('pdfkit');
// const fs = require('fs');
// const axios = require('axios'); // Import the axios module

// async function createPdf(url) {
//    const doc = new PDFDocument();

//    // Create a write stream to save the PDF
//    const writeStream = fs.createWriteStream('output.pdf');

//    // Pipe the PDF document to the write stream
//    doc.pipe(writeStream);

//    try {
//       // Fetch the HTML content of the URL using axios
//       const response = await axios.get(url);
//       const htmlContent = response.data;

//       // Add the HTML content to the PDF document using doc.text()
//       doc.text(htmlContent);

//       // Finalize the PDF document
//       doc.end();

//       return new Promise((resolve, reject) => {
//          // Once the write stream finishes, resolve the promise with the PDF data
//          writeStream.on('finish', () => {
//             const pdfData = fs.readFileSync('output.pdf');
//             resolve(pdfData);
//          });

//          // Handle any errors that occur during the write stream
//          writeStream.on('error', (error) => {
//             reject(error);
//          });
//       });
//    } catch (error) {
//       // Handle any errors that occur during the fetch or PDF generation
//       throw new Error('Error fetching HTML content or generating PDF');
//    }
// }

// module.exports = createPdf;
