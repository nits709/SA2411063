
import {test, expect} from '@playwright/test';

test("LocateMultipleElementOnPage",async ({page}) =>{

    await page.goto("https://www.demoblaze.com/index.html");

    //const links = await page.$$('a');

    // for(const link of links){
    //       const linktext =  await link.textContent();
    //      console.log("total number of links "+ linktext);

    // }

    await page.waitForSelector('//*[@id="tbodyid"]//div/div/h4/a');
    const products   =   await page.$$('//*[@id="tbodyid"]//div/div/h4/a')  // return multiple element upto 7

         for(const product of products){
         const productName =  await product.textContent();
         console.log("name of products is "+ productName);

     }



})