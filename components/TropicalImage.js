import styles from "../styles/TropicalImage.module.css";

export default function TropicalImage({ src, width, height, alt }) {
  return (
    <div
      className={styles.tropicalImg}
      style={{
        maskImage: `url("${src.src.replace(/"/g, "%22")}")`,
        "-webkit-mask-image": `url("${src.src.replace(/"/g, "%22")}")`,
        maskSize: `${width}px ${height}px`,
        "-webkit-mask-size": `${width}px ${height}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
      role="img"
      alt={alt}
    />
  );
}
