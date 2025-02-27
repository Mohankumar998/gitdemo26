const { test, expect } = require('@playwright/test')
const fs = require('fs')

// test('Get API', async ({request})=>{
//     // const response = await request.get('url',{headers,data:{}})

//     const getallusers = await request.get('https://reqres.in/api/users?page=2')


//     // whether it is getting the response are not (like 200, 400, 404), below is the following assertion
//     expect(getallusers.ok()).toBeTruthy()
//     // verify the expected status code
//     expect(getallusers.status()).toBe(200)
//     // printing the response body
//     console.log(await getallusers.json())

//     const response = await getallusers.json()

//     expect(response.page).toBe(2)
//     expect(response).toHaveProperty('total_pages')
//     expect(response.data[2].email).toBe('tobias.funke@reqres.in')
//     expect(response.data[0].avatar).toBe('https://reqres.in/img/faces/7-image.jpg')
// })

// POST API =============================================================================================

// test('POST API', async ({ request }) => {
//     const createuser = await request.post('https://reqres.in/api/users',{
//         data: {

//         "name": "Mohan",
//         "job": "leader"
//     }
// })
//     expect(createuser.ok()).toBeTruthy()
//     expect(createuser.status()).toBe(201)

//     console.log(await createuser.json())

//     const response = await createuser.json()
//     expect(response.name).toBe('Mohan')
//     expect(response.job).toBe('leader')

//     console.log(response.id)
//     console.log(response.createdAt)
// })

// Real-time apis =====================================================================================

// test('Playwright Test case - understanding get method', async ({ request }) => {

//     const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC'

//     const headers = {
//         "cookie":"orangehrm=5vpll926pjnd9s6pj5q5pqlc7a",
//         "host": "opensource-demo.orangehrmlive.com",
//         "referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
//     }

//     const getemp = await request.get(url,{headers})

//     expect(getemp.ok()).toBeTruthy()
//     expect(getemp.status()).toBe(200)


//     const responsebody =await getemp.json()

//     console.log(responsebody)

//     // Ensure the directory exists
//     const dir = "apiresponses"
//     if(!fs.existsSync(dir)){
//         fs.mkdirSync(dir,{recursive:true}) // create directory recursively
//     }
    
//     // Write the response body to a file
//     fs.writeFileSync("apiresponses/getres.txt", JSON.stringify(responsebody,null, 2))
// })
//================================================================================================================================        

// test('Playwright Test case - understanding post method', async ({ request }) => {

//     const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees'
//     const headers = {
//         "cookie":"orangehrm=5vpll926pjnd9s6pj5q5pqlc7a",
//         "origin":"https://opensource-demo.orangehrmlive.com"    
//     }

//     const payload = {
//         "firstName": "Prathap",
//         "middleName": "",
//         "lastName": "Kv",
//         "empPicture": null,
//         "employeeId": "232323"
//     }
    

//     const createemp = await request.post(url,{headers,data:payload})

//     expect(createemp.ok()).toBeTruthy()
//     expect(createemp.status()).toBe(200)


//     const responsebody =await createemp.json()

//     console.log(responsebody)

//     // Ensure the directory exists
//     const dir = "apiresponses"
//     // if(!fs.existsSync(dir)){
//     //     fs.mkdirSync(dir,{recursive:true}) // create directory recursively
//     // }
    
//     // Write the response body to a file
//     fs.writeFileSync("apiresponses/getres.txt", JSON.stringify(responsebody,null, 2))
// })


// test('Playwright Test case - understanding put method', async ({ request }) => {

//     const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/167/personal-details'
//     const headers = {
//         "cookie":"orangehrm=5vpll926pjnd9s6pj5q5pqlc7a",
//         "referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/167"    
//     }

//     const payload = {
//     "lastName": "KK",
//     "firstName": "Prathap",
//     "middleName": "abc",
//     "employeeId": "232323",
//     "otherId": "",
//     "drivingLicenseNo": "577564",
//     "drivingLicenseExpiredDate": null,
//     "gender": 1,
//     "birthday": null
//     }
    

//     const editemp = await request.put(url,{headers,data:payload})

//     expect(editemp.ok()).toBeTruthy()
//     expect(editemp.status()).toBe(200)


//     const responsebody =await editemp.json()

//     console.log(responsebody)

//     // Ensure the directory exists
//     const dir = "apiresponses"
//     // if(!fs.existsSync(dir)){
//     //     fs.mkdirSync(dir,{recursive:true}) // create directory recursively
//     // }
    
//     // Write the response body to a file
//     fs.writeFileSync("apiresponses/putres.txt", JSON.stringify(responsebody,null, 2))
// })


test('Playwright Test case - understanding delete method', async ({ request }) => {

    const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees'
    const headers = {
        "cookie":"orangehrm=5vpll926pjnd9s6pj5q5pqlc7a",
        "referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/167"    
    }

    const payload = {"ids":[167]}
    

    const deleteemp = await request.delete(url,{headers,data:payload})

    expect(deleteemp.ok()).toBeTruthy()
    expect(deleteemp.status()).toBe(200)


    const responsebody =await deleteemp.json()

    console.log(responsebody)

    // Ensure the directory exists
    const dir = "apiresponses"
    // if(!fs.existsSync(dir)){
    //     fs.mkdirSync(dir,{recursive:true}) // create directory recursively
    // }
    
    // Write the response body to a file
    fs.writeFileSync("apiresponses/deleteres.txt", JSON.stringify(responsebody,null, 2))
})
