import fm from '../src'

test('main', () => {
  expect(fm('')).toEqual({
    body: ''
  })
  expect(fm('hehe')).toEqual({
    body: 'hehe'
  })
  expect(fm('---')).toEqual({
    body: '---'
  })
  expect(fm(`---
cool
---`)).toEqual({
  head: 'cool',
  body: undefined
})
  expect(fm(`---
cool
hehe
---

body

is this

`)).toEqual({
  head: 'cool\nhehe',
  body: '\nbody\n\nis this'
})
})
