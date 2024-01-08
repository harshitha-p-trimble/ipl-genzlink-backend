import mongoose, { Schema } from 'mongoose';
import { IUser } from '../../models/core/user.model';

const UserSchema: Schema = new mongoose.Schema({
    firstName: {
        type:String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    uniqueKey: {
        type:String,
        required: true,
        unique: true
    }
}, { versionKey: false });


export default mongoose.model<IUser>('User', UserSchema);