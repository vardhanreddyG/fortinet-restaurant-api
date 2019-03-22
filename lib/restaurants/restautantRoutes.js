const router = require("express").Router();

const controllers = require("./restaurantControllers");

router.get("/test", (req, res) => {
	res.send("It's working");
});

router.get("/", controllers.getRestaurants);

router.get("/search", controllers.searchRestaurants);

router.get("/address/:id", controllers.getRestautantAddress);

module.exports = router;
