export interface IHttpResponse {
    statusCode: number;
    data: IHttpResponseData;
}

export interface IHttpResponseData {
    status?: string,
    message: string,
    data?: any
}