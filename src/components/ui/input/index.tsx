import * as React from "react";

// import classNames from 'classnames'

import styles from "./styles.module.css";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, ...props }, ref) => {
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        type="text"
        className={styles.input}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
