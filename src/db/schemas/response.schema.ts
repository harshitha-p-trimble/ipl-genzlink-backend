import mongoose from 'mongoose';

const ResponseSchema = new mongoose.Schema({
  questionId: String,
  userId: String,
  description: String,
  votes: Number,
  comments: [{
    userId: String,
    description: String,
    votes: Number
  }],
}, { timestamps: true }); // doubt

export default mongoose.model('Response', ResponseSchema);