import styles from "../styles/Blog.module.scss";
import Image from "next/image";

export function Search({query,filter}) {

  return (
    <div className="flex justify-center items-center w-full  ">
      <div className="p-8 w-3/5 ">
        <div className="bg-white flex justify-center  items-center rounded-full shadow-lg ">
          <input
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none h-full"
            onChange = {filter}
            value= {query}
            id="search"
            type="text"
            placeholder="Search..."
          />
          <div className="p-4">
            <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-search"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
