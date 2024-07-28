import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <noscript>
          <link href="./styles/aos-noscript.css" rel="stylesheet" />
        </noscript>
      </Head>
      <body>
      <noscript></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
