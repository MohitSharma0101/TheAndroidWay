import styles from "../styles/Mdx.module.scss";

export default function YoutubePlayer({ url }) {
  return (
    <div className={styles.playerContainer}>
      <iframe
        className={styles.player}
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
