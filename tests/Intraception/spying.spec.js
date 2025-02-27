const{test,expect} = require("@playwright/test")

test.describe('verifying PIM calls spying', () => {
    test('spying class example', async({page})=>{

       // Navigate to the app and perform login
       await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       
       await page.locator("input[name='username']").fill("Admin")
       await page.locator("input[type='password']").fill("admin123")
       await page.locator("button[type='submit']").click()
       
       // verifying the url 
       await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

       // Navigate to the pim module
       await page.locator('//span[text() = "PIM"]').click()

       const getEmployeespromise = page.waitForResponse(request =>
          request.url().includes('/api/v2/pim/employees') && request.request().method()=='GET'
       )

       const empstatuspromise = page.waitForResponse(request =>
        request.url().includes('/api/v2/admin/employment-statuses') && request.request().method()=='GET'
       )

       const jobtitlepromise = page.waitForResponse(request =>
        request.url().includes('/api/v2/admin/job-titles') && request.request().method()=='GET'
       )

       const subunitspromise = page.waitForResponse(request =>
        request.url().includes('/api/v2/admin/subunits') && request.request().method()=='GET'
       )

    //    const Mohanpromise = page.waitForResponse(request =>
    //     request.url().includes('/mohan') && request.request().method()=='GET'
    //    )
       // wait for and verify the response 

       const getEmployeeresponse = await getEmployeespromise
       expect(getEmployeeresponse.status()).toBe(200)

       const empstatusresponse = await empstatuspromise
       expect(empstatusresponse.status()).toBe(200)

       const jobtitleresponse = await jobtitlepromise
       expect(jobtitleresponse.status()).toBe(200)

       const subunitsresponse = await subunitspromise
       expect(subunitsresponse.status()).toBe(200)
     
    //    const Mohanresponse = await Mohanpromisepromise
    //    expect(Mohanresponse.status()).toBe(200)
    })
})