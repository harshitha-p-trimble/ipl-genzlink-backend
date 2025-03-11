import { DBConnection } from "../db";
import { APP_CONSTANTS } from "../utils/appConstants.utils";
import UserSchema from "../db/schemas/user.schema"; 
import { promiseResolver } from "../utils/promiseResolver.utils";

export default class UserDal {
    constructor() {
        new DBConnection(APP_CONSTANTS.ADMIN_DB_NAME);
    }

    async getUser() {
        return await promiseResolver(UserSchema.find({}));
    }
    
    async getUserByUserId(userId : String) {
        return await promiseResolver(UserSchema.findById(userId));
    }
    
    async createUser(userDetails: any) {
        return await promiseResolver(UserSchema.create(userDetails));
    }

    async updateUser(userId : String, updateDetails : any){
        return await promiseResolver(UserSchema.findByIdAndUpdate(userId, { $set: updateDetails }, { new: true }));
    }
}