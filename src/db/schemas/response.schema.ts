import mongoose from 'mongoose';

const ResponseSchema = new mongoose.Schema({
  questionId: String,
  userId: String,
  description: String,
  votes: Number,
  comments: [{
    userId: String,
    description: String,
    votes: {
      type: Number,
      default: 0
    },
  }],
}, { timestamps: true, versionKey : false }); // doubt

export default mongoose.model('Response', ResponseSchema);