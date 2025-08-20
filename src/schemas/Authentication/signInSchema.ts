import en from "../../../messages/en.json";

export const signInSchema = {
  type: "object",
  properties: {
    userName: {
      type: "string",
      maxLength: 100,
    },
    password: {
      type: "string",
      maxLength: 100,
    },
  },
  required: ["userName", "password"],
};
