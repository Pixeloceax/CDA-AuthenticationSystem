const mongoose = require("mongoose");
const userModel = mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  phoneNumber: {
    type: String,
  },
});

module.exports = mongoose.model("User", userModel);
