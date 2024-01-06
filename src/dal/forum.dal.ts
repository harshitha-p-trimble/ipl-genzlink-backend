import { DBConnection } from "../db";
import {IForum } from "../models/core/forum.model";
import { APP_CONSTANTS } from "../utils/appConstants.utils";
import forumSchema from "../db/schemas/forum.schema"; 
import { promiseResolver } from "../utils/promiseResolver.utils";

export default class ForumDal {
    constructor() {
        new DBConnection(APP_CONSTANTS.ADMIN_DB_NAME);
    }

    async createForum(forumDetails: IForum) {
        const forum = new forumSchema(forumDetails);
        return await promiseResolver(forum.save());
    }

    async getForum() {
        return await promiseResolver(forumSchema.find({}));
    }
}