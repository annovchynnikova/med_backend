let mongoose = require("mongoose");
let doctorSchema = mongoose.Schema({
  // id: {
  //   type: Number,
  //   required: true
  // },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
});
let Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
