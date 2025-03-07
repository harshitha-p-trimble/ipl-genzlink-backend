import QuestionDAL from "../../dal/question.dal";
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
}