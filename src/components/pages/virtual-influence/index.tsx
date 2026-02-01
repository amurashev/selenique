"use client";

import Link from "next/link";
import { useIntl } from "react-intl";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./page.module.css";

import Footer from "@/components/layout/footer";
import ShortHeader from "@/components/layout/short-header";
import FAQBase from "@/components/sections/faq";

import { settings } from "./settings";
import { PROMTBOOKS } from "@/constants/promptbooks";
import { guidesListPageRoute } from "@/constants/routes";
import { PriceWithUnit } from "@/components/ui/price";
import { FadeInSection } from "@/utils/fade";

import Hero from "./hero";


const CheckMark = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#03a9f4"  width="18px" height="18px" viewBox="0 0 36 36" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
      <path d="M34.459 1.375a2.999 2.999 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a2.999 2.999 0 0 0 4.15-.884L35.343 5.524a2.999 2.999 0 0 0-.884-4.149z" />
    </svg>
  )
}

export default function VirtualInfluencePage() {
  const { formatMessage, locale } = useIntl();

  const guidesData = {
    en: {
      id: 33,
      slug: "virtual-influence-guide",
    },
    ru: {
      id: 41,
      slug: "virtual-influence-guide-ru",
    }
  }

  const price = {
    en: 67,
    ru: 4990,
  }

  const oldPrice = {
    en: 79,
    ru: 6990,
  }

  const fixedKey = locale === "ru" ? "ru" : "en"
  const guideData = PROMTBOOKS[guidesData[fixedKey].slug]
  const purchaseLink = `https://seleniquestudio.gumroad.com/l/${guideData.gumroad.slug}?wanted=true`;
  const boostyLink = `https://boosty.to/selenique/posts/${guideData.boostyId}`

  return (
    <div className={styles.page}>
      <ShortHeader
        title={"Selenique.Studio"}
        route={guidesListPageRoute}
      />
      <main className={styles.main}>
        <Hero />

        <FadeInSection>
          <div className={styles.section1}>
            <div className={styles.section1Inner}>
              <h2 className={styles.s1Title}>{formatMessage({ id: "virtual-influence.section1.title" })}</h2>
              <div className={styles.s1List}>
                {[1,2,3,4,5].map(item => (
                  <span key={item} className={styles.s1Item} dangerouslySetInnerHTML={{
                    __html: formatMessage({ id: `virtual-influence.section1.item${item}` }),
                  }} />
                ))}
              </div>
            </div>

            <Slider {...settings} className={styles.slider}>
              {["101", "102", "103", "104", "105"].map(item => (
                  <div key={item} className={styles.item}>
                    <img
                      className={styles.image}
                      src={`/images/influencer/${item}.jpeg`}
                    />
                </div>
                ))}
            </Slider>
          </div>

          </FadeInSection>

          <FadeInSection>
          <div className={styles.section2}>
            <div className={styles.section1Inner}>
              <h2 className={styles.s2Title}>{formatMessage({ id: "virtual-influence.section2.title" })}</h2>
              <div className={styles.s1List}>
                {[1,2,3,4,5,6].map(item => (
                <span key={item} className={styles.s1Item} dangerouslySetInnerHTML={{
                  __html: `📦 ${formatMessage({ id: `virtual-influence.section2.item${item}` })}`,
                }} />
                ))}
              </div>
            </div>
          </div>
          </FadeInSection>

          <FadeInSection>
          <div className={styles.section1}>
            <div className={styles.section1Inner}>
              <h2 className={styles.s1Title}>{formatMessage({ id: "virtual-influence.section3.title" })}</h2>
              <div className={styles.s1List}>
                {[1,2,3,4].map(item => (
                <span key={item} className={styles.s1Item}><CheckMark /> {formatMessage({ id: `virtual-influence.section3.item${item}` })}</span>
                ))}
              </div>
            </div>
          </div>
          </FadeInSection>

          <FadeInSection>
          <div className={styles.section2}>
            <div className={styles.section1Inner}>
              <h2 className={styles.s2Title}>{formatMessage({ id: "virtual-influence.section4.title" })}</h2>

              <div className={styles.subSection}>
                <h4 className={styles.s2SubTitle}>{formatMessage({ id: "virtual-influence.section4.list1_title" })}:</h4>
                <div className={styles.smallList}>
                  {["1️⃣", "2️⃣", "3️⃣"].map((item, key) => (
                  <span key={item} className={styles.smallListItem}>{item} {formatMessage({ id: `virtual-influence.section4.list1_item${key + 1}` })}</span>
                  ))}
                </div>
              </div>

              <div className={styles.subSection}>
                <h4 className={styles.s2SubTitle}>{formatMessage({ id: "virtual-influence.section4.list2_title" })}:</h4>
                <div className={styles.smallList}>
                  {["1️⃣", "2️⃣"].map((item, key) => (
                  <span key={item} className={styles.smallListItem}>{item} {formatMessage({ id: `virtual-influence.section4.list2_item${key + 1}` })}</span>
                  ))}
                </div>
              </div>

              <div className={styles.subSection}>
                <h4 className={styles.s2SubTitle}>{formatMessage({ id: "virtual-influence.section4.list3_title" })}:</h4>
                <div className={styles.smallList}>
                  {["1️⃣", "2️⃣"].map((item, key) => (
                  <span key={item} className={styles.smallListItem}>{item} {formatMessage({ id: `virtual-influence.section4.list3_item${key + 1}` })}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </FadeInSection>


          <FadeInSection>
          <div className={styles.section1}>
            <div className={styles.section1Inner}>
              <h2 className={styles.s1Title}>{formatMessage({ id: "virtual-influence.section5.title" })}</h2>
              <div className={styles.s1List}>
                {[1,2,3,4,5,6].map(item => (
                <span key={item} className={styles.s1Item}>{item === 6 ? "🎁" : "📖"} {formatMessage({ id: `virtual-influence.section5.item${item}` })}</span>
                ))}
              </div>
            </div>
             <Slider {...settings} className={styles.slider}>
              {["201", "202", "203", "204", "205"].map(item => (
                  <div key={item} className={styles.item}>
                    <img
                      className={styles.image}
                      src={`/images/influencer/${item}.jpeg`}
                    />
                </div>
                ))}
            </Slider>
          </div>
          </FadeInSection>

          <FadeInSection>
          <div className={styles.section2}>
            <div className={styles.section1Inner}>
              <h2 className={styles.s2Title}>{formatMessage({ id: "virtual-influence.section6.title" })}</h2>
              <div className={styles.s1List}>
                {(locale === "ru" ? [1,2,3,4,5,6,7,8,9,10] : [1,2,3,4,5,6]).map(item => (
                <span key={item} className={styles.s1Item}>{formatMessage({ id: `virtual-influence.section6.item${item}` })}</span>
                ))}
              </div>
            </div>
          </div>
          </FadeInSection>

          <FadeInSection>
          <div className={styles.section1}>
            <div className={styles.section1Inner}>
              <h2 className={styles.s1Title}>{formatMessage({ id: "virtual-influence.section7.title" })}</h2>
              <div className={styles.s1List}>
                <span className={styles.s1Item}>{formatMessage({ id: `virtual-influence.section7.item1` })}</span>
                <span className={styles.s1Item}>{formatMessage({ id: `virtual-influence.section7.item2` })}</span>
                <strong className={styles.s1Item}>{formatMessage({ id: `virtual-influence.section7.item3` })}</strong>
              </div>
            </div>
          </div>
          </FadeInSection>

          <FadeInSection>
          <div className={styles.section2}>
            <div className={styles.section1Inner}>
              <h2 className={styles.s2Title}>{formatMessage({ id: "virtual-influence.section8.title" })}</h2>
              <div className={styles.subSection}>
                <h4 className={styles.s2SubTitle}>✅ {formatMessage({ id: "virtual-influence.section8.var1_title" })}:</h4>
                <div className={styles.smallList}>
                  {[1,2,3,4].map((item, key) => (
                  <span key={item} className={styles.smallListItem} dangerouslySetInnerHTML={{
                    __html: formatMessage({ id: `virtual-influence.section8.var1_item${key + 1}` }),
                  }} />
                  ))}
                </div>
              </div>
              <div className={styles.subSection}>
                <h4 className={styles.s2SubTitle}>❌ {formatMessage({ id: "virtual-influence.section8.var2_title" })}:</h4>
                <div className={styles.smallList}>
                  {[1,2].map((item, key) => (
                  <span key={item} className={styles.smallListItem}>{formatMessage({ id: `virtual-influence.section8.var2_item${key + 1}` })}</span>
                  ))}
                </div>
              </div>

              <div className={styles.subSection}>
                <div className={styles.smallList}>
                  <span className={styles.s1Item}>{formatMessage({ id: `virtual-influence.section8.text1` })}</span>
                  <span className={styles.s1Item}>{formatMessage({ id: `virtual-influence.section8.text2` })}</span>
                </div>
              </div>
            </div>
          </div>
          </FadeInSection>


          <FadeInSection>
          <div className={styles.section1}>
            <div className={styles.section1Inner}>
              <h2 className={styles.s1Title}>{formatMessage({ id: "virtual-influence.section9.title" })}</h2>

              <div className={styles.price}>
                <div>{formatMessage({ id: "virtual-influence.price.title" })}:</div>
                <div className={styles.priceInner}>
                  <div className={styles.priceValue}>
                    <PriceWithUnit value={price} />
                  </div>
                  <div className={styles.basePrice}>
                    <PriceWithUnit value={oldPrice} />
                  </div>
                </div>
              </div>
              
              <div className={styles.links}>
                <Link className={styles.link} href={purchaseLink} target="_blank">
                  {formatMessage({ id: "common.buy_now" })}
                </Link>

                <Link
                  className={styles.link}
                  href={boostyLink}
                  target="_blank"
                >
                  {formatMessage({ id: "common.buy_now_russia" })}
                </Link>
              </div>

              <div className={styles.s1List}>
                <span className={styles.s1Item}>{formatMessage({ id: `virtual-influence.section9.text1` })}</span>
              </div>
            </div>
          </div>
          </FadeInSection>


          <FadeInSection>
          <div className={styles.section2}>
            <Slider {...settings} className={styles.slider}>
              {["301", "302", "303", "304", "305"].map(item => (
                  <div key={item} className={styles.item}>
                    <img
                      className={styles.image}
                      src={`/images/influencer/${item}.jpeg`}
                    />
                </div>
                ))}
            </Slider>
          </div>
          </FadeInSection>


          <FadeInSection>
          <div className={styles.section1}>
          <div className={styles.section1Inner}>
            <h2 className={styles.s1Title}>{formatMessage({ id: "virtual-influence.section10.title" })}</h2>
            <FAQBase
              items={[1, 2, 3, 4, 5].map((key) => ({
                title: formatMessage({ id: `virtual-influence.section10.question${key}` }),
                text: formatMessage({ id: `virtual-influence.section10.answer${key}` }),
              }))}
            />
            </div>
          </div>
          </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
