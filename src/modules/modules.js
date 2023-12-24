const mongoose = require("mongoose");

const Prodschema = mongoose.Schema(
  {
    name: String,
    id: Number,
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
        id: Number,
        imgsrc: String,
        imgtitle: String,
      },
    ],
    message: [
      {
        id: Number,
        acceptedmessage: String,
      },
    ],
    mystory: [
      {
        id: Number,
        storyimage: String,
        storytitle: String,
      },
    ],
    notification: [
      {
        id: Number,
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
