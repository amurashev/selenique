import React, { ReactNode } from "react";
import styles from "./styles.module.css";

type InfoBoxVariant = "info" | "success" | "warning" | "error";

interface InfoBoxProps {
  children: ReactNode;
  variant?: InfoBoxVariant;
}

const InfoBox: React.FC<InfoBoxProps> = ({ children, variant = "info" }) => {
  return <div className={`${styles.box} ${styles[variant]}`}>{children}</div>;
};

export default InfoBox;