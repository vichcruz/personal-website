import pageStyles from "@/app/page.module.css";
import styles from "./ExperienceEducationSection.module.css";

function ExperienceEducationSection() {
  return (
    <section id="experience-education" className={pageStyles.section}>
      <div className={styles.experienceEducation}>
        <h2 className={styles.sectionTitle}>Experience & Education</h2>
      </div>
    </section>
  );
}

export default ExperienceEducationSection;
