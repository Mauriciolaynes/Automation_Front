import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './src',

    // Tiempo máximo de espera para cada acción (ms)
    timeout: 30 * 1000,

    expect: {
        timeout: 5000
    },

    // Configuración del servidor y navegador
    use: {
        baseURL: 'https://www.saucedemo.com/',

        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry',

        headless: false,
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        }
    ],

    reporter: 'html',
});