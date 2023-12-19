const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema({
  comment: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  url: String,
  type: String,
});

module.exports = mongoose.model("Media", MediaSchema);
