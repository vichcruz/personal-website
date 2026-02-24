import { TimelineItem } from "@/components/experience-education-section/data";
import styles from "@/components/experience-education-section/ExperienceEducationSection.module.css";
import TimestampCard from "@/components/experience-education-section/timestamp-card/TimestampCard";
import Image from "next/image";
import { Fragment } from "react";

type TimelineProps = {
  displayedContent: TimelineItem[];
  entireContent: TimelineItem[];
  showEntireContent: boolean;
  setShowEntireContent: (show: boolean) => void;
};

function Timeline({
  displayedContent,
  entireContent,
  showEntireContent,
  setShowEntireContent,
}: TimelineProps) {
  return (
    <>
      {displayedContent.map((edu, idx) => (
        <Fragment key={edu.id}>
          <TimestampCard key={edu.id} timeStampCardInfo={edu} />
          {idx < displayedContent.length - 1 && (
            <div
              style={{
                height: "50px",
                backgroundColor: "white",
                width: "1px",
              }}
            />
          )}
        </Fragment>
      ))}
      {!showEntireContent && entireContent.length > 2 && (
        <button
          onClick={() => setShowEntireContent(true)}
          className={styles.showMoreButton}
        >
          <Image src="/icons/add.svg" alt="Add Icon" width={32} height={32} />
        </button>
      )}
    </>
  );
}

export default Timeline;
