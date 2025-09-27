// components/ui/ButtonLink.tsx
import React from "react";
import styles from "./ButtonWrapper/button.module.css";

type Variant = "default" | "ghost" | "secondary";
type Size = "sm" | "md" | "lg";

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
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
    className,
  ].join(" ");

  return (
    <a href={href} className={classes} role="button" {...props}>
      {children}
    </a>
  );
};
