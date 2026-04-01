import Layout from "@/components/layout/layout";
import AppContextProvider from "@/store/context/AppContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { JSX } from "react";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  )
}
