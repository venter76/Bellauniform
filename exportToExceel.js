// Use commented-out code below with the app.get(/download2) route marked with $$$$ in app.js code:


// const xlsx = require('node-xlsx');
// const fs = require('fs');
// const path = require('path');

// const exportToExceel = async (data) => {
//   try {
//     // Prepare data for the worksheet
//     const wsData = data.map(obj => Object.values(obj));

//     // Add headers to wsData
//     wsData.unshift(Object.keys(data[0]));

//     // Create a worksheet
//     const worksheet = xlsx.build([{ name: 'Data', data: wsData }]);

//     // Specify the relative file path
//     const now = new Date();
//     const timestamp = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
//     const directory = path.resolve(__dirname, 'public/data/');
//     const filePath = path.resolve(directory, `output_${timestamp}.xlsx`);

//     if (!fs.existsSync(directory)) {
//       fs.mkdirSync(directory, { recursive: true });
//     }

//     // Write workbook to file
//     fs.writeFileSync(filePath, worksheet, 'binary');

//     console.log('Data exported to output.xlsx');

//     return filePath;
//   } catch (error) {
//     console.error('Error exporting data to Excel:', error);
//     throw error;
//   }
// };

// module.exports = exportToExceel;



// Use this to ONLY push download to USER (ie. not save on server):

const xlsx = require('node-xlsx');
const fs = require('fs');
const path = require('path');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const unlinkFile = util.promisify(fs.unlink);

const exportToExceel = async (data) => {
  try {
    // Prepare data for the worksheet
    const wsData = data.map(obj => Object.values(obj));

    // Add headers to wsData
    wsData.unshift(Object.keys(data[0]));

    // Create a worksheet
    const worksheet = xlsx.build([{ name: 'Data', data: wsData }]);

    // Create a temporary file path
    const tmpFilePath = path.resolve(__dirname, 'tmpfile.xlsx');

    // Write workbook to the temporary file
    await writeFile(tmpFilePath, worksheet, 'binary');

    // Read the file into a buffer
    const buffer = await readFile(tmpFilePath);

    // Delete the temporary file
    await unlinkFile(tmpFilePath);

    return buffer;
  } catch (error) {
    console.error('Error exporting data to Excel:', error);
    throw error;
  }
};

module.exports = exportToExceel;