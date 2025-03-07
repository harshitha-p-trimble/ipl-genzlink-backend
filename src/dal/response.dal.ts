import { DBConnection } from "../db";
import { IResponse } from "../models/core/response.model";
import { APP_CONSTANTS } from "../utils/appConstants.utils";
import { promiseResolver } from "../utils/promiseResolver.utils";
import responseSchema from "../db/schemas/response.schema"; 

export default class ResponseDal {
    constructor() {
        new DBConnection(APP_CONSTANTS.ADMIN_DB_NAME);
    }

    async createResponse(responseDetails: IResponse) {
        const response = new responseSchema(responseDetails);
        return await promiseResolver(response.save());
    }

    async getAllResponses() {
        return await promiseResolver(responseSchema.find({}));  //doubt
    }
}