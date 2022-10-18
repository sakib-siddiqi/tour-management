const express = require("express");
const bodyParser = require("body-parser");
const tourRoute = require("./routes/tours.route");
const app = express();
const API_VERSION = "v1";
const ROOT_URL = `/api/${API_VERSION}`;

app.use(bodyParser.json());

app.get(ROOT_URL, async (req, res) => {
  res.status(200).json({
    app: "Tour Management",
    author: "Sakib Siddiqi Supto",
    contact: [
      "sakibsiddiqi15@gmail.com",
      "sakibsiddiqisupto@gmail.com",
      "01715073522",
    ],
  });
});
app.use(ROOT_URL, tourRoute);

app.all("*", (req, res) => {
  res.status(400).json({
    message: "Not Found",
  });
});

module.exports = app;
