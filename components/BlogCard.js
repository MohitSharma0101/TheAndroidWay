/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from 'next/image'
import styles from "../styles/Blog.module.scss";

export function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 ml-2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14"></path>
      <path d="M12 5l7 7-7 7"></path>
    </svg>
  );
}

const myLoader = ({ src , width }) => {
  const ip = '192.168.43.156'
  const localhost = 'localhost'
  return `http://${localhost}:3000/blog-cover/${src}.png?w=${width}`;
}

export default function BlogCard({ title, id , content}) {
  return (
    <Link href= {`/blog/${id}`} passHref>
    <div className={styles.blogCard}>
      <Image
      className={styles.blogCover}
          loader={myLoader}
          src={title}
          alt="blog-cover"
          width={720}
          height={400}
        />
        <h2 className={styles.blogTag}>Compose UI</h2>
        <h1>{title}</h1>
        <h3>Sep 8, 2021 * 7 min read</h3>
        <p>{content}</p>
    </div>
    </Link>
  )
}

