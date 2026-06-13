"use client";

import React, { useState } from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";

import { ButtonLink } from "@/components/ui/button";

export default function MobileButtons({
  etsyLink,
  gumroadLink,
  cmLink,
}: {
  etsyLink?: string;
  gumroadLink?: string;
  cmLink?: string;
}) {
  const [isRedirect, setIsRedirect] = useState(false);
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        {formatMessage({ id: "common.get_on" })}:&nbsp;
      </div>

      <div className={styles.buttons}>
        {etsyLink && (
          <ButtonLink
            href={etsyLink}
            variation="etsy"
            loading={isRedirect}
            onClick={() => setIsRedirect(true)}
          >
            Etsy
          </ButtonLink>
        )}
        {gumroadLink && (
          <ButtonLink
            href={gumroadLink}
            variation="gumroad"
            loading={isRedirect}
            onClick={() => setIsRedirect(true)}
          >
            Gumroad
          </ButtonLink>
        )}
        {cmLink && (
          <ButtonLink
            href={cmLink}
            variation="cm"
            loading={isRedirect}
            onClick={() => setIsRedirect(true)}
          >
            Creative Market
          </ButtonLink>
        )}
      </div>
    </div>
  );
}
