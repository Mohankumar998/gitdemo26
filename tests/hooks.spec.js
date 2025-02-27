// // Hooks ============================================================================================================================

// const { test, expect } = require('@playwright/test');
// test.afterAll(() => {
//     console.log("after all- after all test cases executed")
// })
// test.afterEach(() => {
//     console.log("this should print after each test")
// })
// test.beforeEach(() => {
//     console.log("this should print before each")
// })
// test.beforeAll(() => {
//     console.log("before all once at the begining of the test")
// })
// test("Test case 1", async () => {

//     console.log("this is test 1")
// })
// test("Test case 2", async () => {

//     console.log("this is test 2")
// })
// test("Test case 3", async () => {

//     console.log("this is test 3")
// })
// test("Test case 4", async () => {

//     console.log("this is test 4")
// })


// // Grouping the test case =========================================================

// // test.describe("Group 1", async()=>{

// //     test("Test 1", async()=>{

// //     })
// //     test("Test 2", async()=>{

// //     })

// // })

// // test.describe("Group 2", async()=>{
// //     test("Test 3", async()=>{

// //     })
// //     test("Test 4", async()=>{

// //     })

// // })

// // Sub-Grouping ===================================================================================


// test.describe("Group 1", async () => {
//     test.describe("Sub-Group 1", async () => {


//         test("Test 1", async () => {

//         })
//         test("Test 2", async () => {

//         })

//     })

//     test.describe("Sub-Group 2", async () => {
//         test("Test 3", async () => {

//         })
//         test("Test 4", async () => {

//         })

//     })
// })