import {test,expect} from '@playwright/test';

test.skip('Single File Upload',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.waitForSelector('#singleFileInput');
    await page.locator('#singleFileInput').click();

    await page.locator('#singleFileInput').setInputFiles('tests/uploadFiles/Assertions.spec copy.js');
})


test('Mulitple Files Upload',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.waitForSelector('#multipleFilesInput');
    await page.locator('#multipleFilesInput').click();

    await page.locator('#multipleFilesInput').setInputFiles(['tests/uploadFiles/Assertions.speccopy.js',
        'tests/uploadFiles/Assertions.speccopy.js'] 
        
        
    );

 await   page.waitForTimeout(5000);
})
