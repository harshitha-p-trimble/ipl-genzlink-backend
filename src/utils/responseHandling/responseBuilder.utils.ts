import { IHttpResponse, IHttpResponseData } from "../../models/http.models";

export default class ResponseBuilder {
    private _httpResponse!: IHttpResponse;

    constructor() { }

    getResponse = (statusCode: number, content: IHttpResponseData): IHttpResponse => {
        this._httpResponse = {
            statusCode: statusCode,
            data: {
                status: statusCode == 200 ? "SUCCESS" : "FAILURE",
                message: content.message,
                data: content.data
            }
        };
        return this._httpResponse;
    }
}

