const express = require("express");
const router = express.Router();
const patientController = require("../controller/patientController");

// // router.get("/", doctorController.getAllDoctors);
// router.get("/:doctorEmail", doctorController.getDoctor);
router.post("/", patientController.addNewPatient);
// router.delete("/:patientId", patientController.patientDel);
router.get("/:patientId", patientController.getPatientById);


module.exports = router;
