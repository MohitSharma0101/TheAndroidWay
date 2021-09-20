import Image from "next/image";
import styles from '../styles/Blog.module.scss'

export default function PagweTitle({title , color , icon }) {
 const iconPath = `/icons/${icon}.svg`
    return (
      <div className={styles.blogHead} >
        <div className={styles.circle}>
          <Image src={iconPath} width="40" height="40" alt= {title} />
        </div>
        <h1 style = {{color : color}}>{title}</h1>
      </div>
    );
  }
  