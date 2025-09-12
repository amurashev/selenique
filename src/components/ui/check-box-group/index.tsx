// CheckboxGroup.tsx
import React, { useState } from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";

export interface OptionType {
  label?: string;
  labelKey?: string;
  value: string;
}

interface CheckboxGroupProps {
  options: OptionType[];
  defaultSelected?: string[];
  onChange?: (selected: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  defaultSelected = [],
  onChange,
}) => {
  const { formatMessage } = useIntl();
  const [selected, setSelected] = useState<string[]>(defaultSelected);

  const handleToggle = (value: string) => {
    let newSelected: string[];
    if (selected.includes(value)) {
      newSelected = selected.filter((v) => v !== value);
    } else {
      newSelected = [...selected, value];
    }
    setSelected(newSelected);
    if (onChange) onChange(newSelected);
  };

  return (
    <div className={styles.wrapper}>
      {options.map((option) => (
        <label key={option.value} className={styles.option}>
          <input
            type="checkbox"
            checked={selected.includes(option.value)}
            onChange={() => handleToggle(option.value)}
            className={styles.checkbox}
          />
          <span className={styles.label}>
            {option.labelKey
              ? formatMessage({ id: option.labelKey })
              : option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
