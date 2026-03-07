import styles from "./styles.module.css";

export function ChevronRight({ size = 32, stroke = 2, color = "#ffffff" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 6l6 6-6 6"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronLeft({ size = 32, stroke = 2, color = "#ffffff" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15 6l-6 6 6 6"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SampleNextArrow({
  onClick,
  color = "#ffffff",
  colorDisabled = "#444444",
  className,
}: {
  onClick?: () => void;
  color?: string;
  colorDisabled?: string;
  className?: string;
}) {
  const isDisabled = className?.includes("slick-disabled");
  const finalColor = isDisabled ? colorDisabled : color
  return (
    <div
      className={`${styles.rightArrow} ${isDisabled ? styles.rightArrowDisabled : ""}`}
      onClick={onClick}
    >
      <ChevronRight color={finalColor} />
    </div>
  );
}

export function SamplePrevArrow({
  onClick,
  color = "#ffffff",
  colorDisabled = "#444444",
  className,
}: {
  onClick?: () => void;
  color?: string;
  colorDisabled?: string;
  className?: string;
}) {
  const isDisabled = className?.includes("slick-disabled");
  const finalColor = isDisabled ? colorDisabled : color
  return (
    <div
      className={`${styles.leftArrow} ${isDisabled ? styles.leftArrowDisabled : ""}`}
      onClick={onClick}
    >
      <ChevronLeft color={finalColor} />
    </div>
  );
}
