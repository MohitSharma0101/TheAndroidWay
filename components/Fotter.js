
import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Component.module.scss'
import NewsLetter from './NewsLetter'

function Logo() {
  return (
      <Link href="/" passHref>
        <div className={styles.logo}>
        <Image src="/logo.svg" width="250" height="35" alt="The Android Way" />
        </div>
      </Link>
  );
}

export default function Fotter() {
  return (
    <>
      <footer className={styles.fotter}>
        <NewsLetter />
        <div className={styles.signature}>
          <Logo/>
          <span>© 2020-present Mohit Sharma. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  );
}
