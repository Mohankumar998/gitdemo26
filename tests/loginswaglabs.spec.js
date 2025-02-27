const { test, expect } = require('@playwright/test');

test('Verify login with standard user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html');
  
    await page.locator("input[data-test='username']").fill("standard_user")
    await page.locator("input[type='password']").fill("secret_sauce")
    await page.locator("input[type='submit']").click()

    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')

    
  });

  test('Verify login with locked out user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html');
  
    await page.locator("input[data-test='username']").fill("locked_out_user")
    await page.locator("input[type='password']").fill("secret_sauce")
    await page.locator("input[type='submit']").click()

    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible()
  });


  test('Verify login with problem user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html');
  
    await page.locator("input[data-test='username']").fill("problem_user")
    await page.locator("input[type='password']").fill("secret_sauce")
    await page.locator("input[type='submit']").click()
    
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
  });

  test('Verify login with performance glitch user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html');
  
    await page.locator("input[data-test='username']").fill("performance_glitch_user")
    await page.locator("input[type='password']").fill("secret_sauce")
    await page.locator("input[type='submit']").click()
    
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
  });


