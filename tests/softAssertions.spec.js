import {test, expect} from '@playwright/test';

test.skip("softassertions",async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

    //1. expect(locator).toBeEnabled()
    const searchField = await page.locator('#small-searchterms');
    await expect(searchField).toBeEnabled();
    console.log("hard assertion")

})

test("hardAssertions",async ({page})=>{


    await page.goto("https://demoblaze.com");
    // console.log("A")
    // await expect(page).toHaveTitle('STORE123')  // Hard assertions
    // console.log("B")
    // console.log("C")
    // console.log("D")



// soft assertions

    console.log("A")
    await expect.soft(page).toHaveTitle('STORE123')
    console.log("B")
    console.log("C")
    console.log("D")
    


})