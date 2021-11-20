import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Component.module.scss";

export default function PageTitle({ title, color, icon, desc ,backLink }) {
  const iconPath = `/icons/${icon}.svg`;
  return (
    <>
   <Head>
        <title>{title}</title>
        <link rel="icon" href={iconPath} />
      </Head>
    <div className={styles.pageTitle}>
      <Back link={backLink}/>
      <div className={styles.circle}>
        <Image src={iconPath} width="24" height="24" alt={title} />
      </div>
      <div style={{ alignSelf: "center" }}>
        <h1 style={{ color: color }}>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
    </>
  );
}

export function Back({link=""}){
  return (
    <Link href={`/${link}`} passHref >
        <Image src="/icons/backArrow.svg" width="30" height="30" alt="back" />
    </Link>
  )
}
