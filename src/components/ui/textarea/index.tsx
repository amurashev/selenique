import * as React from "react";

import styles from "./styles.module.css";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InputProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, placeholder, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        placeholder={placeholder}
        className={styles.textarea}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
