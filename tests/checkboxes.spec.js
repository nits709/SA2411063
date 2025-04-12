//.form-check-inline input[type='checkbox']

import {test, expect} from '@playwright/test';

test('checkbox',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')


    // click on monday checkbox
    //await page.locator("//input[@id='monday' and @type='checkbox']").check();

        //Multiple checboxes
        const checkbox =  await page.locator(".form-check-inline input[type='checkbox']") ; 
        const cCount = await checkbox.count();
        console.log("number of checkbox "+ cCount);  // 7 checkbox


        
        for(let i=0;i<cCount;i++){
            await checkbox.nth(i).click();
        }

        await page.waitForTimeout(2000);


        for(let i=0;i<cCount;i++){
            if(await page.locator(checkbox)){
                await checkbox.nth(i).click();
            }
        }

        await page.waitForTimeout(2000);




})