module.exports = (cookie, options) => {
  const cookies = []
  cookie.split('; ').map(item => {
    const res = item.split('=')
    const obj = { name: res[0], value: res[1] }
    Object.assign(obj, options)
    cookies.push(obj)
  })

  return cookies
}
