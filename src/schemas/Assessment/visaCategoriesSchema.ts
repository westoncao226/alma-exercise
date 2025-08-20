import en from "../../../messages/en.json";

export const visaCategoriesSchema = {
  type: "object",
  properties: {
    nonimmigrant: {
      type: "boolean",
    },
    employmentBasedFirstPreference: {
      type: "boolean",
    },
    employmentBasedSecondPreference: {
      type: "boolean",
    },
    unsure: {
      type: "boolean",
    },
  },
  anyOf: [
    { required: ["nonimmigrant"] },
    { required: ["employmentBasedFirstPreference"] },
    { required: ["employmentBasedSecondPreference"] },
    { required: ["unsure"] },
  ],
};
