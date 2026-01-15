import { TechStack } from "@/utils/data";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import StackFooter from "./StackFooter";
import StackHeader from "./StackHeader";
import styles from "./TechStackSection.module.css";

function TechStackSection() {
  return (
    <>
      <Tooltip id={`stack-header-familiarity`} className={styles.tooltip} />
      <div id="tech-stack" className={styles.stackContainer}>
        <h1>My Tech Stack</h1>
        <div className={styles.carousel}>
          <div className={styles.stack}>
            {TechStack.map((tech) => (
              <div key={tech.name} className={styles.techCard}>
                <StackHeader tech={tech} />
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
                <StackFooter tech={tech} />
              </div>
            ))}
          </div>
          <div className={styles.stack} aria-hidden>
            {TechStack.map((tech) => (
              <div key={tech.name} className={styles.techCard}>
                <StackHeader tech={tech} />
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
                <StackFooter tech={tech} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStackSection;
