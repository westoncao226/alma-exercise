"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Button from "@/components/Button";

const Confirmation = () => {
  const router = useRouter();
  const t = useTranslations();

  const handleHomepageNavigation = () => {
    router.push(`/`);
  };

  return (
    <Stack spacing={4} sx={{ alignItems: "center", padding: "40px 10px" }}>
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        <Image src="/info.png" alt="" width={40} height={40} />
        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
          {t("assessment.confirmation.label")}
        </Typography>
        <Typography
          sx={{ fontWeight: 500, textAlign: "center", width: "500px" }}
        >
          {t("assessment.confirmation.description")}
        </Typography>
      </Stack>

      <Stack sx={{ width: "350px" }}>
        <Button
          label={t("assessment.buttons.homepage")}
          onClick={handleHomepageNavigation}
        />
      </Stack>
    </Stack>
  );
};

export default Confirmation;
