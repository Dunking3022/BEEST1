const mongoose = require('mongoose');
require('dotenv').config();
const dbURL = process.env.dbURL;
// console.log(dbURI);
exports.connectToDB = () => {
    mongoose.connect(dbURL)
    .then(()=>{console.log("Connection Established!")})
    .catch((err)=>{
        console.log(err)
    })
}