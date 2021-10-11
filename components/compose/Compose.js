import styles from "../../styles/Compose.module.scss";
import Head from "next/head";
import { getComposeUi } from "../../pages/compose/composeData";
import MDX from "../MDX";
import BlogCard from "../blog/BlogCard";
import { getBlog } from "../../pages/blog/data";
import { useState } from "react";
import PageTitle from "../PageTitle";

export default function Compose({ meta, children }) {
  const { title, tutorialId } = meta;
  const reqTutorial = tutorialId == "";

  const ui = getComposeUi(title);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.headSection}>
        <PageTitle title={title}  icon="compose" />
        <div className={styles.tutorial}>Tutorial</div>
        
      </div>
      <div className={styles.section}>
        <div className={styles.container}>
          <MDX>{children}</MDX>
        </div>
        <div className={styles.sidebar}>
          {reqTutorial ? <ReqTutorialCard /> : <TutorialCard id={tutorialId} />}
        </div>
      </div>
    </>
  );
}

function TutorialCard({ id }) {
  const blog = getBlog(id);
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
