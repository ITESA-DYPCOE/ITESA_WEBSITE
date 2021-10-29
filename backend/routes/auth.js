const express = require("express");
const router = express.Router();
const { authenticateAdmin } = require("../controllers/auth");

router.post("/authenticate", authenticateAdmin);
module.exports = router;
