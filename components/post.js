import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Mdx.module.scss";
import Header from "../components/Header";
import BlogCard from "./BlogCard";
import { getTopThreePost } from "../pages/blog/data";
import React, { useEffect } from "react";
import Prism from 'prismjs';


const myLoader = ({ src, width }) => {
  const homeip = "192.168.43.156";
  const ip = "192.168.29.156";
  const localhost = "localhost";
  return `http://${localhost}:3000/blog-cover/${src}.png?w=${width}`;
};

export default function Post({ children, meta }) {
  const { title, author } = meta;
  const readNextBlogs = getTopThreePost("Compose UI", title);

   useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="Mohitsharma01"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#5F7FFF"
          data-position="Right"
          data-x_margin="26"
          data-y_margin="22"
        ></script>
      </Head>
      <div>
        <Header />
        <div className={styles.postPage}>
          <div className={styles.coverContainer}>
            <Image
              className={styles.blogCover}
              loader={myLoader}
              src={title}
              alt="blog-cover"
              width={1080}
              height={600}
            />
          </div>

          <div className={styles.blogContainer}>
            <div className={styles.content}>
              <h2 className={styles.blogTag}>Compose UI</h2>
              <h1 className={styles.blogHeading}>{title}</h1>
              <h3 className={styles.date}>Sep 8, 2021</h3>
              <div className={styles.mdx}>{children}</div>
            </div>
          </div>
          <div className={styles.readNextSection}>
            <h4>Read Next 📖</h4>
            <div className={styles.readNextcontainer}>
              {readNextBlogs.map((item) => (
                <BlogCard
                  key={item.id}
                  title={item.title}
                  content={item.content}
                  id={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
