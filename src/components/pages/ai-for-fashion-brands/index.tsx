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
import Price from "@/components/sections/landing-black/price";
import ImagesSlider from "@/components/sections/landing-black/images-slider";

import { getGuideData } from "@/constants/guides/utils";
import CheckMark from "@/components/ui/icons/check-mark";

import styles from "@/components/sections/landing-black/page.module.css";

export default function AIForBrandsPage() {
  const { formatMessage, locale } = useIntl();

  const slug = "ai-for-fashion-brands";
  const data = GUIDES[slug];
  const languages = Object.keys(data.locales);

  const { price, purchaseLink, boostyLink } = getGuideData(slug, locale);
  const oldPrice = { en: 79, ru: 7990 };

  return (
    <div className={styles.page}>
      <ShortHeader route={guidesListPageRoute} />
      <main className={styles.main}>
        <Hero
          slug={slug}
          languages={languages}
          title={formatMessage({ id: "ai-for-fashion-brands.title" })}
        />

        <SectionGray
          id="first_section"
          title={formatMessage({ id: "ai-for-fashion-brands.section1.title" })}
        >
          <h3 className={styles.header3}>
            {formatMessage({
              id: "ai-for-fashion-brands.section1.subtitle",
            })}
          </h3>
          <ul className={styles.itemsList}>
            {[1, 2, 3, 4].map((item) => (
              <li key={item}>
                <CheckMark />{" "}
                {formatMessage({
                  id: `ai-for-fashion-brands.section1.item${item}`,
                })}
              </li>
            ))}
          </ul>

          <div className={styles.extraMarginTop}>
            <h3 className={styles.header3}>
              {formatMessage({
                id: `ai-for-fashion-brands.section2.title`,
              })}
              :
            </h3>
            <ul className={styles.itemsList}>
              {[1, 2, 3].map((item) => (
                <li key={item}>
                  {formatMessage({
                    id: `ai-for-fashion-brands.section2.item${item}`,
                  })}
                </li>
              ))}
            </ul>
          </div>
          {/* <div className={styles.extraMarginTop}>
            <ImagesSlider
              images={[
                "/images/influencer/101.jpg",
                "/images/influencer/102.jpg",
                "/images/influencer/103.jpg",
                "/images/influencer/104.jpg",
                "/images/influencer/105.jpg",
              ]}
            />
          </div> */}
        </SectionGray>

        <SectionColor title="">
          <ImagesSlider
            images={[
              "/images/ai-fashion/1.jpg",
              "/images/ai-fashion/2.jpg",
              "/images/ai-fashion/3.jpg",
            ]}
          />
        </SectionColor>

        <SectionGray
          title={formatMessage({
            id: "ai-for-fashion-brands.organisation.title",
          })}
        >
          <h3 className={styles.header3}>
            {formatMessage({
              id: "ai-for-fashion-brands.organisation.subtitle",
            })}
          </h3>
          <ul className={styles.itemsList}>
            {["👩‍💼", "👩‍💻", "📸", "💃"].map((item, key) => (
              <li key={item}>
                ❌{" "}
                {formatMessage({
                  id: `ai-for-fashion-brands.organisation.item${key + 1}`,
                })}
              </li>
            ))}
          </ul>

          {/* <div className={styles.extraMarginTop}>
            <p
              className={styles.emphasized}
              dangerouslySetInnerHTML={{
                __html: formatMessage({
                  id: `ai-for-fashion-brands.organisation.summary1`,
                }),
              }}
            />

            <p
              className={styles.smallMarginTop}
              dangerouslySetInnerHTML={{
                __html: formatMessage({
                  id: `ai-for-fashion-brands.organisation.summary2`,
                }),
              }}
            />
          </div> */}
        </SectionGray>

        <SectionColor
          title={formatMessage({
            id: "ai-for-fashion-brands.organisation.summary1",
          })}
        >
          <div className={styles.temp}>
            <p
              className={styles.smallMarginTop}
              dangerouslySetInnerHTML={{
                __html: formatMessage({
                  id: `ai-for-fashion-brands.organisation.summary2`,
                }),
              }}
            />
          </div>
          <div className={styles.extraMarginTop}>
            <ImagesSlider
              images={[
                "/images/ai-fashion/20.jpg",
                "/images/ai-fashion/21.jpg",
                "/images/ai-fashion/22.jpg",
              ]}
            />
          </div>
        </SectionColor>

        <SectionGray
          title={formatMessage({ id: "ai-for-fashion-brands.standard.title" })}
        >
          <h3 className={styles.header3}>
            {formatMessage({
              id: "ai-for-fashion-brands.standard.subtitle",
            })}
          </h3>
          <ul className={styles.itemsList}>
            {[1, 2, 3, 4].map((item) => (
              <li key={item}>
                <CheckMark />{" "}
                {formatMessage({
                  id: `ai-for-fashion-brands.standard.item${item}`,
                })}
              </li>
            ))}
          </ul>

          <div className={styles.extraMarginTop}>
            <h3
              className={styles.header3}
              dangerouslySetInnerHTML={{
                __html: formatMessage({
                  id: `ai-for-fashion-brands.standard.summary.title`,
                }),
              }}
            />

            <ul className={styles.itemsList}>
              {[1, 2].map((item, key) => (
                <li key={item} className={styles.blocksListItemTitle}>
                  {formatMessage({
                    id: `ai-for-fashion-brands.standard.summary.item${key + 1}`,
                  })}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.extraMarginTop}>
            <b className={styles.emphasized}>
              {formatMessage({
                id: `ai-for-fashion-brands.standard.summary.item${2 + 1}`,
              })}
            </b>
          </div>
        </SectionGray>

        <SectionColor
          title={formatMessage({ id: "ai-for-fashion-brands.who.title" })}
        >
          <div className={styles.blocksList3El}>
            {["👩‍💼", "👩‍💻", "📸", "💃", "👗"].map((item, key) => (
              <div key={item} className={styles.blocksListItem}>
                <h4 className={styles.blocksListItemTitle}>
                  {item}{" "}
                  {formatMessage({
                    id: `ai-for-fashion-brands.who.item${key + 1}.title`,
                  })}
                  :
                </h4>
                <p
                  className={""}
                  dangerouslySetInnerHTML={{
                    __html: formatMessage({
                      id: `ai-for-fashion-brands.who.item${key + 1}.text`,
                    }),
                  }}
                />
              </div>
            ))}
          </div>
        </SectionColor>

        <SectionGray
          title={formatMessage({ id: "ai-for-fashion-brands.course.title" })}
        >
          <ul className={styles.itemsList}>
            {[1, 2, 3, 4, 5].map((item, key) => (
              <li key={item}>
                {"📌  "}
                {formatMessage({
                  id: `ai-for-fashion-brands.course.item${key + 1}`,
                })}
              </li>
            ))}
          </ul>

          <div className={styles.extraMarginTop}>
            <h3 className={styles.header3}>
              {formatMessage({
                id: "ai-for-fashion-brands.inside.title",
              })}
            </h3>

            <ul className={styles.itemsList}>
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <li key={item}>
                  {item === 7 ? "🎁" : "📖"}{" "}
                  {formatMessage({
                    id: `ai-for-fashion-brands.inside.item${item}`,
                  })}
                </li>
              ))}
            </ul>
          </div>
        </SectionGray>

        <SectionColor
          title={formatMessage({
            id: "ai-for-fashion-brands.timeline.title",
          })}
        >
          <h3 className={styles.header3}>
            {formatMessage({
              id: "ai-for-fashion-brands.timeline.summary.text",
            })}
          </h3>
          <div className={styles.blocksList4El}>
            {[1, 2, 3, 4].map((item, key) => (
              <div key={key} className={styles.blocksListItem}>
                <h4 className={styles.blocksListItemTitle}>
                  {"📅 "}
                  {formatMessage({
                    id: `ai-for-fashion-brands.timeline.item${item}.title`,
                  })}
                  :
                </h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: formatMessage({
                      id: `ai-for-fashion-brands.timeline.item${item}.text`,
                    }),
                  }}
                />
              </div>
            ))}
          </div>

          <div className={styles.extraMarginTop}>
            <h3 className={styles.header3}>
              {formatMessage({
                id: "ai-for-fashion-brands.what_you_get.title",
              })}
            </h3>
          </div>

          <div className={styles.blocksList3El}>
            {[1, 2, 3].map((item, key) => (
              <div key={key} className={styles.blocksListItem}>
                <h4 className={styles.blocksListItemTitle}>
                  📅{" "}
                  {formatMessage({
                    id: `ai-for-fashion-brands.what_you_get.item${item}.title`,
                  })}
                  :
                </h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: formatMessage({
                      id: `ai-for-fashion-brands.what_you_get.item${item}.text`,
                    }),
                  }}
                />
              </div>
            ))}
          </div>

          <div className={styles.extraMarginTop}>
            {/* <h3 className={styles.header3}>
              {formatMessage({
                id: `ai-for-fashion-brands.timeline.summary.title`,
              })}
              :
            </h3> */}
            {/* <ul className={styles.itemsList}>
              {[1, 2, 3].map((item) => (
                <li key={item}>
                  <CheckMark />{" "}
                  {formatMessage({
                    id: `ai-for-fashion-brands.timeline.summary.item${item}`,
                  })}
                </li>
              ))}
            </ul> */}
            <h3 className={styles.header3}>
              {formatMessage({
                id: `ai-for-fashion-brands.what_you_get.summary.text`,
              })}
            </h3>
            <ul className={styles.itemsList}>
              {[1, 2, 3].map((item) => (
                <li key={item}>
                  <CheckMark />{" "}
                  {formatMessage({
                    id: `ai-for-fashion-brands.what_you_get.summary.item${item}`,
                  })}
                </li>
              ))}
            </ul>
          </div>

          {/* <h3 className={styles.header3}>
            {formatMessage({
              id: "ai-for-fashion-brands.what_you_get.title",
            })}
          </h3> */}
        </SectionColor>

        {/* <SectionGray
          title={formatMessage({
            id: "ai-for-fashion-brands.what_you_get.summary.text",
          })}
        >
          <ul className={styles.itemsList}>
            {[1, 2, 3].map((item) => (
              <li key={item}>
                <CheckMark />{" "}
                {formatMessage({
                  id: `ai-for-fashion-brands.what_you_get.summary.item${item}`,
                })}
              </li>
            ))}
          </ul>
        </SectionGray> */}

        {/* <SectionColor
          title={formatMessage({
            id: "ai-for-fashion-brands.what_you_get.title",
          })}
        >
          <div className={styles.blocksList3El}>
            {[1, 2, 3].map((item, key) => (
              <div key={key} className={styles.blocksListItem}>
                <h4 className={styles.blocksListItemTitle}>
                  📅{" "}
                  {formatMessage({
                    id: `ai-for-fashion-brands.what_you_get.item${item}.title`,
                  })}
                  :
                </h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: formatMessage({
                      id: `ai-for-fashion-brands.what_you_get.item${item}.text`,
                    }),
                  }}
                />
              </div>
            ))}
          </div>
        </SectionColor> */}

        <SectionGray
          title={formatMessage({ id: "ai-for-fashion-brands.price.title" })}
          isCentered
        >
          <Price
            boostyLink={boostyLink}
            purchaseLink={purchaseLink}
            price={price}
            oldPrice={oldPrice}
            discount={25}
            // summary={formatMessage({ id: `ai-for-fashion-brands.price.summary` })}
          />
        </SectionGray>

        <SectionColor title="">
          <ImagesSlider
            images={[
              "/images/ai-fashion/31.jpg",
              "/images/ai-fashion/32.jpg",
              "/images/ai-fashion/33.jpg",
              "/images/ai-fashion/34.jpg",
            ]}
          />
        </SectionColor>

        <SectionGray
          title={formatMessage({ id: "ai-for-fashion-brands.faq.title" })}
        >
          <FAQBase
            items={[1, 2, 3, 4, 5].map((key) => ({
              title: formatMessage({
                id: `ai-for-fashion-brands.faq.question${key}`,
              }),
              text: formatMessage({
                id: `ai-for-fashion-brands.faq.answer${key}`,
              }),
            }))}
          />
        </SectionGray>
      </main>
      <Footer />
    </div>
  );
}
