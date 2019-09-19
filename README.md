# medium-converter
Save and access your medium posts via your own personal server


# Dev notes

## TypeScript hooks guide
Here's [a good article on hooks and TS](https://levelup.gitconnected.com/usetypescript-a-complete-guide-to-react-hooks-and-typescript-db1858d1fb9c)

## Whats tsconfig "esModuleInterop" do?
It lets us import things how we normally would, not

```js
import * as React from 'react';
import { useState, useContext } from 'react';

// to the usual:
import React, { useState, useContext } from 'react';
```
heres is a [stackOverflow that explains it](https://stackoverflow.com/questions/54674392/react-with-typescript-how-to-import-methods), and a [snippet from the docs](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-from-commonjs-modules-with---esmoduleinterop)

## what is postcss and astroturf
postcss lets you put css in js files, and astroturf is the recommended webpack loader.
[for install](https://github.com/postcss/postcss#css-in-js)
You also need to update vscode to handle it with an extension, i'm currently using postcss-sugarss-language