import {useEffect, useState} from "react";
import styles from "@/styles/question-input.module.css";

function normalizeText(text: string) {
  const replacements: { [char: string]: string } = {
    "á": "a",
    "é": "e",
    "í": "i",
    "ó": "o",
    "ú": "u",
    "ã": "a"
  };

  text = text.toLowerCase().trim().replace(/\s+/g, " ");
  for (let key of Object.keys(replacements)) {
    text = text.replaceAll(key, replacements[key]);
  }

  return text;
}

export default function QuestionInput({
  placeholder,
  answers,
  showResult,
  score,
  addScore
}: {
  placeholder: string,
  answers: string[],
  showResult: boolean,
  score: number,
  addScore: (score: number) => void;
}) {
  const [value, setValue] = useState("");
  const [className, setClassName] = useState("");

  useEffect(() => {
    setClassName("");

    if (!showResult) {
      setValue("");
      return;
    }

    const isCorrect = answers.map(normalizeText).indexOf(value) != -1;

    if (isCorrect) {
      setClassName(styles.correct);
      addScore(score);
    } else {
      setClassName(styles.wrong);
    }
  }, [showResult]);

  return (
    <input
      type="text"
      placeholder={placeholder}
      disabled={showResult}
      value={value}
      onChange={event => setValue(event.target.value)}
      className={styles.input + " " + (showResult ? className : "")}
    />
  );
}
