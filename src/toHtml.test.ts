import { Test, describe, given, it } from '@typed/test'
import { br, button, div, svg } from 'mostly-dom'

import { toHtml } from './toHtml'

export const test: Test = describe(`toHtml`, [
  given(`a div VNode`, [
    it(`returns an html representation`, ({ equal }) => {
      equal(`<div></div>`, toHtml(div()))
    }),

    given(`it has children`, [
      it(`returns an html representation`, ({ equal }) => {
        equal(`<div><button></button></div>`, toHtml(div([ button() ])))
      }),
    ]),
  ]),

  given(`a self-closing VNode`, [
    it(`returns an html representation`, ({ equal }) => {
      equal(`<br />`, toHtml(br()))
    }),
  ]),

  given(`a svg VNode`, [
    it(`returns an html representation`, ({ equal }) => {
      equal(`<svg></svg>`, toHtml(svg()))
    }),

    given(`it has children`, [
      it(`returns an html representation`, ({ equal }) => {
        equal(`<svg><g><polygon /></g></svg>`, toHtml(svg([ svg.g([ svg.polygon() ]) ])))
      }),
    ]),
  ]),
])
