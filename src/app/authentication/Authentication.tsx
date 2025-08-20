"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Button from "@/components/Button";

const Authentication = () => {
  const router = useRouter();
  const t = useTranslations();

  const navigateHandler = (value: string) => {
    router.push(`/${value}`);
  };

  return (
    <Stack
      spacing={1}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at top left, #fafdd2 0%, #fafdd2 10%, rgba(250, 253, 210, 0.4) 40%, transparent 100%)",
        height: "100vh",
      }}
    >
      <Image src="/alma-logo-v2.png" alt="Alma logo" width={200} height={200} />
      <Typography sx={{ fontSize: "80px", fontWeight: 600 }}>
        {t("authentication.description")}
      </Typography>

      <Button
        label={t("authentication.buttons.guest")}
        onClick={() => navigateHandler(t("authentication.pages.assessment"))}
      />
      <Button
        label={t("authentication.buttons.admin")}
        onClick={() => navigateHandler(t("authentication.pages.signIn"))}
      />
    </Stack>
  );
};

export default Authentication;
