const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, requied: true },
  supplierId: { type: mongoose.Schema.Types.ObjectId, requied: true },
  ratings: { type: Array, requied: true },
  stock: { type: Number, requied: true },
});

productSchema.index({
  name: "text",
  category: "text",
  price: 1,
  stock: -1
})

module.exports = mongoose.model("products", productSchema);
