import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps } from "@jsonforms/core";
import { Box, Checkbox as MuiCheckbox, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CheckboxIcon = styled("span")(({ theme }) => ({
  width: 20,
  height: 20,
  borderRadius: "6px",
  border: "1px solid rgb(204, 204, 204);",
}));

const CheckedIcon = styled(CheckboxIcon)({
  backgroundColor: "#137cbd",
  border: "1px solid #137cbd",
  "&::after": {
    content: '""',
    display: "block",
    width: 6,
    height: 10,
    border: "solid white",
    borderWidth: "0 2px 2px 0",
    transform: "rotate(45deg) translate(6px, -2px)",
  },
});

const Checkbox = ({ data, handleChange, path, uischema }: ControlProps) => {
  const label = uischema.options?.label || "";

  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "350px" }}>
      <MuiCheckbox
        checked={!!data}
        icon={<CheckboxIcon />}
        checkedIcon={<CheckedIcon />}
        onChange={(e) => handleChange(path, e.target.checked)}
      />
      <Typography sx={{ fontSize: "14px" }}>{label}</Typography>
    </Box>
  );
};

export default withJsonFormsControlProps(Checkbox);
