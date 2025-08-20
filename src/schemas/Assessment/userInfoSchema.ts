import { countries } from "@/constants/countries";
import en from "../../../messages/en.json";

export const userInfoSchema = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
      maxLength: 200,
      validationMessage: en.assessment.questionnaire.errors.userInfo.firstName,
    },
    lastName: {
      type: "string",
      maxLength: 200,
      validationMessage: en.assessment.questionnaire.errors.userInfo.lastName,
    },
    email: {
      type: "string",
      maxLength: 200,
      validationMessage: en.assessment.questionnaire.errors.userInfo.email,
    },
    countryOfCitizenship: {
      type: "string",
      enum: countries,
      validationMessage:
        en.assessment.questionnaire.errors.userInfo.countryCitizenship,
    },
    personalLink: { type: "string", maxLength: 200 },
  },
  required: ["firstName", "lastName", "email", "countryOfCitizenship"],
};
