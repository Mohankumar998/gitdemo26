import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('#app div').filter({ hasText: 'LoginUsername : AdminPassword' }).nth(3).click();
  await page.getByText('LoginUsername : AdminPassword').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Time at Work')).toBeVisible();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByPlaceholder('First Name').fill('Ranjan'); 
  await page.getByPlaceholder('Middle Name').fill('mmn');
  await page.getByPlaceholder('Last Name').fill('GH');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('heading', { name: 'Personal Details' }).click();
});