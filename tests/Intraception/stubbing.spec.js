const{test, expect} = require('@playwright/test')
test.describe('Verify stubbing get employee api',() =>{
    test('stubbing examplpe', async ({page})=>{
        // Intercept the GET request and stub the response
        await page.route(
            "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC"
            async (route) => {
                await route.fulfill({
                    status:200,
                    contentType: "application/json"
                    body: JSON.stringify({

                    }) 
                })
            }

        )
    })
})