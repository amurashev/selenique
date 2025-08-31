// Button.tsx
import React from "react";

import styles from "./styles.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, disabled, ...props }) => {
  return (
    <button
      className={`${styles.button} ${disabled || loading ? styles.disabled : ""}`}
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
