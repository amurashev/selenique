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

  const price = value[locale] || value.en

  let fromLabel = "";

  if (locale === "en") fromLabel = "from";
  if (locale === "ru") fromLabel = "от";

  let priceWithCurrency = "$" + price.toFixed(2);
  // if (locale === "en") priceWithCurrency = "$" + price.toFixed(2);
  if (locale === "ru") priceWithCurrency = price +" р.";


  if (unit) {
    return (
      <>
        {isFrom ? fromLabel + " " : ""} {priceWithCurrency}
        /{formatMessage({ id: `common.prices.types.${unit}` })}
      </>
    );
  }

  return (
    <>
      {isFrom ? fromLabel + " " : ""} {priceWithCurrency}
    </>
  );
};