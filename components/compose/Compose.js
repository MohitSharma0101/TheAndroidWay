import styles from "../../styles/Compose.module.scss";
import Head from "next/head";

export default function Compose({ meta, children }) {
  const { title } = meta;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
          <h1>{title}</h1>
      </div>
    </>
  );
}
