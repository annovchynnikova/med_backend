const express = require("express");
const PORT = process.env.PORT || 4000;
const morgan = require("morgan");
var cors = require("cors");
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/db");
const app = express();

const accessTokenSecret = 'youraccesstokensecret';
//configure database and mongoose
mongoose.set("useCreateIndex", true);
mongoose
  .connect(config.database, { useNewUrlParser: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });
// db configuaration ends here
//registering cors
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
// });
//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//configure body-parser ends here
app.use(morgan("dev")); // configire morgan
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// define first route
app.get("/", (req, res) => {
  res.json("Hola MEVN devs...Assemble");
});

const doctorRoutes = require("./api/routes/doctor"); //bring in our user routes
app.use("/doctor", doctorRoutes)

const commentRoutes = require("./api/routes/comment"); //bring in our user routes
app.use("/comment", commentRoutes)

const medicineRoutes = require("./api/routes/medicine"); //bring in our user routes
app.use("/medicine",cors(), medicineRoutes)

const musicRoutes = require("./api/routes/music"); //bring in our user routes
app.use("/music", musicRoutes)

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
