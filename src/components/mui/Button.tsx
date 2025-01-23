"use client";

import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";

/**
 * Custom button variants for the application
 */
type CustomVariant = "brand" | "purple";

/**
 * Custom button sizes
 */
type CustomSize = "lg" | "small";

/**
 * Props interface for the custom Button component
 */
interface ButtonProps extends Omit<MuiButtonProps, "variant" | "size"> {
  variant?: CustomVariant;
  size?: CustomSize;
}

/**
 * Styled MUI Button with custom variants and sizes
 */
const StyledButton = styled(MuiButton)<ButtonProps>(
  ({ theme, variant, size }) => ({
    // Base styles
    textTransform: "none",
    borderRadius: theme.shape.borderRadius,
    fontWeight: 600,

    // Size variations
    ...((size === "lg" || size === "small") && {
      padding: size === "lg" ? "12px 24px" : "6px 16px",
      fontSize: size === "lg" ? "1.125rem" : "0.875rem",
    }),

    // Variant styles
    ...(variant === "brand" && {
      backgroundColor: "#0070f3",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "#0051a8",
      },
    }),
    ...(variant === "purple" && {
      backgroundColor: "#6b46c1",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "#553c9a",
      },
    }),
  })
);

/**
 * Custom Button component with restricted variants and sizes
 */
export function Button({
  children,
  variant = "brand",
  size = "small",
  ...props
}: ButtonProps) {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
}
