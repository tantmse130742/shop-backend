const OrderModel = require('../models/OrdersModel')

exports.getOrders = async (req,res) =>{
    try {
       const orders =  await OrderModel.find();
       res.json(orders)
    } catch (error) {
        res.status(500).json({message:"error to get orders"})
    }
}

exports.getOrderById = async (req,res) => {
    try {
    const id = req.params.id;
    const order = await OrderModel.findById(id);
    if(!order){
        res.status(201).json({message:"not found"});
    }
    res.status(200).json(order);
    } catch (error) {
        res.status(500).json({message:"error to connect to orders db"})
    }
}

exports.createNewOrder = async (req,res) =>{
    try {
        const {customerName,orderDate,status,totalAmount,products} = req.body;
        const order = OrderModel.create({customerName,orderDate,status,totalAmount,products});
        if(!order){
            res.status(201).json({message:"cant create order"});
        }
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({message:"error to connect to db orders"});
    }
}


exports.updateOrderById = async (req,res) =>{
    try {
        const id = req.params.id
        const {customerName,orderDate,status,totalAmount,products} = req.body;
        const order = await OrderModel.findByIdAndUpdate(id,{customerName,orderDate,status,totalAmount,products});
        if(!order)
        res.status(201).json({message:"cant update order"})
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({message:"error to connect to db orders"})
    }
}

exports.deleteOrderById = async (req,res) =>{
    try {
        const id = req.params.id;
        const order = await OrderModel.findByIdAndDelete(id);
        if(!order)
        res.status(201).json({message:"cant not find the id to deleted"})
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({message:"error to connect to db orders"})
    }
}
