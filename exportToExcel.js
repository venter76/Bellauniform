// const XLSX = require('xlsx');
// const path = require('path');
// const fs = require('fs');

// const exportToExcel = async (data) => {
//   try {
//     // Create a new workbook
//     const workbook = XLSX.utils.book_new();

//     // Convert data to worksheet
//     const worksheet = XLSX.utils.json_to_sheet(data);

//     // Add worksheet to the workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

//   // Specify the relative file path
//   const now = new Date();
//   const timestamp = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
//   const directory = path.resolve(__dirname, 'public/data/');
//   const filePath = path.resolve(directory, `output_${timestamp}.xlsx`);
  






//  if (!fs.existsSync(directory)) {
//    fs.mkdirSync(directory, { recursive: true });
//  }
    
    
    
//     XLSX.writeFile(workbook, filePath);

//     console.log('Data exported to output.xlsx');

//     return filePath;
//   } catch (error) {
//     console.error('Error exporting data1 to Excel:', error);
//     throw error;
//   }
// };

// module.exports = exportToExcel;
