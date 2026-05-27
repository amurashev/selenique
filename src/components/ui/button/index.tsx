// Button.tsx
import React from "react";
import Link, { LinkProps } from "next/link";

import styles from "./styles.module.css";

type ButtonLinkProps = LinkProps & {
  loading?: boolean;
  children: React.ReactNode;
  variation?: "primary" | "secondary";
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  variation = "primary",
  children,
  loading,
  ...props
}) => {
  const buttonClass = variation === 'primary' ? styles.buttonPrimary : styles.buttonSecondary
  return (
    <Link
      className={`${buttonClass} ${loading ? styles.disabled : ""}`}
      {...props}
    >
      {loading ? <span className={styles.spinner} /> : null}
      {children}
    </Link>
  );
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`${styles.buttonPrimary} ${disabled || loading ? styles.disabled : ""}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <span className={styles.spinner} /> : null}
      {children}
    </button>
  );
};

Button.displayName = "Button";

export { Button };
