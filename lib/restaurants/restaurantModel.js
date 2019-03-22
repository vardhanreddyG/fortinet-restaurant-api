const mongoose = require("mongoose");

const { Schema } = mongoose;

const restaurantSchema = new Schema({
	"Restaurant ID": Number,
	"Restaurant Name": String,
	Cuisines: String,
	"Average Cost for two": String,
	Currency: String,
	"Has Table booking": String,
	"Has Online delivery": String,
	"Aggregate rating": Number,
	"Rating color": String,
	"Rating text": String,
	Votes: Number
});

restaurantSchema.index({ Votes: 1, Cuisines: "text" });
module.exports = mongoose.model("Restaurant", restaurantSchema);
