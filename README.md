# cookie-format

一个简单的工具库，用于处理各种 cookie 格式化，目前仅添加了处理`puppeteer`的 cookie 格式，后续用到时会继续添加对其他库的支持

## Usage

```js
const { puppeteerCookie } = require('cookie-format')

// puppeteerCookie接收的第一个参数为cookie字符串，第二个参数为其他参数的对象，例如：domain、url等
const res = puppeteerCookie('a=1; b=2', { domain: 'example.com' })

//puppeteer中设置cookie
await page.setCookie(...res)
```
