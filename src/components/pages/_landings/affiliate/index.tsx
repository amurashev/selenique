"use client";

import { useIntl } from "react-intl";

import Footer from "@/components/layout/footer";
import ShortHeader from "@/components/layout/short-header";

import { GUIDES } from "@/constants/guides";
import { guidesListPageRoute } from "@/constants/routes";

import {
  SectionColor,
  SectionGray,
} from "@/components/sections/landing-black/sections";
import ImagesSlider from "@/components/sections/landing-black/images-slider";

import styles from "@/components/sections/landing-black/page.module.css";
import Join from "./join";
import Hero from "./hero";

export default function AffiliatePage() {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.page}>
      <ShortHeader route={guidesListPageRoute} />
      <main className={styles.main}>
        <Hero />

        <SectionColor
          title={formatMessage({ id: "affiliate.how_it_works.title" })}
        >
          <p
            dangerouslySetInnerHTML={{
              __html: formatMessage({
                id: `affiliate.how_it_works.text`,
              }),
            }}
          />
          <div className={styles.blocksList2El}>
            {["1️⃣", "2️⃣", "3️⃣", "4️⃣"].map((item, key) => (
              <div key={item} className={styles.blocksListItem}>
                <h4 className={styles.blocksListItemTitle}>
                  {item}{" "}
                  {formatMessage({
                    id: `affiliate.how_it_works.item${key + 1}.title`,
                  })}
                </h4>
                <p
                  className={""}
                  dangerouslySetInnerHTML={{
                    __html: formatMessage({
                      id: `affiliate.how_it_works.item${key + 1}.text`,
                    }),
                  }}
                />
              </div>
            ))}
          </div>
        </SectionColor>

        <SectionGray
          id="first_section"
          title={formatMessage({ id: "affiliate.how_much.title" })}
        >
          <p
            dangerouslySetInnerHTML={{
              __html: formatMessage({
                id: `affiliate.how_much.text`,
              }),
            }}
          />

          <div className={styles.smallMarginTop}>
            <p
              dangerouslySetInnerHTML={{
                __html: formatMessage({ id: `affiliate.how_much.item1` }),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: formatMessage({ id: `affiliate.how_much.item2` }),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html:
                  "&bull;&nbsp;" +
                  formatMessage({ id: `affiliate.how_much.item3` }),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html:
                  "&bull;&nbsp;" +
                  formatMessage({ id: `affiliate.how_much.item4` }),
              }}
            />
          </div>

          <p
            className={styles.smallMarginTop}
            dangerouslySetInnerHTML={{
              __html: formatMessage({
                id: `affiliate.how_much.after`,
              }),
            }}
          />
        </SectionGray>

        <SectionColor
          isCentered
          title={formatMessage({ id: "affiliate.instruction.title" })}
        >
          <div className={styles.extraMarginTop}>
            <ImagesSlider
              images={[
                "/images/affiliate/1.jpg",
                "/images/affiliate/2.jpg",
                "/images/affiliate/3.jpg",
              ]}
            />
          </div>
        </SectionColor>

        <SectionGray
          title={formatMessage({ id: "affiliate.join.title" })}
          isCentered
        >
          <Join />
        </SectionGray>
      </main>
      <Footer />
    </div>
  );
}
