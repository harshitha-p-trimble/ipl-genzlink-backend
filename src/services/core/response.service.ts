import ResponseDAL from "../../dal/response.dal";
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
}