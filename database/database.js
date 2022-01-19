var mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/comments');

const commentsSchema = new Schema({
  username: String,
  text: String,
  stock: String,
  created_at: { type: Date, default: Date.now }
});

const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;