const Product = require("../models/productModel");
exports.getAllProducts = async (req, res) => {
  try {
    const prodcuts = await Product.find();
    res.json(prodcuts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error fetching product" });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ message: "error get product id" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "error get data from server" });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, price, category, ratings, supplierId, stock } =
      req.body;
    const product = await Product.create({
      name,
      price,
      category,
      ratings,
      supplierId,
      stock,
    });
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error create  product data from server" });
  }
};

exports.updateProduct = async (req, res) => {
  try {    
    const id = req.params.id;
    const { name, category, price, ratings, supplierId, stock } = req.body;
    await Product.findByIdAndUpdate(id, {
      name, category, price, ratings, supplierId, stock
    });
    res.status(200).json({ message: "prodcut updated" });
  } catch (error) {    
    res.status(400).json({ message: "error update product data from server" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);
    if (!product) res.status(400).json({ message: "product not found" });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: "error delete product data from server" });
  }
};
