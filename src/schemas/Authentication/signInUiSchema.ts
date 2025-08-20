import en from "../../../messages/en.json";

export const signInUiSchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/userName",
      options: {
        placeholder: en.authentication.signIn.userName,
        maxLength: 100,
      },
    },
    {
      type: "Control",
      scope: "#/properties/password",
      options: {
        placeholder: en.authentication.signIn.password,
        maxLength: 100,
      },
    },
  ],
};
