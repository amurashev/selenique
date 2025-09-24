import { Metadata } from "next";

import Layout from "@/components/layout";
import OfertaTeachingPage from "@/components/pages/oferta_teaching";

export const metadata: Metadata = {
  title: "Договор оферты на оказания услуг по обучению",
  description: "",
};

export default function Oferta() {
  return (
    <Layout locale="ru">
      <OfertaTeachingPage />
    </Layout>
  );
}
