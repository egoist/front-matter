
# @egoist/front-matter

[![NPM version](https://img.shields.io/npm/v/@egoist/front-matter.svg?style=flat)](https://npmjs.com/package/@egoist/front-matter) [![NPM downloads](https://img.shields.io/npm/dm/@egoist/front-matter.svg?style=flat)](https://npmjs.com/package/@egoist/front-matter) [![CircleCI](https://circleci.com/gh/egoist/@egoist/front-matter/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/@egoist/front-matter/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

## Why another front-matter library?

This library is only 200 bytes 🤯 It's ultra light-weight because it doesn't really parse the front-matter, you can choose your language of choice to parse it instead, e.g. Yaml or Toml or even simply `JSON.parse`.

## Install

```bash
yarn add @egoist/front-matter
```

## Usage

```js
const frontMatter = require('@egoist/front-matter')

const { head, body } = frontMatter(`
---
title: Hell World
---

Hi there?
`)

assert(head === 'title: Hello World')
assert(body === '\nHi there?')
```

Parse `head` with [`js-yaml`](https://github.com/nodeca/js-yaml):

```js
const yaml = require('js-yaml')
const frontMatter = require('@egoist/front-matter')

const { head, body } = frontMatter(str)
const parsedHead = yaml.safeLoad(head)
```

## API

### frontMatter(str, delimiter = '---')

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**@egoist/front-matter** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/@egoist/front-matter/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
