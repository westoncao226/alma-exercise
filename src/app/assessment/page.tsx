import React from "react";
import { Stack } from "@mui/material";
import AssessmentBanner from "./AssessmentBanner";
import QuestionnaireForm from "./QuestionnaireForm";

const AssessmentPage = () => {
  return (
    <Stack>
      <AssessmentBanner />
      <QuestionnaireForm />
    </Stack>
  );
};

export default AssessmentPage;
