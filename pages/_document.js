import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html  lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta charSet="UTF-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
