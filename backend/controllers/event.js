const admin = require("firebase-admin");
const db = admin.firestore();
const formidable = require("formidable");
const { nanoid } = require("nanoid");

exports.getEventById = (req, res, next, id) => {
  db.collection("events")
    .doc(id)
    .get()
    .then(event => {
      let { title, description, imageURL, links, date, eventId } = event.data();
      const { instagram, linkedin } = links;
      const { startDate, endDate } = date;

      req.event = {
        eventId,
        title,
        description,
        imageURL,
        links: {
          instagram,
          linkedin,
        },
        date: {
          startDate,
          endDate,
        },
      };
      // console.log("Document data:", event.data());
      // console.log("event", req.event);
      next();
    })
    .catch(err => {
      return res.status(400).json({
        msg: "No Event Found in DB",
      });
    });
};

exports.createEvent = (req, res) => {
  let form = new formidable.IncomingForm();

  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: err,
        msg: "Please validate FormData!",
      });
    }

    const {
      title,
      description,
      instagramURL,
      linkedinURL,
      startDate,
      endDate,
      imageURL,
    } = fields;
    // const { imageURL } = file;

    console.log({ fields });

    if (
      !title ||
      !description ||
      !instagramURL ||
      !linkedinURL ||
      !startDate ||
      !endDate
    ) {
      return res.status(400).json({
        msg: "Please validate FormData!!",
      });
    }

    if (!imageURL) {
      return res.status(400).json({
        msg: "Event Photo is required!",
      });
    }

    let eventNanoId = nanoid();
    let event = {
      eventId: eventNanoId,
      title,
      description,
      imageURL: imageURL,
      links: {
        instagram: instagramURL,
        linkedin: linkedinURL,
      },
      date: {
        startDate,
        endDate,
      },
    };

    db.collection("events")
      .doc(eventNanoId)
      .set(event)
      .then(result => {
        console.log({ result });
        return res.json(event);
      })
      .catch(err => {
        return res.status(400).json({
          error: err,
          msg: "Not able to save event in DB",
        });
      });
  });
};

exports.updateEvent = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: err,
        msg: "Please validate FormData!",
      });
    }
    console.log("update", fields);

    const {
      title,
      description,
      instagramURL,
      linkedinURL,
      startDate,
      endDate,
      imageURL,
    } = fields;
    // const { imageURL } = file;

    if (
      !title ||
      !description ||
      !instagramURL ||
      !linkedinURL ||
      !startDate ||
      !endDate
    ) {
      return res.status(400).json({
        msg: "Please validate FormData!",
      });
    }

    if (!imageURL) {
      return res.status(400).json({
        msg: "Event Photo required!",
      });
    }

    let updatedEvent = {
      title,
      description,
      imageURL: imageURL.toString(),
      links: {
        instagram: instagramURL,
        linkedin: linkedinURL,
      },
      date: {
        startDate,
        endDate,
      },
    };

    db.collection("events")
      .doc(req.event.eventId)
      .update(updatedEvent)
      .then(result => {
        console.log(result);
        return res.json({
          eventId: req.event.eventId,
          ...updatedEvent,
        });
      })
      .catch(error => {
        return res.status(400).json({
          error,
          msg: "Not able to update event in DB",
        });
      });
  });
};

exports.removeEvent = (req, res) => {
  db.collection("events")
    .doc(req.event.eventId)
    .delete()
    .then(result => {
      console.log(result);
      return res.json({
        msg: "Event deleted successfully!!",
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        msg: "Failed to delete the Event!!",
      });
    });
};

exports.getEvent = (req, res) => {
  if (req.event) {
    return res.json(req.event);
  } else {
    return res.status(400).json({
      msg: "No Event Found in DB",
    });
  }
};

exports.getAllEvents = async (req, res) => {
  const eventsCollection = await db
    .collection("events")
    .orderBy("date.endDate", "desc");
  eventsCollection.get().then(eventDoc => {
    let events = [];
    eventDoc.forEach(event => {
      events.push({ ...event.data() });
    });
    // console.log(events);
    return res.json({ events });
  });
};
