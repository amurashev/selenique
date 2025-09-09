import { Hero } from "@/components/pages/products/sections/hero";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

import styles from "./page.module.css";
import BeforeAfter from "@/components/pages/products/sections/before-after";
import WhoIsClient from "./sections/who-is-client";
import WhatYouGet from "./sections/what-you-get";
import Portfolio from "./sections/portfolio";
import Prices from "./sections/prices";
import PricesV2 from "./sections/prices2";
import Process from "./sections/process";
import FAQ from "./sections/faq";
import WhereUse from "./sections/where-use";
import Form from "./sections/form";
import WithModel from "./sections/with-model";
import Contacts from "./sections/contacts";
import { Catalog } from "./sections/catalog";


export default function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <main className={styles.main}>
        <BeforeAfter />
        <WithModel />
        <Catalog />
        <WhatYouGet />
        <WhoIsClient />
        <WhereUse />
        {/* <Portfolio /> */}
        <hr style={{
          backgroundColor: "#cccccc",
          borderWidth: 0,
          // borderColor: '#0000dd',
          height: '1px'
        }} />
        <Process />
        <PricesV2 />
        <FAQ />
        <Form type="ii_photo_common" />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
