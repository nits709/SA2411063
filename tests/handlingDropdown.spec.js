import {test, expect} from '@playwright/test';

    test('handling dropdown',async ({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com")

        //multiple ways to select option from the dropdown.1. label, visible text, by using value, index
        //await page.locator('#country').selectOption({label: 'India'})

        //await page.locator('#country').selectOption('India') // visible text

        //await page.locator('#country').selectOption({value: 'uk'}) // by using value

        //await page.locator('#country').selectOption({index: 3}) // by using index

        //await page.selectOption('#country','India')

            //Assetions on dropdown Aaproach1
            //1) check the number of options in dropdown.

        //    const option = await page.locator('#country option');
        //    await expect(option).toHaveCount(10);

            //2) check number of options in dropdown - approach 2
                const options = await page.$$('#country option');
                console.log("Number of options: "+ options.length);
               // await expect(options.length).toBe(10);
                let status = false;
                for(const option of options){
                   // console.log(await option.textContent());
                   let fa = option.textContent();
                   
                   if(fa.includes('France')){
                    status=true;
                    break;
                   }
                }
                    console.log("status "+ status)
                expect(status).toBeTruthy();








        await page.waitForTimeout(5000);

    })