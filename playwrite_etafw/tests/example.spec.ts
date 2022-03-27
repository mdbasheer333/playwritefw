import { test, expect, Page } from '@playwright/test';
import LoginPage from '../pages/pageobjects/loginpage';
import {} from './basetest/basetest'


test.describe('New Todo', () => {

  test('my test', async ({ page }) => {

    await test.step('Log in', async () => {
      await page.locator('//*[@id="root"]/div/header[2]/div/ul/ul/li[3]/a').click();
      const login=new LoginPage(page);
      await login.loginToApp();
    });

    await test.step('Log in1', async () => {
      await page.locator('//*[@id="root"]/div/header[2]/div/ul/ul/li[3]/a').click();
      const login=new LoginPage(page);
      await login.loginToApp();
    });

  });

});
