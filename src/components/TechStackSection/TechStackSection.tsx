import { TechStack } from "@/utils/data";
import Image from "next/image";
import styles from "./TechStackSection.module.css";

function TechStackSection() {
  return (
    <div id="tech-stack" className={styles.stackContainer}>
      <h1>My Tech Stack</h1>
      <div className={styles.carousel}>
        <div className={styles.stack}>
          {TechStack.map((tech) => (
            <div key={tech.name} className={styles.techCard}>
              <div>This is how well I can do it</div>
              <Image
                src={`${tech.name}Logo.svg`}
                alt={`Card displaying technology ${tech.name}`}
                width={150}
                height={150}
              />
              <Image
                src={`${tech.name}Logo.svg`}
                alt={`Background image for technology ${tech.name} used for animation`}
                width={150}
                height={150}
                className={styles.bgBlurAnimate}
              />
              <div>{tech.description}</div>
            </div>
          ))}
        </div>
        <div className={styles.stack} aria-hidden>
          {TechStack.map((tech) => (
            <div key={tech.name} className={styles.techCard}>
              <div>This is how well I can do it</div>
              <Image
                src={`${tech.name}Logo.svg`}
                alt={`Card displaying technology ${tech.name}`}
                width={150}
                height={150}
              />
              <Image
                src={`${tech.name}Logo.svg`}
                alt={`Background image for technology ${tech.name} used for animation`}
                width={150}
                height={150}
                className={styles.bgBlurAnimate}
              />
              <div>{tech.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStackSection;
