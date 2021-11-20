import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Blog.module.scss";
import BlogCard from "../blog/BlogCard";
import { getTopThreePost } from "../../pages/blog/data";
import { getBlog } from "../../pages/blog/data";
import MDX from "../MDX";

export default function Post({ children, meta }) {
  const { id, author } = meta;
  const blog = getBlog(id);

  const readNextBlogs = getTopThreePost(blog.tags[0], id);

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.metaSection}>
        <div className={styles.content}>
          <Tags blog={blog} />
          <div className={styles.title}>{blog.title}</div>
          <div className={styles.date}>{blog.date}</div>
        </div>
      </div>
      <div className={styles.post}>
        <MDX>{children}</MDX>
      </div>
      <ReadNextSection blogs={readNextBlogs} />
    </>
  );
}

function Tags({ blog }) {
  return (
    <div className={styles.tags}>
      {blog.tags.map((item) => (
        <span key={item} className={styles.tag}>
          {item}
        </span>
      ))}
    </div>
  );
}

export function PreviousPost({ children, meta }) {
  const { id, author } = meta;
  const blog = getBlog(id);

  const readNextBlogs = getTopThreePost(blog.tags[0], id);

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.postPage}>
          <Cover title={id} />
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
    <Image
      className={styles.blogCover}
      src={`/blog-cover/${title}.png`}
      alt="blog-cover"
      width={720}
      height={400}
    />
  )
}
