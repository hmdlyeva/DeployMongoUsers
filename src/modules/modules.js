const mongoose = require("mongoose");

const Prodschema = mongoose.Schema(
  {
     // id: { type: Number, unique: true },
    name: String,
    id: String,
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
        id: String,
        imgsrc: String,
        imgtitle: String,
      },
    ],
    message: [
      {
        id: String,
        acceptedmessage: String,
      },
    ],
    mystory: [
      {
        id: String,
        storyimage: String,
        storytitle: String,
      },
    ],
    notification: [
      {
        id: String,
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
