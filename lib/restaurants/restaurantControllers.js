const Restaurant = require("./restaurantModel");

const Address = require("./restaurantAddressModel");

const getRestaurants = async (req, res, next) => {
	try {
		Restaurant.createIndexes(error => {
			if (error) {
				next(error);
			}
		});
		const restaurants = await Restaurant.find({}).lean();
		res.status(200).json({ count: restaurants.length, restaurants });
	} catch (error) {
		next(error);
	}
};

const getRestautantAddress = async (req, res, next) => {
	try {
		const { id } = req.params;
		Address.createIndexes(error => {
			if (error) {
				next(error);
			}
		});
		const address = await Address.findOne({ "Restaurant ID": id });
		res.status(200).json({ address });
		res.status;
	} catch (error) {
		next(error);
	}
};

const searchRestaurants = async (req, res, next) => {
	try {
		if (!req.query.name) {
			res.status(200).json({ type: "error", message: "please provide name" });
		}
		const query = {
			"Restaurant Name": { $regex: req.query.name, $options: "i" }
		};
		const searchResult = await Restaurant.find(query).lean();
		res
			.status(200)
			.json({ count: searchResult.length, restaurants: searchResult });
	} catch (error) {
		next(error);
	}
};

const getRestaurantsByCuisine = async (req, res, next) => {
	try {
		if (!req.query.name) {
			res.status(200).json({ type: "error", message: "please provide name" });
		}
		const query = {
			$text: { $saerch: req.query.name }
		};
		const searchResult = await Restaurant.find(query).lean();
		res
			.status(200)
			.json({ count: searchResult.length, restaurants: searchResult });
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getRestaurants,
	searchRestaurants,
	getRestautantAddress,
	getRestaurants
};
