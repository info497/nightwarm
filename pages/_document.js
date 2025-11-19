import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#001a44" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
