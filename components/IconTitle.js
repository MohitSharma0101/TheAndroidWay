import styles from "../styles/Compose.module.scss"
import Image from 'next/image'


export default function IconTitle({icon , title}) {
    return (
        <div className={styles.iconTitle}>
            <Image src = {`/icons/${icon}`} width="24" height="24" alt={title} />
            <h1>{title}</h1>
        </div>
    )
}
