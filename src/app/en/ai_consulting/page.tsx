import { Metadata } from "next";

import ConsultationsPage from "@/components/pages/consultations";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "AI consultations for brands",
  description:
    "We’ll analyze your product, select ideas, compose clear text prompts for the neural network, and show how to get the right shots for marketplaces and ads — without extra costs",
};

export default async function ConsultationsPageEntry() {
  return (
    <Layout locale="en">
      <ConsultationsPage />
    </Layout>
  );
}
