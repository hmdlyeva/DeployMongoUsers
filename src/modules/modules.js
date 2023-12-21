const mongoose = require("mongoose");

const Prodschema = mongoose.Schema(
  {
    name: String,
    id: Number,
    age:Number
  },
  {
    collection: "Users",
    timestamps: true,
  }
);

const Products = mongoose.model("Users", Prodschema);
module.exports = Products;
