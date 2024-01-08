import UserDAL from "../../dal/user.dal";
import { IHttpResponse } from "../../models/http.models";
import ResponseBuilder from "../../utils/responseHandling/responseBuilder.utils";

export default class ForumService {
    private _httpResponse!: IHttpResponse;
    private _responseBuilder = new ResponseBuilder();

    constructor() {}

    async getUser() {
        let [data, err] = await new UserDAL().getUser();
        if (data) {
            this._httpResponse = this._responseBuilder.getResponse(200, { message: "Fetch successful", data: data });
        } else {
            this._httpResponse = this._responseBuilder.getResponse(400, { message: "Error in fetching", data: err });
        }
        return this._httpResponse;
    }
}