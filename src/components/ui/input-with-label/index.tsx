import React, { ReactNode } from "react";

import styles from "./styles.module.css";

interface InputWithLabelProps {
  label: string;
  id: string;
  hint?: ReactNode;
  children: ReactNode;
  [key: string]: any; // для других атрибутов, если нужно
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, hint, id, children, ...props }) => {
  return (
    <div className={styles.inputWrapper} {...props}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        {children}
      </div>
      {hint && (
        <div className={styles.inputHint}>{hint}</div>
      )}
    </div>
  );
};

InputWithLabel.displayName = "InputWithLabel";


export { InputWithLabel };