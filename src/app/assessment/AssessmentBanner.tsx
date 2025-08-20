import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Box, Stack, Typography } from "@mui/material";

const AssessmentBanner = () => {
  const t = useTranslations();

  return (
    <Stack direction="row" sx={{ backgroundColor: "#d9dea4" }}>
      <Box sx={{ marginRight: "60px" }}>
        <Image src="/banner.png" alt="" width={220} height={220} />
      </Box>
      <Stack spacing={4} sx={{ justifyContent: "center" }}>
        <Image src="/alma-logo.png" alt="Alma logo" width={60} height={60} />
        <Typography
          sx={{ fontSize: "70px", fontWeight: 700, lineHeight: "80px" }}
        >
          {t("assessment.questionnaire.description.firstLine")}
          <br />
          {t("assessment.questionnaire.description.secondLine")}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AssessmentBanner;
