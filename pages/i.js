import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Dev Way</title>
        <meta name="description" content="Let's code the dev way" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.headback}>
        <h1 className={styles.title}>
         The Dev Way
        </h1>
        <p className={styles.description}>
          
        </p>
        </div>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Utitliy Functions &rarr;</h2>
            <p>Find various Kotlin extention or Utility function.</p>
          </a>

          <Link href="/blog" passHref>
            <a className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Learn android by in-dept tutorial blogs</p>
            </a>
          </Link>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Compose &rarr;</h2>
            <p>Discover various Ui layouts and animations in Jetpack Compose.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>About &rarr;</h2>
            <p>
             Get to know me better and drop an email to contant.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
