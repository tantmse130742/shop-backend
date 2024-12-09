const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  createAt: { type: Date, required: Date.now },
  category: { type: String, requied: true },
  supplierId: { type: mongoose.Schema.Types.ObjectId, requied: true },
  ratings: { type: Array, requied: true },
  stock: { type: Number, requied: true },
});

module.exports = mongoose.model("products", productSchema);
