const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signout, signup, signin } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("Name should be min. 3 characters"),
    check("email")
      .normalizeEmail()
      .isEmail()
      .withMessage("Valid Email required"),
    check("password")
      .isLength({ min: 5 })
      .withMessage("Password should be min. 5 characters")
      .matches(/\d/)
      .withMessage("Password must be a number"),
    check("adminInfo")
      .isLength({ min: 6 })
      .withMessage("About admin info required!"),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email").isEmail().withMessage("Valid Email required"),
    check("password")
      .isLength({ min: 5 })
      .withMessage("Password field required")
      .matches(/\d/),
    // .withMessage("Password must contain a number"),
  ],
  signin
);

router.get("/signout", signout);

// router.get("/testroute", isSignedIn, (req, res) => {
//     //res.send("a protected route");
//     res.json(req.auth);
// });

module.exports = router;
