let mongoose = require("mongoose");
let medicineSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  symptoms: {
    type: String,
    required: true
  },
  categories: {
    type: String,
    required: true
  },
  maker: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
});
let Medicine = mongoose.model("Medicine", medicineSchema);
module.exports = Medicine;
