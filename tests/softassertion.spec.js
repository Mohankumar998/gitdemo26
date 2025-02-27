const { test, except, expect} = require("@playwright/test")

test('working with soft assertion', async({page})=>{
    await page.goto('https://playwright.dev/')
    await expect.soft(page.locator('//img[@src1="img/logos/Browsers.png"]')).toBeVisible()
    await expect(page).toHaveTitle(/Playwright/)
})