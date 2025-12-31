"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  // Typewriter effect for subtitle
  useEffect(() => {
    const element = subtitleRef.current;
    if (!element) return;

    const subtitleText = "ull Stack Developer";
    let index = 0;
    element.textContent = "F";

    const interval = setInterval(() => {
      element.textContent += subtitleText[index];
      index++;

      if (index === subtitleText.length) {
        clearInterval(interval);
      }
    }, 75);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section id="introduction" className={styles.section}>
          <div className={styles.introduction}>
            <h1 className={styles.title}>Hi, I&rsquo;m Victor</h1>
            <h2 className={styles.subtitle} ref={subtitleRef}></h2>
            <p>(and soon to be 1st division volleyball player)</p>
          </div>
        </section>
        <section id="tech-stack" className={styles.section}>
          <div className={styles.skills}>
            <h2 className={styles.sectionTitle}>Tech Stack</h2>
          </div>
        </section>
        <div className={styles.navLinks}>
          <Link href="#introduction">Introduction</Link>
          <Link href="#tech-stack">Tech Stack</Link>
        </div>
      </main>
    </div>
  );
}
