import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  userId: String,
  userTags: [String],
  suggestedTags: [String],
  title: String,
  description: String,
  votes: Number,
  status: String,
  responses: {
    type: Number,
    default: 0
  },
}, { timestamps: true, versionKey : false }); // doubt

export default mongoose.model('Question', QuestionSchema);