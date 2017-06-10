# Mostly HTML

[![Greenkeeper badge](https://badges.greenkeeper.io/TylorS167/mostly-html.svg)](https://greenkeeper.io/)

> Creates HTML from mostly-dom VNode

## Get it
```sh
yarn add mostly-html mostly-dom
# or
npm install --save mostly-html mostly-dom
```

## API

### `toHtml(vNode: VNode): string`

Given a VNode it returns a HTML string

```typescript
import { div, button, h1 } from 'mostly-dom'
import { toHtml } from 'mostly-html'

const view = (amount: number) =>
  div({ className: 'foo' }, [
    button('#increment', 'Increment'),
    button('#decrement', 'Decrement'),
    h1(String(amount))
  ])

const html = toHtml(view(1))

console.log(html)
// => <div class="foo"><button id="increment">Increment</button><button id="decrement">Decrement</button><h1>1</h1></div>
```
