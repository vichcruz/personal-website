import pageStyles from "@/app/page.module.css";
import styles from "./TechStackSection.module.css";

function TechStackSection() {
  return (
    <section id="tech-stack" className={pageStyles.section}>
      <div className={styles.skills}>
        <h2 className={styles.sectionTitle}>Tech Stack</h2>
      </div>
    </section>
  );
}

export default TechStackSection;
