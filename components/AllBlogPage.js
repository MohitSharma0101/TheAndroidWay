
import BlogCard  from "./BlogCard";
import getAllBlogs from "../pages/blog/data";
import React, { useState } from "react";
import styles from "../styles/Blog.module.scss";
import Header from "./Header";
import SearchBar from "./SearchBar";
import PageTitle from "./PageTitle";

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
          blog.content.toLowerCase().includes(keyword.toLowerCase())
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
    <div>
      <Header />
      <div className={styles.blogContainer}>
        <PageTitle title = "Dev Blog." color="#0070f3"  icon="blog"/>
        <div className={styles.blogBlackBox}>
        <SearchBar filter={filter} query={query} />
        <AllBlogs blogs={foundBlogs} />
        </div>
      </div>
    </div>
  );
}

function AllBlogs({ blogs }){
  return (
    <div className={styles.allBlogs}>
      {blogs.map((item) => (
              <BlogCard
                key={item.id}
                title={item.title}
                content={item.content}
                id={item.id}
                tags = {item.tags}
                date = {item.date}
              />
            ))}
    </div>
  );
};

