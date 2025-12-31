"use client";

import IntroductionSection from "@/components/IntroductionSection/IntroductionSection";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <IntroductionSection />
        <section id="tech-stack" className={styles.section}>
          <div className={styles.skills}>
            <h2 className={styles.sectionTitle}>Tech Stack</h2>
          </div>
        </section>
        <section id="experience-education" className={styles.section}>
          <div className={styles.experienceEducation}>
            <h2 className={styles.sectionTitle}>Experience & Education</h2>
          </div>
        </section>
        <section id="get-to-know-me" className={styles.section}>
          <div className={styles.getToKnowMe}>
            <h2 className={styles.sectionTitle}>Get to Know Me</h2>
          </div>
        </section>
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
