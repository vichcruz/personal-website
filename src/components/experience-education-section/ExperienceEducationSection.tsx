import pageStyles from "@/app/page.module.css";
import { useState } from "react";
import styles from "./ExperienceEducationSection.module.css";

function ExperienceEducationSection() {
  const [currentView, setCurrentView] = useState<"education" | "experience">(
    "experience"
  );

  return (
    <section id="experience-education" className={pageStyles.section}>
      <div className={styles.experienceEducation}>
        <button
          onClick={() => {
            if (currentView === "education") {
              setCurrentView("experience");
            } else {
              setCurrentView("education");
            }
          }}
        >
          Switch to {currentView === "education" ? "experience" : "education"}
        </button>
        {currentView === "education" && <h2>Education</h2>}
        {currentView === "experience" && <h2>Experience</h2>}
      </div>
    </section>
  );
}

export default ExperienceEducationSection;
