const express = require("express");
const router = express.Router();
const doctorController = require("../controller/doctorController");

router.post("/", doctorController.addNewDoctor);
// // router.get("/", doctorController.getAllDoctors);
router.get("/:doctorEmail", doctorController.getDoctor);
router.delete("/:doctorId", doctorController.deleteDoctor);
// // router.post("/login", doctorController.getDoctorLogin);
router.post("/login", doctorController.loginDoctor);
router.get("/profile", doctorController.profileDoctor);

module.exports = router;