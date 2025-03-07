export interface IResponse {
    questionId: string;
    userId: string;
    description: string;
    votes: number;
    comments: [IComment]
}

interface IComment{
    userId: string;
    description: string;
    votes: number;
}