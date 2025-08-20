import en from "../../../messages/en.json";

export const visaCategoriesUiSchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/nonimmigrant",
      options: {
        label:
          en.assessment.questionnaire.form.visaCategories.inputs.nonimmigrant,
      },
    },
    {
      type: "Control",
      scope: "#/properties/employmentBasedFirstPreference",
      options: {
        label:
          en.assessment.questionnaire.form.visaCategories.inputs
            .employmentBasedFirstPreference,
      },
    },
    {
      type: "Control",
      scope: "#/properties/employmentBasedSecondPreference",
      options: {
        label:
          en.assessment.questionnaire.form.visaCategories.inputs
            .employmentBasedSecondPreference,
      },
    },
    {
      type: "Control",
      scope: "#/properties/unsure",
      options: {
        label: en.assessment.questionnaire.form.visaCategories.inputs.unsure,
      },
    },
  ],
};
