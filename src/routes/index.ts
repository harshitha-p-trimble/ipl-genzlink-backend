import { Router } from 'express';
import ForumRouter from './forum.routes';
import UserRouter from './user.routes';
const appRoutes = Router();

appRoutes.use('/forum', ForumRouter._forumRouter);
appRoutes.use('/user', UserRouter._userRouter);

export default appRoutes;