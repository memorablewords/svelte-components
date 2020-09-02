describe('Text', () => {
    it('is a span', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#text-default')
        browser.assert.elementPresent('#text-default span')
    })

    it('diplays its content as text', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#text-default')
        browser.assert.containsText(
            '#text-default span',
            'The quick brown fox jumps over the lazy dog.',
        )
    })

    it('is a p when element is p', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#text-p')
        browser.assert.elementPresent('#text-p p')
    })

    it('is a h1 when element is h1', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#text-h1')
        browser.assert.elementPresent('#text-h1 h1')
    })

    it('is a h2 when element is h2', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#text-h2')
        browser.assert.elementPresent('#text-h2 h2')
    })
})
