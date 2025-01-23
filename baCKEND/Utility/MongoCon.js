const mongoose = require('mongoose');

const mongo__url = process.env.MONGOCON;

mongoose.connect(mongo__url).then(()=>{
    console.log("Mongo Connected");
}).catch((err)=>{
    console.log("MOngo Connection error" , err);
});
