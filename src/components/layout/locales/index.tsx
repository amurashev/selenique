import React, { useState, useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import { usePathname } from "next/navigation";

import styles from "./styles.module.css";
import { i18n } from "../../../../i18n-config";
import Link from "next/link";

const Locales = () => {
  const { formatMessage, locale } = useIntl();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null);



  return (
   111s
  );
};

export default Locales;
