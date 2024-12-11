const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const productValidate = require("../middlewares/productValidate")
const paramsIsObjectId = require('../middlewares/paramValidate');
router.get("/",productController.getAllProducts);
router.get("/:id",productController.getProductById);

router.post("/",
    productValidate.validateRequest,
    productValidate.stockValidate,
    productController.createProduct);

router.put("/:id",
    paramsIsObjectId,
    productValidate.validateRequest,
    productValidate.stockValidate,
    productController.updateProduct,
   
);
router.delete("/:id",productController.deleteProduct);

module.exports = router;