import Image from "next/image";
import styles from '../styles/Component.module.scss'

export default function PagweTitle({title , color , icon }) {
 const iconPath = `/icons/${icon}.svg`
    return (
      <div className={styles.pageTitle} >
        <div className={styles.circle}>
          <Image src={iconPath} width="30" height="30" alt= {title} />
        </div>
        <h1 style = {{color : color}}>{title}</h1>
      </div>
    );
  }
  