const { test, expect } = require('@playwright/test');
test.afterAll(() => {
    console.log("after all- after all test cases executed")
})
test.afterEach(() => {
    console.log("this should print after each test")
})
test.beforeEach(() => {
    console.log("this should print before each")
})
test.beforeAll(() => {
    console.log("before all once at the begining of the test")
})

test.describe("Group 1", async()=>{

    test("Test 1",{tag: "@regression"}, async()=>{
        console.log("test 1")
    })
    test("Test 2",{tag: "@smoke"}, async()=>{
        console.log("test 2")

    })

})

test.describe("Group 2", async()=>{
    test("Test 3", async()=>{
        console.log("test 3")

    })
    test("Test 4", async()=>{
        console.log("test 4")

    })

})