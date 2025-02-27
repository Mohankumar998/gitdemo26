const { test, expect } = require('@playwright/test');
import { loginpage } from "../pageObjects/loginPage.po"
import data from "../Testdata/Login/logindata.json"

test.describe('Login page test',() => {

  let login
  test.beforeEach(async ({page}) => {
     login = new loginpage(page)
     await login.launchUrl()
  })


  test('Verify logo visibility',  async () => {
    
    await login.launchUrl()
    await login.logoVisible()

  });

  // .env example ===================================================
  test('Verify login with valid crendentials', async () => {

    await login.loginwithCreds(data.username, data.password)
    await login.loginSuccess()

  });
  
  test('Verify login with valid username and invalid password', async () => {
  
  
    await login.loginwithCreds(data.username, data.invalidpassword)
    await login.loginFailure()  
  
  });
  
  test('Verify login with invalid username and valid password', async () => {
  
    await login.loginwithCreds(data.invaliduser, data.password)
    await login.loginFailure()  
  
  });
  
  test('Verify login with invalid username and invalid password', async () => {
   
    await login.loginwithCreds(data.invaliduser, data.invalidpassword)
    await login.loginFailure()  

  });
  

})



