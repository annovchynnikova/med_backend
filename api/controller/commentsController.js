let mongoose = require("mongoose");
const Comment = require("../model/Comment");

exports.getAllComments = async (req, res) => {
  try {
    let comment = await Comment.find();
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getCommentsByMedisineId = async (req, res) => {
  const id = req.params.commentId;
  try {
    let comment = await Comment.find({ _id: id });
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.addNewComment = async (req, res) => {
  try {
    console.log(req.body);
    const comment = new Comment({
      id_medicine: req.body.id_medicine,
      doctor_name: req.body.doctor_name,
      comments_name: req.body.comments_name,
    });
     console.log(comment)
    let newComment = await comment.save();
   
    res.status(200).json({ data: newComment });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const id = req.params.commentId;
    let result = await Comment.remove({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

