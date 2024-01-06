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