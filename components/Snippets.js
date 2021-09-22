import styles from "../styles/Snippets.module.scss";
import mdxStyle from "../styles/Mdx.module.scss";
import Header from "./Header";
import {useEffect}  from "react";
import Prism from 'prismjs';


export default function Snippets({ meta, children }) {

  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);
  

  return (
    <div>
      <Header />
      <div className={styles.title}>
        <h1 id={meta.title} >{meta.title}</h1>
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
