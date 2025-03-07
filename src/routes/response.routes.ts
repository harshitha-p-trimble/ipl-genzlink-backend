import {Router} from 'express';
import ResponseController from '../controllers/response.controller'

class ResponseRouter {
    public _responseRouter: Router;
    
    constructor() {
        this._responseRouter = Router();
        this.initializeRoutes();
    }

    initializeRoutes = ():void => {
        this._responseRouter.post('/submit',
            ResponseController.submitResponse
        );

        this._responseRouter.get('/',
            ResponseController.getAllResponses
        );
    }
}

export default new ResponseRouter();