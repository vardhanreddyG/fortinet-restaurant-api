const User = require("./userModel");

const validations = require("./userValidations");

const bcrypt = require("bcrypt");

const login = async (req, res, next) => {
	try {
		// validate body
		const result = validations.validate(req.body);
		if (result.error) {
			res.status(200).json({ type: "error", message: result.error.details });
			return;
		}

		const { userName, password } = req.body;

		const user = await User.findOne({ userName });
		if (!user) {
			res
				.status(200)
				.json({ type: "error", message: "user name or password wrong" });
			return;
		}

		// compare password
		const isValidaPassword = await bcrypt.compare(password, user.password);
		if (!isValidaPassword) {
			res
				.status(200)
				.json({ type: "error", message: "user name or password wrong" });
			return;
		}
		res.status(200).json({ type: "success" });
	} catch (error) {
		next(error);
	}
};

const register = async (req, res, next) => {
	try {
		const result = validations.validate(req.body);
		if (result.error) {
			res.status(200).json({ type: "error", message: result.error.details });
			return;
		}

		const { userName, password } = req.body;

		const user = await User.findOne({ userName });
		if (user) {
			res
				.status(200)
				.json({ type: "error", message: "user name already exits" });
			return;
		}

		const hash = await bcrypt.hash(password, 10);
		await new User({ userName, password: hash }).save();
		res.status(200).json({ type: "success" });
	} catch (error) {
		next(error);
	}
};

module.exports = {
	login,
	register
};
