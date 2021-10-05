/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
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

export default function BlogCard({ title, id, content, tags, date }) {
  return (
    <Link href={`/blog/${id}`} passHref>
      <div className={styles.blogCard}>
        <Image
          className={styles.blogCover}
          src={`/blog-cover/${title}.png`}
          alt="blog-cover"
          width={720}
          height={400}
        />
        <div className={styles.allTags}>
          {tags.map((item) => (
            <h2 key={item} className={styles.blogTag}>
              {item}
            </h2>
          ))}
        </div>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <p>{content}</p>
      </div>
    </Link>
  );
}
