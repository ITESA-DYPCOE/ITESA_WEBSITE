const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/", (req, res) => {
	res.send({ msg: "Hey, i am working" });
});

router.post("/submit-query", async (req, res) => {
	// res.send(req.body);
	// console.log(req.body);

	const { name, email, subject, message } = req.body;

	if (!name || !email || !subject || !message) {
		return res.status(422).json({ err: "All fields required!" });
	}

	try {
		const userQuery = new User({ name, email, subject, message });

		const query = await userQuery.save();

		if (query) {
			res.status(200).json({
				msg: "Sent Successfully..",
			});
		} else {
			res.status(500).json({
				msg: "Gotcha Err...",
			});
		}
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
