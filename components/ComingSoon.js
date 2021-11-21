import Image from 'next/image'
import styles from '../styles/Component.module.scss'

export default function ComingSoonCard() {
    return (
      <>
      <div className={styles.comingSoon}>
      <Image src="/coming-soon-il.png" width="395" height="400" alt="Coming Soon" />
      </div>
      </>
    );
  }