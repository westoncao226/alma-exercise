"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Autocomplete,
  CircularProgress,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown, Search } from "@mui/icons-material";
import { useTranslations } from "next-intl";
import LeadsTable from "./LeadsTable";

const titleStyle = {
  fontSize: "30px",
  fontWeight: 600,
};

const nameFilterStyle = {
  width: "300px",
  "& .MuiInputBase-root": {
    borderRadius: "12px",
    flexDirection: "row-reverse",
  },
  "& .MuiAutocomplete-popupIndicatorOpen": {
    rotate: "180deg",
  },
  "& .MuiInputLabel-root, .MuiInputBase-input": {
    fontSize: "14px",
  },
};

const statusFilterStyle = {
  width: "130px",
  "& .MuiInputBase-root": {
    borderRadius: "12px",
  },
  "& .MuiInputLabel-root, .MuiInputBase-input": {
    fontSize: "14px",
  },
};

interface Leads {
  id: number;
  name: string;
  submittedDateTime: string;
  status: string;
  country: string;
}

const Leads = () => {
  const t = useTranslations();
  const [leads, setLeads] = useState<Leads[]>([]);
  const [loading, setLoading] = useState(true);
  const statusOptions = [
    t("admin.tabs.leads.table.status.pending"),
    t("admin.tabs.leads.table.status.reachedOut"),
  ];

  const [nameFilter, setNameFilter] = useState<Leads | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const formattedStatus = (value: string) =>
    value
      .toLowerCase()
      .split("_")
      .map((status: string) => status.charAt(0).toUpperCase() + status.slice(1))
      .join(" ");

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch("/api/leads");
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`API error: ${res.status}, ${text}`);
        }
        const data = await res.json();
        setLeads(data);
      } catch (err) {
        console.error(err);
        setLeads([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const updateStatusHandler = (id: number) => {
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === id &&
        lead.status === t("admin.tabs.leads.table.status.pending")
          ? { ...lead, status: t("admin.tabs.leads.table.status.reachedOut") }
          : lead
      )
    );
  };

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesName = nameFilter ? lead.name === nameFilter.name : true;
      const matchesStatus = statusFilter ? lead.status === statusFilter : true;
      return matchesName && matchesStatus;
    });
  }, [leads, nameFilter, statusFilter]);

  if (loading)
    return (
      <CircularProgress
        sx={{ alignSelf: "center", justifyContent: "center" }}
      />
    );

  return (
    <Stack sx={{ paddingTop: "40px" }}>
      <Typography sx={titleStyle}>{t("admin.tabs.leads.title")}</Typography>

      <Stack spacing={4} sx={{ marginTop: "20px" }}>
        <Stack direction="row" spacing={4}>
          <Autocomplete
            autoComplete
            value={nameFilter}
            options={filteredLeads}
            getOptionLabel={(option) => option.name}
            popupIcon={<Search />}
            onChange={(_, newValue) => setNameFilter(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label={t("admin.tabs.leads.filters.search")}
                sx={{ fontSize: "14px" }}
              />
            )}
            renderOption={(props, option) => {
              const { key, ...rest } = props;
              return (
                <li key={key} {...rest} style={{ fontSize: "14px" }}>
                  {option.name}
                </li>
              );
            }}
            noOptionsText={t("admin.tabs.leads.filters.noLeads")}
            sx={nameFilterStyle}
          />
          <Autocomplete
            autoComplete
            value={statusFilter}
            options={statusOptions}
            getOptionLabel={(option) => formattedStatus(option)}
            popupIcon={<KeyboardArrowDown />}
            onChange={(_, newValue) => setStatusFilter(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label={t("admin.tabs.leads.filters.status")}
                sx={{ fontSize: "14px" }}
              />
            )}
            renderOption={(props, option) => {
              const { key, ...rest } = props;
              return (
                <li key={key} {...rest} style={{ fontSize: "14px" }}>
                  {formattedStatus(option)}
                </li>
              );
            }}
            sx={statusFilterStyle}
          />
        </Stack>

        <LeadsTable
          leads={filteredLeads}
          updateStatusHandler={updateStatusHandler}
        />
      </Stack>
    </Stack>
  );
};

export default Leads;
