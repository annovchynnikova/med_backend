const express = require("express");
const router = express.Router();
const medicineController = require("../controller/medicineController");

router.get("/",  medicineController.getAllMedicines);
router.get("/:medicineId", medicineController.getMedicine);
router.post("/", medicineController.addNewMedicine);
router.delete("/:medicineId", medicineController.deleteMedicine);

module.exports = router;
