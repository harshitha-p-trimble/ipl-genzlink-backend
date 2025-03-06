import {Router} from 'express';
import UserController from '../controllers/user.controller'

class UserRouter {
    public _userRouter: Router;
    
    constructor() {
        this._userRouter = Router();
        this.initializeRoutes();
    }

    initializeRoutes = ():void => {
        this._userRouter.post('/',
            UserController.createUser
        );

        this._userRouter.get('/',
            UserController.getUser
        );
    }
}

export default new UserRouter();