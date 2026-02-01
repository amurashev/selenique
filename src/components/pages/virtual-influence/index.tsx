"use client";

import { useIntl } from "react-intl";

import styles from "./page.module.css";

import Footer from "@/components/layout/footer";
import ShortHeader from "@/components/layout/short-header";
import FAQBase from "@/components/sections/faq";

import { PROMTBOOKS } from "@/constants/promptbooks";
import { guidesListPageRoute } from "@/constants/routes";

import Hero from "./hero";
import Price from "./price";
import { SectionColor, SectionGray } from "./sections";
import ImagesSlider from "./images-slider";

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

        <SectionGray title={formatMessage({ id: "virtual-influence.section1.title" })}>
          <div className={styles.itemsList}>
            {[1,2,3,4,5].map(item => (
              <span key={item} className={styles.itemsListItem} dangerouslySetInnerHTML={{
                __html: formatMessage({ id: `virtual-influence.section1.item${item}` }),
              }} />
            ))}
          </div>
          <div className={styles.extraMarginTop}>
          <ImagesSlider images={["101", "102", "103", "104", "105"]} />
          </div>
        </SectionGray>

        <SectionColor title={formatMessage({ id: "virtual-influence.section2.title" })}>
          <div className={styles.getList}>
            {[1,2,3,4,5,6].map(item => (
              <div key={item} className={styles.compareItem}>
                <h4 className={styles.compareTitle}>📦 {formatMessage({ id: `virtual-influence.section2.item${item}.title` })}:</h4>
                <p className={styles.compareText} dangerouslySetInnerHTML={{
                    __html: formatMessage({ id: `virtual-influence.section2.item${item}.text` }),
                  }} />
              </div>
            ))}
          </div>
        </SectionColor>

        <SectionGray title={formatMessage({ id: "virtual-influence.section3.title" })}>
          <div className={styles.itemsList}>
            {[1,2,3,4].map(item => (
              <span key={item} className={styles.itemsListItem}>
                <CheckMark /> {formatMessage({ id: `virtual-influence.section3.item${item}` })}
              </span>
            ))}
          </div>
        </SectionGray>

        <SectionColor title={formatMessage({ id: "virtual-influence.section4.title" })}>
          <div className={styles.roadMap}>
          <div className={styles.compareItem}>
            <h4 className={styles.compareTitle}>{formatMessage({ id: "virtual-influence.section4.list1_title" })}:</h4>
            <ul className={styles.roadMapSubList}>
              {["1️⃣", "2️⃣", "3️⃣"].map((item, key) => (
              <li key={item}>{item} {formatMessage({ id: `virtual-influence.section4.list1_item${key + 1}` })}</li>
              ))}
            </ul>
          </div>

          <div className={styles.compareItem}>
            <h4 className={styles.compareTitle}>{formatMessage({ id: "virtual-influence.section4.list2_title" })}:</h4>
            <ul className={styles.roadMapSubList}>
              {["1️⃣", "2️⃣"].map((item, key) => (
              <li key={item}>{item} {formatMessage({ id: `virtual-influence.section4.list2_item${key + 1}` })}</li>
              ))}
            </ul>
          </div>

          <div className={styles.compareItem}>
            <h4 className={styles.compareTitle}>{formatMessage({ id: "virtual-influence.section4.list3_title" })}:</h4>
            <ul className={styles.roadMapSubList}>
              {["1️⃣", "2️⃣"].map((item, key) => (
              <li key={item}>{item} {formatMessage({ id: `virtual-influence.section4.list3_item${key + 1}` })}</li>
              ))}
            </ul>
          </div>
          </div>
        </SectionColor>

        <SectionGray title={formatMessage({ id: "virtual-influence.section5.title" })}>
          <div className={styles.itemsList}>
            {[1,2,3,4,5,6].map(item => (
            <span key={item} className={styles.itemsListItem}>{item === 6 ? "🎁" : "📖"} {formatMessage({ id: `virtual-influence.section5.item${item}` })}</span>
            ))}
          </div>

          <div className={styles.extraMarginTop}>
          <ImagesSlider images={["201", "202", "203", "204", "205"]} />
          </div>
        </SectionGray>
            
        <SectionColor title={formatMessage({ id: "virtual-influence.section6.title" })}>
          <div className={styles.whyWorksList}>
            <div className={styles.compareItem}>
              <h4 className={styles.compareTitle}>❌ {formatMessage({ id: "virtual-influence.section6.item1.title" })}:</h4>
              <ul className={styles.compareSubList}>
                {[1,2,3,4].map((item, key) => (
                <li key={item} dangerouslySetInnerHTML={{
                    __html: formatMessage({ id: `virtual-influence.section6.item1.text${key + 1}` }),
                  }} />
                ))}
              </ul>
            </div>
            <div className={styles.compareItem}>
              <h4 className={styles.compareTitle}>✅ {formatMessage({ id: "virtual-influence.section6.item2.title" })}:</h4>
              <ul className={styles.compareSubList}>
                {[1,2,3,4].map((item, key) => (
                <li key={item} dangerouslySetInnerHTML={{
                  __html: formatMessage({ id: `virtual-influence.section6.item2.text${key + 1}` }),
                }} />
                ))}
              </ul>
            </div>
          </div>
        </SectionColor>

        <SectionGray title={formatMessage({ id: "virtual-influence.section7.title" })}>
          <div className={styles.itemsList}>
            <span className={styles.itemsListItem}>{formatMessage({ id: `virtual-influence.section7.item1` })}</span>
            <span className={styles.itemsListItem}>{formatMessage({ id: `virtual-influence.section7.item2` })}</span>
            <span className={styles.itemsListItemEmp}>{formatMessage({ id: `virtual-influence.section7.item3` })}</span>
          </div>
        </SectionGray>

        <SectionColor title={formatMessage({ id: "virtual-influence.section8.title" })}>
          <div className={styles.optionsList}>
            <div className={styles.compareItem}>
              <h4 className={styles.compareTitle}>❌ {formatMessage({ id: "virtual-influence.section8.var2_title" })}:</h4>
              <ul className={styles.compareSubList}>
                {[1,2].map((item, key) => (
                <li key={item} dangerouslySetInnerHTML={{
                    __html: formatMessage({ id: `virtual-influence.section8.var2_item${key + 1}` }),
                  }} />
                ))}
              </ul>
            </div>
            <div className={styles.compareItem}>
              <h4 className={styles.compareTitle}>✅ {formatMessage({ id: "virtual-influence.section8.var1_title" })}:</h4>
              <ul className={styles.compareSubList}>
                {[1,2,3].map((item, key) => (
                <li key={item} dangerouslySetInnerHTML={{
                  __html: formatMessage({ id: `virtual-influence.section8.var1_item${key + 1}` }),
                }} />
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.subSection}>
            <p className={styles.temp} dangerouslySetInnerHTML={{
              __html: formatMessage({ id: `virtual-influence.section8.text1` }),
            }} />
            <p className={styles.temp} dangerouslySetInnerHTML={{
              __html: formatMessage({ id: `virtual-influence.section8.text2` }),
            }} />
          </div>
        </SectionColor>


        <SectionGray title={formatMessage({ id: "virtual-influence.section9.title" })}>
          <Price boostyLink={boostyLink} purchaseLink={purchaseLink} />
        </SectionGray>


        <SectionColor title="">
          <ImagesSlider images={["301", "302", "303", "304", "305"]} />
        </SectionColor>


        <SectionGray title={formatMessage({ id: "virtual-influence.section10.title" })}>
          <FAQBase
            items={[1, 2, 3, 4, 5].map((key) => ({
              title: formatMessage({ id: `virtual-influence.section10.question${key}` }),
              text: formatMessage({ id: `virtual-influence.section10.answer${key}` }),
            }))}
          />
        </SectionGray>
      </main>
      <Footer />
    </div>
  );
}
