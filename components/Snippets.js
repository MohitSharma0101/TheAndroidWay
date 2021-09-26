import styles from "../styles/Snippets.module.scss";
import mdxStyle from "../styles/Mdx.module.scss";
import Header from "./Header";
import {useEffect}  from "react";
import Prism from 'prismjs';
import Image from 'next/image';
import Link from "next/link";
import getAllSnippets from "../pages/snippets/snippetData";



export default function Snippets({ meta, children }) {

  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);
  

  return (
    <div>
      <Header />
      <div className={styles.backLink}>
      <Image src="/icons/backArrow.svg" width="30" height="30" alt="Snippets" />
      <Link href="/snippets" passHref>
      <p>Back to All Snippets</p>
      </Link>
      </div>
      <div className={styles.title}>
        <h1 id={meta.title} >{meta.title}</h1>
        <p>in kotlin.</p>
      </div>
      <div className={styles.content}>
        <div className={`${styles.contentMdx} ${mdxStyle.mdx}`}>
          {children}
        </div>
        <div className={styles.index}>
        <h1>Index📜</h1>
        {
          getIndex(meta.title).map((item) => (
            <IndexLink key={item.title} title={item.title} />
           ))
          }
      </div>
      </div>
    </div>
  );
}

function IndexLink({title}){
  return (
    <Link href={`#${title.toLowerCase().replace(/ /g, "-")}`} passHref>
      <a>
      <div className={styles.bulletCircle}/>
      <p>{title}</p>
      </a>
    </Link>
  )
}

function getIndex(title){
  return getAllSnippets().filter((snippet) => {
    return (
        snippet.tag.includes(title) && snippet.code != ""
    );
  })
}
