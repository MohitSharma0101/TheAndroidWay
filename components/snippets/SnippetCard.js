import styles from "../../styles/Snippets.module.scss";
import Link from "next/link";
import { inUrlFormat } from "../util";
import { useHighlightSyntax } from "../util";

export default function SnippetCard({ code, title, desc, tag }) {
  useHighlightSyntax();
  return (
    <Link href={`/snippets/${inUrlFormat(tag)}#${inUrlFormat(title)}`} passHref>
      <div
        className={
          code != ""
            ? styles.snippetCard
            : `${styles.snippetCard} ${styles.listCard}`
        }
        style={code == "" ? { padding: "2.8rem" } : {}}
      >
        <h4 className={styles.tag}>{tag}</h4>
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className={styles.codeContainer}>
          <pre className="language-kotlin">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </Link>
  );
}

export function AllSnippetsCard({}) {}
