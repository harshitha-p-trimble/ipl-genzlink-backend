import { DBConnection } from "../db";
import { IQuestion } from "../models/core/question.model";
import { APP_CONSTANTS } from "../utils/appConstants.utils";
import { promiseResolver } from "../utils/promiseResolver.utils";
import questionSchema from "../db/schemas/question.schema";

export default class QuestionDal {
    constructor() {
        new DBConnection(APP_CONSTANTS.ADMIN_DB_NAME);
    }

    async createQuestion(questionDetails: IQuestion) {
        const question = new questionSchema(questionDetails);
        return await promiseResolver(question.save());
    }

    async getAllQuestions() {
        return await promiseResolver(questionSchema.find({}));
    }

    async getQuestionByUserId(userId : String){
        return await promiseResolver(questionSchema.find({userId : userId}));
    }
}