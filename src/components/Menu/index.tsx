import Link from 'next/link';
import styles from './menu.module.css'

export const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <Link className={styles.menuItem} href="/">
        <label>
          <span className={styles.menuName}>Home</span>
        </label>
      </Link>
      <Link className={styles.menuItem} href="/products">
        <label>
          <span className={styles.menuName}>Produtos</span>
        </label>
      </Link>
      <Link className={styles.menuItem} href="/about">
        <label>
          <span className={styles.menuName}>Sobre</span>
        </label>
      </Link>
    </div>);
}
