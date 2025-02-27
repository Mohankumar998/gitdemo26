const { test, expect,browser,chromium } = require('@playwright/test')
const fs = require('fs')
// const path = require('path')


// test('working with checkbox element',async({page})=>{

//      await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

//      await page.locator('//input[@type="checkbox"]').check()
//      await expect(page.locator('//input[@type="checkbox"]')).toBeChecked()

//      await page.locator('//input[@type="checkbox"]').uncheck()
//      await expect(page.locator('//input[@type="checkbox"]')).not.toBeChecked() 


//     //  const ischeck = await page.locator('//input[@type="checkbox"]').isChecked()
//     //  console.log(ischeck)

//     //  if(ischeck)
//     //  {
//     //          await page.locator('//input[@type="checkbox"]').uncheck()
//     //  }

//     //  if(!ischeck)
//     //     {
//     //             await page.locator('//input[@type="checkbox"]').check()
//     //     }

// })

// test('check the checkbox in the PIM page',async({page})=>{

//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     await page.locator("input[placeholder='Username']").fill("Admin")
//     await page.locator("input[name='password']").fill("admin123")
//     await page.locator("button[type='submit']").click()

//     await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()

//     const checkboxes = ['input[value="2"]', 'input[value="4"]', 'input[value="6"]'] // specific checkbox

//     for(let checkbox of checkboxes)
//     {
//         const ischeck = await page.locator(checkbox).isChecked()
//         if(!ischeck)
//         {
//             await page.locator(checkbox).check({force:true})

//         }

//     }


//     await page.waitForTimeout(5000)
// })

// test('check the all checkbox ',async({page})=>{

//     await page.goto('https://demo.guru99.com/test/radio.html')

//     const checkboxes = await page.$$('[type="checkbox"]')

//     for(let checkbox of checkboxes)
//     {
//         const ischeck = await checkbox.isChecked()
//         if(!ischeck)
//         {
//             await checkbox.check({force:true})
//         }
//     }
//           await page.waitForTimeout(5000)

// })


// test('working with radio buttons ',async({page})=>{


// await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

// await expect(page.locator('input[value="m"]')).toBeChecked()
// await expect(page.locator('input[value="f"]')).not.toBeChecked()

// await page.locator('input[value="f"]').check()

// await expect(page.locator('input[value="m"]')).not.toBeChecked()
// await expect(page.locator('input[value="f"]')).toBeChecked()

// const ischeck = await page.locator('input[value="f"]').isChecked()
// console.log(ischeck)

// await page.waitForTimeout(5000)

// })

// test('working with drop down ',async({page})=>{

// await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

// // Text

// // await page.locator('').selectOption("Anguilla")

// // await page.locator('#country').selectOption({label :"Anguilla"})

// // Value

// //   await page.locator('#country').selectO#countryption("7")

// //   await page.locator('#country').selectOption({value:"8"})

// // Index

// //   await page.locator('#country').selectOption({index:2})

// // const options = await page.$$('#country>option')
// // console.log(options.length)

// // await expect(page.locator('#country>option')).toHaveCount(248)

// const dropdown =  page.locator('#country')  // use the correct selector for the dropdown

// // get all the option elements within the dropdown
// const options = await dropdown.locator('option').allTextContents()
// console.log(options)

// await page.waitForTimeout(5000)


// })



// Text==================================================================================================

// test('working with text ',async({page})=>{


// await page.goto('https://www.flipkart.com/')
// // await expect(page.locator('//a[@aria-label="Mobiles"]/div/div/span')).toHaveText("Mobiles")

// // const textvalue = await page.locator('//a[@aria-label="Mobiles"]/div/div/span').textContent()
// // console.log(textvalue)

// // const textvalues = await page.locator('//a[@class="_1ch8e_"]/div/div/span/span').allTextContents()
// // console.log(textvalues)

// // for(let i of textvalues)
// // {
// //     console.log(i)
// // }

// // const textvalue = await page.locator('//a[@aria-label="Mobiles"]/div/div/span').innerText()
// // console.log(textvalue)


// const textvalues = await page.locator('//a[@class="_1ch8e_"]/div/div/span/span').allInnerTexts()
// console.log(textvalues)

// for(let i of textvalues)
// {
//     console.log(i)
// }


// })


// Alerts ===========================================================================================

// test('working with alerts ',async({page})=>{


// await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

// await page.locator('//button[@onclick="jsAlert()"]').click()

// // click on ok ===

// page.on('dialog', async dialog =>{
//     expect(dialog.type()).toBe('I am a JS Alert')
//     await dialog.accept()
// })




//    await page.waitForTimeout(5000)

// })

// test('working with confirm-alerts ',async({page})=>{    


//     await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
//     page.locator('//button[@onclick="jsConfirm()"]').click()

    
//     // page.on('dialog', async dialog => {
//     //     expect(dialog.type()).toBe('confirm')
//     //     await dialog.accept()
//     // })
//     // await page.waitForTimeout(5000)


//     // click on cancel ===
// page.on('dialog', async dialog =>{
//     expect(dialog.type()).toBe('confirm')
//     await dialog.dismiss()
// })

//      await page.waitForTimeout(5000)

// })

// prompt alerts =============================================================

// test('working with prompt-alerts', async ({ page }) => {    // prompt alerts


//     await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
//      page.locator('//button[@onclick="jsPrompt()"]').click()

//     // click on ok
//     // page.on('dialog', async dialog => {
//     //     expect(dialog.type()).toBe('prompt')
//     //     await dialog.accept("Mohankumar") 
//     // })


//     // click on cancel
//     page.on('dialog', async dialog => {
//         expect(dialog.type()).toBe('prompt')
//         await dialog.dismiss()
//     })

//     await page.waitForTimeout(5000)
// })


// Drag and Drop ==================================================

// test('working with drag and drop', async ({ page }) => {  
    
//    await page.goto('https://kitchen.applitools.com/ingredients/drag-and-drop')
// //    await page.locator('#menu-fried-chicken').dragTo(page.locator('#plate-items'))

// //    await page.locator('#menu-hamburger').dragTo(page.locator('#plate-items'))

// //    await page.locator('#menu-ice-cream').dragTo(page.locator('#plate-items'))

//       await page.waitForTimeout(5000)
// })


// LInks==================================

// test('working with links', async ({ page }) => {  

// await page.goto('https://trello.com/')
// await page.click('//a[text() ="Log in"]')

// await page.getByTestId('username').fill('mohankumar@gmail.com')

// })

// test('working with links', async ({ page }) => {  

//     await page.goto('https://www.wikipedia.org/')
//     // await page.click('//span[text() = "Commons"]')

//     // await expect(page).toHaveURL('https://commons.wikimedia.org/wiki/Main_Page')
//     // await page.goBack()

//     await page.click('//span[text() = "Wikivoyage"]')
//     await expect(page).toHaveURL('https://www.wikivoyage.org/')
//     await page.goBack()

//     await page.waitForTimeout(5000)

//     await page.goForward()
// })


// Interviwew question 
// test('working with links', async ({ page }) => {  

//     await page.goto('https://the-internet.herokuapp.com/windows')
//     await page.click('//a[text() = "Click Here"]')

//     const newpagepromise = page.waitForEvent('popup')
//     const newpage = await newpagepromise
//     await newpage.waitForLoadState()

//     const textvalue = await newpage.locator('//h3[text() = "New Window"]').textContent()
//     console.log("Text on the new page", textvalue)

//     await page.waitForTimeout(5000)
// })


// Tables ===============================================

// test('working with tables', async ({ page }) => {  

// await page.goto('https://the-internet.herokuapp.com/tables#edit')
// await expect(page.locator('//table[@id="table1"]//tbody//tr')).toHaveCount(4)



// await page.waitForTimeout(5000)
// })


// New context==============================================

// test('working with New Context', async () => {  

//  const browser = await chromium.launch({headless:false})
//  const context1 = await browser.newContext()
//  const context2 = await browser.newContext()
  
//  const page = await context1.newPage()
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.locator("input[placeholder='Username']").fill("Admin");
//   await page.locator("input[name='password']").fill("admin123");
//   await page.locator("button[type='submit']").click();
//   await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  
//   const page2 = await context2.newPage()
//   await page2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page2.locator("input[placeholder='Username']").fill("mohang");
//   await page2.locator("input[name='password']").fill("mohang123");
//   await page2.locator("button[type='submit']").click();
//   await expect(page2).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

//   await page.waitForTimeout(10000)

// })


// Uploadfile ===============================

// test('working with uploading file', async ({page}) => {  

// await page.goto('https://the-internet.herokuapp.com/upload')
// await page.locator('#file-upload').setInputFiles('./Testdata/file/Screenshot.png.png')

// await page.locator('#file-submit').click()

// await page.waitForTimeout(5000)
// })

// uploading the multiple files

test('working with uploading multiple file', async ({page}) => {  

await page.goto('https://blueimp.github.io/jQuery-File-Upload/')
await page.locator('//input[@type="file"]').setInputFiles(['./Testdata/file/Screenshot.png.png', './Testdata/file/Screenshot111.png'])

await expect(page.locator('p.name').nth(0)).toHaveText('Screenshot.png.png')
await expect(page.locator('p.name').nth(1)).toHaveText('Screenshot111.png')

await page.waitForTimeout(5000)
})

// Downloading the file ========================================

// test('working with downloading single file and assert', async ({page}) => {  

//     await page.goto('https://the-internet.herokuapp.com/download')
//      const [download] = await Promise.all([
//         page.waitForEvent('download'),
//         page.locator('//a[text() = "test.jpg"]').click()
//      ])

//      const suggestFilename = download.suggestedFilename()
//      const filepath = 'downloads/' + suggestFilename
//      await download.saveAs(filepath)
//      expect(fs.existsSync(filepath)).toBeTruthy()


// })


// test('working with downloading multiple file and assert', async ({page}) => {  

//     await page.goto('https://the-internet.herokuapp.com/download')
//     const filenames = ['Cat.jpg', 'data-flow.png']
//     for(const filename of filenames){
//      const [download] = await Promise.all([
//         page.waitForEvent('download'),
//         page.locator(`text=${filename}`).click()
//      ])

//      const suggestFilename = download.suggestedFilename()
//      const filepath = 'downloads/' + suggestFilename
//      await download.saveAs(filepath)  
//      expect(fs.existsSync(filepath)).toBeTruthy()

//     }
// })


// test('working with direct downloading file and assert', async ({page}) => {  

//     // Define the image url 
//     const imageURL = 'https://documents.iplt20.com/ipl/IPLHeadshot2024/2.png'

//     // Fetch the image using playwright request API
//     const response = await page.request.get(imageURL)

//     // Ensure the response is ok
//     if(response.ok()) {
//         // get the image buffer
//         const buffer = await response.body()

//         // Define the 'downloads/' folder path inside your project folder
//         const downloadsFolder = path.join("/../..",'downloads')

//         //__dirname+"/../..",'downloads'

//         // check if 'downloads' folder exist, if not, create it
//         // if(!fs.existsSync(downloadsFolder)){
//         //     fs.mkdirSync(downloadsFolder, { recursive:true})
//         // }

//         // Define the file name and path to save the image inside the 'downloads' folder
//         const savepath = path.join(downloadsFolder, 'virat_image.jpg')

//         // write the buffer to a file
//         fs.writeFileSync(savepath, buffer)
//         console.log(`Image downloaded successfully and saved to ${savepath}`)
//     }
//     else
//     {
//         console.log(`Failed to download the image. Status code: ${response.status()}`)
//     }
// })


// Scrolling =======================================================================================================


// test('working with scrolling', async ({page}) => {  


// await page.goto('https://www.imdb.com/chart/top/')
// await page.locator('//h3[text()="128. Hamilton"]').scrollIntoViewIfNeeded()

// await page.locator('//h3[text()="128. Hamilton"]').click()
// await expect(page).toHaveURL('https://www.imdb.com/title/tt8503618/?ref_=chttp_t_128')

// })

// Iframes ==========================================================================

// test('working with iframes', async ({page}) => {  

//     await page.goto('https://jqueryui.com/checkboxradio/')
//     await page.frameLocator('//iframe[@class="demo-frame"]').locator('//label[@for="checkbox-1"]').check()
//     await page.waitForTimeout(5000)
// })

// test('working with shadow dom', async ({page}) => {  

//     await page.goto('https://books-pwakit.appspot.com/explore')
//     await page.locator('#input').fill('science')
//     await page.locator('#input').press('Enter')
//     // await expect(page).toHaveURL('https://books-pwakit.appspot.com/explore?q=science')
//     await expect(page.locator('/html/body/book-app//main/book-explore//section/ul/li[2]/book-item//a/div[1]/div/div[1]/h2')).toBeVisible()
//     // text=Before Big Science
//     // a > div.info > div > div.title-container > h2   === copy selector
//     // /html/body/book-app//main/book-explore//section/ul/li[2]/book-item//a/div[1]/div/div[1]/h2 == copy xpath
//     await page.waitForTimeout(5000)

// })

// test('working with shadow dom ex 2', async ({page}) => {  

//   await page.goto('http://watir.com/examples/shadow_dom.html')
//   await page.locator('input[type="text"]').fill("Mohan")
//   await page.waitForTimeout(5000)
//   await page.reload()
// //   await page.keyboard.press('F5')
 
// })

//Srennshot===============================================================================================

// test('page screenshot', async ({page}) => {  
// await page.goto('https://www.flipkart.com/')
// await page.waitForTimeout(5000)
// await page.screenshot({path:'tests/screenshots/Homepage.png'})

// })
//==============================================================================================================
// test('Full page screenshot', async ({page}) => {  
//     await page.goto('https://www.rediff.com/')
//     await page.waitForTimeout(5000)
//     await page.screenshot({path:'tests/screenshots/Fullpage.png', fullPage:true})
    
//     })

//=========================================================================================================================

// test('particular section screenshot', async ({page}) => {  
//     await page.goto('https://www.flipkart.com/')
//     await page.waitForTimeout(5000)
//     await page.locator("(//img[@loading='lazy'])[2]").screenshot({path:'tests/screenshots/'+Date.now()+'.png'})
    
//     })