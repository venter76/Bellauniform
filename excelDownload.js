// const XLSX = require('xlsx');

// const excelDownload = async (data, res) => {
//     try {
//       // Create a new workbook
//       const workbook = XLSX.utils.book_new();
  
//       // Convert data to worksheet
//       const worksheet = XLSX.utils.json_to_sheet(data);
  
//       // Add worksheet to the workbook
//       XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
  
//       // Write workbook to a buffer
//       const wbout = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

//         // Create a unique timestamp
//         const now = new Date();
//         const timestamp = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
  
//       // Set up response headers
//       res.setHeader('Content-Disposition', `attachment; filename="output_${timestamp}.xlsx"`);
      
//       res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  
//       // Send buffer to client to trigger file download
//       res.send(Buffer.from(wbout));
      
  
//     } catch (error) {
//       console.error('Error exporting data to Excel:', error);
//       throw error;
//     }
//   };
  
//   module.exports = excelDownload;
  