const express = require("express");

const bodyParser = require("body-parser");

const morgan = require("morgan");

const restaurants = require("./restaurants");

const users = require("./users");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/restaurants", restaurants);
app.use("/api/users", users);

module.exports = app;
