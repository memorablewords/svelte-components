describe('Icon', () => {
    it('is visible', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#icon-default')
        browser.assert.visible('#icon-default svg') // this doesn't actually check visibility :\
    })

    it('is an SVG', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#icon-default')
        browser.assert.elementPresent('#icon-default svg')
    })

    it('has a title that defaults to the icon type', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#icon-default')
        browser.assert.containsText('#icon-default', 'moon')
    })

    it('has an image role', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#icon-default')
        browser.assert.attributeContains('#icon-default svg', 'role', 'img')
    })

    it('is not aria-hidden by default', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#icon-default')
        browser.assert.attributeContains(
            '#icon-default svg',
            'aria-hidden',
            'false',
        )
    })

    it('is aria-hidden when illustrative', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#icon-illustrative')
        browser.assert.attributeContains(
            '#icon-illustrative svg',
            'aria-hidden',
            'true',
        )
    })

    it('renders the symbol corresponding to its type', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#icon-default')
        browser.assert.attributeContains(
            '#icon-default use',
            'xlink:href',
            'icons.svg#moon',
        )
    })
})
