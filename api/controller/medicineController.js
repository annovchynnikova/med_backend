let mongoose = require("mongoose");
const Medicine = require("../model/Medicine");

exports.getAllMedicines = async (req, res) => {
  try {
    let medicine = await Medicine.find();
    res.status(200).json(medicine);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getMedicine = async (req, res) => {
  const id = req.params.medicineId;
  try {
    let medicine = await Medicine.find({ id: id });
    res.status(200).json(medicine);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.addNewMedicine = async (req, res) => {
  try {
    const medicine = new Medicine({
      id: req.body.id,
      info: req.body.info,
      title: req.body.title,
      symptoms: req.body.symptoms,
      categories: req.body.categories,
      maker: req.body.maker,
    });
     console.log(medicine)
    let newMedicine = await medicine.save();
   
    res.status(200).json({ data: newMedicine });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteMedicine = async (req, res) => {
  try {
    const id = req.params.medicineId;
    let result = await Medicine.remove({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

