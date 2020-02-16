"use strict";

const config = require("../config");
const mongoose = require("mongoose");

mongoose
  .connect(config.dbURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(
    () => {
      console.log("Mongoose Connected");
    },
    error => {
      console.log("MongoDB Error", error);
    }
  );

const chatUser = mongoose.Schema({
  profileId: { type: String },
  fullName: { type: String },
  profilePic: { type: String }
});

let userModel = mongoose.model("chatUser", chatUser);

module.exports = {
  mongoose,
  userModel
};
