import { test, expect } from '@playwright/test';

// format the code in VS | ctrl + a, (ctnl+k  + ctnrl+f)

test.skip('Simple Alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling Dialog Window (alert, Popups) Handler
    page.on('dialog', async dialog => {
        //asertion.
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
        //await dialog.dismiss();
    })

    await page.click('#alertBtn')
    await page.waitForTimeout(2000);

})


test.skip('confirmation Alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling Dialog Window (alert, Popups) Handler
    page.on('dialog', async dialog => {
        //asertion.
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();  // close by using Ok button
        //await dialog.dismiss();  // close by using cancel button.
    })

    await page.click('#confirmBtn')
    await page.waitForTimeout(2000);

})

test('prompt Alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling Dialog Window (alert, Popups) Handler
    page.on('dialog', async dialog => {
        //asertion.
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain("Harry Potter");
        await dialog.accept('John');  // close by using Ok button
        //await dialog.dismiss();  // close by using cancel button.
    })

    await page.click('#promptBtn')
    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello John! How are you today?");

    await page.waitForTimeout(2000);

})

