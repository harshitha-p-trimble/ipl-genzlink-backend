import { JSONSchemaType } from 'ajv';

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

export interface IForum {
  question: IQuestion;
  response: IResponse;
}

export const forumSchema: JSONSchemaType<IForum> = {
  type: "object",
  properties: {
    question: {
      type: "object",
      properties: {
        id: { type: "string" },
        createdBy: { type: "string" },
        lastModifiedBy: { type: "string" },
        title: { type: "string" },
        description: { type: "string" },
        status: { type: "string" },
        votes: { type: "number" }, 
        tags: { type: "array", items: { type: "string" } },
      },
      required: ["id", "createdBy", "lastModifiedBy", "title", "description", "status", "votes", "tags"],
    },
    response: {
      type: "object",
      properties: {
        id: { type: "string" },
        questionId: { type: "string" },
        createdBy: { type: "string" },
        lastModifiedBy: { type: "string" },
        response: { type: "string" },
        votes: { type: "number" }, 
        comments: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              questionId: { type: "string" },
              createdBy: { type: "string" },
              lastModifiedBy: { type: "string" },
              response: { type: "string" },
              votes: { type: "number" }, 
            },
            required: ["id", "questionId", "createdBy", "lastModifiedBy", "response", "votes"],
          },
        },
      },
      required: ["id", "questionId", "createdBy", "lastModifiedBy", "response", "votes", "comments"],
    },
  },
  required: ["question", "response"],
  additionalProperties: false,
};
