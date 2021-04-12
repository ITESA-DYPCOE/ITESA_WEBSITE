require("dotenv").config();

const mongoose = require("mongoose");

const express = require("express");
const app = express();

app.use(express.json());
//routes
app.use(require("./routes/auth"));

//DB Connection
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("DB CONNECTED");
	});

//PORT
const port = process.env.PORT || 8000;

//Starting server
app.listen(port, () => {
	console.log(`App is running.. at ${port}`);
});
