import TechCardFooter from "@/components/TechStackSection/TechCard/TechCardFooter";
import TechCardHeader from "@/components/TechStackSection/TechCard/TechCardHeader";
import { TechInfo } from "@/utils/data";
import Image from "next/image";
import styles from "../TechStackSection.module.css";

type TechCardProps = {
  tech: TechInfo;
};
function TechCard({ tech }: TechCardProps) {
  const { name } = tech;
  return (
    <div key={name} className={styles.techCard}>
      <TechCardHeader tech={tech} />
      <Image
        src={`${name}Logo.svg`}
        alt={`Card displaying technology ${name}`}
        width={150}
        height={150}
      />
      <Image
        src={`${name}Logo.svg`}
        alt={`Background image for technology ${name} used for animation`}
        width={150}
        height={150}
        className={styles.bgBlurAnimate}
      />
      <TechCardFooter tech={tech} />
    </div>
  );
}

export default TechCard;
