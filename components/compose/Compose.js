import styles from "../../styles/Compose.module.scss";
import Head from "next/head";
import MDX from "../MDX";
import BlogCard from "../blog/BlogCard";
import { getBlog } from "../blog/data";
import { useState } from "react";
import PageTitle from "../PageTitle";
import Image from "next/image"

export default function Compose({ meta, children }) {
  const { title, tutorialId } = meta;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.headSection}>
        <PageTitle
          title={title}
          icon="compose"
          backLink="compose"
          color="#FF5858"
        />
        {/* <div className={styles.tutorial}>Tutorial</div> */}
      </div>
      <div className={styles.section}>
        <div className={styles.container}>
          <MDX>{children}</MDX>
        </div>
        <SideBar tutorialId = {tutorialId} />
      </div>
    </>
  );
}

function SideBar({tutorialId}) {
  const [showSideBar, setshowSideBar] = useState(true);
  const reqTutorial = tutorialId == "";
  if (showSideBar) {
    return (
      <div className={styles.sidebar} >
        <div className={styles.closeBtn} onClick={() => setshowSideBar(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-x"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div> 
        {reqTutorial ? <ReqTutorialCard /> : <TutorialCard id={tutorialId} />}
      </div>
    );
  }else{
    return <div className={styles.circle} onClick={() => setshowSideBar(true)}>
       <Image src="/icons/blog.svg" width="30" height="30" alt="Blog" />,
    </div>;
  }
}

function TutorialCard({ id }) {
  const blog = getBlog(id);
  console.log(blog)
  return (
    <>
      
      <h2>Learn How to create this component</h2>
      <div className={styles.card}>
        <BlogCard style={{ margin: "0" }} {...blog} />
      </div>
    </>
  );
}

function ReqTutorialCard() {
  const [email, setEmail] = useState("");
  const reqTutorial = (event) => {
    event.preventDefault();
    alert("You will be notified when the tutorial is avilable.");
  };

  return (
    <div className={styles.reqTutorialCard}>
      <h2>Wanna Learn How to create this component?</h2>
      <form onSubmit={reqTutorial}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Request a Tutorial!</button>
      </form>
    </div>
  );
}
