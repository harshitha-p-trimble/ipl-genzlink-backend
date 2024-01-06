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