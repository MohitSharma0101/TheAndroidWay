import BlogCard from "../blog/BlogCard";
import getAllBlogs from "../../pages/blog/data";
import { useState } from "react";
import styles from "../../styles/Blog.module.scss";
import SearchBar from "../SearchBar";
import PageTitle from "../PageTitle";

export default function BlogsPage() {
  const blogs = getAllBlogs();
  const [query, setQuery] = useState("");
  const [foundBlogs, setFoundBlogs] = useState(blogs);
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword.trim() !== "") {
      const results = blogs.filter((blog) => {
        return (
          blog.title.toLowerCase().includes(keyword.toLowerCase()) ||
          blog.content.toLowerCase().includes(keyword.toLowerCase()) ||
          blog.tags.find((tag) =>
            tag.toLowerCase().includes(keyword.toLowerCase())
          )
        );
      });
      setFoundBlogs(results);
    } else {
      setFoundBlogs(blogs);
      // If the text field is empty, show all users
    }

    setQuery(keyword);
  };
  return (
    <>
      <div className={styles.headSection}>
        <PageTitle title="Blog." color="#14B9FF" icon="blog" />
        <SearchBar filter={filter} query={query} />
      </div>

      <div className={styles.blogSection}>
        <AllBlogs blogs={foundBlogs} />
      </div>
    </>
  );
}

function AllBlogs({ blogs }) {
  return (
    <div className={styles.allBlogs}>
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
  );
}
