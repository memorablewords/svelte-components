describe('Stack', () => {
    it('is horizontal by default', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#stack-default')
        browser.assert.elementPresent('#stack-default .horizontal.stack')
    })

    it('supports vertical', async (browser) => {
        await browser.url('http://localhost:5000/#/')
        await browser.waitForElementVisible('#stack-vertical')
        browser.assert.elementPresent('#stack-vertical .vertical.stack')
    })
})
