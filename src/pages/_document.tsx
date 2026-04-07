import { JSX } from "react";
import { Html, Main, Head, NextScript } from "next/document";

const Document = (): JSX.Element => {
    return (
        <Html dir="lr" lang='en'>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document;