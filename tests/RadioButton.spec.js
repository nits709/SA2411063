
import {test, expect} from '@playwright/test';

test('radio button',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //radio button.
    await page.locator('id=male').check() // select the radio option
   // await page.check('id=male');  // 2nd approach to select.

   await expect(await page.locator('id=male')).toBeChecked();
   await expect(await page.locator('id=male').isChecked()).toBeTruthy();  // true - male has been selected.

   await expect(await page.locator('id=female').isChecked()).toBeFalsy();  // validate femail radiobutton

    await page.waitForTimeout(5000); // pausing code.

})