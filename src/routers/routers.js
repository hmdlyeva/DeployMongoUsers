const router = require("express").Router();
const ProdControllers = require("../controllers/controller");

router.get("/users", ProdControllers.getAllProd);
router.get("/users/:id", ProdControllers.getProdById);
router.delete("/users/:id", ProdControllers.deletedProd);
router.patch("/users/:id", ProdControllers.UpdatedProd);
router.put("/users/:id", ProdControllers.UpdatedWholeProd);
router.post("/users", ProdControllers.PostProd);
router.post("/login", ProdControllers.Login);


module.exports = router;
