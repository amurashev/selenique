"use client";

import { useIntl } from "react-intl";

import styles from "./styles.module.css";
import { useState } from "react";
import Categories from "../categories";
import {
  GENDER_LIST,
  AGE_LIST,
  ETHNICITY_LIST,
  EXPRESSION_LIST,
  SKIN_LIST,
  HAIR_STYLE_LIST,
  HAIR_COLOR_LIST,
  EYE_COLOR_LIST,
} from "../../../../../../source/params";

export default function Builder() {
  const { formatMessage, locale } = useIntl();

  const [selectedGender, setSelectedGender] = useState<string>(GENDER_LIST[0]);
  const [selectedAge, setSelectedAge] = useState<string>(AGE_LIST[0]);
  const [selectedEthnicity, setSelectedEthnicity] = useState<string>(
    ETHNICITY_LIST[0]
  );
  const [selectedSkin, setSelectedSkin] = useState<string>(SKIN_LIST[0]);
  const [selectedHairStyle, setSelectedHairStyle] = useState<string>(
    HAIR_STYLE_LIST[0]
  );
  const [selectedHairColor, setSelectedHairColor] = useState<string>(
    HAIR_COLOR_LIST[0]
  );
  const [selectedEyeColor, setSelectedEyeColor] = useState<string>(
    EYE_COLOR_LIST[0]
  );
  const [selectedExpression, setSelectedExpression] = useState<string>(
    EXPRESSION_LIST[0]
  );

  const copyText = () => {
    const copyTextEl = document.getElementById("prompt");

    if (copyTextEl) {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      // Select the text field
      (copyTextEl as any).select();
      (copyTextEl as any).setSelectionRange(0, 99999); // For mobile devices
      // Copy the text inside the text field
      navigator.clipboard.writeText((copyTextEl as any).value);
      /* eslint-enable @typescript-eslint/no-explicit-any */
    }
  };

  const value = `Gender: ${selectedGender}
Age: ${selectedAge}
Ethnicity: ${selectedEthnicity}
Face params: distinctive facial structure.
Skin: ${selectedSkin} skin tone
Hair: ${selectedHairStyle} ${selectedHairColor} hair
Expression: ${selectedExpression}
Style: Portrait photo. Professional photography, ultra realistic
Lighting: soft natural lighting
Background: plain white background
Camera: 85mm portrait lens`;

  return (
    <div className={styles.box}>
      <p>{formatMessage({ id: "ai_avatar.generator.how.text1" })}</p>
      <div className={styles.list}>
        {[
          ["gender", GENDER_LIST, selectedGender, setSelectedGender],
          ["age", AGE_LIST, selectedAge, setSelectedAge],
          [
            "ethnicity",
            ETHNICITY_LIST,
            selectedEthnicity,
            setSelectedEthnicity,
          ],
          ["skin", SKIN_LIST, selectedSkin, setSelectedSkin],
          [
            "hair_style",
            HAIR_STYLE_LIST,
            selectedHairStyle,
            setSelectedHairStyle,
          ],
          [
            "hair_color",
            HAIR_COLOR_LIST,
            selectedHairColor,
            setSelectedHairColor,
          ],
          ["eye", EYE_COLOR_LIST, selectedEyeColor, setSelectedEyeColor],
          [
            "expression",
            EXPRESSION_LIST,
            selectedExpression,
            setSelectedExpression,
          ],
        ].map((item) => (
          <div className={styles.item}>
            <h3>
              {formatMessage({
                id: `ai_avatar.generator.builder.${item[0]}.title`,
              })}
              :
            </h3>
            <Categories
              data={item[1] as string[]}
              selectedIndex={item[2] as string}
              onItemClick={item[3] as () => string}
            />
          </div>
        ))}
      </div>

      <p>{formatMessage({ id: "ai_avatar.generator.how.text2" })}</p>

      <div className={styles.textareaBox}>
        <p className={styles.textarea}>{value}</p>
        <textarea id="prompt" value={value} className={styles.textareaHidden} />
        <button onClick={copyText} className={styles.copyButton}>
          {formatMessage({ id: "ai_avatar.generator.builder.cta" })}
        </button>
      </div>

      <p>{formatMessage({ id: "ai_avatar.generator.how.text3" })}</p>
    </div>
  );
}
