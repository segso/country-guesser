import Layout from "@/components/layout";
import QuestionInput from "@/components/question-input";
import {getCountriesJSON, CountryJSON} from "@/lib/countries";
import {FormEvent, useEffect, useState} from "react";

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
    <Layout score={score}>
      {(!country && index != -1) && (
        <p>Game finished!</p>
      )}

      {country && (<>
        <div>
          {showResult ? (<>
            <p>{country.name.official}</p>
            <p>{country.capital}</p>
          </>) : (
            <img src={`/flags/${country.svg}`}/>
          )}
        </div>

        <form onSubmit={onSubmit}>
          <QuestionInput
            placeholder="Country name"
            answers={[country.name.common, country.name.official]}
            showResult={showResult}
            score={200}
            addScore={addScore}
          />

          <QuestionInput
            placeholder="Country capital"
            answers={[country.capital]}
            showResult={showResult}
            score={400}
            addScore={addScore}
          />

          <button>Send</button>
        </form>
      </>)}
    </Layout>
  );
}
