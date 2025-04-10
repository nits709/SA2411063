import {test,expect} from '@playwright/test';

test('AssertionsinPlaywright',async ({page})=>{
    
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

     //1. expect(locator).toBeEnabled()
     const searchField = await page.locator('#small-searchterms');
     await expect(searchField).toBeEnabled();

    //2. expect(locator).toBeChecked()

    const radioSelection = await page.locator("gender-male");
    await radioSelection.click(); // this clicks select the male radio button
    await expect(radioSelection).toBeChecked(); // this validats male radio button checked or not.

    //3. checkbox validation

    const newsletterCheckbox = await page.locator('#Newsletter');
    await expect(newsletterCheckbox).toBeChecked(); // this validatsnewsleeter checkbox is checked.
   
    //text validation.  - fully qualified name of element
    await expect(page.locator('#register-button').toHaveText('Register'))


    // for partial
    await expect(page.locator('#register-button').toContainsText('Reg'));



     const firstNameField =   await page.locator('#FirstName');
    await firstNameField.fill("Nitin")
    await expect(firstNameField).toHaveValue('Nitin');
})