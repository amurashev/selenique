"use client";

import React from "react";
import { useIntl } from "react-intl";

import { PromptBook } from "@/components/types";

import styles from "./styles.module.css";

const ListItem = ({ text }: { text: string }) => {
  return (
    <li className={styles.item}>
      <div
        className={styles.text}
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </li>
  );
};


/*
🎯 Corporate Executives & C-Suite
Need polished, authoritative headshots that reflect leadership status. These prompts deliver that commanding presence.

💼 Business Owners & Entrepreneurs
Building personal brands that inspire trust and confidence. Professional imagery is non-negotiable.

👔 Startup Founders & Tech Leaders
Present yourself as a serious business leader without the serious photography budget.

📊 LinkedIn Professionals
Tired of outdated, mediocre profile photos? Generate fresh variations whenever your look changes.

🏢 HR & Recruitment Teams
Need cohesive executive team photos without coordinating expensive photo sessions.

💻 Freelancers & Consultants
Present yourself as a premium professional without the premium price tag.

🌟 Personal Branding Enthusiasts
Create a portfolio of professional imagery for speaking engagements, podcasts, and media appearances.

🎤 Speakers, Podcasters & Media Personalities
Build a complete portfolio of professional imagery for speaking engagements, podcast appearances, and media kits.



🌟 Lifestyle Bloggers & Influencers
Build a cohesive aesthetic and never worry about sourcing expensive lifestyle photography again.

👩‍💻 Content Creators & Social Media Managers
Never run out of fresh, on-brand content. Generate unlimited variations for Instagram, LinkedIn, blogs, and websites.

💼 Corporate Women & Executives
Tired of stiff, corporate stock photos? Generate dynamic, authentic professional imagery that reflects your personality and professionalism.

🎯 Female Entrepreneurs & Business Owners
Need authentic, aspirational imagery that builds trust and establishes you as a serious business leader in your field.






📱 Instagram Influencers & Content Creators
Build a stunning feed that tells a visual story without requiring your face in every post. Aesthetic is everything.
💼 Lifestyle & Wellness Bloggers
Create a cohesive, professional blog aesthetic that showcases your expertise and lifestyle philosophy.
👗 Fashion & Style Brands
Generate endless styling inspiration, product photography, and fashion flat lays that capture your aesthetic.☕ Café, Coffee & Beverage Businesses
Create authentic, inviting atmosphere photography that draws customers in and builds brand loyalty.
🏠 Interior Design & Home Decor Creators
Showcase design expertise through stunning, styled room photography and home aesthetic inspiration.
✍️ Authors, Podcasters & Thought Leaders
Build a sophisticated personal brand aesthetic while maintaining privacy and focus on your message, not your appearance.
💻 SaaS, Digital Products & Online Businesses
Create professional, lifestyle-integrated marketing imagery that positions your brand as premium and aspirational.
🌟 Personal Coaches & Consultants
Build trust and authority through beautiful, professional brand aesthetics without requiring your face in marketing materials.
💎 Luxury & Premium Brands
Generate high-end, sophisticated aesthetic imagery that reinforces premium positioning and brand values.
🎨 Artists & Creative Professionals
Showcase your creative process, inspiration, and artistic aesthetic through stunning faceless photography.



💎 Luxury Lifestyle Influencers & Content Creators
Build a sophisticated, aspirational feed that attracts high-net-worth audiences and premium brand partnerships.
👗 High-End Fashion & Luxury Brand Marketing
Generate premium lifestyle imagery that reinforces luxury positioning and appeals to affluent consumers.
🏖️ Travel Influencers & Luxury Destination Content
Create aspirational travel content that showcases luxury experiences and exclusive destinations.
💼 Luxury Real Estate & Property Marketing
Showcase premium properties alongside lifestyle imagery that positions them as exclusive, prestigious investments.
🍾 Wine, Spirits & Fine Dining Brands
Generate sophisticated, refined imagery that elevates brand perception and attracts discerning consumers.
💎 Jewelry, Watches & Luxury Accessories Brands
Showcase premium products within elegant, aspirational lifestyle contexts that justify luxury pricing.
✍️ Authors, Coaches & Thought Leaders
Build a premium personal brand aesthetic that positions you as an exclusive, sophisticated authority.
🎨 Luxury Brands & Premium Service Providers
Generate cohesive, aspirational brand imagery that communicates exclusivity, refinement, and timeless elegance.
👑 Women Building Aspirational Luxury Personal Brands
Whether launching a luxury business, writing a premium brand book, or building thought leadership—establish your refined visual identity.


👗 Fashion Designers & Luxury Fashion Brands
Showcase new collections, seasonal lines, and designer pieces with editorial-quality imagery that positions your brand as premium and innovative.
💄 Makeup Artists & Beauty Influencers
Create portfolio pieces that demonstrate your artistry and attract high-end clients, collaborations, and brand partnerships.
📸 Fashion Photographers & Creative Directors
Build a diverse portfolio and test creative concepts without expensive location scouting, wardrobe rentals, or model bookings.
💼 Fashion Bloggers & Industry Influencers
Generate fresh, editorial-quality content that establishes you as a serious fashion voice and attracts luxury brand partnerships.
🛍️ E-Commerce & Fashion Retailers
Create professional product photography and fashion styling imagery that positions items as premium and desirable.
✍️ Fashion Publications & Editorial Projects
Generate editorial spreads, concept pieces, and visual stories for online publications, lookbooks, and creative projects.
🎨 Creative Directors & Art Directors
Develop mood boards, test creative concepts, and visualize editorial directions before expensive production shoots.
👑 Models & Talent Building Portfolios
Create diverse portfolio pieces that showcase range, style, and editorial presence without expensive test shoots.
🌟 Fashion Students & Emerging Designers
Build impressive portfolios and test design concepts without access to professional photography budgets.


💄 Beauty Influencers & Makeup Artists
Build a stunning portfolio that showcases your makeup artistry and attracts brand partnerships, collaborations, and client bookings.
🧴 Skincare Brands & Cosmetics Companies
Generate professional product photography and beauty campaign imagery that positions products as premium and effective.
💼 Beauty Bloggers & Content Creators
Create fresh, high-quality beauty content that establishes you as an authority and attracts sponsorships and collaborations.
🏥 Dermatology & Skincare Professionals
Showcase before-and-after transformations and skincare expertise with professional, photorealistic imagery.
💎 Luxury Beauty & Premium Cosmetics Brands
Generate aspirational beauty imagery that reinforces premium positioning and attracts discerning consumers.
✍️ Beauty Publications & Editorial Projects
Create editorial spreads, product features, and beauty stories for online publications and creative projects.
🎨 Makeup Educators & Beauty School Content
Develop instructional content and portfolio pieces that demonstrate makeup techniques and beauty education.
👑 Beauty Entrepreneurs & Product Creators
Launch beauty brands with professional product photography and marketing imagery without expensive photoshoots.
🌟 Beauty Retailers & E-Commerce Platforms
Create product photography and lifestyle beauty imagery that drives conversions and positions products as desirable.

*/



export default function Who({ data }: { data: PromptBook }) {
  const { formatMessage, locale } = useIntl();
  const { number } = data;

  const items = [];

  if (true) {
    items.push(
      ...[
        "linkedin",
        "business_owners",
        "freelancers",
        "remote_teams",
        "anyone_tired",
        "professional_branding",
      ]
    );
  }

  return (
    <div>
      <h3>Who Benefits Most</h3>

      <ul className={styles.list}>
        {items.map((item) => (
          <ListItem
            key={item}
            text={formatMessage({ id: `prompt_books.who.${item}` })}
          />
        ))}
      </ul>
    </div>
  );
}
