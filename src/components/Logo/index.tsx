import styles from "./logo.module.css";
import LogoImg from "./icone.svg";
import Image from "next/image";
export const Logo = () => {
  return (
    <button className={styles.btn}>
      <Image src={LogoImg} alt="Logo" width={40} height={40} />
    </button>
  );
}

