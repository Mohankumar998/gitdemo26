// .only  /  .skip  / .fixme  / .fail


const { test, expect } = require('@playwright/test');
test.describe("Group 1", async () => {

    test("Test 1", async () => {
        
        console.log("test 1")
        test.fixme()
    })
    test("Test 2", async () => {
        console.log("test 2")

    })

})

test.describe("Group 2", async () => {
    test("Test 3", async () => {
        console.log("test 3")

    })
    test("Test 4", async () => {
        test.fail()
        expect(2).toBe(6)
        console.log("test 4")

    })

})