import Link from "next/link";
import styles from "../styles/Component.module.scss";
import BMCwidget from "./BMCwidget";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

function NavLink({ text, link }) {
  return (
    <Link href={link} passHref>
      <a>{text}</a>
    </Link>
  );
}

function Links() {
  return (
    <>
      <NavLink text="Home" link="\" />
      <NavLink text="Services" link="\" />
      <NavLink text="About" link="\" />
    </>
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

function Menu() {
  const [showMenu, setshowMenu] = useState(false);
  const displayStyle = { display: "flex" };
  const hiddenStyle = { display: "none" };
  return (
    <>
      <div className={styles.menu}>
        <Image
          src="/icons/menu.svg"
          width="24"
          height="24"
          alt="menu"
          onClick={() => setshowMenu(!showMenu)}
        />
      </div>

      <nav className={styles.nav} style={showMenu ? displayStyle : hiddenStyle}>
        <Links />
      </nav>
    </>
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
        <Menu />
        <nav className={styles.nav}>
          <Links />
        </nav>
      </div>
    </>
  );
}
