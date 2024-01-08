import mongoose, { Schema } from 'mongoose';
import { IForum } from '../../models/core/forum.model';

const ForumSchema: Schema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    uniqueKey: {
        type:String,
        required: true,
        unique: true
    }
}, { versionKey: false });


export default mongoose.model<IForum>('Forum', ForumSchema);
// import mongoose, { Schema } from 'mongoose';

// const commentSchema = new mongoose.Schema({
//   id: String,
//   questionId: String,
//   createdBy: String,
//   lastModifiedBy: String,
//   response: String,
//   vote: String,
// }, { timestamps: true }); 

// const responseSchema = new mongoose.Schema({
//   id: String,
//   questionId: String,
//   createdBy: String,
//   lastModifiedBy: String,
//   response: String,
//   vote: String,
//   comments: [commentSchema],
// }, { timestamps: true }); 

// const questionSchema = new mongoose.Schema({
//   id: String,
//   createdBy: String,
//   lastModifiedBy: String,
//   title: String,
//   description: String,
//   status: String,
//   votes: Number,
//   tags: [String],
// }, { timestamps: true }); 

// const ForumSchema = new mongoose.Schema({
//   question: questionSchema,
//   response: responseSchema,
// }, { timestamps: true }); 

// export default mongoose.model('Forum', ForumSchema);