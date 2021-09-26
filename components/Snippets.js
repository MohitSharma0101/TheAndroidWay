import styles from "../styles/Snippets.module.scss";
import mdxStyle from "../styles/Mdx.module.scss";
import Header from "./Header";
import { useHighlightSyntax } from "./util";
import { inUrlFormat } from "./util";
import Image from "next/image";
import Link from "next/link";
import getAllSnippets from "../pages/snippets/snippetData";
import Head from 'next/head'

export default function Snippets({ meta, children }) {
  useHighlightSyntax();

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BackLink />
      <Title title={meta.title} />
      <div className={styles.content}>
        <div className={`${styles.contentMdx} ${mdxStyle.mdx}`}>{children}</div>
        <Index title={meta.title} />
      </div>
    </div>
  );
}

function Index({ title }) {
  return (
    <div className={styles.index}>
      <h1>Index📜</h1>
      {getIndex(title).map((item) => (
        <IndexLink key={item.title} title={item.title} />
      ))}
    </div>
  );
}

function IndexLink({ title }) {
  return (
    <Link href={`#${inUrlFormat(title)}`} passHref>
      <a>
        <div className={styles.bulletCircle} />
        <p>{title}</p>
      </a>
    </Link>
  );
}

function getIndex(title) {
  return getAllSnippets().filter((snippet) => {
    return snippet.tag.includes(title) && snippet.code != "";
  });
}

function Title({ title }) {
  return (
    <div className={styles.title}>
      <h1 id={title}>{title}</h1>
      <p>in kotlin.</p>
    </div>
  );
}

function BackLink() {
  return (
    <Link href="/snippets" passHref>
      <div className={styles.backLink}>
        <Image
          src="/icons/backArrow.svg"
          width="30"
          height="30"
          alt="Snippets"
        />
        <p>Back to All Snippets</p>
      </div>
    </Link>
  );
}
