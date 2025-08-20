import { countries } from "@/constants/countries";
import en from "../../../messages/en.json";

export const userInfoSchema = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
      maxLength: 200,
      validationMessage: en.assessment.questionnaire.errors.firstName,
    },
    lastName: {
      type: "string",
      maxLength: 200,
      validationMessage: en.assessment.questionnaire.errors.lastName,
    },
    email: {
      type: "string",
      maxLength: 200,
      format: "email",
      validationMessage: en.assessment.questionnaire.errors.email,
    },
    countryOfCitizenship: {
      type: "string",
      enum: countries,
      validationMessage: en.assessment.questionnaire.errors.countryOfCitizenship,
    },
    personalLink: { type: "string", maxLength: 200 },
  },
  required: ["firstName", "lastName", "email", "countryOfCitizenship"],
};
