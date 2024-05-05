import { UserContextProvider } from "@/context/UserContext";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hackatweet</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </>
  );
}
