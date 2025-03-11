import QuestionDAL from "../../dal/question.dal";
import ResponseDal from "../../dal/response.dal";
import UserDal from "../../dal/user.dal";
import { IQuestion } from "../../models/core/question.model";
import { IHttpResponse } from "../../models/http.models";
import ResponseBuilder from "../../utils/responseHandling/responseBuilder.utils";

export default class QuestionService {
    private _httpResponse!: IHttpResponse;
    private _responseBuilder = new ResponseBuilder();

    constructor() {}

    async submitQuestion(questionDetails: IQuestion) {
        let [data, err] = await new QuestionDAL().createQuestion(questionDetails);
        if (data) {
            this._httpResponse = this._responseBuilder.getResponse(200, { message: "Fetched successfully", data: data });
        } else {
            this._httpResponse = this._responseBuilder.getResponse(400, { message: "Error in fetching data", data: err });
        }
        return this._httpResponse;
    }

    async getAllQuestions() {
        let [data, err] = await new QuestionDAL().getAllQuestions();
        if (data) {
            this._httpResponse = this._responseBuilder.getResponse(200, { message: "Fetched successfully", data: data });
        } else {
            this._httpResponse = this._responseBuilder.getResponse(400, { message: "Error in fetching data", data: err });
        }
        return this._httpResponse;
    }

    async getQuestionByUserId(userId : String) {
        let [data, err] = await new QuestionDAL().getQuestionByUserId(userId);
        if (data) {
            this._httpResponse = this._responseBuilder.getResponse(200, { message: "Fetched successfully", data: data })
        } else {
            this._httpResponse = this._responseBuilder.getResponse(400, { message: "Error in fetching data", data: err });
        }
        return this._httpResponse;
    }

    async getQuestionsForUserSkills(userId : String) {
        let [userData, err] = await new UserDal().getUserByUserId(userId);
        let [data, err1] = await new QuestionDAL().getQuestionsForUserSkills(userData.skills);
        if (userData && data) {
            this._httpResponse = this._responseBuilder.getResponse(200, { message: "Fetched successfully", data: data })
        } else {
            this._httpResponse = this._responseBuilder.getResponse(400, { message: "Error in fetching data", data: (err || err1) });
        }
        return this._httpResponse;
    }

    async getQuestionnDetailsByQuestionId(questionId : String) {
        let [questionDetails, err1] = await new QuestionDAL().getQuestionByQuestionId(questionId);
        let [responseDetails, err2] = await new ResponseDal().getResponsesByQuestionId(questionId);
        let [userDetails, err3] = await new UserDal().getUserByUserId(questionDetails.userId);
        if (questionDetails && responseDetails && userDetails) {
            this._httpResponse = this._responseBuilder.getResponse(200, { message: "Fetched successfully", data: {"question": questionDetails, "response": responseDetails, "userDetails": userDetails} })
        } else {
            this._httpResponse = this._responseBuilder.getResponse(400, { message: "Error in fetching data", data: {"question": err1, "response": err2, "userDetails": err3} });
        }
        return this._httpResponse;
    }

    async updateQuestion(questionId: String, questionDetails: any){
        let [data, err] = await new QuestionDAL().updateQuestion(questionId, questionDetails);
        if (data) {
            this._httpResponse = this._responseBuilder.getResponse(200, { message: "User created successfully", data: data });
        } else {
            this._httpResponse = this._responseBuilder.getResponse(400, { message: "Error in fetching", data: err });
        }
        return this._httpResponse;
    }
}