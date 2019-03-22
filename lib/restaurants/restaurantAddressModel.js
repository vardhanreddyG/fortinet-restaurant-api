const mongoose = require("mongoose");

const { Schema } = mongoose;

const AddressSchema = new Schema({
	"Restaurant ID": Number,
	"Country Code": Number,
	City: String,
	Address: String,
	Locality: String,
	"Locality Verbose": String,
	Longitude: Number,
	Latitude: Number
});

AddressSchema.index({ "Restaurant ID": 1 });
module.exports = mongoose.model("Address", AddressSchema);
