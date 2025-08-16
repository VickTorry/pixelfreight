import React from "react";
import styles from "./button.module.css";

type Variant = "default" | "ghost" | "secondary";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    className
  ].join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
