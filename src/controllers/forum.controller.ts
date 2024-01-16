import { Request, Response } from 'express';
import ForumService from '../services/core/forum.service'
import { IHttpResponse } from '../models/http.models';

class ForumController {
    private _httpResponse!: IHttpResponse;
    private _forumService: ForumService;

    constructor() {
        this._forumService = new ForumService();
    }

    register = async (req: Request, res: Response) => {
        let registrationDetails = {
            question: req.body.question, 
            response: req.body.response
        }
        this._httpResponse = await this._forumService.register(registrationDetails);
        return res.status(this._httpResponse.statusCode).json(this._httpResponse.data);
    }

    getForum = async (req: Request, res: Response) => {
        this._httpResponse = await this._forumService.getForum();
        return res.status(this._httpResponse.statusCode).json(this._httpResponse.data);
    }
}

export default new ForumController();