import styles from "../styles/Component.module.scss";
import { useHighlightSyntax } from "./util";
import { useState } from "react";
import "prismjs/components/prism-kotlin";


export default function Code({ children }) {
  const style = {
    backgroundColor: "#2E2E2E",
    borderRadius: "0.5rem",
  };
  const [isCopy, setisCopy] = useState("Copy 📋");
  const [btnColor, setbtnColor] = useState("#ffffff");



  function copyToClipboard() {
    setTimeout(() => {
      setisCopy("Copy 📋");
      setbtnColor("#ffffff");
    }, 2000);
    try{
      navigator.clipboard.writeText(children);
    }catch(err){
      console.log(err)
    }
  
    setisCopy("Copied! 📋");
    setbtnColor("#30DC80");
  }

  useHighlightSyntax();
  return (
    <div className={styles.codeBlock}>
      <div className={styles.action}>
        <p>Kotlin</p>
        <button onClick={copyToClipboard} style={{ color: btnColor }}>
          {isCopy}
        </button>
      </div>
      <pre className="language-kt">
        <code>{children}</code>
      </pre>
    </div>
  );
}
