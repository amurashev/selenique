// Button.tsx
import React from "react";
import Link, { LinkProps } from "next/link";

import styles from "./styles.module.css";

type Variation = "primary" | "secondary" | "etsy" | "gumroad" | "cm"

type ButtonLinkProps = LinkProps & {
  loading?: boolean;
  children: React.ReactNode;
  variation?: Variation
};

const CLASSES: Record<Variation, string> = {
  primary: styles.buttonPrimary,
  secondary: styles.buttonSecondary,
  etsy: styles.buttonEtsy,
  gumroad: styles.buttonGumroad,
  cm: styles.buttonCM,
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  variation = "primary",
  children,
  loading,
  ...props
}) => {
  return (
    <Link
      className={`${CLASSES[variation]} ${loading ? styles.disabled : ""}`}
      {...props}
    >
      {loading ? <span className={styles.spinner} /> : null}
      {children}
    </Link>
  );
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variation?: Variation
};

const Button: React.FC<ButtonProps> = ({
  variation = "primary",
  children,
  loading,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`${CLASSES[variation]} ${disabled || loading ? styles.disabled : ""}`}
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
