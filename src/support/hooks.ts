import { Before, After, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from '@playwright/test';

// Establece un timeout global mayor para todos los pasos
setDefaultTimeout(60000);

let browser: Browser;

BeforeAll({ timeout: 60000 }, async function () {
    browser = await chromium.launch({
        headless: false, // Cámbialo a true si no quieres ver la ventana
        slowMo: 100     // Opcional: hace que las acciones sean más visibles
    });
});

Before({ timeout: 60000 }, async function () {
    const context = await browser.newContext();
    this.page = await context.newPage();
});

After(async function () {
    await this.page?.close();
});

AfterAll(async function () {
    await browser?.close();
});