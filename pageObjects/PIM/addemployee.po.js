const{test,expect}= require('@playwright/test');

exports.addemp =class addemp{

    constructor(page){
    this.page = page
    this.pimBtn = '//a[@href="/web/index.php/pim/viewPimModule"]'
    this.addempBtn = "(//a[@class='oxd-topbar-body-nav-tab-item'])[2]"
    this.firstnameInput = "//input[@placeholder='First Name']"
    this.middlenameInput = "//input[@placeholder='Middle Name']"
    this.lastnameInput = "//input[@placeholder='Last Name']"
    this.empid = "(//input[@class='oxd-input oxd-input--active'])[2]"
    this.saveBtn = "//button[@type='submit']"
    this.errormessge = `(//span[@class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"])[1]`
    }

    async gotoaddempPage()
    {
        await this.page.locator(this.pimBtn).click()
        await this.page.locator(this.addempBtn).click()

    }

    async filladdempDetails(firstname, middlename, lastname, employeeid )
    {
        await this.page.locator(this.firstnameInput).fill(firstname)
        await this.page.locator(this.middlenameInput).fill(middlename)
        await this.page.locator(this.lastnameInput).fill(lastname)
        await this.page.locator(this.empid).fill(employeeid)
        await this.page.locator(this.saveBtn).click()

    }
    
    async clickonSave()
    {
        await this.page.locator(this.saveBtn).click()

    }

    async errormessage()
    {
        await expect(this.page.locator(this.errormessge)).toBeVisible()   

    }
    

}