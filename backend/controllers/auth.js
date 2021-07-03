const Admin = require("../models/admin");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
      params: errors.array()[0].param,
    });
  }

  const admin = new Admin(req.body);
  admin.save((err, admin) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save admin in DB",
      });
    }
    res.json({
      id: admin._id,
      name: admin.name,
      email: admin.email,
      adminInfo: admin.adminInfo,
    });
  });
};

exports.signin = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  Admin.findOne({ email }, (err, admin) => {
    if (err || !admin) {
      return res.status(400).json({
        error: "Admin email does not exists",
      });
    }

    if (!admin.authenticate(password)) {
      return res.status(401).json({
        error: "Email & Password do not match",
      });
    }

    //create token
    const token = jwt.sign({ _id: admin.id }, process.env.SECRET);

    //put token in cookie
    res.cookie("token", token, { expire: new Date() + 9999 });

    //send res to front-end
    const { _id, name, email, role } = admin;
    return res.json({ token, admin: { _id, name, email, role } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "admin signout sucessfully...",
  });
};

//protected routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: "auth",
  algorithms: ["sha1", "RS256", "HS256"],
});

//custom-middlewares
exports.isAuthenticated = (req, res, next) => {
  // console.log(req.auth);
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED!",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "You are not APPROVED ADMIN!",
    });
  }
  next();
};

// exports.isUpdatingRoleAllowed = (req, res, next) => {
//   console.log(req.auth);
//   let checker = req.profile && req.profile.role === 2;
//   if (!checker) {
//     return res.status(403).json({
//       error: "ACCESS DENIED!",
//     });
//   }
//   next();
// };
