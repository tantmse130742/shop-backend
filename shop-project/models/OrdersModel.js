const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerName:{type:String,required:true},
    products:{type:Array,required:true},
    orderDate:{ type: Date, required: Date.now },
    status:{type:String,required:true},
    totalAmount:{type:Number,required:true},
})

module.exports = mongoose.model("orders",orderSchema)