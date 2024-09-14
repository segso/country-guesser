import {AppProps} from "next/app";
import Head from "next/head";
import "@/styles/global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Web based quiz-like game of guessing the country's name by viewing its flag" />
        <title>Country Guesser</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
