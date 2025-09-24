import { Metadata } from "next";

import Layout from "@/components/layout";
import PolicyPage from "@/components/pages/policy";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "",
};

export default function Policy() {
  return (
    <Layout locale="ru">
      <PolicyPage />
    </Layout>
  );
}
