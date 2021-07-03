const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const eventSchema = new mongoose.Schema(
  {
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    name: {
      type: String,
      trim: true,
    },

    image: {
      data: Buffer,
      contentType: String,
    },

    date: {
      type: Date,
    },

    info: {
      type: String,
      trim: true,
    },

    linkedinURL: {
      type: String,
      trim: true,
    },

    instagramURL: {
      type: String,
      trim: true,
    },

    // eventStatus: {
    //   type: String,
    //   default: "Not Approved",
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
