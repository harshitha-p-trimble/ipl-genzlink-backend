import { JSONSchemaType } from "ajv";

interface IForum {
    name: string,
    key: string
}

export const forumSchema: JSONSchemaType<IForum> = {
    type: "object",
    properties: {
        name: { type: "string" },
        key: { type: "string" }, 
    },
    required: ["name", "key"],
    additionalProperties: false
}

// import { JSONSchemaType } from 'ajv';

// interface IComment {
//   id: string;
//   questionId: string;
//   createdBy: string;
//   lastModifiedBy: string;
//   response: string;
//   vote: string;
// }

// interface IResponse {
//   id: string;
//   questionId: string;
//   createdBy: string;
//   lastModifiedBy: string;
//   response: string;
//   vote: string;
//   comments: IComment[];
// }

// interface IQuestion {
//   id: string;
//   createdBy: string;
//   lastModifiedBy: string;
//   title: string;
//   description: string;
//   status: string;
//   votes: number;
//   tags: string[];
// }

// interface IForum {
//   question: IQuestion;
//   response: IResponse;
// }

// export const forumSchema: JSONSchemaType<IForum> = {
//   type: "object",
//   properties: {
//     question: {
//       type: "object",
//       properties: {
//         id: { type: "string" },
//         createdBy: { type: "string" },
//         lastModifiedBy: { type: "string" },
//         title: { type: "string" },
//         description: { type: "string" },
//         status: { type: "string" },
//         votes: { type: "number" },
//         tags: { type: "array", items: { type: "string" } },
//       },
//       required: ["id", "createdBy", "lastModifiedBy", "title", "description", "status", "votes", "tags"],
//     },
//     response: {
//       type: "object",
//       properties: {
//         id: { type: "string" },
//         questionId: { type: "string" },
//         createdBy: { type: "string" },
//         lastModifiedBy: { type: "string" },
//         response: { type: "string" },
//         vote: { type: "string" },
//         comments: {
//           type: "array",
//           items: {
//             type: "object",
//             properties: {
//               id: { type: "string" },
//               questionId: { type: "string" },
//               createdBy: { type: "string" },
//               lastModifiedBy: { type: "string" },
//               response: { type: "string" },
//               vote: { type: "string" },
//             },
//             required: ["id", "questionId", "createdBy", "lastModifiedBy", "response", "vote"],
//           },
//         },
//       },
//       required: ["id", "questionId", "createdBy", "lastModifiedBy", "response", "vote", "comments"],
//     },
//   },
//   required: ["question", "response"],
//   additionalProperties: false,
// };
