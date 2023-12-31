const Products = require("../modules/modules");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const getAllProd = async (req, res) => {
  let allProd = await Products.find({});
  // console.log(req.headers.authorization.split(" ")[1]);
  res.send(allProd);
};

const getProdById = async (req, res) => {
  console.log(req.params);
  let id = req.params.id;
  let FindProd = await Products.findOne({ id: id });
  res.send(FindProd);
};

const deletedProd = async (req, res) => {
  let id = req.params.id;
  let FindProd = await Products.findOne({ id: id });
  let _id = FindProd._id;
  let deletedProd = await Products.findByIdAndDelete({ _id });
  // res.send(deletedProd);
};

const UpdatedProd = async (req, res) => {
  let id = req.params.id;
  let updatedProd = await Products.findOneAndUpdate({ id: id }, req.body);
};

const UpdatedWholeProd = async (req, res) => {
  let id = req.params.id;
  let updatedProd = await Products.replaceOne({ id: id }, req.body);
};

const PostProd = async (req, res) => {
  try {
    let FindProdBYUsername = await Products.findOne({
      username: req.body.username,
    });
    let FindProdByEmail = await Products.findOne({ email: req.body.email });
    if (FindProdBYUsername || FindProdByEmail) {
      res.status(201).send("olmaz");
    }
    const NewProd = new Products(req.body);
    NewProd.save();
    res.status(200).send({
      message: "user perfectly registered!",
    });
  } catch {
    (err) => {
      console.log(err);
      return err;
    };
  }
};

const refTokens = [];

const Login = async (req, res) => {
  const user = req.body;
  console.log(user);
  try {
    let FindProdBYUsername = await Products.findOne({
      username: user.username,
    });
    let FindProdByPass = await Products.findOne({
      password: user.password,
    });
    if (FindProdBYUsername && FindProdByPass) {
      //  res.status(200).send("salam userrrr");
      console.log("test");
      const token = jwt.sign(
        { username: user.username, password: user.password },
        process.env.SECRET_TOKEN,
        {
          expiresIn: "960s",
        }
      );

      const refToken = jwt.sign(
        { username: user.username, password: user.password },
        process.env.REFRESH_TOKEN
        // {
        //   expiresIn: "60s",
        // }
      );

      // console.log("token", token);

      refTokens.push(refToken);

      return res.status(200).send({ token, refToken });
    } else {
      return res.status(201).send("please check your username or password");
    }
  } catch {
    (err) => {
      console.log(err);
      return err;
    };
  }
};

const getAllUser = async (req, res) => {
  let allUser = await Products.find({});
  // console.log(req.headers.authorization.split(" ")[1]);
  console.log("headers burada", req.headers.authorization.split(" ")[1]);
  res.send(allUser);
};

module.exports = {
  getAllUser,
  getAllProd,
  getProdById,
  deletedProd,
  PostProd,
  UpdatedProd,
  UpdatedWholeProd,
  Login,
  refTokens,
};
