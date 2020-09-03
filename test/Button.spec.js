describe('Button', () => {
    it('is a button', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#button-default')
        browser.assert.elementPresent('#button-default button')
    })

    it('has a button type', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#button-default')
        browser.assert.attributeContains(
            '#button-default button',
            'type',
            'button',
        )
    })

    it('has a title', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#button-default')
        browser.assert.attributeContains(
            '#button-default button',
            'title',
            'Example button',
        )
    })
})
