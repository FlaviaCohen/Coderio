require("dotenv").config();
const express = require("express");
const app = express();
const { PORT_BACKEND } = process.env;
const Router = require("./routes");
const volleyball = require("volleyball");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(volleyball);
app.use(bodyParser.urlencoded({ extends: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", Router);

app.listen(PORT_BACKEND, () => {
  console.log(`listening on PORT ${PORT_BACKEND}`);
});
