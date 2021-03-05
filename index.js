require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { PORT } = process.env;

app.use(express.static(path.join(__dirname, "/public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
