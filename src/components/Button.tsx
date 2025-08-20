import React from "react";
import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <MuiButton
      variant="contained"
      onClick={onClick}
      sx={{
        borderRadius: "12px",
        backgroundColor: "black",
        fontSize: "16px",
        fontWeight: 600,
        paddingY: "10px",
        textTransform: "none",
      }}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
