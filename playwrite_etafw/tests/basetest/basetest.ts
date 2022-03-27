import { test } from '@playwright/test';
import config from '../../playwright.config'

test.beforeEach(async ({ page}) => {
    await page.goto(config.use.baseURL);
});

test.beforeAll(async () => {
    console.log('before alll');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.afterEach(async ({ page }) => {
    page.close();
});

