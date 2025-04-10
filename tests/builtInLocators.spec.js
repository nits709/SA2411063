
import {test, expect} from '@playwright/test';

test('buildInLocators',async ({page})=>{


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible(); // this will check the existence of the element on page.

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button',{type:'submit'}).click();

    const name =await page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/span/p').textContent();
    const userName = await page.getByText(name);

    await expect(page.getByText(name)).toBeVisible();  // 1st

    //await expect(userName).toBeVisible(); // 2nd

})
