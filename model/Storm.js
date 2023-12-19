const mongoose = require("mongoose");

const StormSchema = new mongoose.Schema({
  city: {
    type: String,
    require,
  },
  affectedAreas: {
    type: Number,
    require,
  },
  detectedTime: {
    type: Date,
  },
});
module.exports = mongoose.model("Storm", StormSchema);
