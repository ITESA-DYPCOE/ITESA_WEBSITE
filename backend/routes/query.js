const express = require("express");
const router = express.Router();
const Query = require("../models/query");

router.post("/submit-query", async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(422).json({ err: "All fields required!" });
  }
  try {
    const userQuery = new Query({ name, email, subject, message });

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
