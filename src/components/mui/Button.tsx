"use client";
import { Button as MuiButton, styled } from "@mui/material";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";

// Define the custom variant types
type CustomVariant = "custom" | "special" | "danger";
type CustomSize = "tiny" | "huge";

// Extended props interface
interface CustomButtonProps extends Omit<MuiButtonProps, "variant"> {
  variant?: MuiButtonProps["variant"] | CustomVariant;
  customSize?: CustomSize;
}

// Style configurations for custom variants
const variantStyles = {
  custom: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    "&:hover": {
      background: "linear-gradient(45deg, #FE8B9B 30%, #FF9E63 90%)",
    },
  },
  special: {
    backgroundColor: "#9c27b0",
    color: "white",
    borderRadius: "25px",
    "&:hover": {
      backgroundColor: "#7b1fa2",
    },
  },
  danger: {
    backgroundColor: "#f44336",
    color: "white",
    border: "2px solid #d32f2f",
    "&:hover": {
      backgroundColor: "#d32f2f",
      borderColor: "#c62828",
    },
  },
};

const sizeStyles = {
  tiny: {
    padding: "4px 8px",
    fontSize: "0.75rem",
  },
  huge: {
    padding: "16px 32px",
    fontSize: "1.5rem",
  },
};

// Create the styled button component
const Button = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "customSize",
})<CustomButtonProps>(({ theme, variant, customSize }) => ({
  // Default styles
  fontFamily: theme.typography.fontFamily,
  textTransform: "none",

  // Apply variant styles
  ...(variant && variantStyles[variant as CustomVariant]),

  // Apply size styles
  ...(customSize && sizeStyles[customSize]),
}));

export type { CustomButtonProps };
export { Button };
