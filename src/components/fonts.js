import React from "react"
import Helmet from "react-helmet"

import fontGaramondRegular from "eb-garamond-v10-cyrillic_latin-regular.woff2"
import fontGaramondBold from "eb-garamond-v10-cyrillic_latin-700.woff2"
import fontTXGARegular from "subset-TeXGyreAdventor-Regular.woff2"
import fontTXGABold from "subset-TeXGyreAdventor-Bold.woff2"

import "../styles/fonts.css"

export default _ => (
  <Helmet>
    <link rel="preload" href={fontGaramondRegular} as="font" type="font/woff2" crossorigin />
    <link rel="preload" href={fontGaramondBold} as="font" type="font/woff2" crossorigin />
    <link rel="preload" href={fontTXGARegular} as="font" type="font/woff2" crossorigin />
    <link rel="preload" href={fontTXGABold} as="font" type="font/woff2" crossorigin />
  </Helmet>
)