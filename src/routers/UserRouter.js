const router = require("express").Router();
const ProdControllers = require("../controllers/controller");
const userAuth = require("../middlewares/userAuth");


router.get("/", userAuth, ProdControllers.getAllUser);

module.exports = router;