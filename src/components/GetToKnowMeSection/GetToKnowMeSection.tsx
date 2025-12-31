import pageStyles from "@/app/page.module.css";
import styles from "./GetToKnowMeSection.module.css";

function GetToKnowMeSection() {
  return (
    <section id="get-to-know-me" className={pageStyles.section}>
      <div className={styles.getToKnowMe}>
        <h2 className={styles.sectionTitle}>Get to Know Me</h2>
      </div>
    </section>
  );
}

export default GetToKnowMeSection;
