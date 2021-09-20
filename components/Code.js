import styles from "../styles/Mdx.module.scss";
import React, { useEffect } from "react";
import Prism from 'prismjs';

export default function Code({ children }) {
  const style = {
    backgroundColor: "#2E2E2E",
    borderRadius: "0.5rem",
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);
  return (
    <pre className="language-javascript">
      <code>{children}</code>
    </pre>
  );
}
