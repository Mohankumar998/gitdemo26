const { test, expect } = require('@playwright/test');
import { loginpage } from '../pageObjects/loginpage.po';
import { addemp } from '../pageObjects/PIM/addemployee.po';
import data from "../Testdata/Login/logindata.json"
import dataforaddemp from "../Testdata/PIM/addemp.json"

test.describe('Add empployee test page', () => {

    let login
    let addemployee
    test.beforeEach(async ({ page }) => {
      addemployee = new addemp(page)
      login = new loginpage(page)
      await login.launchUrl()
    })
  
    test('Verify admin can add the employee', async () => {
  
      await login.loginwithCreds(data.username, data.password)
      await login.loginSuccess()
      await addemployee.gotoaddempPage()
      await addemployee.filladdempDetails(dataforaddemp.firstname, dataforaddemp.middlename, dataforaddemp.lastname, dataforaddemp.employeeid)
    
    })

    test('Verify admin get error message for add employee', async () => {
  
      await login.loginwithCreds(data.username, data.password)
      await login.loginSuccess()
      await addemployee.gotoaddempPage()
      await addemployee.clickonSave()   
      await addemployee.errormessage()  

    })
   
  })
