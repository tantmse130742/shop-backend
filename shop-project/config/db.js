const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        console.log(process.env.MONGO_URI);
       await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,      
            useUnifiedTopology: true,
        })
        console.log("mongoDB connected");
        console.log("Connected to database:", mongoose.connection.name);
       
    } catch (error) {
        console.error("database connection failed",error),
        process.exit(1);
    }
}

module.exports = connectDB;