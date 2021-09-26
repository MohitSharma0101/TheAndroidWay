import styles from "../styles/Blog.module.scss";
import Image from "next/image";


export default function SearchBar({query,filter}){
  return (
    <div className={styles.searchContainer}>
      <input
            className={styles.searchInput}
            onChange = {filter}
            value= {query}
            id="search"
            type="text"
            placeholder="Search..."
          />
      <div className={styles.circle}>
      <Image src="/icons/search.svg" width="30" height="30" alt="Snippets" />
      </div>
    </div>
  )
}
