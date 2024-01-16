import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  id: String,
  questionId: String,
  createdBy: String,
  lastModifiedBy: String,
  response: String,
  votes: Number,
}, { timestamps: true });

const responseSchema = new mongoose.Schema({
  id: String,
  questionId: String,
  createdBy: String,
  lastModifiedBy: String,
  response: String,
  votes: Number,
  comments: [commentSchema],
}, { timestamps: true });

const questionSchema = new mongoose.Schema({
  id: String,
  createdBy: String,
  lastModifiedBy: String,
  title: String,
  description: String,
  status: String,
  votes: Number,
  tags: [String],
}, { timestamps: true });

const ForumSchema = new mongoose.Schema({
  question: questionSchema,
  response: responseSchema,
}, { timestamps: true });

export default mongoose.model('Forum', ForumSchema);
