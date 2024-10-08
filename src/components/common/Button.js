// CustomButton.js
import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({
  href,
  onClick,
  children,
  sx = {},
  buttonType = "default",
  ...rest
}) => {
  return (
    <Button
      href={href}
      onClick={onClick}
      variant="contained"
      color="primary"
      sx={{
        textTransform: "capitalize",
        backgroundColor: "#EF4261",
        borderRadius: "10px",
        padding:  ".65rem 1.25rem",
        fontSize: buttonType === "navbar" ? "0.75rem" : "1rem",
        fontWeight: "600",
        "&:hover": {
          color: "#ffffff",
          backgroundColor: "#EF4261", 
          boxShadow: "0 0 0 2px #F5888B"
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
