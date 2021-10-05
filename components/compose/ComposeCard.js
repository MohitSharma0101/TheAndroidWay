import styles from "../../styles/Compose.module.scss";
import Image from "next/image";
import Link from "next/link";
import { inUrlFormat } from "../util";



export default function ComposeCard({ title, desc, tags, date, type }) {
  console.log(title);
  return (
    <Link href={`/compose/${inUrlFormat(title)}`} passHref>
      <div className={styles.composeCard}>
        <Image
          className={styles.cardCover}
          src={`/compose/${title}.${type}`}
          alt="compose-ui-preview"
          width={720}
          height={400}
        />
        <div className={styles.allTags}>
          {tags.map((item) => (
            <h2 key={item} className={styles.composeTag}>
              {item}
            </h2>
          ))}
        </div>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <p>{desc}</p>
      </div>
    </Link>
  );
}
