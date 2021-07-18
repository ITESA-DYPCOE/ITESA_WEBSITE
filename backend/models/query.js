const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      min: 3,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
      min: 5,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      min: 8,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Query", querySchema);
