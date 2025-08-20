import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps } from "@jsonforms/core";
import { TextField as MuiTextField } from "@mui/material";

const TextField = ({ data, handleChange, path, uischema }: ControlProps) => {
  const placeholder = uischema.options?.placeholder || "";
  const maxLength = uischema.options?.maxLength;

  return (
    <MuiTextField
      fullWidth
      variant="outlined"
      placeholder={placeholder}
      slotProps={{
        input: {
          inputProps: { maxLength: maxLength },
        },
      }}
      value={data || ""}
      onChange={(e) => handleChange(path, e.target.value)}
      sx={{
        width: "350px",
        marginBottom: "12px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
        },
        "& .MuiOutlinedInput-input": {
          padding: "12px",
          fontSize: "14px",
        },
      }}
    />
  );
};

export default withJsonFormsControlProps(TextField);
