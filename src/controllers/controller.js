const Products = require("../modules/modules");

const getAllProd = async (req, res) => {
  let allProd = await Products.find({});
  res.send(allProd);
};

const getProdById = async (req, res) => {
  console.log(req.params)
  let id = req.params.id
  let FindProd = await Products.findOne({ id: id });
  res.send(FindProd);
};

const deletedProd = async (req, res) => {
  let id = req.params.id
  let FindProd = await Products.findOne({ id: id });
  let _id = FindProd._id
  let deletedProd = await Products.findByIdAndDelete({ _id });
  // res.send(deletedProd);
};

const UpdatedProd = async (req, res) => {
  let id = req.params.id
  let updatedProd = await Products.findOneAndUpdate({ id: id },
    req.body
  );
};

const UpdatedWholeProd = async (req, res) => {
  let id = req.params.id
  let updatedProd = await Products.replaceOne({ id: id },
    req.body
  );
};


const PostProd = async (req, res) => {
  let FindProd = await Products.findOne({ id: req.body.id });
  if (FindProd) {
    res.send("olmaz")
  }
  else {
    const NewProd = new Products(req.body)
    NewProd.save()
  }
};


module.exports = { getAllProd, getProdById, deletedProd, PostProd, UpdatedProd, UpdatedWholeProd };
