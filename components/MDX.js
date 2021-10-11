/* eslint-disable react/display-name */
import { MDXProvider } from "@mdx-js/react";
import Code from "./Code";
import Anchor from "./Anchor";
import styles from "../styles/Mdx.module.scss";

export default function MDX({ children }) {
  return (
      <MDXProvider
        components={{
          pre: (props) => <Code {...props} />,
           h2: (props) => <Anchor {...props} />,
        }}
      >
        <div className={styles.mdx}>{children}</div>
      </MDXProvider>
  );
}
