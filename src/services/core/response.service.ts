import ResponseDAL from "../../dal/response.dal";
import QuestionDAL from "../../dal/question.dal";
import { IResponse } from "../../models/core/response.model";
import { IHttpResponse } from "../../models/http.models";
import ResponseBuilder from "../../utils/responseHandling/responseBuilder.utils";

export default class ResponseService {
    private _httpResponse!: IHttpResponse;
    private _responseBuilder = new ResponseBuilder();

    constructor() {}

    async submitResponse(responseDetails: IResponse) {
        let [data, err] = await new ResponseDAL().createResponse(responseDetails);
        if (data) {
            let [data, err] = await new QuestionDAL().updateQuestionResponses(responseDetails.questionId);      // created seperate function from updateQuestions
            this._httpResponse = this._responseBuilder.getResponse(200, { message: "Fetched successfully", data: data });
        } else {
            this._httpResponse = this._responseBuilder.getResponse(400, { message: "Error in fetching data", data: err });
        }
        return this._httpResponse;
    }

    async getAllResponses() {
        let [data, err] = await new ResponseDAL().getAllResponses();
        if (data) {
            this._httpResponse = this._responseBuilder.getResponse(200, { message: "Fetched successfully", data: data });
        } else {
            this._httpResponse = this._responseBuilder.getResponse(400, { message: "Error in fetching data", data: err });
        }
        return this._httpResponse;
    }

    async getResponsesByQuestionId(questionId : String){
        let [data, err] = await new ResponseDAL().getResponsesByQuestionId(questionId);
        if (data) {
            this._httpResponse = this._responseBuilder.getResponse(200, { message: "Fetched successfully", data: data })
        } else {
            this._httpResponse = this._responseBuilder.getResponse(400, { message: "Error in fetching data", data: err });
        }
        return this._httpResponse;
    }

    async updateComment(responseId : String, updateComment : any){
        let [data, err] = await new ResponseDAL().updateComment(responseId, updateComment); // create comment object
        if (data) {
            this._httpResponse = this._responseBuilder.getResponse(200, { message: "Fetched successfully", data: data })
        } else {
            this._httpResponse = this._responseBuilder.getResponse(400, { message: "Error in fetching data", data: err });
        }
        return this._httpResponse;
    }
}