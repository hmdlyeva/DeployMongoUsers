const express = require("express");
const app = express();
require("dotenv").config();
require("./src/config/db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 3000;
const routes = require("./src/routers/routers");
const UserRouter = require("./src/routers/UserRouter");
app.use("/", routes);
app.use("/products", UserRouter); 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
