import express, {Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import errorMiddleware from "./middlewares/common/error.middleware";
import appRoutes from './routes';
import cors from 'cors';


const app = express();

app.use(cors({ credentials: true, origin: ['http://127.0.0.1:5174', 'http://localhost:5173'] }));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(errorMiddleware);

// Routes
app.use('/api', appRoutes);

// Handle 404 error
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({error: `Requested path ${req.path} not found`})
});

export default app;