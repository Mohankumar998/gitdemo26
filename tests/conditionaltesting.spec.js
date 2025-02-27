const { browser, test, expect } = require('@playwright/test')

// test(' click one of the elemets that is visible out of two ', async ({page})=>{


//     await page.goto('https://the-internet.herokuapp.com/disappearing_elements')

//     const contactUS =  page.getByRole('link', {name: 'Contact Us'})
//     const portfolio =  page.getByRole('link', {name: 'Portfolio'})
//     const gallery = page.getByRole('link', {name: 'Gallery'})


//     if(await contactUS.isVisible())
//     {
//          await contactUS.click()
//          console.log("clicked on the contactus")
//     }
//     else if(await portfolio.isVisible())
//     {
//         await portfolio.click()
//         console.log("clicked on the portfolio")
//     }

//     await expect(page).toHaveURL(/.*contact-us|.*portfolio/)
// })

//=============================================================================================================================

// test(' click one of the elemets that is present  out of two ', async ({page})=>{


//     await page.goto('https://the-internet.herokuapp.com/disappearing_elements')

//     const contactUS =  page.getByRole('link', {name: 'Contact Us'})
//     const portfolio =  page.getByRole('link', {name: 'Portfolio'})
//     const gallery = page.getByRole('link', {name: 'Gallery'})


//     if(await contactUS)
//     {
//          await contactUS.click()
//          console.log("contactUS was present")
//     }
//     else if(await portfolio)
//     {
//         await portfolio.click()
//         console.log("portfolio was present")
//     }

//     await expect(page).toHaveURL(/.*contact-us|.*portfolio/)
// })

//=====================================================================================================================

// test('Based on BrowserName skip ', async ({page, browserName})=>{

// test.skip(browserName !== 'firefox', 'only relevant for firefox')

// await page.goto('https://the-internet.herokuapp.com/disappearing_elements')

// })

//==========================================================================================================================

// test('Based on BrowserName run the different script ', async ({ page, browserName }) => {

//     switch (browserName) {
//         case 'chromium':
//             await page.goto('https://books-pwakit.appspot.com/')
//             break;

//         case 'firefox':
//             await page.goto('https://www.flipkart.com/')
//             break;

//         case 'webkit':
//             await page.goto('https://www.rediff.com/')
//             break;

//     }
// })