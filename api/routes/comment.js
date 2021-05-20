const express = require("express");
const router = express.Router();
const commentsController = require("../controller/commentsController");

router.post("/", commentsController.addNewComment);
router.get("/", commentsController.getAllComments);
router.get("/:commentId", commentsController.getCommentsByMedisineId);
router.delete("/:commentId", commentsController.deleteComment);

module.exports = router;
