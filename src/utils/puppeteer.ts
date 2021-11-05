type CookieSameSite = 'Strict' | 'Lax' | 'None'

interface PuppeteerCookieParam {
  name: string
  value: string
  url?: string
  domain?: string
  path?: string
  expires?: number
  httpOnly?: boolean
  secure?: boolean
  sameSite?: CookieSameSite
}

export default (cookie: string, options: PuppeteerCookieParam): PuppeteerCookieParam[] => {
  const cookies: PuppeteerCookieParam[] = []
  cookie.split('; ').map(item => {
    const res = item.split('=')
    const obj = { name: res[0], value: res[1] }
    Object.assign(obj, options)
    cookies.push(obj)
  })

  return cookies
}
