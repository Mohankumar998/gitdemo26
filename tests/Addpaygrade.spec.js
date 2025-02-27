const { test, expect } = require('@playwright/test');

test('Verify user can add the pay grade ', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.locator("img[alt='company-branding']")).toBeVisible()

  await page.locator("input[name='username']").fill("Admin")
  await page.locator("input[type='password']").fill("admin123")
  await page.locator("button[type='submit']").click()

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  await page.locator("//span[text()='Admin']").click()
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
  await page.locator("//span[normalize-space(text())='Job']").click()
  await page.locator("(//a[@role='menuitem'])[2]").click()
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewPayGrades')
  await page.locator("//button[contains(.,'Add')]").click()
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/payGrade')
  await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Pay grade 11")
  await page.locator("//button[@type='submit']").click()
});