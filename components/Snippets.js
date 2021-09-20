import styles from "../styles/Snippets.module.scss";
import mdxStyle from "../styles/Mdx.module.scss";
import Header from "./Header";

export default function Snippets({ meta, children }) {
  return (
    <div>
      <Header />
      <div className={styles.title}>
        <h1>{meta.title}</h1>
        <p>{meta.desc}</p>
      </div>
      <div className={styles.content}>
        <div className={mdxStyle.mdx}>
          {children}
        </div>
      </div>
    </div>
  );
}
