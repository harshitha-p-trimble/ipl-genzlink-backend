import { Router } from 'express';
import ForumRouter from './forum.routes';
import QuestionRouter from './question.routes'
import ResponseRouter from './response.routes'
import UserRouter from './user.routes';
const appRoutes = Router();

appRoutes.use('/forum', ForumRouter._forumRouter);
appRoutes.use('/question', QuestionRouter._questionRouter);
appRoutes.use('/response', ResponseRouter._responseRouter);
appRoutes.use('/user', UserRouter._userRouter);

export default appRoutes;