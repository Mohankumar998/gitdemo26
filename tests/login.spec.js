const { test, expect } = require('@playwright/test');
import logindata from "../Testdata/Login/logindata.json"

let page

test.describe("Verify the login functionality", async () => {

  test('Verify logo visible', async () => {


    await expect(page.locator("img[alt='company-branding']")).toBeVisible()
  });

  test('Verify login with valid crendentials', async () => {

    const cred = ["Admin", "admin123"]
    await page.locator("input[name='username']").fill(cred[0])
    await page.locator("input[type='password']").pressSequentially(cred[1], { delay: 1000 })
    await page.getByRole('button',{name:/Login/i}).click()

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')


  });

  test('Verify login with valid username and invalid password', async () => {


    await page.locator("input[name='username']").fill(logindata.password)
    await page.locator("input[type='password']").fill(logindata.invalidpassword)
    await page.locator("button[type='submit']").click()

    await expect(page.getByText('Invalid credentials')).toBeVisible()


  });

  test('Verify login with invalid username and valid password', async () => {


    await page.locator("input[name='username']").fill(logindata.invaliduser)
    await page.locator("input[type='password']").fill(logindata.password)
    await page.locator("button[type='submit']").click()

    await expect(page.getByText('Invalid credentials')).toBeVisible()


  });

  test('Verify login with invalid username and invalid password', async () => {
    const invalidusername1 = "Adminnn"
    const invalidpassword2 = "admin1234"


    await page.locator("input[name='username']").fill(invalidusername1)
    await page.locator("input[type='password']").fill(invalidpassword2)
    await page.locator("button[type='submit']").click()

    await expect(page.getByText('Invalid credentials')).toBeVisible()


  });
})

test.beforeEach(async (browser) => {

  page = await browser.newPage()
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})

test.afterEach(async () => {

  // Block of script
})


