const express = require('express');
const  router = express.Router();
const ordersController = require('../controllers/ordersController')

router.get("/",ordersController.getOrders);
router.get("/:id",ordersController.getOrderById);
router.post("/",ordersController.createNewOrder);
router.put("/:id",ordersController.updateOrderById);
router.delete("/:id",ordersController.deleteOrderById);

module.exports = router;