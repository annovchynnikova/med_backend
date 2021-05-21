const jwt = require('jsonwebtoken');
const Doctor = require("../model/Doctor");
const accessTokenSecret = 'youraccesstokensecret';

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //todo:: тут делаешь в базе поиск по бзерам
    const user = await Doctor.findOne({email: email, password: password });

    if (user) {
      // Generate an access token
      //todo:: accessTokenSecret хранишь в env , любая строка типа youraccesstokensecret
      const accessToken = jwt.sign({ email: user.email, id: user._id }, accessTokenSecret, { expiresIn: '20m' });

      res.status(200).json({token: accessToken});
    } else {
      res.status(401).json('Username or password incorrect');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.profile = async (req, res) => {
  try {
    const data = req.user;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.logout = async (req, res) => {
  try {
    const { username } = req.user;

    res.status(200).json({ });
  } catch (err) {
    res.status(500).json(err);
  }
};