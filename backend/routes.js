const express = require("express");
const Router = express.Router();
const axios = require("axios");
const fs = require("fs");

Router.get("/timezones", async (req, res) => {
  try {
    let response = await axios.get("http://worldtimeapi.org/api/timezone");
    res.status(200).send(response.data);
  } catch (error) {
    console.error(error);
  }
});

Router.get("/timezones/:name", async (req, res) => {
  try {
    let { name } = req.params;
    let url = name.replace("_", "/");
    let response = await axios.get(
      `http://worldtimeapi.org/api/timezone/${url}`
    );
    res.status(200).send(response.data);
  } catch (error) {
    console.error(error);
  }
});

Router.put("/timezones/:name", async (req, res) => {
  try {
    let { name } = req.params;
    let url = name.replace("_", "/");
    let response = await axios.get(
      `http://worldtimeapi.org/api/timezone/${url}`
    );
    if (!fs.existsSync("./data.log")) {
      fs.writeFileSync(
        "data.log",
        response.data.timezone +
          " " +
          response.data.datetime.split("T")[1].split(":")[2].split(".")[0] +
          " seconds\n"
      );
    } else {
      fs.appendFileSync(
        "data.log",
        response.data.timezone +
          " " +
          response.data.datetime.split("T")[1].split(":")[2].split(".")[0] +
          " seconds\n"
      );
    }
    res.status(200).send(response.data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = Router;
