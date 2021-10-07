import styles from "../styles/Component.module.scss";

export default function Loder() {
  return (
    <div className={styles.loadingBarContainer}>
      <div className={styles.loadingBar} />
    </div>
  );
}
