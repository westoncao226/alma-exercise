"use client";

import React, { useState } from "react";
import { Box, Pagination } from "@mui/material";
import { DataGrid, GridPaginationModel } from "@mui/x-data-grid";
import { useTranslations } from "next-intl";
import {
  LeadsPaginationStyle,
  LeadsTableConfig,
  LeadsTableStyles,
} from "./LeadsTableConfig";

type Leads = {
  id: number;
  name: string;
  submittedDateTime: string;
  status: string;
  country: string;
};

interface LeadsTableProps {
  leads: Leads[];
  updateStatusHandler: (id: number) => void;
}

const LeadsTable = ({ leads, updateStatusHandler }: LeadsTableProps) => {
  const t = useTranslations();
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 8,
  });

  const pageCount = Math.ceil(leads.length / paginationModel.pageSize);

  const CustomPagination = () => {
    return (
      <Pagination
        count={pageCount}
        page={paginationModel.page + 1}
        onChange={(e, page) =>
          setPaginationModel((prev) => ({ ...prev, page: page - 1 }))
        }
        variant="outlined"
        shape="rounded"
        showFirstButton={false}
        showLastButton={false}
        sx={LeadsPaginationStyle}
      />
    );
  };

  return (
    <Box>
      <DataGrid
        disableColumnMenu
        disableColumnResize
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableRowSelectionOnClick
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        rows={leads}
        getRowId={(row) => row.id}
        columns={LeadsTableConfig({ updateStatusHandler })}
        slots={{
          pagination: CustomPagination,
        }}
        sx={LeadsTableStyles}
      />
    </Box>
  );
};

export default LeadsTable;
