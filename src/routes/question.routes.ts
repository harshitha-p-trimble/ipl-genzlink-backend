import {Router} from 'express';
import QuestionController from '../controllers/question.controller'

class QuestionRouter {
    public _questionRouter: Router;
    
    constructor() {
        this._questionRouter = Router();
        this.initializeRoutes();
    }

    initializeRoutes = ():void => {
        this._questionRouter.post('/submit',
            QuestionController.submitQuestion
        );

        this._questionRouter.get('/',
            QuestionController.getAllQuestions
        );

        this._questionRouter.get('/userId',
            QuestionController.getQuestionByUserId
        );
    }
}

export default new QuestionRouter();