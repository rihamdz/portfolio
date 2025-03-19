import Head from "next/head";
import "../styles/globals.css"; 
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      
    <title>Riham KDB </title>
    <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        {/* Force le rafraîchissement du favicon */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css2?family=Hurricane&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </>
  );
}

export default MyApp;
