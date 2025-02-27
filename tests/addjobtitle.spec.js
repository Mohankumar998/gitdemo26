const { test, expect } = require('@playwright/test');
import dataforlogin from "../Testdata/Login/logindata.json"
import dataforjobtitle from "../Testdata/Admin/addjobtitle.json"

test('Verify user can add the job title', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
    
    await page.locator("input[name='username']").fill(dataforlogin.username)
    await page.locator("input[type='password']").fill(dataforlogin.password)
    await page.locator("button[type='submit']").click()

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.locator("//span[text()='Admin']").click()
    await page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[2]").click()
    await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[1]").click()
    await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click()

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle')
    let r = (Math.random() + 1).toString(36).substring(7);
    console.log(r)
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(dataforjobtitle.jobtitle+ r)
    await page.locator("(//textarea[contains(@class,'oxd-textarea oxd-textarea--active')])[1]").fill(dataforjobtitle.jobdiscription)
    await page.locator("button[type='submit']").click()

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')



  });
