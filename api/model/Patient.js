let mongoose = require("mongoose");
let patientSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  syptoms: {
    type: String,
    required: true
  },
  medicine: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
});
let Doctor = mongoose.model("Patient", patientSchema);
module.exports = Doctor;
