import React from "react";
import Image from "next/image";
import { Avatar, Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const tabStyle = {
  fontSize: "18px",
  fontWeight: 400,
  padding: 0,
  textTransform: "none",
  alignItems: "flex-start",
  "&.Mui-selected": {
    color: "black",
    fontWeight: 600,
  },
  "& .MuiTouchRipple-root": {
    display: "none",
  },
};

interface AdminTabPanelProps {
  curTab: string;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
}

const AdminTabPanel = ({ curTab, onChange }: AdminTabPanelProps) => {
  const t = useTranslations();

  return (
    <Stack
      sx={{
        borderRight: 1,
        borderColor: "#E5E3E5",
        padding: "40px 140px 40px 40px",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <Stack spacing={10}>
        <Image
          src="/alma-logo-v2.png"
          alt="Alma logo"
          width={160}
          height={60}
        />

        <Tabs
          value={curTab}
          onChange={onChange}
          orientation="vertical"
          slotProps={{
            indicator: {
              style: {
                display: "none",
              },
            },
          }}
        >
          <Tab label={t("admin.tabs.leads.title")} value="0" sx={tabStyle} />
          <Tab label={t("admin.tabs.settings.title")} value="1" sx={tabStyle} />
        </Tabs>
      </Stack>

      <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
        <Avatar
          alt={t("admin.username")}
          src="/broken-image.jpg"
          sx={{
            backgroundColor: "lightgray",
            color: "black",
            fontSize: "16px",
            fontWeight: 600,
          }}
        />
        <Typography sx={{ fontWeight: 600 }}>{t("admin.username")}</Typography>
      </Stack>
    </Stack>
  );
};

export default AdminTabPanel;
