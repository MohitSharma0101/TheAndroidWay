import styles from "../styles/Snippets.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import Prism from "prismjs";
import {inUrlFormat} from "./util";

export default function SnippetCard({ code, title, desc, tag }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <Link
      href={`/snippets/${inUrlFormat(tag)}#${inUrlFormat(title) }`}
      passHref
    >
      <div
        className={
          code != ""
            ? styles.snippetCard
            : `${styles.snippetCard} ${styles.listCard}`
        }
        style={code == "" ? { padding: "4rem" } : {}}
      >
        <h4 className={styles.tag}>{tag}</h4>
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className={styles.codeContainer}>
          <pre className="language-javascript">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </Link>
  );
}

export function AllSnippetsCard({}) {}
