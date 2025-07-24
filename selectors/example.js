import { browser, expect } from '@wdio/globals'

describe('selectors', () => {
  it('link text', async () => {
    await browser.url('/stackoverflow.html')

    console.time('=questions');
    const link = await $('=Questions')
    console.timeEnd('=questions');
    await expect(link).toHaveText('Questions')
  })

  it('element text', async () => {
    await browser.url('/stackoverflow.html')

    let link = await $('span=Questions')
    await expect(link).toHaveText('Questions')
  })

  it('aria', async () => {
    await browser.url('/stackoverflow.html')

    console.time('aria');
    const elem = await $('aria/Questions')
    console.timeEnd('aria');
    await expect(elem).toHaveText('Questions')
  })
})
