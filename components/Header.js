import Link from "next/link";
import { ArrowIcon } from "../components/BlogCard";
import Logo from "../public/logo";
import styles from "../styles/Home.module.css";

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

export function Head() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Logo />
            <span className="ml-3 text-xl">The Dev Way</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-white ">
            <NavLink text="Home" link="\" />
            <NavLink text="Services" link="\" />
            <NavLink text="About" link="\" />
          </nav>
          <ConnectButton />
        </div>
      </header>
    </div>
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
    <div className={styles.header}>
     <Title />
      <nav className={styles.nav}>
        <NavLink text="Home" link="\" />
        <NavLink text="Services" link="\" />
        <NavLink text="About" link="\" />
      </nav>
    </div>
  );
}
