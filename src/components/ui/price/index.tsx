import { PriceType } from "@/components/types";
import React from "react";
import { useIntl } from "react-intl";

export const BasePrice = ({ value, unit }: { value: string; unit: string }) => {
  return (
    <>
      от {value}руб./{unit}
    </>
  );
};

export const PriceWithUnit = ({
  value,
  unit = "",
  isFrom = false,
}: {
  value: PriceType
  unit?: string;
  isFrom?: boolean;
}) => {
  const { formatMessage, locale } = useIntl();

  // TODO: l18n
  let currency = "";

  if (locale === "en") currency = "$";
  if (locale === "ru") currency = "руб.";

  const price = value[locale];

  let fromLabel = "";

  if (locale === "en") fromLabel = "from";
  if (locale === "ru") fromLabel = "от";

  if (unit) {
    return (
      <>
        {isFrom ? fromLabel + " " : ""} {price}
        {currency}/{formatMessage({ id: `common.prices.types.${unit}` })}
      </>
    );
  }

  return (
    <>
      {isFrom ? fromLabel + " " : ""} {price}
      {currency}
    </>
  );
};