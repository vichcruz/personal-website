import { TechInfo } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import styles from "../TechStackSection.module.css";

type StackHeaderProps = {
  tech: TechInfo;
};

function TechCardHeader({ tech }: StackHeaderProps) {
  const { name, linkToDocs, familiarity } = tech;
  return (
    <div className={styles.header}>
      <Link href={linkToDocs} className={styles.linkToDocs}>
        <Image src={"/icons/info.svg"} alt="Info Icon" width={24} height={24} />
      </Link>
      <div
        className={styles.rating}
        data-tooltip-id={`stack-header-familiarity`}
        data-tooltip-content={`My current familiarity with ${name}.`}
      >
        <Image
          src="/icons/star_filled.svg"
          alt="Star Icon"
          width={16}
          height={16}
        />
        <span>{`${familiarity}/10`}</span>
      </div>
    </div>
  );
}

export default TechCardHeader;
