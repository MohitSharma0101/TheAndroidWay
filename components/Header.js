import Link from "next/link";
import { ArrowIcon } from "../components/BlogCard";
import Logo from "../public/logo";
import styles from "../styles/Home.module.css";
import BMCwidget from "./BMCwidget";
import Head from "next/head";

function NavLink({ text, link }) {
  return (
    <Link href={link} passHref>
      <a>{text}</a>
    </Link>
  );
}

function ConnectButton() {
  return (
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Connect
      <ArrowIcon />
    </button>
  );
}


function Title(){
  return(
    <div className={styles.title}>
      <Logo />
      <Link href="/" passHref>
        <h1>The Android Way</h1>
      </Link>
    </div>
  )
}

export default function Header() {
  return (
    <>
    <Head>
       <BMCwidget/>
      </Head>
      <div className={styles.header}>
     <Title />
      <nav className={styles.nav}>
        <NavLink text="Home" link="\" />
        <NavLink text="Services" link="\" />
        <NavLink text="About" link="\" />
      </nav>
    </div>
    </>
  );
}
