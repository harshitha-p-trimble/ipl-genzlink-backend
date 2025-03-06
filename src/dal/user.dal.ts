import { DBConnection } from "../db";
import { APP_CONSTANTS } from "../utils/appConstants.utils";
import UserSchema from "../db/schemas/user.schema"; 
import { promiseResolver } from "../utils/promiseResolver.utils";

export default class ForumDal {
    constructor() {
        new DBConnection(APP_CONSTANTS.ADMIN_DB_NAME);
    }

    async getUser() {
        return await promiseResolver(UserSchema.find({}));
    }

    async createUser(userDetails: any) {
        return await promiseResolver(UserSchema.create(userDetails));
    }
}