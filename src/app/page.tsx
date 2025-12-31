"use client";

import ExperienceEducationSection from "@/components/ExperienceEducationSection/ExperienceEducationSection";
import GetToKnowMeSection from "@/components/GetToKnowMeSection/GetToKnowMeSection";
import IntroductionSection from "@/components/IntroductionSection/IntroductionSection";
import TechStackSection from "@/components/TechStackSection/TechStackSection";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <IntroductionSection />
        <TechStackSection />
        <ExperienceEducationSection />
        <GetToKnowMeSection />
        <div className={styles.navLinks}>
          <Link href="#introduction">Introduction</Link>
          <Link href="#tech-stack">Tech Stack</Link>
          <Link href="#experience-education">Experience & Education</Link>
          <Link href="#get-to-know-me">Get to Know Me</Link>
        </div>
      </main>
    </div>
  );
}
