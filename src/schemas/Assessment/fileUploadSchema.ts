import en from "../../../messages/en.json";

export const fileUploadSchema = {
  type: "object",
  properties: {
    resume: {
      type: "string",
      validationMessage: en.assessment.questionnaire.errors.resume,
    },
  },
  required: ["resume"],
};
