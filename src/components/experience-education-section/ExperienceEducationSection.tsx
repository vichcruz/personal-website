import { useState } from "react";
import Switch from "../switch/Switch";
import styles from "./ExperienceEducationSection.module.css";

function ExperienceEducationSection() {
  const [isEducation, setIsEducation] = useState<boolean>(false);

  return (
    <div id="experience-education" className={styles.container}>
      <Switch
        checked={isEducation}
        setChecked={setIsEducation}
        checkedIconURL="/icons/education.svg"
        uncheckedIconURL="/icons/work.svg"
      />
      {isEducation && <h2>Education</h2>}
      {!isEducation && <h2>Experience</h2>}
    </div>
  );
}

export default ExperienceEducationSection;
