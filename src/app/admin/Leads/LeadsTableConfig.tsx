import React from "react";
import { Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";

const tableHeaderStyle = {
  fontSize: "14px",
  color: "gray",
};

interface LeadsTableConfigProps {
  updateStatusHandler: (id: number) => void;
}

export const LeadsTableConfig = ({
  updateStatusHandler,
}: LeadsTableConfigProps) => {
  const t = useTranslations();

  const leadsTableColumns = [
    {
      field: "name",
      renderHeader: () => (
        <Typography sx={tableHeaderStyle}>
          {t("admin.tabs.leads.table.headers.name")}
        </Typography>
      ),
      width: 250,
    },
    {
      field: "submittedDateTime",
      renderHeader: () => (
        <Typography sx={tableHeaderStyle}>
          {t("admin.tabs.leads.table.headers.submitted")}
        </Typography>
      ),
      renderCell: (params: GridRenderCellParams) => {
        const { value } = params;
        const date = new Date(value);

        const formattedSubmittedDateTime = date.toLocaleString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });

        return formattedSubmittedDateTime;
      },
      width: 300,
    },
    {
      field: "status",
      renderHeader: () => (
        <Typography sx={tableHeaderStyle}>
          {t("admin.tabs.leads.table.headers.status")}
        </Typography>
      ),
      renderCell: (params: GridRenderCellParams) => {
        const { value, id } = params;

        const formattedStatus = value
          .toLowerCase()
          .split("_")
          .map(
            (status: string) => status.charAt(0).toUpperCase() + status.slice(1)
          )
          .join(" ");

        return (
          <Typography
            onClick={() =>
              value === t("admin.tabs.leads.table.status.pending")
                ? updateStatusHandler(id as number)
                : null
            }
            sx={{
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              height: "100%",
              cursor:
                value === t("admin.tabs.leads.table.status.pending")
                  ? "pointer"
                  : "default",
            }}
          >
            {formattedStatus}
          </Typography>
        );
      },
      width: 200,
    },
    {
      field: "country",
      renderHeader: () => (
        <Typography sx={tableHeaderStyle}>
          {t("admin.tabs.leads.table.headers.country")}
        </Typography>
      ),

      flex: 1,
    },
  ];
  return leadsTableColumns;
};

export const LeadsTableStyles = {
  borderRadius: "18px",
  "& .MuiDataGrid-columnHeader": {
    paddingX: "20px",
    "&:focus": {
      outline: "none",
    },
  },
  "& .MuiDataGrid-cell": {
    paddingX: "20px",
    "&:focus": {
      outline: "none",
    },
  },

  "& .MuiDataGrid-columnSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-sortIcon": {
    opacity: 1,
    transition: "none",
    color: "inherit",
    display: "inline-flex",
    rotate: "180deg",
  },
  "& .MuiDataGrid-iconButtonContainer": {
    visibility: "visible",
    display: "inline-flex",
  },
  "& .MuiDataGrid-filler": {
    display: "none",
  },
};

export const LeadsPaginationStyle = {
  "& .MuiPaginationItem-root": {
    border: "none",
  },
  "& .MuiPaginationItem-root.Mui-selected": {
    border: "1px solid",
    backgroundColor: "transparent",
  },
};
