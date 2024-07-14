import styles from './style.module.css'
export const Menu = () => {
  return (
    <div className={styles.radioInputs}>
      <label className={styles.radio}>
        <input type="radio" name="radio" defaultChecked={true} />
        <span className={styles.name}>Home</span>
      </label>
      <label className={styles.radio}>
        <input type="radio" name="radio" />
        <span className={styles.name}>Produtos</span>
      </label>
      <label className={styles.radio}>
        <input type="radio" name="radio" />
        <span className={styles.name}>Sobre</span>
      </label>
    </div>
  );
}
