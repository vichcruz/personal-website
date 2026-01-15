import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import styles from "./Switch.module.css";

type SwitchProps = {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  uncheckedIconURL?: string;
  checkedIconURL?: string;
};

function Switch({
  checked,
  setChecked,
  uncheckedIconURL,
  checkedIconURL,
}: SwitchProps) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      className={styles.container}
      onClick={() => setChecked(!checked)}
    >
      <span className={`${styles.dot} ${checked ? styles.placeEnd : ""}`}>
        {checked
          ? checkedIconURL && (
              <Image
                src={checkedIconURL}
                alt="Checked Icon"
                height={48}
                width={48}
              />
            )
          : uncheckedIconURL && (
              <Image
                src={uncheckedIconURL}
                alt="Unchecked Icon"
                height={48}
                width={48}
              />
            )}
      </span>
    </button>
  );
}

export default Switch;
