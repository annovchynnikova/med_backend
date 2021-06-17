const express = require("express");
const router = express.Router();
const doctorController = require("../controller/doctorController");

router.post("/", doctorController.addNewDoctor);
router.get("/:doctorEmail", doctorController.getDoctor);
router.delete("/:doctorId", doctorController.deleteDoctor);
router.post("/login", doctorController.loginDoctor);
router.get("/profile", doctorController.profileDoctor);
router.post("/liked", doctorController.toggleLikedMedicines);
router.get("/liked/:doctorId", doctorController.getLikedMedicines);


module.exports = router;
