import { Metadata } from "next";

import IIModelPage from "@/components/pages/ii-model";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title:
    "A unique virtual model for your catalog",
  description:
    "One persona for all collections. Consistent style, recognition, and fast series for Ebay, Amazon, Etsy and advertising.",
};

export default async function IIModelPageEntry() {
  return (
    <Layout locale="en">
      <IIModelPage />
    </Layout>
  );
}
