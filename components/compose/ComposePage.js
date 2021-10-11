import PageTitle from "../PageTitle";
import styles from "../../styles/Compose.module.scss";
import SearchBar from "../SearchBar";
import ComposeCard from "./ComposeCard";
import getAllComposeUI from "../../pages/compose/composeData";
import { useState } from "react";

export default function ComposePage() {
  const composeUis = getAllComposeUI();
  const [query, setQuery] = useState("");
  const [foundUi, setFoundUi] = useState(composeUis);
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword.trim() !== "") {
      const results = composeUis.filter((composeUi) => {
        return (
          composeUi.title.toLowerCase().includes(keyword.toLowerCase()) ||
          composeUi.desc.toLowerCase().includes(keyword.toLowerCase()) ||
          composeUi.tags.find((tag) =>
            tag.toLowerCase().includes(keyword.toLowerCase())
          )
        );
      });
      setFoundUi(results);
    } else {
      setFoundUi(composeUis);
      // If the text field is empty, show all users
    }

    setQuery(keyword);
  };

  return (
    <>
      <div className={styles.headSection}>
        <PageTitle title="Compose UI's" color="#EF3A5D" icon="compose" />
        <SearchBar filter={filter} query={query} />
      </div>
      <div className={styles.composeSection}>
        <div className={styles.composeContainer}>
          {foundUi.map((item) => (
            <ComposeCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
