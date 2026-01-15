"use client";

import ExperienceEducationSection from "@/components/experience-education-section/ExperienceEducationSection";
import GetToKnowMeSection from "@/components/get-to-know-me-section/GetToKnowMeSection";
import IntroductionSection from "@/components/introduction-section/IntroductionSection";
import TechStackSection from "@/components/tech-stack-section/TechStackSection";
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
