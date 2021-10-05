import { MDXProvider } from "@mdx-js/react";
import Code from "./Code";
import styles from "../styles/Mdx.module.scss";

export default function MDX({ children }) {
  return (
      <MDXProvider
        components={{
          // eslint-disable-next-line react/display-name
          pre: (props) => <Code {...props} />,
        }}
      >
        <div className={styles.mdx}>{children}</div>
      </MDXProvider>
  );
}
