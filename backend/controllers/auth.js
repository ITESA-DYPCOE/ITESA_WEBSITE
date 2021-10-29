const admin = require("firebase-admin");
const db = admin.firestore();

exports.isSignedIn = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    let authToken = req.headers.authorization.split(" ")[1];
    admin
      .auth()
      .verifyIdToken(authToken)
      .then(decodedToken => {
        // console.log({ decodedToken });
        req.auth = decodedToken;
        next();
      })
      .catch(error => {
        return res.status(400).json({
          error,
          msg: "Admin Authentication failed!!",
        });
      });
  } else {
    return res.status(400).json({
      msg: "No AuthToken found!",
    });
  }
};

exports.isAuthenticated = (req, res, next) => {
  // console.log("auth", req.auth);
  // console.log("profile", req.profile);

  let checker = req.profile && req.auth && req.profile.adminId == req.auth.uid;
  if (!checker) {
    return res.status(403).json({
      error: "Access Denied!!",
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

exports.authenticateAdmin = (req, res) => {
  // auth type is "phone" | "google" | "email"
  const { token, authProvider, isFirstUser } = req.body;
  // console.log(isFirstUser);
  // console.log(req.body);
  admin
    .auth()
    .verifyIdToken(token)
    .then(decodedToken => {
      // console.log(decodedToken);
      const uid = decodedToken.uid;
      if (authProvider === "phone") {
        db.collection("admins")
          .doc(uid)
          .set({
            adminId: uid,
            phoneNumber: decodedToken.phone_number,
            role: 0,
            authProvider,
          })
          .then(result => {
            // console.log(result);
            res.json({
              msg: "Admin added to DB, pls authorize the role!",
              admin: {
                adminId: uid,
                phoneNumber: decodedToken.phone_number,
                role: 0,
                authProvider,
              },
            });
          })
          .catch(err => {
            // console.log(err);
            return res.status(400).json({
              msg: "Not able to create Admin in DB",
              error: err,
            });
          });
      } else if (authProvider === "google") {
        if (isFirstUser) {
          db.collection("admins")
            .doc(uid)
            .set({
              adminId: uid,
              name: decodedToken.name,
              email: decodedToken.email,
              emailVerified: decodedToken.email_verified,
              picture: decodedToken.picture,
              role: 0,
              authProvider,
            })
            .then(result => {
              // console.log({ result });
              res.json({
                msg: "Admin added to DB, pls authorize the role!",
                admin: {
                  adminId: uid,
                  email: decodedToken.email,
                  role: 0,
                  authProvider,
                },
              });
            })
            .catch(err => {
              // console.log(err);
              return res.status(400).json({
                msg: "Not able to create Admin in DB",
                error: err,
              });
            });
        } else {
          db.collection("admins")
            .doc(uid)
            .get()
            .then(admin => {
              const { adminId, email, role, authProvider } = admin.data();
              console.log(adminId, email, role, authProvider);
              res.json({
                msg: "Signin success!!",
                admin: {
                  adminId,
                  email,
                  role,
                  authProvider,
                },
              });
            })
            .catch(err => {
              // console.log(err);
              return res.status(400).json({
                msg: "Failed to signin, please try again!",
                error: err,
              });
            });
        }
      } else if ("email") {
        db.collection("admins")
          .doc(uid)
          .set({
            adminId: uid,
            email: decodedToken.email,
            emailVerified: decodedToken.email_verified,
            role: 0,
            authProvider,
          })
          .then(result => {
            res.json({
              msg: "Admin added to DB, pls authorize the role!",
              admin: {
                adminId: uid,
                email: decodedToken.email,
                role: 0,
                authProvider,
              },
            });
          })
          .catch(err => {
            // console.log(err);
            return res.status(400).json({
              msg: "Not able to create Admin in DB",
              error: err,
            });
          });
      } else {
        return res.status(400).json({
          msg: "Admin not found!",
        });
      }
    })
    .catch(error => {
      return res.status(400).json({
        error,
        msg: "Admin not verified!!",
      });
    });
};
