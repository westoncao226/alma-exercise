"use client";

import React, { useState } from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps } from "@jsonforms/core";
import { Grid, Typography } from "@mui/material";
import { DropzoneArea } from "mui-file-dropzone";
import { useTranslations } from "next-intl";

const fileUploadStyle = {
  border: "1px dashed #c6c6c6",
  borderRadius: "5px",
  width: "350px",
  "& .MuiTypography-root": {
    fontSize: "14px",
    whiteSpace: "pre-line",
  },
  "& .MuiBox-root": {
    minHeight: "110px",
    border: "none",
  },
};

const FileUpload = ({ data, handleChange, path, uischema }: ControlProps) => {
  const t = useTranslations();
  const placeholder = uischema.options?.placeholder || "";
  const [file, setFile] = useState<File | null>(null);

  const handleDocumentUpload = (newFiles: File[]) => {
    if (!newFiles.length) return;

    const uploadedFile = newFiles[0];
    setFile(uploadedFile);

    const reader = new FileReader();
    reader.onload = () => {
      const base64Data = reader.result as string;
      handleChange(path, { name: uploadedFile.name, data: base64Data });
    };
    reader.readAsDataURL(uploadedFile);
  };

  return data ? (
    <Typography sx={{ fontSize: "14px" }}>
      {t("assessment.questionnaire.form.fileUpload.uploaded")} {data.name}
    </Typography>
  ) : (
    <Grid sx={fileUploadStyle}>
      <DropzoneArea
        onChange={handleDocumentUpload}
        acceptedFiles={[
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ]}
        filesLimit={1}
        dropzoneText={placeholder}
        showPreviews={false}
        showPreviewsInDropzone={false}
        showFileNamesInPreview={false}
        showAlerts={false}
      />
    </Grid>
  );
};

export default withJsonFormsControlProps(FileUpload);
