import Header from "./Header";
import PageTitle from "./PageTitle";
import styles from "../styles/Snippets.module.scss";
import SearchBar from "./SearchBar";
import SnippetCard from "./SnippetCard";
import getAllSnippets from "../pages/snippets/snippetData";
import { useState } from "react";

export default function SnippetsPage() {
  const snippets = getAllSnippets();
  const [query, setQuery] = useState("");
  const [foundSnippets, setFoundSnippets] = useState(snippets);
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword.trim() !== "") {
      const results = snippets.filter((snippet) => {
        return (
            snippet.title.toLowerCase().includes(keyword.toLowerCase()) ||
            snippet.desc.toLowerCase().includes(keyword.toLowerCase())  ||
            snippet.code.toLowerCase().includes(keyword.toLowerCase())  
        );
      });
      setFoundSnippets(results);
    } else {
        setFoundSnippets(snippets);
      // If the text field is empty, show all users
    }

    setQuery(keyword);
  };

  return (
    <div>
      <Header />
      <PageTitle title="Snippets." color="#30DC80" icon="snippet" />
      <div className={styles.snippetSection}>
        <SearchBar filter={filter} query={query}  />
        <div className={styles.snippetConatiner}>
          {foundSnippets.map((item) => (
                <SnippetCard
                  key={item.title}
                  code={item.code}
                  title={item.title}
                  desc={item.desc}
                  tag={item.tag}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}
