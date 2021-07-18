const express = require("express");
const router = express.Router();

const {
  createEvent,
  getEventById,
  getAllEvents,
  getEvent,
  image,
  updateEvent,
  removeEvent,
  // getAllLatestEvents,
  // getAllPastEvents,
} = require("../controllers/event");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

const { getAdminById } = require("../controllers/admin");

//Params
router.param("adminId", getAdminById);
router.param("eventId", getEventById);

//read routes
router.get("/event/:eventId", getEvent);
router.get("/events", getAllEvents);

// router.get("/latest/events", getAllLatestEvents);
// router.get("/past/events", getAllPastEvents);

//image route
router.get("/event/image/:eventId", image);

//create event route
router.post(
  "/event/create/:adminId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createEvent
);

//update event route
router.put(
  "/event/:eventId/:adminId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateEvent
);

//delete event route
router.delete(
  "/event/:eventId/:adminId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeEvent
);

module.exports = router;
