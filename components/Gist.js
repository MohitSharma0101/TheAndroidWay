import styles from "../styles/Mdx.module.scss";

export default function Gist({ url }) {
  return (
    <div className={styles.playerContainer}>
      <script async src="https://gist.github.com/MohitSharma0101/fadf45dc43bebb2b18dbb4537c8a6471" />
    </div>
  );
}
