const monogo = require("mongodb").MongoClient;

let url = "mongodb://localhost/fortinet";
let db;

monogo
	.connect(url)
	.then(connection => {
		db = connection;
	})
	.catch(e => console.error(e));

    const getRestaurant = 