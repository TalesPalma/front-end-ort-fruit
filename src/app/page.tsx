import { Logo } from "@/components/Logo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Logo />
    </main>
  );
}
