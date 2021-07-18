const Admin = require("../models/admin");
// const Event = require("../models/event");

exports.getAdminById = (req, res, next, id) => {
  Admin.findById(id).exec((err, admin) => {
    if (err || !admin) {
      return res.status(400).json({
        error: "No Admin Found in DB",
      });
    }
    req.profile = admin;
    // console.log(req.profile);
    next();
  });
};

exports.getAdmin = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  req.profile.createdAt = undefined;
  req.profile.updatedAt = undefined;
  req.profile.__v = undefined;
  return res.json(req.profile);
};

// exports.getAllUsers = (req, res) => {
//     User.find().exec((err, users) => {
//         if (err || !users) {
//             return req.status(400).json({
//                 error: "Failed to get All Users",
//             });
//         }
//         res.json(users);
//     });
// };

exports.updateAdmin = (req, res) => {
  Admin.findByIdAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, admin) => {
      if (err) {
        return res.status(400).json({
          error: "You are not authorized to update admin",
        });
      }
      admin.salt = undefined;
      admin.encry_password = undefined;
      admin.createdAt = undefined;
      admin.updatedAt = undefined;
      admin.__v = undefined;
      res.json(admin);
    }
  );
};

exports.updateRole = (req, res) => {
  // const { role } = req.body;
  Admin.findByIdAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, updatedRole) => {
      console.log(updatedRole);
      if (err) {
        return res.status(422).json({
          error: "Failed to update role!",
        });
      }
      updatedRole.updatedAt = undefined;
      updatedRole.createdAt = undefined;
      updatedRole.salt = undefined;
      updatedRole.encry_password = undefined;
      res.json(updatedRole);
    }
  );
};

// exports.approveEvent = (req, res, id) => {
//   Event.findById(id).exec((err, event) => {
//     console.log(event);
//     if (err) {
//       return res.status(500).json({
//         error: "Incorrect Event-Id!",
//       });
//     }
//     if (event.eventStatus == "Approved") {
//       return res.json({
//         msg: "Event already Approved!",
//       });
//     }
//     const approvedEvent = Event.findOneAndUpdate(
//       {
//         _id: id,
//       },
//       {
//         $set: {
//           eventStatus: "Approved",
//         },
//       },
//       { new: true }
//     );

//     return res.json(approvedEvent);
//   });
// };
