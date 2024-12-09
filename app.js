const express = require('express')
const mongo = require("./config/db")
const dotenv = require('dotenv')
const authenMidwares = require('./middlewares/userRole')

dotenv.config({ path: "./env/.env" });
mongo.callMongoDB();
const app = express();
app.use(express.json());


const productRoutes = require("./routes/productRoutes");
app.use("/api/products",authenMidwares.checkUserRole,productRoutes)

const orderRoutes = require("./routes/ordersRoutes");
app.use("/api/orders",orderRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log("server runinng"))