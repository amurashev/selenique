"use client";

import { useState } from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

import _creationsData from "./prompts/creations.json"
import _outfitData from "./prompts/outfit.json"
import _studioData from "./prompts/studio.json"
import _posesData from "./prompts/poses.json"

import styles from "./page.module.css";

import { homePage } from "@/constants/routes";
import ShortHeader from "@/components/layout/short-header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

import Categories from "./categories";

import { CREATION_LIST, OUTFIT_LIST, STUDIO_LIST, BACKGROUND_COLOR_LIST, POSE_LIST } from "./options";


export default function PromptCreationPage() {
  const { formatMessage, locale } = useIntl();
  const [selectedCreature, setSelectedCreature] = useState<string>(CREATION_LIST[0])
  const [selectedOutfit, setSelectedOutfit] = useState<string>(OUTFIT_LIST[0])
  const [selectedStudio, setSelectedStudio] = useState<string>(STUDIO_LIST[0])
  const [selectedColor, setSelectedColor] = useState<string>(BACKGROUND_COLOR_LIST[0])
  const [selectedOutfitColor, setSelectedOutfitColor] = useState<string>(BACKGROUND_COLOR_LIST[0])
  const [selectedPose, setSelectedPose] = useState<string>(POSE_LIST[0])

  const copyText = () => {
    const copyTextEl = document.getElementById("prompt");

    if (copyTextEl) {
      // eslint-disable @typescript-eslint/no-explicit-any
      // Select the text field
      (copyTextEl as any).select();
      (copyTextEl as any).setSelectionRange(0, 99999); // For mobile devices
      // Copy the text inside the text field
      navigator.clipboard.writeText((copyTextEl as any).value);
      // eslint-enable @typescript-eslint/no-explicit-any
    }
  }

  const creationsData: Record<string, string> = _creationsData
  const outfitData: Record<string, string> = _outfitData
  const posesData: Record<string, string> = _posesData

  // console.warn('prompts', {
  //   selectedCreature,
  //   selectedOutfit
  // })


  const mainPart = "High-end fashion catalog photography of a female model, close-up and full-body detail"

  const creatureType = `photo of a ${selectedCreature.replace('_', " ")}. ${creationsData[selectedCreature]}` 

  const studioParams = "Professional studio lighting, soft diffused key light, subtle rim light to separate the subject from the background, clean soft shadows. Shot on Phase One XF with a Schneider Kreuznach 80mm lens, f/8 aperture for sharp focus throughout, 8k resolution, RAW photo, highly detailed, commercial quality"

  const background = `Minimalist monochromatic studio background, clean seamless paper backdrop in neutral ${selectedColor} tone, high-end retouching, clean aesthetic` // soft gradient,
  // The background is a plain, pure ${selectedColor}, light, neutral studio setting.

  const outfit = (outfitData[selectedOutfit] as string).replaceAll('{outfit_color}', selectedOutfitColor)

  const pose = posesData[selectedPose]

  const value = `High-end fashion catalog ${creatureType}. Close-up and full-body detail. ${outfit}. ${pose}. ${studioParams}. ${background}.`

  return (
    <>
      <div className={styles.page}>
        <ShortHeader
          route={homePage}
          title=""
          // title={formatMessage({ id: "prompt_creation.title_short" })}
        />
        <main className={styles.main}>
          <div className={styles.item}>
            <h3>Type</h3>
            <Categories
              data={CREATION_LIST}
              selectedIndex={selectedCreature}
              onItemClick={(value) => setSelectedCreature(value)}
            />
          </div>

          <div className={styles.item}>
            <h3>Background Color</h3>
            <Categories
              data={BACKGROUND_COLOR_LIST}
              selectedIndex={selectedColor}
              onItemClick={(value) => setSelectedColor(value)}
            />
          </div>

          <div className={styles.item}>
            <h3>Outfit</h3>
            <Categories
              data={OUTFIT_LIST}
              selectedIndex={selectedOutfit}
              onItemClick={(value) => setSelectedOutfit(value)}
            />
          </div>

          <div className={styles.item}>
            <h3>Outfit Color</h3>
            <Categories
              data={BACKGROUND_COLOR_LIST}
              selectedIndex={selectedOutfitColor}
              onItemClick={(value) => setSelectedOutfitColor(value)}
            />
          </div>

          <div className={styles.item}>
            <h3>Pose</h3>
            <Categories
              data={POSE_LIST}
              selectedIndex={selectedPose}
              onItemClick={(value) => setSelectedPose(value)}
            />
          </div>

          <textarea id="prompt" value={value} className={styles.textarea} />

          <Button onClick={copyText}>Copy</Button>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
