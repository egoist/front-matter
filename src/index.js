export default (str, delimiter = '---') => {
  if (!str && str !== '') {
    throw new TypeError('Expect str to be a string!')
  }

  str = str.trim()

  const RE = new RegExp(`^${delimiter}[\\r|\\n]+([\\s\\S]+)[\\r|\\n]+${delimiter}(?:[\\r|\\n]([\\s\\S]*))?$`)

  const splits = str.split('\n')
  const unmatchResult = {
    body: str
  }
  if (!splits[0] || splits[0] !== delimiter || !RE.test(str)) {
    return unmatchResult
  }

  const [, head, body] = RE.exec(str)
  return {
    head,
    body
  }
}
