import { Request, Response } from 'express';
import UserService from '../services/core/user.service'
import { IHttpResponse } from '../models/http.models';

class UserController {
    private _httpResponse!: IHttpResponse;
    private _userService: UserService;
    
    constructor() {
        this._userService = new UserService();
    }

    getUser = async(req: Request, res: Response) => {
        this._httpResponse = await this._userService.getUser();
        return res.status(this._httpResponse.statusCode).json(this._httpResponse.data);
    }

    createUser = async(req: Request, res: Response) => {
        this._httpResponse = await this._userService.createUser(req.body);
        return res.status(this._httpResponse.statusCode).json(this._httpResponse.data);
    }
}

export default new UserController();