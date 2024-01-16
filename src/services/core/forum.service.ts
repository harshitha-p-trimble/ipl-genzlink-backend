import ForumDAL from "../../dal/forum.dal";
import { IForum } from "../../models/core/forum.model";
import { IHttpResponse } from "../../models/http.models";
import ResponseBuilder from "../../utils/responseHandling/responseBuilder.utils";

export default class ForumService {
    private _httpResponse!: IHttpResponse;
    private _responseBuilder = new ResponseBuilder();

    constructor() {}

    async register(registrationDetails: IForum) {
        let [data, err] = await new ForumDAL().createForum(registrationDetails);
        if (data) {
            this._httpResponse = this._responseBuilder.getResponse(200, { message: "Fetched successfully", data: data });
        } else {
            this._httpResponse = this._responseBuilder.getResponse(400, { message: "Error in fetching data", data: err });
        }
        return this._httpResponse;
    }

    async getForum() {
        let [data, err] = await new ForumDAL().getForum();
        if (data) {
            this._httpResponse = this._responseBuilder.getResponse(200, { message: "Fetched successfully", data: data });
        } else {
            this._httpResponse = this._responseBuilder.getResponse(400, { message: "Error in fetching data", data: err });
        }
        return this._httpResponse;
    }
}