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
    
    async getQuestionByQuestionId(questionId : String){
        return await promiseResolver(questionSchema.findById(questionId));
    }

    async getQuestionsForUserSkills(skills : [String]){
        return await promiseResolver(questionSchema.find({ userTags : { $in :  skills} }));
    }

    async updateQuestion(questionId : String, questionDetails : any){
        return await promiseResolver(questionSchema.findByIdAndUpdate(questionId, { $set: questionDetails }, { new: true }));
    }

    async updateQuestionResponses(questionId : String){
        return await promiseResolver(questionSchema.findByIdAndUpdate(questionId, { $inc: {"responses" : 1} }, { new: true }));
    }
}