import { Metadata } from "next";

import Layout from "@/components/layout";
import PolicyPage from "@/components/pages/policy";
import OfertaServicePage from "@/components/pages/oferta_service";

export const metadata: Metadata = {
  title: "Договор оферты на оказания информационных услуг",
  description: "",
};

export default function Oferta() {
  return (
    <Layout locale="ru">
      <OfertaServicePage />
    </Layout>
  );
}
