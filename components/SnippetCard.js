import styles from "../styles/Snippets.module.scss";
import Link from 'next/link'

export default function SnippetCard({ code, title, desc, tag }) {
  return (
    <Link href= {`/snippets/${tag.toLowerCase().replace(/ /g,"-")}`} passHref>
    <div className={(code != "null") ? styles.snippetCard : `${styles.snippetCard} ${styles.listCard}`}>
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

export function AllSnippetsCard({}){

}
