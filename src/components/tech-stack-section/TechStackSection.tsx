import { TechStack } from "@/utils/data";
import { Tooltip } from "react-tooltip";
import TechCard from "./TechCard/TechCard";
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
              <TechCard tech={tech} key={tech.name} />
            ))}
          </div>
          <div className={styles.stack} aria-hidden>
            {TechStack.map((tech) => (
              <TechCard tech={tech} key={tech.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStackSection;
