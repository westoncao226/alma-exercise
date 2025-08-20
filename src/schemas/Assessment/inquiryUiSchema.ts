import en from "../../../messages/en.json";

export const inquiryUiSchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/inquiry",
      options: {
        placeholder: en.assessment.questionnaire.form.inquiry.inputs.moreInfo,
        maxLength: 500,
      },
    },
  ],
};
