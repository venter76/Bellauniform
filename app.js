const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
require('dotenv').config();
const exportToExcel = require('./exportToExcel');
const exportToExceel = require('./exportToExceel');
const excelDownload = require('./excelDownload');
const createPdf = require('./createPDF');



const app = express();
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
const db_cluster_url = process.env.DB_CLUSTER_URL;
const db_name = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;
const port = process.env.PORT || 3000; // Use the PORT environment variable if available, otherwise use port 3000

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://${db_username}:${db_password}@${db_cluster_url}/${db_name}?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB Atlas:', conn.connection.host);
    app.db = conn.connection.db; // Assign the database object to app.db
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1);
  }
};




const uniformSchema = new mongoose.Schema({
  itemName: "String",
  total: Number,
  stePet: Number,
  che: Number
});

const Uniform = mongoose.model('Uniform', uniformSchema);

let house = null;


app.get("/", function(req, res){

    res.render("start");
  
});



app.get('/index', (req, res) => {

  const success = req.query.success || false;

  Uniform.find({}, 'itemName total stePet che')
    .then(data => {
      const itemNames = data.map(item => item.itemName);
      const totals = data.map(item => item.total);
      const stePets = data.map(item => item.stePet);
      const ches = data.map(item => item.che);

      res.render('index', { itemNames, totals, stePets, ches, success});
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});



app.post("/index", function(req, res) {

  const selectedHouse = req.body.houses;

  if (selectedHouse === "Che") {
    house = 2;
  } else if (selectedHouse === "Stephen and Petra") {
    house = 1;
  }
  console.log("Selected house:", house);

  Uniform.find({}, 'stePet che')
  .then(data => {
    const stePets = data.map(item => item.stePet);
    const ches = data.map(item => item.che);
    console.log(stePets, ches);

  const ttBag = Number(req.body.ttbag);
  const ttWear = Number(req.body.ttwear);
  const tpBag = Number(req.body.tpbag);
  const tpWear = Number(req.body.tpwear);
  const jeBag = Number(req.body.jebag);
  const jeWear = Number(req.body.jewear);
  const trBag = Number(req.body.trbag);
  const trWear = Number(req.body.trwear);
  const wdBag = Number(req.body.wdbag);
  const wdWear = Number(req.body.wdwear);
  const lsBag = Number(req.body.lsbag);
  const lsWear = Number(req.body.lswear);
  const ssBag = Number(req.body.ssbag);
  const ssWear = Number(req.body.sswear);
  const skBag = Number(req.body.skbag);
  const skWear = Number(req.body.skwear);
  const blBag = Number(req.body.blbag);
  const blWear = Number(req.body.blwear);
  const soBag = Number(req.body.sobag);
  const soWear = Number(req.body.sowear);
  const rcBag = Number(req.body.rcbag);
  const rcWear = Number(req.body.rcwear);
  const scBag = Number(req.body.scbag);
  const scWear = Number(req.body.scwear);
  const hkBag = Number(req.body.hkbag);
  const hkWear = Number(req.body.hkwear);
  const hsBag = Number(req.body.hsbag);
  const hsWear = Number(req.body.hswear);
  const gsBag = Number(req.body.gsbag);
  const gsWear = Number(req.body.gswear);
  const gtBag = Number(req.body.gtbag);
  const gtWear = Number(req.body.gtwear);
  const wtBag = Number(req.body.wtbag);
  const wtWear = Number(req.body.wtwear);
  const seBag = Number(req.body.sebag);
  const seWear = Number(req.body.sewear);
  const stBag = Number(req.body.stbag);
  const stWear = Number(req.body.stwear);
  const spBag = Number(req.body.spbag);
  const spWear = Number(req.body.spwear);
  const sgBag = Number(req.body.sgbag);
  const sgWear = Number(req.body.sgwear);
  const sjBag = Number(req.body.sjbag);
  const sjWear = Number(req.body.sjwear);

  console.log(ttBag, ttWear, tpBag, tpWear );

  let sum1 = ttBag+ttWear;
  if (house === 2) {
    sum1 = -sum1; // Make sum1 negative if house is equal to 2
  }
  let sum2 = tpBag+tpWear;
  if (house === 2) {
    sum2 = -sum2; // Make sum1 negative if house is equal to 2
  }
  let sum3 = jeBag+jeWear;
  if (house === 2) {
    sum3 = -sum3; // Make sum1 negative if house is equal to 2
  }
  let sum4 = trBag+trWear;
  if (house === 2) {
    sum4 = -sum4; // Make sum1 negative if house is equal to 2
  }
  let sum5 = wdBag+wdWear;
  if (house === 2) {
    sum5 = -sum5; // Make sum1 negative if house is equal to 2
  }
  let sum6 = lsBag+lsWear;
  if (house === 2) {
    sum6 = -sum6; // Make sum1 negative if house is equal to 2
  }
  let sum7 = ssBag+ssWear;
  if (house === 2) {
    sum7 = -sum7; // Make sum1 negative if house is equal to 2
  }
  let sum8 = skBag+skWear;
  if (house === 2) {
    sum8 = -sum8; // Make sum1 negative if house is equal to 2
  }
  let sum9 = blBag+blWear;
  if (house === 2) {
    sum9 = -sum9; // Make sum1 negative if house is equal to 2
  }
  let sum10 = soBag+soWear;
  if (house === 2) {
    sum10 = -sum10; // Make sum1 negative if house is equal to 2
  }
  let sum11 = rcBag+rcWear;
  if (house === 2) {
    sum11 = -sum11; // Make sum1 negative if house is equal to 2
  }
  let sum12 = scBag+scWear;
  if (house === 2) {
    sum12 = -sum12; // Make sum1 negative if house is equal to 2
  }
  let sum13 = hkBag+hkWear;
  if (house === 2) {
    sum13 = -sum13; // Make sum1 negative if house is equal to 2
  }
  let sum14 = hsBag+hsWear;
  if (house === 2) {
    sum14 = -sum14; // Make sum1 negative if house is equal to 2
  }
  let sum15 = gsBag+gsWear;
  if (house === 2) {
    sum15 = -sum15; // Make sum1 negative if house is equal to 2
  }
  let sum16 = gtBag+gtWear;
  if (house === 2) {
    sum16 = -sum16; // Make sum1 negative if house is equal to 2
  }
  let sum17 = wtBag+wtWear;
  if (house === 2) {
    sum17 = -sum17; // Make sum1 negative if house is equal to 2
  }
  let sum18 = seBag+seWear;
  if (house === 2) {
    sum18 = -sum18; // Make sum1 negative if house is equal to 2
  }
  let sum19 = stBag+stWear;
  if (house === 2) {
    sum19 = -sum19; // Make sum1 negative if house is equal to 2
  }
  let sum20 = spBag+spWear;
  if (house === 2) {
    sum20 = -sum20; // Make sum1 negative if house is equal to 2
  }
  let sum21 = sgBag+sgWear;
  if (house === 2) {
    sum21 = -sum21; // Make sum1 negative if house is equal to 2
  }
  let sum22 = sjBag+sjWear;
  if (house === 2) {
    sum22 = -sum22; // Make sum1 negative if house is equal to 2
  }

  console.log(sum1, sum2);



  Uniform.updateMany({ itemName: "Tracksuit top" }, { $inc: { stePet: -sum1, che: sum1 } })
  .then(() => Uniform.updateMany({ itemName: "Tracksuit pants" }, { $inc: { stePet: -sum2, che: sum2 } }))
  .then(() => Uniform.updateMany({ itemName: "Jersey" }, { $inc: { stePet: -sum3, che: sum3 } }))
  .then(() => Uniform.updateMany({ itemName: "Trousers" }, { $inc: { stePet: -sum4, che: sum4 } }))
  .then(() => Uniform.updateMany({ itemName: "Winter dress" }, { $inc: { stePet: -sum5, che: sum5 } }))
  .then(() => Uniform.updateMany({ itemName: "Long sleeve shirts" }, { $inc: { stePet: -sum6, che: sum6 } }))
  .then(() => Uniform.updateMany({ itemName: "Short sleeve shirts" }, { $inc: { stePet: -sum7, che: sum7 } }))
  .then(() => Uniform.updateMany({ itemName: "Skorts" }, { $inc: { stePet: -sum8, che: sum8 } }))
  .then(() => Uniform.updateMany({ itemName: "Blazer" }, { $inc: { stePet: -sum9, che: sum9 } }))
  .then(() => Uniform.updateMany({ itemName: "School shoes" }, { $inc: { stePet: -sum10, che: sum10 } }))
  .then(() => Uniform.updateMany({ itemName: "Rain coat" }, { $inc: { stePet: -sum11, che: sum11 } }))
  .then(() => Uniform.updateMany({ itemName: "Scarf" }, { $inc: { stePet: -sum12, che: sum12 } }))
  .then(() => Uniform.updateMany({ itemName: "Hockey kit" }, { $inc: { stePet: -sum13, che: sum13 } }))
  .then(() => Uniform.updateMany({ itemName: "Hockey socks" }, { $inc: { stePet: -sum14, che: sum14 } }))
  .then(() => Uniform.updateMany({ itemName: "Gym shorts" }, { $inc: { stePet: -sum15, che: sum15 } }))
  .then(() => Uniform.updateMany({ itemName: "Gym tops" }, { $inc: { stePet: -sum16, che: sum16 } }))
  .then(() => Uniform.updateMany({ itemName: "White takkies" }, { $inc: { stePet: -sum17, che: sum17 } }))
  .then(() => Uniform.updateMany({ itemName: "Swimming costume" }, { $inc: { stePet: -sum18, che: sum18 } }))
  .then(() => Uniform.updateMany({ itemName: "Swimming towel" }, { $inc: { stePet: -sum19, che: sum19 } }))
  .then(() => Uniform.updateMany({ itemName: "Swimming cap" }, { $inc: { stePet: -sum20, che: sum20 } }))
  .then(() => Uniform.updateMany({ itemName: "Swimming goggles" }, { $inc: { stePet: -sum21, che: sum21 } }))
  .then(() => Uniform.updateMany({ itemName: "Swimming warm jacket" }, { $inc: { stePet: -sum22, che: sum22 } }))
  .then(result => {
    console.log(`Successfully updated documents.`);
    res.render("final");
  })
  .catch(error => {
    console.error("Error updating documents:", error);
  });
})
.catch(error => {
  console.error("Error in finding documents:", error);
});
});


// Export to Excel route and download file to server and user (using dodgy XLSL package)
app.get('/export', async (req, res) => {
  try {
    if (!app.db) {
      throw new Error('Database connection not established');
    }

    const collection = app.db.collection(collectionName);

    // Retrieve data from collection
    const data = await collection.find({}).toArray();

    // Call the exportToExcel function
    const filePath = await exportToExcel(data);

    // Send the Excel file as a response
    res.download(filePath);
  } catch (error) {
    console.error('Error exporting data2 to Excel:', error);
    res.status(500).send('Error exporting data3 to Excel');
  }
});

// Route to download file to server and for user download (using dodgy XLSL package):
// app.get('/download', (req, res) => {
//   const filePath = '/data/output.xlsx';
//   res.download(`public${filePath}`);
// });



//  $$$$$Route to download to server and to user for better node-xlsx package:
// app.get('/download2', async (req, res) => {
//   try {
//     if (!app.db) {
//       throw new Error('Database connection not established');
//     }

//     const collection = app.db.collection(collectionName);

//     // Retrieve data from collection
//     const data = await collection.find({}).toArray();

//     // Call the exportToExcel function and get the path to the file
//     const filePath = await exportToExceel(data);

//     // Send the file to the user for download
//     res.download(filePath, err => {
//       if (err) {
//         console.error('Error:', err);
//         res.status(500).send('Error exporting data to Excel');
//       } else {
//         console.log('File sent successfully');
//       }
//     });

//   } catch (error) {
//     console.error('Error exporting data to Excel:', error);
//     res.status(500).send('Error exporting data to Excel');
//   }
// });





// Route to push file to user download only (using dodgy XLSL package):
// app.get('/download2', async (req, res) => {
//   try {
//     if (!app.db) {
//       throw new Error('Database connection not established');
//     }

//     const collection = app.db.collection(collectionName);

//     // Retrieve data from collection
//     const data = await collection.find({}).toArray();

//     // Call the excelDownload function
//     await excelDownload(data, res);
//   } catch (error) {
//     console.error('Error exporting data to Excel:', error);
//     res.status(500).send('Error exporting data to Excel');
//   }
// });






// Use this to ONLY push download to USER (ie. not save on server) using good node-XLSX package:

app.get('/download2', async (req, res) => {
  try {
    if (!app.db) {
      throw new Error('Database connection not established');
    }

    const collection = app.db.collection(collectionName);

    // Retrieve data from collection
    const data = await collection.find({}).toArray();

    // Call the exportToExcel function
    const buffer = await exportToExceel(data);

    // Generate a timestamp
    const now = new Date();
    const timestamp = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;

    // Set up response headers
    res.setHeader('Content-Disposition', `attachment; filename="output_${timestamp}.xlsx"`);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

    // Send buffer to client to trigger file download
    res.send(buffer);
  } catch (error) {
    console.error('Error exporting data to Excel:', error);
    res.status(500).send('Error exporting data to Excel');
  }
});




// Route to create PDF of screenshot (using pupputeer package):
app.get('/pdf', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send('URL is required');
  }

  try {
    // Call the createPdf function with the provided URL.
    const pdfData = await createPdf(url);

    // Set the response headers to specify the PDF content type and disposition.
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=output.pdf');

    // Send the PDF data as the response.
    res.send(pdfData);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while creating the PDF');
  }
});


connectDB().then(() => {
  app.listen(PORT, () => {
      console.log("listening for requests");
  });
});
  


