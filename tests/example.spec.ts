import { test, expect } from '@playwright/test';
import dotenv from "dotenv";

dotenv.config({
  path:`.env.test`
})

test('test', async ({ page, loginPage, framePage, wsPage, winPage, baseage }) => {
  await page.goto(process.env.BASE_URL);
});
