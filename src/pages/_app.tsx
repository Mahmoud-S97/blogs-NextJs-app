import { JSX } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/layout/layout";
import AppContextProvider from "@/store/context/AppContext";
import "@/styles/globals.css";


export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppContextProvider>
      <Layout>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  )
}
