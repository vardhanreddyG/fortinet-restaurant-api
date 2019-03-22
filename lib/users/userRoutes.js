const router = require("express").Router();

const controllers = require("./userControllers");

router.get("/test", (req, res) => {
	res.send("It's working");
});

router.post("/login", controllers.login);
router.post("/register", controllers.register);

module.exports = router;
