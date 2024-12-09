const express = require('express')
const connectDB = require("./config/db")
const dotenv = require('dotenv')

dotenv.config({ path: "./env/.env" });
connectDB();
const app = express();
app.use(express.json());

const productRoutes = require("./routes/productRoutes");
app.use("/api/products",productRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log("server runinng"))