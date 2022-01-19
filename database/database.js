import mongoose from 'mongoose';
const { Schema } = mongoose;

const commentsSchema = new Schema({
  username: String,
  text: String,
  stock: String,
  created_at: { type: Date, default: Date.now }
});

const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;