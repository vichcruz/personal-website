import HorizontalDivider from "@/components/horizontal-divider/HorizontalDivider";

import { TimelineItem } from "../data";
import styles from "./TimestampCard.module.css";

type TimestampCardProps = {
  timeStampCardInfo: TimelineItem;
};

function TimestampCard({ timeStampCardInfo }: TimestampCardProps) {
  const {
    roleTitle: degree,
    orgName: institution,
    description,
    fromTo,
    relevantSkills,
  } = timeStampCardInfo;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h6>{degree}</h6>
          <p>{institution}</p>
          <p className={styles.smallFont}>{fromTo}</p>
        </div>
        <HorizontalDivider />
        <p className={styles.midFont}>{description}</p>
        {relevantSkills && (
          <p className={styles.smallFont}>{relevantSkills.join(", ")}</p>
        )}
      </div>
    </div>
  );
}

export default TimestampCard;
