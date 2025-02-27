const { test, expect } = require('@playwright/test');


test('verify log visible', async ({ page }) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await expect(page.locator("//img[@alt='company-branding']")).toBeVisible();


 
});

test('verify login with credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  // await page.locator("input[placeholder='Username']").fill("Mohan");
  // await page.locator("input[placeholder='Username']").clear()

  // await page.locator("input[placeholder='Username']").press("ctrl+A")
  // await page.locator("input[placeholder='Username']").press("Backspace")
 
  // await page.keyboard.press("locator","Enter")
  //npx playwright test --reporter=allure-playwright
  // allure generate "./allure-results" -o "./allure-report"
  // allure open ./allure-report

  await page.locator("input[placeholder='Username']").fill("Admin");
  await page.locator("input[type='password']").fill("admin123");
  await page.locator("input[type='password']").press("Enter")
  // await page.locator("button[type='submit']").click();
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

});


test('verify invalid username, valid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator("input[placeholder='Username']").fill("Adminwww");
  await page.locator("input[name='password']").fill("admin123");
  await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click();
  await expect (page.getByText('Invalid Credentials')).toBeVisible();

});


test('verify valid username, invalid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator("input[placeholder='Username']").fill("Admin");
  await page.locator("input[name='password']").fill("admin12345");
  await page.locator("button[type='submit']").click();
  await expect (page.getByText('Invalid Credentials')).toBeVisible();
  

});