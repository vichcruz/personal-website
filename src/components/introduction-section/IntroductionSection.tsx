import pageStyles from "@/app/page.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./IntroductionSection.module.css";

function IntroductionSection() {
  const titleRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typeText = (
      element: HTMLElement | null,
      text: string,
      speed: number,
      onComplete?: () => void
    ) => {
      if (!element) return;

      let index = 0;
      element.textContent = "";

      const interval = setInterval(() => {
        element.textContent += text[index];
        index++;

        if (index === text.length) {
          clearInterval(interval);
          onComplete?.();
        }
      }, speed);
    };

    // Type title first
    typeText(titleRef.current, "Hi, I'm Victor", 75, () => {
      // Type subtitle after title completes
      typeText(subtitleRef.current, "Full Stack Developer", 75);
    });
  }, []);

  return (
    <section id="introduction" className={pageStyles.section}>
      <div className={styles.introduction}>
        <Image
          src="/MDS_Digital_Victor_cropped.png"
          alt="Picture of me."
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <h1>
          <span ref={titleRef} />
        </h1>
        <h2 className={styles.subtitle}>
          <span ref={subtitleRef} />
        </h2>
      </div>
    </section>
  );
}

export default IntroductionSection;
