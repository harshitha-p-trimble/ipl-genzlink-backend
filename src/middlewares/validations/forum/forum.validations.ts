import Ajv from "ajv";
import { Request, Response, NextFunction } from 'express';
import { forumSchema } from "./forumSchema.validatons";

const ajv = new Ajv();
export const validateForumDetails = ajv.compile(forumSchema)

export const forumValidation = (req: Request, res: Response, next: NextFunction) => {
    const isForumDetailsValid = validateForumDetails(req.body);
    if (!isForumDetailsValid) {
        return res.status(400).json({ message: "Invalid Forum Details", data: validateForumDetails.errors });
    }
    next();
}