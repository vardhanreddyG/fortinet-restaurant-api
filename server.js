const http = require("http");

const app = require("./lib/app");

const db = require("./lib/dbConnection");

const port = 3000 || process.env.PORT;

const server = http.createServer(app);

db.then(() => {
	console.log("connected to db");
	server
		.listen(port, () => {
			console.log(`Api running on port ${port}`);
		})
		.on("error", e => console.error(e));
}).catch(e => console.error(e));
