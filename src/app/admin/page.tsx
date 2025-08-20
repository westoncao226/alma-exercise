"use client";

import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import AdminTabPanel from "./AdminTabPanel";
import Leads from "./Leads/Leads";
import Settings from "./Settings";

const AdminPage = () => {
  const [curTab, setCurTab] = useState("0");

  const handleTabChange = (event: React.SyntheticEvent, newTab: string) => {
    setCurTab(newTab);
  };

  return (
    <TabContext value={curTab}>
      <Stack direction="row" sx={{ height: "100vh" }}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: 450,
            height: 210,
            borderRadius: "0 0 90% 0",
            background:
              "radial-gradient(circle at top left, #fafdd2 0%, #fafdd2 10%, rgba(250, 253, 210, 0.4) 40%, transparent 100%)",
            zIndex: -1,
          }}
        />

        <AdminTabPanel curTab={curTab} onChange={handleTabChange} />

        <Box sx={{ flexGrow: 1, p: 2, overflow: "auto" }}>
          <TabPanel value="0">
            <Leads />
          </TabPanel>
          <TabPanel value="1">
            <Settings />
          </TabPanel>
        </Box>
      </Stack>
    </TabContext>
  );
};

export default AdminPage;
