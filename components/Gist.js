import styles from "../styles/Blog.module.scss";

export default function Gist({ url }) {
  return (
    <div className={styles.playerContainer}>
      <Gist
        style="background-color: #101010"
        url="https://gist.github.com/MohitSharma0101/fadf45dc43bebb2b18dbb4537c8a6471"
      />
    </div>
  );
}
