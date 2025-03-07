import { Request, Response } from 'express';
import { IHttpResponse } from '../models/http.models';
import QuestionService from '../services/core/question.service'

class QuestionController {
    private _httpResponse!: IHttpResponse;
    private _questionService: QuestionService;

    constructor() {
        this._questionService = new QuestionService();
    }

    submitQuestion = async (req: Request, res: Response) => {
        let questionDetails : any = req.body
        this._httpResponse = await this._questionService.submitQuestion(questionDetails);
        return res.status(this._httpResponse.statusCode).json(this._httpResponse.data);
    }

    getAllQuestions = async (req: Request, res: Response) => {
        this._httpResponse = await this._questionService.getAllQuestions();
        return res.status(this._httpResponse.statusCode).json(this._httpResponse.data);
    }

    getQuestionByUserId = async (req: Request, res: Response) => {
        let userId : String = req.body.userId
        this._httpResponse = await this._questionService.getQuestionByUserId(userId);
        return res.status(this._httpResponse.statusCode).json(this._httpResponse.data);
    }
}

export default new QuestionController();