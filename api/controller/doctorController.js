let mongoose = require("mongoose");
const Doctor = require("../model/Doctor");
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'youraccesstokensecret';

exports.getAllDoctors = async (req, res) => {
  try {
    let doctor = await Doctor.find();
    res.status(200).json(doctor);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getDoctor = async (req, res) => {
  const email = req.params.doctorEmail;
  try {
    let doctor = await Doctor.find({ email: email });
    res.status(200).json(doctor);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.addNewDoctor = async (req, res) => {
  try {
    const doctor = new Doctor({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password,
      liked: req.body.liked,
    });
    let newDoctor = await doctor.save();
   
    res.status(200).json({ data: newDoctor });
  } catch (err) {
    res.status(500).json({ error: err });
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

exports.toggleLikedMedicines = async (req, res) => {
  const liked = req.body.liked_id;
  const email = req.body.email;
  try {
    const doctor = await Doctor.find({email: email});
    if (!doctor.length) throw 'Лікар не знайдений!';

    let arrLiked = doctor[0].liked;
    const index = arrLiked.indexOf(liked);

    if(index >= 0) {
      arrLiked.splice(index, 1);
    } else {
      arrLiked.push(liked);
    }

    await Doctor.updateOne({email: email}, {$set: {liked: arrLiked}})
    res.status(200).json(arrLiked);
  } catch (err) {
    res.status(500).json(err);
  }
};


exports.getLikedMedicines = async (req, res) => {
  const id = req.params.doctorId;
  try {
    let doctor = await Doctor.find({ _id: id });
    if (!doctor.length) throw 'Лікар не знайдений!';
    res.status(200).json(doctor[0].liked);
  } catch (err) {
    res.status(500).json(err);
  }
}

exports.loginDoctor = async (req, res) => {
  // const email = req.params.doctorEmail;
  // try {
  //   let doctor = await Doctor.find({ email: email });
  //   res.status(200).json(doctor);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  const { email, password } = req.body;
    // Filter user from the users array by username and password
    const user = await Doctor.find({email: email,password:password });

    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);
        res.status(200).json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
};

exports.profileDoctor = async (req, res) => {
  const email = req.params.doctorEmail;
  try {
    let doctor = await Doctor.find({ email: email });
    res.status(200).json(doctor);
  } catch (err) {
    res.status(500).json(err);
  }
};