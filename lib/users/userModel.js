const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		userName: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		}
	},
	{ collection: "users", timestamps: true }
);

userSchema.index({ userName: 1 });

module.exports = mongoose.model("User", userSchema);
