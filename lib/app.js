const express = require("express");

const bodyParser = require("body-parser");

const morgan = require("morgan");

const restaurants = require("./restaurants");

const users = require("./users");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.use("/api/restaurants", restaurants);
app.use("/api/users", users);

module.exports = app;
