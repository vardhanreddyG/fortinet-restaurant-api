const mongoose = require("mongoose");

let uri = "mongodb://localhost/fortinet";

if (process.env.NODE_ENV === "production") {
	uri = "";
}

module.exports = mongoose.connect(uri, {
	dbName: "fortinet",
	useNewUrlParser: true,
	useCreateIndex: true
});
