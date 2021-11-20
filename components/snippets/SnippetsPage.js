import PageTitle from "../PageTitle";
import styles from "../../styles/Snippets.module.scss";
import SearchBar from "../SearchBar";
import SnippetCard from "../snippets/SnippetCard";
import getAllSnippets from "../../pages/snippets/snippetData";
import { useState } from "react";

export default function SnippetsPage() {
  const snippets = getAllSnippets().sort((a, b) => 0.5 - Math.random());
  const [query, setQuery] = useState("");
  const [foundSnippets, setFoundSnippets] = useState(snippets);
  const filter = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword.trim() !== "") {
      const results = snippets.filter((snippet) => {
        return (
          snippet.title.toLowerCase().includes(keyword) ||
          snippet.desc.toLowerCase().includes(keyword) ||
          snippet.code.toLowerCase().includes(keyword) ||
          snippet.tag.toLowerCase().includes(keyword)
        );
      });
      setFoundSnippets(results);
    } else {
      setFoundSnippets(snippets);
      // If the text field is empty, show all
    }

    setQuery(keyword);
  };

  return (
    <>
      <div className={styles.headSection}>
        <PageTitle
          title="Snippets"
          color="#30DC80"
          icon="snippet"
          desc="Short solutions to trival probelms in Android Dev."
        />
        <SearchBar filter={filter} query={query} />
      </div>

      <div className={styles.snippetSection}>
        <div className={styles.snippetConatiner}>
          {foundSnippets.map((item) => (
            <SnippetCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
