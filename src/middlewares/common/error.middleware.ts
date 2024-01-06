import { NextFunction, Request, Response } from 'express';
import HttpError from '../../utils/httpError.utils';
 
function errorMiddleware(error: HttpError, request: Request, response: Response, next: NextFunction) {
  const status = error._statusCode || 500;
  const errorDetails = error._errorDetails || 'Something went wrong';
  response
    .status(status)
    .json({error: errorDetails})
}
 
export default errorMiddleware;