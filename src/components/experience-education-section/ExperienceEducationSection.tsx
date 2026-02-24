import { useState } from "react";
import Switch from "../switch/Switch";
import { CurrentEducation, CurrentExperience } from "./data";
import styles from "./ExperienceEducationSection.module.css";
import Timeline from "./Timeline";

function ExperienceEducationSection() {
  const [isEducation, setIsEducation] = useState<boolean>(false);
  const [showAllExperience, setShowAllExperience] = useState<boolean>(false);
  const [showAllEducation, setShowAllEducation] = useState<boolean>(false);

  const sortedExperience = [...CurrentExperience].sort((a, b) => b.id - a.id);
  const displayedExperience = showAllExperience
    ? sortedExperience
    : sortedExperience.slice(0, 2);

  const sortedEducation = [...CurrentEducation].sort((a, b) => b.id - a.id);
  const displayedEducation = showAllEducation
    ? sortedEducation
    : sortedEducation.slice(0, 2);

  return (
    <div id="experience-education" className={styles.container}>
      <Switch
        checked={isEducation}
        setChecked={setIsEducation}
        checkedIconURL="/icons/education.svg"
        uncheckedIconURL="/icons/work.svg"
        className={styles.switch}
      />
      <div className={styles.content}>
        {isEducation && (
          <Timeline
            displayedContent={displayedEducation}
            entireContent={CurrentEducation}
            showEntireContent={showAllEducation}
            setShowEntireContent={setShowAllEducation}
          />
        )}
        {!isEducation && (
          <Timeline
            displayedContent={displayedExperience}
            entireContent={CurrentExperience}
            showEntireContent={showAllExperience}
            setShowEntireContent={setShowAllExperience}
          />
        )}
      </div>
    </div>
  );
}

export default ExperienceEducationSection;
