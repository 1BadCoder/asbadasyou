// const mongoose = require('mongoose');
// // require('dotenv').config();

// main().catch(err => console.log("Database is not connected", err));

// async function main(){
//     await mongoose.connect('mongodb://localhost:27017/test');
//     console.log('Database is connected');
// }
// module.exports;

const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/codeial_development');
mongoose.connect("mongodb://0.0.0.0:27017/codeiall_list_db");
// mongoose.connect(`mongodb://0.0.0.0:27017/${env.db}`);
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;