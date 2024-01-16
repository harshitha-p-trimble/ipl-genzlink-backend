export interface IForum {
    question: IQuestion;
    response: IResponse;
}

interface IComment {
    id: string;
    questionId: string;
    createdBy: string;
    lastModifiedBy: string;
    response: string;
    votes: number;
}

interface IResponse {
    id: string;
    questionId: string;
    createdBy: string;
    lastModifiedBy: string;
    response: string;
    votes: number;
    comments: IComment[];
}

interface IQuestion {
    id: string;
    createdBy: string;
    lastModifiedBy: string;
    title: string;
    description: string;
    status: string;
    votes: number;
    tags: string[];
}
