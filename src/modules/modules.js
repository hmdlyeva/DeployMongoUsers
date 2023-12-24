const mongoose = require("mongoose");

const Prodschema = mongoose.Schema(
  {
     id: { type: Number, unique: true },
    name: String,
    // id: String,
    surname: String,
    age: Number,
    country: String,
    info: String,
    username: String,
    gender: String,
    password: String,
    bio: String,
    email: String,
    number: Number,
    ispublic: Boolean,

    myfollow: Array,
    menifollow: Array,
    wishlist: Array,
    block: Array,

    myposter: [
      {
        id: { type: Number, unique: true },
        imgsrc: String,
        imgtitle: String,
      },
    ],
    message: [
      {
        id: { type: Number, unique: true },
        acceptedmessage: String,
      },
    ],
    mystory: [
      {
        id: { type: Number, unique: true },
        storyimage: String,
        storytitle: String,
      },
    ],
    notification: [
      {
        id: { type: Number, unique: true },
        ntfctncontent: String,
      },
    ],
    isblockeduser:Boolean
  },
  {
    collection: "Users",
    timestamps: true,
  }
);

const Products = mongoose.model("Users", Prodschema);
module.exports = Products;
