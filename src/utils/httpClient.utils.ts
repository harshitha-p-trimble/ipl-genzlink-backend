import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IHttpResponse } from '../models/http.models';
import { promiseResolver } from './promiseResolver.utils';

export default class HttpClient {
    private _restClient: AxiosInstance;
    private _requestConfig: AxiosRequestConfig;
    private _httpResponse: IHttpResponse;

    constructor() {
        this._restClient = axios.create();
        this.configureRestClient();
        this._httpResponse = {};
        this._requestConfig = {};
    }

    private configureRestClient = () => {
        this._restClient.interceptors.request.use(function () {
            // Do something before request is sent
            }, function (error) {
            // Do something with request error
        });

        this._restClient.interceptors.response.use(function (response) {
            // Do something with response data
          }, function (error) {
            // Do something with response error
        });
    }

    readonly requestOptions = (options: AxiosRequestConfig): HttpClient => {
        this._requestConfig = options;
        return this;
    }

    readonly executeRequest = async () => {
        const[data, error] = await promiseResolver(this._restClient.request(this._requestConfig));
        if(error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                this._httpResponse.error = {
                    data: error.response.data,
                    statusCode: error.response.status,
                    headers: error.response.headers
                }
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                this._httpResponse.error = {
                    request: error.request
                }
            } else {
                // Something happened in setting up the request that triggered an Error
                this._httpResponse.error = {
                    message: error.message
                }
            }
        } else {
            this._httpResponse.data = data
        }
        return this._httpResponse;
    }
}