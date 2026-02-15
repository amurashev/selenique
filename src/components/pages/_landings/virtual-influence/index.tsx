"use client";

import { useIntl } from "react-intl";

import Footer from "@/components/layout/footer";
import ShortHeader from "@/components/layout/short-header";
import FAQBase from "@/components/sections/faq";

import { GUIDES } from "@/constants/guides";
import { guidesListPageRoute } from "@/constants/routes";

import Hero from "@/components/sections/landing-black/hero";
import {
  SectionColor,
  SectionGray,
} from "@/components/sections/landing-black/sections";

import Price from "../../../sections/landing-black/price";
import ImagesSlider from "@/components/sections/landing-black/images-slider";
import { getGuideData } from "@/constants/guides/utils";
import CheckMark from "@/components/ui/icons/check-mark";

import styles from "@/components/sections/landing-black/page.module.css";

export default function VirtualInfluencePage() {
  const { formatMessage, locale } = useIntl();

  const slug = "virtual-influence-guide";
  const data = GUIDES[slug];
  const languages = Object.keys(data.locales);

  const { price, purchaseLink, boostyLink } = getGuideData(slug, locale);
  const oldPrice = { en: 79, ru: 4990 };

  return (
    <div className={styles.page}>
      <ShortHeader route={guidesListPageRoute} />
      <main className={styles.main}>
        <Hero
          slug={slug}
          languages={languages}
          title={formatMessage({ id: "virtual-influence.title" })}
        />

        <SectionGray
          id="first_section"
          title={formatMessage({ id: "virtual-influence.section1.title" })}
        >
          <ul className={styles.itemsList}>
            {[1, 2, 3, 4, 5].map((item) => (
              <li
                key={item}
                dangerouslySetInnerHTML={{
                  __html: formatMessage({
                    id: `virtual-influence.section1.item${item}`,
                  }),
                }}
              />
            ))}
          </ul>
          <div className={styles.extraMarginTop}>
            <ImagesSlider
              images={[
                "/images/influencer/101.jpg",
                "/images/influencer/102.jpg",
                "/images/influencer/103.jpg",
                "/images/influencer/104.jpg",
                "/images/influencer/105.jpg",
              ]}
            />
          </div>
        </SectionGray>

        <SectionColor
          title={formatMessage({ id: "virtual-influence.section2.title" })}
        >
          <div className={styles.blocksList2El}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className={styles.blocksListItem}>
                <h4 className={styles.blocksListItemTitle}>
                  📦{" "}
                  {formatMessage({
                    id: `virtual-influence.section2.item${item}.title`,
                  })}
                  :
                </h4>
                <p
                  className={""}
                  dangerouslySetInnerHTML={{
                    __html: formatMessage({
                      id: `virtual-influence.section2.item${item}.text`,
                    }),
                  }}
                />
              </div>
            ))}
          </div>
        </SectionColor>

        <SectionGray
          title={formatMessage({ id: "virtual-influence.section3.title" })}
        >
          <ul className={styles.itemsList}>
            {[1, 2, 3, 4].map((item) => (
              <li key={item}>
                <CheckMark />{" "}
                {formatMessage({
                  id: `virtual-influence.section3.item${item}`,
                })}
              </li>
            ))}
          </ul>
        </SectionGray>

        <SectionColor
          title={formatMessage({ id: "virtual-influence.section4.title" })}
        >
          <div className={styles.blocksList3El}>
            <div className={styles.blocksListItem}>
              <h4 className={styles.blocksListItemTitle}>
                {formatMessage({
                  id: "virtual-influence.section4.list1_title",
                })}
                :
              </h4>
              <ul className={styles.roadMapSubList}>
                {["1️⃣", "2️⃣", "3️⃣"].map((item, key) => (
                  <li key={item}>
                    {item}{" "}
                    {formatMessage({
                      id: `virtual-influence.section4.list1_item${key + 1}`,
                    })}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.blocksListItem}>
              <h4 className={styles.blocksListItemTitle}>
                {formatMessage({
                  id: "virtual-influence.section4.list2_title",
                })}
                :
              </h4>
              <ul className={styles.roadMapSubList}>
                {["1️⃣", "2️⃣"].map((item, key) => (
                  <li key={item}>
                    {item}{" "}
                    {formatMessage({
                      id: `virtual-influence.section4.list2_item${key + 1}`,
                    })}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.blocksListItem}>
              <h4 className={styles.blocksListItemTitle}>
                {formatMessage({
                  id: "virtual-influence.section4.list3_title",
                })}
                :
              </h4>
              <ul className={styles.roadMapSubList}>
                {["1️⃣", "2️⃣"].map((item, key) => (
                  <li key={item}>
                    {item}{" "}
                    {formatMessage({
                      id: `virtual-influence.section4.list3_item${key + 1}`,
                    })}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionColor>

        <SectionGray
          title={formatMessage({ id: "virtual-influence.section5.title" })}
        >
          <ul className={styles.itemsList}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <li key={item}>
                {item === 6 ? "🎁" : "📖"}{" "}
                {formatMessage({
                  id: `virtual-influence.section5.item${item}`,
                })}
              </li>
            ))}
          </ul>

          <div className={styles.extraMarginTop}>
            <ImagesSlider
              images={[
                "/images/influencer/201.jpg",
                "/images/influencer/202.jpg",
                "/images/influencer/204.jpg",
                "/images/influencer/205.jpg",
                "/images/influencer/206.jpg",
              ]}
            />
          </div>
        </SectionGray>

        <SectionColor
          title={formatMessage({ id: "virtual-influence.section6.title" })}
        >
          <div className={styles.blocksList2El}>
            <div className={styles.blocksListItem}>
              <h4 className={styles.blocksListItemTitle}>
                ❌{" "}
                {formatMessage({
                  id: "virtual-influence.section6.item1.title",
                })}
                :
              </h4>
              <ul className={styles.blocksListItemSubList}>
                {[1, 2, 3, 4].map((item, key) => (
                  <li
                    key={item}
                    dangerouslySetInnerHTML={{
                      __html: formatMessage({
                        id: `virtual-influence.section6.item1.text${key + 1}`,
                      }),
                    }}
                  />
                ))}
              </ul>
            </div>
            <div className={styles.blocksListItem}>
              <h4 className={styles.blocksListItemTitle}>
                ✅{" "}
                {formatMessage({
                  id: "virtual-influence.section6.item2.title",
                })}
                :
              </h4>
              <ul className={styles.blocksListItemSubList}>
                {[1, 2, 3, 4].map((item, key) => (
                  <li
                    key={item}
                    dangerouslySetInnerHTML={{
                      __html: formatMessage({
                        id: `virtual-influence.section6.item2.text${key + 1}`,
                      }),
                    }}
                  />
                ))}
              </ul>
            </div>
          </div>
        </SectionColor>

        <SectionGray
          title={formatMessage({ id: "virtual-influence.section7.title" })}
        >
          <ul className={styles.itemsList}>
            <li>{formatMessage({ id: `virtual-influence.section7.item1` })}</li>
            <li>{formatMessage({ id: `virtual-influence.section7.item2` })}</li>
            <li className={styles.emphasized}>
              {formatMessage({ id: `virtual-influence.section7.item3` })}
            </li>
          </ul>
        </SectionGray>

        <SectionColor
          title={formatMessage({ id: "virtual-influence.section8.title" })}
        >
          <div className={styles.blocksList2El}>
            <div className={styles.blocksListItem}>
              <h4 className={styles.blocksListItemTitle}>
                ❌{" "}
                {formatMessage({ id: "virtual-influence.section8.var2_title" })}
                :
              </h4>
              <ul className={styles.blocksListItemSubList}>
                {[1, 2].map((item, key) => (
                  <li
                    key={item}
                    dangerouslySetInnerHTML={{
                      __html: formatMessage({
                        id: `virtual-influence.section8.var2_item${key + 1}`,
                      }),
                    }}
                  />
                ))}
              </ul>
            </div>
            <div className={styles.blocksListItem}>
              <h4 className={styles.blocksListItemTitle}>
                ✅{" "}
                {formatMessage({ id: "virtual-influence.section8.var1_title" })}
                :
              </h4>
              <ul className={styles.blocksListItemSubList}>
                {[1, 2, 3].map((item, key) => (
                  <li
                    key={item}
                    dangerouslySetInnerHTML={{
                      __html: formatMessage({
                        id: `virtual-influence.section8.var1_item${key + 1}`,
                      }),
                    }}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.extraMarginTop}>
            <p
              dangerouslySetInnerHTML={{
                __html: formatMessage({
                  id: `virtual-influence.section8.text1`,
                }),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: formatMessage({
                  id: `virtual-influence.section8.text2`,
                }),
              }}
            />
          </div>
        </SectionColor>

        <SectionGray
          title={formatMessage({ id: "virtual-influence.section9.title" })}
          isCentered
        >
          <Price
            boostyLink={boostyLink}
            purchaseLink={purchaseLink}
            price={price}
            oldPrice={oldPrice}
            discount={20}
            summary={formatMessage({ id: `virtual-influence.section9.text1` })}
          />
        </SectionGray>

        <SectionColor title="">
          <ImagesSlider
            images={[
              "/images/influencer/301.jpg",
              "/images/influencer/302.jpg",
              "/images/influencer/303.jpg",
              "/images/influencer/306.jpg",
              "/images/influencer/305.jpg",
              "/images/influencer/306.jpg",
            ]}
          />
        </SectionColor>

        <SectionGray
          title={formatMessage({ id: "virtual-influence.section10.title" })}
        >
          <FAQBase
            items={[1, 2, 3, 4, 5].map((key) => ({
              title: formatMessage({
                id: `virtual-influence.section10.question${key}`,
              }),
              text: formatMessage({
                id: `virtual-influence.section10.answer${key}`,
              }),
            }))}
          />
        </SectionGray>
      </main>
      <Footer />
    </div>
  );
}
