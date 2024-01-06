import { Router } from 'express';
import ForumRouter from './forum.routes';

const appRoutes = Router();

appRoutes.use('/forum', ForumRouter._forumRouter);

export default appRoutes;