/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'
import FS from 'fs'

exports.onRenderBody = ({ setHeadComponents }) => {
  const files = getFilesFromPath("./public/static", ".woff2")
  const preload = [
    'eb-garamond-v10-cyrillic_latin-700',
    'eb-garamond-v10-cyrillic_latin-regular',
    'subset-TeXGyreAdventor-Bold',
    'subset-TeXGyreAdventor-Regular',
  ]

  setHeadComponents([
    files.map((file) => {
      return preload.map((fontFileName, key) => {
        const fileName = file.split('-').slice(0,-1).join('-')
        if (fileName === fontFileName) {
          return(
            <link
      				key={key}
      				rel='preload'
      				as='font'
      				type='font/woff2'
      				crossOrigin='anonymous'
      				href={`/static/${file}`}
      			/>
          )
        }
      })
    })
  ])
}

function getFilesFromPath(path, extension) {
  return FS.readdirSync(path)
    .filter(element => element.match(new RegExp(`.*\.(${extension})`, 'ig')));
}