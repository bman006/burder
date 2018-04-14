const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:      { type: String, required: true },
    lastName:       { type: String, required: true },
    wins:           { type: Number, default: 0},
    losses:         { type: Number, default: 0},
  });
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;
  