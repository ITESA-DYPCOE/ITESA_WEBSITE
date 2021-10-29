const express = require("express");
const router = express.Router();

const { getAdminById } = require("../controllers/admin");
router.param("adminId", getAdminById);
module.exports = router;
