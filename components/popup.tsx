import styles from "@/styles/popup.module.css";

export default function Popup({
  onConfirm,
  onCancel,
  title,
  children
}: {
  onConfirm?: () => void,
  onCancel?: () => void,
  title: string,
  children: React.ReactNode
}) {
  return (
    <>
      <div className={styles.background}></div>

      <div className={styles.popup}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{children}</p>

        <div className={styles["button-list"]}>
          <button
            className={`${styles.confirm} ${styles.button}`}
            onClick={onConfirm}
          >Confirm</button>

          <button
            className={`${styles.cancel} ${styles.button}`}
            onClick={onCancel}
          >Cancel</button>
        </div>
      </div>
    </>
  );
}
