import styles from "@/styles/header.module.css";
import {useState} from "react";
import Popup from "./popup";
import {useRouter} from "next/router";

export default function Header({
  home
}: {
  home?: boolean
}) {
  const homeImage = <img src="/icons/home.svg" alt="Home" className={styles.image} />;
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const router = useRouter();

  return (
    <>
      {isPopupVisible && (
        <Popup
          onConfirm={() => {router.push("/")}}
          onCancel={() => {setIsPopupVisible(false)}}
          title="Are you sure you want to quit?"
        >
          Your progress will not be saved.
        </Popup>
      )}

      <nav className={styles.navigation}>
        <a href="https://github.com/seg-mx/country-guesser">
          <img src="/icons/github.svg" alt="GitHub" className={styles.image} />
        </a>
        {home ? (
          <a>{homeImage}</a>
        ) : (
          <a
            onClick={() => setIsPopupVisible(true)}
          >{homeImage}</a>
        )}
      </nav>
    </>
  );
}
