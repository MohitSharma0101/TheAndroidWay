import Link from "next/link";
import styles from "../styles/Component.module.scss";
import BMCwidget from "./BMCwidget";
import Head from "next/head";
import Image from 'next/image'

function NavLink({ text, link }) {
  return (
    <Link href={link} passHref>
      <a>{text}</a>
    </Link>
  );
}

function Logo() {
  return (
      <Link href="/" passHref>
        <div className={styles.logo}>
        <Image src="/logo.svg" width="250" height="35" alt="The Android Way" />
        </div>
      </Link>
  );
}

export default function Header() {
  return (
    <>
      <Head>
        <BMCwidget />
      </Head>
      <div className={styles.header}>
        <Logo />
        <nav className={styles.nav}>
          <NavLink text="Home" link="\" />
          <NavLink text="Services" link="\" />
          <NavLink text="About" link="\" />
        </nav>
      </div>
    </>
  );
}
