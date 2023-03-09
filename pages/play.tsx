import Layout from "@/components/layout";
import QuestionInput from "@/components/question-input";
import {getCountriesJSON, CountryJSON} from "@/lib/countries";
import {FormEvent, useEffect, useState} from "react";
import styles from "@/styles/play.module.css";

export async function getStaticProps() {
  const countriesJSON = getCountriesJSON();
  return {
    props: {
      countriesJSON,
    },
  };
}

export default function HomePage({
  countriesJSON
}: {
  countriesJSON: CountryJSON[]
}) {
  const [countries, setCountries] = useState(countriesJSON);
  const [showResult, setShowResult] = useState(false);
  const [index, setIndex] = useState(-1);
  const [score, setScore] = useState(0);

  const addScore = (amount: number) => {
    setScore(score => score + amount);
  }

  const setRandomIndex = () => {
    setIndex(Math.floor(Math.random() * (countries.length - 1)));
  }

  useEffect(() => {
    setRandomIndex();
  }, []);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (showResult) {
      return;
    }
    setShowResult(true);

    setTimeout(() => {
      setShowResult(false);
      setCountries(countries.filter((_, i) => i != index));
      setRandomIndex();
    }, 5000);
  }

  const country = countries[index];

  return (
    <Layout text={`Score: ${score.toLocaleString()} | Remaining: ${countries.length}`}>
      {(!country && index != -1) && (
        <p className={styles["finish-text"]}>Game finished!</p>
      )}

      {country && (<>
        <div className={styles.display}>
          {showResult ? (<>
            <p>{country.name.official}</p>
            <p>{country.capitals.join(", ")}</p>
          </>) : (
            <img src={`/country-guesser/flags/${country.svg}`}/>
          )}
        </div>

        <form onSubmit={onSubmit} className={styles.form}>
          <QuestionInput
            placeholder="Country name"
            answers={[country.name.common, country.name.official]}
            showResult={showResult}
            score={200}
            addScore={addScore}
          />

          <QuestionInput
            placeholder="Country capital"
            answers={[...country.capitals, country.capitals.join(", ")]}
            showResult={showResult}
            score={400}
            addScore={addScore}
          />

          <button className={styles["send-button"]}>Send</button>
        </form>
      </>)}
    </Layout>
  );
}
