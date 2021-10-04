import styles from "../../styles/Compose.module.scss";
import mdx from "../../styles/Mdx.module.scss";
import Head from "next/head";
import { useHighlightSyntax } from "../util";
import Header from "../Header";
import { getComposeUi } from "../../pages/compose/composeData";
import IconTitle from "../IconTitle";
import Image from "next/image";

export default function Compose({ meta, children, usage }) {
  const { title } = meta;
  const ui = getComposeUi(title);
  useHighlightSyntax();
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {/* <div className={styles.meta}>
        <h1>{title}</h1>
        <div className={styles.preview}>
          <h2>Preview🌈</h2>
          <Image
            className={styles.cardCover}
            src={`/compose/${ui.title}.${ui.type}`}
            alt="compose-ui-preview"
            width={720}
            height={400}
          />
        </div>
        <div className={mdx.mdx}>
          <h2>Usage🎯</h2>
          <pre className="language-javascript">
            <code>{usage}</code>
          </pre>
        </div>
      </div> */}
      <div className={styles.container}>
        <div className={mdx.mdx}>{children}</div>
      </div>
    </>
  );
}
