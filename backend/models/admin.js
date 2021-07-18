var mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 22,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    adminInfo: {
      type: String,
      trim: true,
    },
    encry_password: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: Number,
      default: 0,
    }, //role - 0 : not approved admin, 1: approved admin
  },
  { timestamps: true }
);

// getting password hashed in schema
adminSchema
  .virtual("password")
  .set(function (password) {
    //This password argument is the plain password taken from the user
    this._password = password; //plain password
    this.salt = uuidv4(); //unique id is given to each user
    this.encry_password = this.securePassword(password); //This will store the hashed password by calling the securePassword method and giving the plain password as argument
  })
  .get(function () {
    return this._password; //Taking the password out from the schema
  });

adminSchema.methods = {
  //method to be called for matching hashed passwords when user sign in with his password
  //which will return result =>> true(if matched!) or false(not matched!)
  authenticate: function (plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function (plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("Admin", adminSchema);
