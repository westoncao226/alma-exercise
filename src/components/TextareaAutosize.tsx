import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps } from "@jsonforms/core";
import { TextareaAutosize as MuiTextareaAutosize } from "@mui/material";

const TextareaAutosize = ({
  data,
  handleChange,
  path,
  uischema,
}: ControlProps) => {
  const placeholder = uischema.options?.placeholder || "";
  const maxLength = uischema.options?.maxLength;

  return (
    <MuiTextareaAutosize
      minRows={7}
      placeholder={placeholder}
      value={data || ""}
      onChange={(e) => {
        if (!maxLength || e.target.value.length <= maxLength) {
          handleChange(path, e.target.value);
        }
      }}
      style={{
        width: "347px",
        fontSize: "14px",
        padding: "12px",
        borderRadius: "12px",
        border: "1px solid #ccc",
      }}
    />
  );
};

export default withJsonFormsControlProps(TextareaAutosize);
