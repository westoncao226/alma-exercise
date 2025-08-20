import en from "../../../messages/en.json";

export const inquirySchema = {
  type: "object",
  properties: {
    inquiry: {
      type: "string",
      maxLength: 500,
      validationMessage: en.assessment.questionnaire.errors.inquiry,
    },
  },
  required: ["inquiry"],
};
