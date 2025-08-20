import { countryOptions } from "@/constants/countries";
import en from "../../../messages/en.json";

export const userInfoUiSchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/firstName",
      options: {
        placeholder: en.assessment.questionnaire.form.userInfo.inputs.firstName,
        maxLength: 200,
      },
    },
    {
      type: "Control",
      scope: "#/properties/lastName",
      options: {
        placeholder: en.assessment.questionnaire.form.userInfo.inputs.lastName,
        maxLength: 200,
      },
    },
    {
      type: "Control",
      scope: "#/properties/email",
      options: {
        placeholder: en.assessment.questionnaire.form.userInfo.inputs.email,
        maxLength: 200,
      },
    },
    {
      type: "Control",
      scope: "#/properties/countryOfCitizenship",
      options: {
        enumOptions: countryOptions,
        placeholder:
          en.assessment.questionnaire.form.userInfo.inputs.countryCitizenship,
      },
    },
    {
      type: "Control",
      scope: "#/properties/personalLink",
      options: {
        placeholder:
          en.assessment.questionnaire.form.userInfo.inputs.personalLink,
        maxLength: 200,
      },
    },
  ],
};
