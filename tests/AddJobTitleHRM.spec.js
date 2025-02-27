const { test, expect } = require('@playwright/test');
import { addjob } from '../pageObjects/Admin/addjobtitlepage.po';
import { loginpage } from '../pageObjects/loginpage.po';
import data from "../Testdata/Login/logindata.json"
import dataforjobtile from "../Testdata/Admin/addjobtitle.json"


test.describe('Add jobtitle test page', () => {

  let addtitle
  let login
  test.beforeEach(async ({ page }) => {
    addtitle = new addjob(page)
    login = new loginpage(page)
    await login.launchUrl()
  })

  test('Verify user can add the job title', async () => {

    await login.loginwithCreds(data.username, data.password)
    await login.loginSuccess()
    await addtitle.gotoaddjobTitlePage()
    await addtitle.navigatedtojobtitlePage()
    await addtitle.filljobTitle(dataforjobtile.jobtitle, dataforjobtile.jobdiscription, dataforjobtile.addnote)
    await addtitle.viewjobList()
  })

  test('Verify user get error message for job title', async () => {

    await login.loginwithCreds(data.username, data.password)
    await login.loginSuccess()
    await addtitle.gotoaddjobTitlePage()
    await addtitle.navigatedtojobtitlePage()
    await addtitle.clickonSave()
    await addtitle.errorMessagevisible()

  })
})
  