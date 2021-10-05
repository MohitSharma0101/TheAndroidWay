import React from "react"
import styles from "../styles/Home.module.scss"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function HomePage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Categories.</h1>
      <Categories />
    </div>
  )
}

function Categories() {
  return (
    <div className={styles.container}>
      <div className={styles.blackBox}>
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
        <h2>----- More Coming Soon -----</h2>
      </div>
    </div>
  )
}

function CategoryCard({ title, desc, color, svg, link }) {
  const [border, setBorder] = useState("0px")

  const borderStyle = {
    border: `${border} solid ${color}`,
  }
  return (
    <Link href={link} passHref>
      <div
        className={styles.categoryCard}
        style={borderStyle}
        onMouseEnter={() => {
          setBorder("1.5px")
        }}
        onMouseLeave={() => {
          setBorder("0px")
        }}
      >
        <div className={styles.circle}>{svg}</div>
        <h1 style={{ color: color }}>{title}</h1>
        <p>{desc}</p>
      </div>
    </Link>
  )
}

const categories = [
  {
    title: "Blog",
    desc: "Learn android development by in-dept tutorial blogs.",
    color: "#29B6F6",
    svg: <Image src="/icons/blog.svg" width="40" height="40" alt="Blog" />,
    link: "/blog",
  },
  {
    title: "Compose UI",
    desc: "Get ready made modern Jetpack Compose UI components.",
    color: "#FF5858",
    svg: (
      <Image src="/icons/compose.svg" width="30" height="30" alt="Compose UI" />
    ),
    link: "/compose",
  },
  {
    title: "Snippets",
    desc: "Get kotlin extention / utitly functions for general use cases.",
    color: "#30DC80",
    svg: (
      <Image src="/icons/snippet.svg" width="30" height="30" alt="Snippets" />
    ),
    link: "/snippets",
  },
  {
    title: "Android Quiz",
    desc: "Hand curated List of most asked Android Questions.",
    color: "#FA7419",
    svg: <Image src="/icons/quiz.svg" width="30" height="30" alt="Quiz" />,
    link: "/blog",
  },
  {
    title: "Roadmap",
    desc: "Get a complete roadmap to learn android with resources and projects.",
    color: "#FF66C4",
    svg: (
      <Image src="/icons/roadmap.svg" width="40" height="40" alt="Roadmap" />
    ),
    link: "/blog",
  },
  {
    title: "Libraries",
    desc: "An awesom collection of android libraries.",
    color: "#B380F4",
    svg: (
      <Image
        src="/icons/libraries.svg"
        width="40"
        height="40"
        alt="Libraries"
      />
    ),
    link: "/blog",
  },
]
