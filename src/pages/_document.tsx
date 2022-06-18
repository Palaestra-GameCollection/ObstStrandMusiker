import { Head, Html, Main, NextScript } from "next/document";

import React from "react";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Obst Strand Musiker</title>
        <meta name="apple-mobile-web-app-title" content="ObstStrandMusiker" />
        <meta name="application-name" content="ObstStrandMusiker" />
        <meta
          name="description"
          content="Eine abgewandelte Variante von Stand, Land, Fluss"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#38408e" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#EAEAEA" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
