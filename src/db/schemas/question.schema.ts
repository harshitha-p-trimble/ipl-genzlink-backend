import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  userId: String,
  userTags: [String],
  suggestedTags: [String],
  title: String,
  description: String,
  votes: Number,
  status: String,
}, { timestamps: true }); // doubt

export default mongoose.model('Question', QuestionSchema);