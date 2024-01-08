import {Router} from 'express';
import ForumController from '../controllers/forum.controller';
import UserController from '../controllers/user.controller'
import { forumValidation } from '../middlewares/validations/forum/forum.validations';

class ForumRouter {
    public _forumRouter: Router;
    
    constructor() {
        this._forumRouter = Router();
        this.initializeRoutes();
    }

    initializeRoutes = ():void => {
        this._forumRouter.post('/register',
            forumValidation,
            ForumController.register
        );

        this._forumRouter.get('/',
            ForumController.getForum
        );

        this._forumRouter.get('/user',
            UserController.getUser
        );
    }
}

export default new ForumRouter();