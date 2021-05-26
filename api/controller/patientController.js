let mongoose = require("mongoose");
const Patient = require("../model/Patient");
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'youraccesstokensecret';

// exports.getPatient = async (req, res) => {
//   const email = req.params.doctorEmail;
//   try {
//     let doctor = await Doctor.find({ email: email });
//     res.status(200).json(doctor);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

exports.addNewPatient = async (req, res) => {
  console.log(req.body);
  try {
    const patient = new Patient({
      id: req.body.id,
      name: req.body.name,
      syptoms: req.body.syptoms,
      medicine: req.body.medicine,
    });
    let newPatient = await patient.save();
   
    res.status(200).json({ data: newPatient });
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const id = req.params.doctorId;
    let result = await Doctor.remove({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getPatientById = async (req, res) => {
  const id = req.params.patientId;
  try {
    let patient = await Patient.find({ id: id });
    if (!patient.length) throw 'Немає пацієнтів!';
    res.status(200).json(patient);
  } catch (err) {
    res.status(500).json(err);
  }
}