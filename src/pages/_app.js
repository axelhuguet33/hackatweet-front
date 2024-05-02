import { UserContextProvider } from "@/context/UserContext";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hackatweet</title>
      </Head>
      <UserContextProvider>
        <Component {...pageProps} />;
      </UserContextProvider>
    </>
  );
}
