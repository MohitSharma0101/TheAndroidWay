import styles from "../../styles/Compose.module.scss";
import Image from "next/image";
import Link from "next/link";
import { inUrlFormat } from "../util";

export const imgLoader = ({ src, width }) => {
  const homeip = "192.168.43.156";
  const ip = "192.168.29.156";
  const localhost = "localhost";
  return `http://${localhost}:3000/compose/${src}?w=${width}`;
};

export default function ComposeCard({ title, desc, tags, date, type }) {
  console.log(title);
  return (
    <Link href={`/compose/${inUrlFormat(title)}`} passHref>
      <div className={styles.composeCard}>
        <Image
          className={styles.cardCover}
          loader={imgLoader}
          src={`${title}.${type}`}
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
