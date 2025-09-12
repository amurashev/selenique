import React, { useState } from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";

type OptionType = {
  label?: string;
  labelKey?: string;
  value: string;
};

type RadioGroupProps = {
  options: OptionType[];
  name: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  name,
  onChange,
  defaultValue,
}) => {
  const { formatMessage } = useIntl();
  const [selected, setSelected] = useState<string>(defaultValue || "");

  const handleChange = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className={styles.wrapper}>
      {options.map((option) => (
        <label key={option.value} className={styles.option}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selected === option.value}
            onChange={() => handleChange(option.value)}
            className={styles.radio}
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

export default RadioGroup;
