let mongoose = require("mongoose");
let commentSchema = mongoose.Schema({
  id_medicine: {
    type: Number,
    required: true
  },
  doctor_name: {
    type: String,
    required: true
  },
  comments_name: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
});
let Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
