import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Mdx.module.scss";
import BlogCard from "./BlogCard";
import { getTopThreePost } from "../pages/blog/data";
import { getBlog } from "../pages/blog/data";
import MDX from "./MDX";

export default function Post({ children, meta }) {
  const { title, author } = meta;
  const blog = getBlog(title);
  const readNextBlogs = getTopThreePost("Compose UI", title);


  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.postPage}>
          <Cover title={title} />

          <div className={styles.blogContainer}>
            <div className={styles.content}>
              <div className={styles.allTags}>
                {blog.tags.map((item) => (
                  <h2 key={item} className={styles.blogTag}>
                    {item}
                  </h2>
                ))}
              </div>
              <h1 className={styles.blogHeading}>{blog.title}</h1>
              <h3 className={styles.date}>{blog.date}</h3>
              <MDX>{children}</MDX>
            </div>
          </div>
          <ReadNextSection blogs={readNextBlogs} />
        </div>
      </div>
    </>
  );
}


function ReadNextSection({ blogs }) {
  return (
    <div className={styles.readNextSection}>
      <h4>Read Next 📖</h4>
      <div className={styles.readNextcontainer}>
        {blogs.map((item) => (
          <BlogCard
            key={item.id}
            title={item.title}
            content={item.content}
            id={item.id}
            tags={item.tags}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}

function Cover({ title }) {
  return (
    <div className={styles.coverContainer}>
      <Image
        className={styles.blogCover}
        src={`/blog-cover/${title}.png`}
        alt="blog-cover"
        width={720}
        height={400}
      />
    </div>
  );
}
