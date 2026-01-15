import { TechInfo } from "@/utils/data";
import styles from "../TechStackSection.module.css";

type StackFooterProps = {
  tech: TechInfo;
};

function TechCardFooter({ tech }: StackFooterProps) {
  const { name, description } = tech;
  return (
    <div className={styles.footer}>
      <h6>{name}</h6>
      <p className={styles.footerDescription}>{description}</p>
    </div>
  );
}

export default TechCardFooter;
