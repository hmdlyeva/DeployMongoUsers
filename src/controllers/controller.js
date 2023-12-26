const Products = require("../modules/modules");
const jwt = require("jsonwebtoken");
const getAllProd = async (req, res) => {
  let allProd = await Products.find({});
  console.log(req.headers.authorization.split(" ")[1]);
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
      const token = jwt.sign(
        { username: user.username, password: user.password },
        process.env.SECRET_TOKEN

        // {
        //   expiresIn: "1m",
        // }

      );
      console.log("token", token);
      return res.status(200).send("salam", token);
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

module.exports = {
  getAllProd,
  getProdById,
  deletedProd,
  PostProd,
  UpdatedProd,
  UpdatedWholeProd,
  Login,
};
