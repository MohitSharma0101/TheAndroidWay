import styles from "../../styles/Compose.module.scss";
import Head from "next/head";
import { getComposeUi } from "../../pages/compose/composeData";
import MDX from "../MDX";

export default function Compose({ meta, children, usage }) {
  const { title } = meta;
  const ui = getComposeUi(title);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.container}>
        <MDX>{children}</MDX>
      </div>
    </>
  );
}
