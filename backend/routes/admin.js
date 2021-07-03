const express = require("express");
const router = express.Router();

const {
  getAdminById,
  getAdmin,
  //getAllUsers,
  updateAdmin,
  // updateRole,
  // approveEvent,
} = require("../controllers/admin");
// const { getEventById } = require("../controllers/event");
// const { isUpdatingRoleAllowed } = require("../controllers/auth");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

router.param("adminId", getAdminById);
// router.param("eventId", getEventById);

router.get("/admin/:adminId", isSignedIn, isAuthenticated, isAdmin, getAdmin);

// router.get("/users", getAllUsers);

router.put(
  "/admin/:adminId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateAdmin
);

// router.put(
//   "/admin/updateRole/:adminId",
//   isSignedIn,
//   isAuthenticated,
//   isAdmin,
//   // isUpdatingRoleAllowed,
//   updateRole
// );

// router.put(
//   "/admin/:adminId/approveEvent/:eventId",
//   isSignedIn,
//   isAuthenticated,
//   isAdmin,
//   approveEvent
// );

module.exports = router;
