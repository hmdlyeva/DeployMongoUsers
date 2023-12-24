const mongoose = require("mongoose");

const Prodschema = mongoose.Schema(
  {
    name: String,
    id: Number,
    surname: String,
    age:Number,
    country: String,
    info: String,
    username: String,
    gender: String,
    password: String,
    bio: String,
    email: String,
    number: Number,
    ispublic: String,
  },
  {
    collection: "Users",
    timestamps: true,
  }
);

const Products = mongoose.model("Users", Prodschema);
module.exports = Products;
