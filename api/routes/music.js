const express = require("express");
const router = express.Router();
const musicController = require("../controller/musicController");

router.get("/",  musicController.getAllMusics);
router.delete("/:musicId", musicController.deleteMusic);

module.exports = router;
