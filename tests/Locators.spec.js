import {test, expect} from '@playwright/test';

test('locators',async ({page})=>{
     await  page.goto('https://demoblaze.com/')


     // click on login button - property.
     //await page.locator('id=login2').click();  // playwright format
     await page.click('id=login2'); // direct javascripts format.

     //  prvoide username - css
     await page.locator('id=loginusername').fill("pavanol");  // playwright format
    // await page.fill('id=loginusername','pavanol'); // direct javascripts format.

    //provide password -css
    await page.locator('id=loginpassword').fill("test@123");

    //click on loginbutton --- xpath.
    await page.locator("//button[normalize-space()='Log in']").click();

    // validation logout is visible or not
   const logOutElement =  await page.locator("//a[normalize-space()='Log out']");

   // to check the element in visible over page
    await expect(logOutElement).toBeVisible();

    await page.close();
    page.waitForSelector()

})