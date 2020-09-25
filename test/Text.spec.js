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

    it('supports display6', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#text-display6')
        browser.assert.elementPresent('#text-display6 .display6')
    })

    it('supports display5', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#text-display5')
        browser.assert.elementPresent('#text-display5 .display5')
    })

    it('supports display4', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#text-display4')
        browser.assert.elementPresent('#text-display4 .display4')
    })

    it('supports display3', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#text-display3')
        browser.assert.elementPresent('#text-display3 .display3')
    })

    it('supports display2', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#text-display2')
        browser.assert.elementPresent('#text-display2 .display2')
    })

    it('supports display1', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#text-display1')
        browser.assert.elementPresent('#text-display1 .display1')
    })

    it('supports body', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#text-body')
        browser.assert.elementPresent('#text-body .body')
    })

    it('supports caption', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#text-caption')
        browser.assert.elementPresent('#text-caption .caption')
    })
})
