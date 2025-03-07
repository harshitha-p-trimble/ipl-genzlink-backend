import { Request, Response } from 'express';
import { IHttpResponse } from '../models/http.models';
import ResponseService from '../services/core/response.service'

class ResponseController {
    private _httpResponse!: IHttpResponse;
    private _responseService: ResponseService;

    constructor() {
        this._responseService = new ResponseService();
    }

    submitResponse = async (req: Request, res: Response) => {
        let responseDetails : any = req.body
        this._httpResponse = await this._responseService.submitResponse(responseDetails);
        return res.status(this._httpResponse.statusCode).json(this._httpResponse.data);
    }

    getAllResponses = async (req: Request, res: Response) => {
        this._httpResponse = await this._responseService.getAllResponses();
        return res.status(this._httpResponse.statusCode).json(this._httpResponse.data);
    }
}

export default new ResponseController();