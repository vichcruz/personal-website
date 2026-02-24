"use client";

import ExperienceEducationSection from "@/components/experience-education-section/ExperienceEducationSection";
import GetToKnowMeSection from "@/components/get-to-know-me-section/GetToKnowMeSection";
import IntroductionSection from "@/components/introduction-section/IntroductionSection";
import TechStackSection from "@/components/tech-stack-section/TechStackSection";
import Link from "next/link";
import type { MouseEvent } from "react";
import styles from "./page.module.css";

export default function Home() {
  const scrollToSection =
    (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      const el = document.getElementById(id);
      if (!el) return;

      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <IntroductionSection />
        <TechStackSection />
        <ExperienceEducationSection />
        <GetToKnowMeSection />
        <div className={styles.navLinks}>
          <Link href="#tech-stack" onClick={scrollToSection("tech-stack")}>
            Tech Stack
          </Link>
          <Link
            href="#experience-education"
            onClick={scrollToSection("experience-education")}
          >
            Experience & Education
          </Link>
          <Link
            href="#get-to-know-me"
            onClick={scrollToSection("get-to-know-me")}
          >
            Get to Know Me
          </Link>
        </div>
      </main>
    </div>
  );
}
