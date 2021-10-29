const admin = require("firebase-admin");
const db = admin.firestore();

exports.getAdminById = (req, res, next, id) => {
  // console.log({ id });
  db.collection("admins")
    .doc(id)
    .get()
    .then(doc => {
      let { adminId, email, role, authProvider } = doc.data();
      req.profile = {
        adminId,
        email,
        role,
        authProvider,
      };
      // console.log("Document data:", doc.data());
      next();
    })
    .catch(err => {
      return res.status(400).json({
        msg: "No Admin Found in DB",
      });
    });
};
