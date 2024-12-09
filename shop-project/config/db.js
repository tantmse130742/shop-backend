const mongoose = require('mongoose');

exports.callMongoDB =  async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongo db connected");
    } catch (error) {
        console.log("error to connect to mongo db");
        console.log(error);
    }
   
}

