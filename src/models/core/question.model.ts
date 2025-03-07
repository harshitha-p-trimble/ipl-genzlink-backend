export interface IQuestion {
    userId: string;
    userTags: string[];
    suggestedTags: string[];
    title: string;
    description: string;
    votes: number;
    status: string;
}
