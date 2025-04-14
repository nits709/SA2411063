//  in pw there are 3ways we can take a screeshots
// 1.  application page appears on browser view screenshot, 2 fullpage, 3. locator/element screenshot.

import { test, expect } from '@playwright/test';

test.skip('browser view', async ({ page }) => {
    await page.goto('http://demoblaze.com')
    await page.waitForTimeout(2000);
    //await page.screenshot({path:'HomePage.png'});  // syntax.

    await page.screenshot({ path: 'tests/screenshots/BrowserView/' + Date.now() + '_HomePage.png' });  // syntax.

})

test.skip('fullPage view', async ({ page }) => {
    await page.goto('http://demoblaze.com')
    await page.waitForTimeout(2000);
    //await page.screenshot({path:'HomePage.png'});  // syntax.

    await page.screenshot({ path: 'tests/screenshots/fullPage/' + Date.now() + '_FullPage.png',fullPage:true });  // syntax.

})


test('locator screenshot', async ({ page }) => {
    await page.goto('http://demoblaze.com')
    await page.waitForTimeout(5000);
    //await page.screenshot({path:'HomePage.png'});  // syntax.

    await page.locator('.d-block.img-fluid').first().screenshot({ path: 'tests/screenshots/locators/' + Date.now() + '_carousel.png'});  // syntax.

})