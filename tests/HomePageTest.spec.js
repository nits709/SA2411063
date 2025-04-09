 //  const {test,expect} = require('@playwright/test');
 //fixtures in playwright.
    import {test,expect} from '@playwright/test';

    test('Home Page', async({page})=>{
      await  page.goto('https://demoblaze.com/') // goto function launch the application URL in playwright.

            // to get the title from the page.
            const pageTitle= await page.title();
            console.log("Page title is "+ pageTitle)

           // validate the title of the page. 
           await expect(page).toHaveTitle('STORE');

            const pageURL = await page.url();  
            console.log("Application URL "+ pageURL)
            await expect(page).toHaveURL('https://demoblaze.com/') ; 

           //close the application.
          await page.close();

    })