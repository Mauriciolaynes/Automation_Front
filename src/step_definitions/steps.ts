import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

Given('que el usuario abre la página de Sauce Demo', async function () {
    loginPage = new LoginPage(this.page);
    await loginPage.navigate();
});

Given('que el usuario ha iniciado sesión como {string}', async function (user) {
    // Reutilizamos el método login completo para ir rápido en este paso
    await loginPage.login(user, 'secret_sauce');
});

When('ingresa el usuario {string} y la contraseña {string}', async function (user, pass) {
    await loginPage.fillCredentials(user, pass);
});

When('hace clic en el botón de ingresar', async function () {
    await loginPage.clickLogin();
});

When('agrega el {string} al carrito', async function (producto) {
    // Nota: Idealmente esto iría en ProductsPage.ts
    await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
});

When('completa el checkout con {string}, {string} y {string}', async function (fn, ln, zp) {
    await this.page.click('.shopping_cart_link');
    await this.page.click('[data-test="checkout"]');
    await this.page.fill('[data-test="firstName"]', fn);
    await this.page.fill('[data-test="lastName"]', ln);
    await this.page.fill('[data-test="postalCode"]', zp);
    await this.page.click('[data-test="continue"]');
    await this.page.click('[data-test="finish"]');
});


Then('el sistema confirma la compra con {string}', async function (mensaje) {
    const confirmation = await this.page.locator('.complete-header').innerText();
    expect(confirmation).toBe(mensaje);
});

Then('debería ver el resultado esperado {string}', async function (resultado: string) {
    if (resultado === 'success') {
        // Verifica que la URL cambió a la página de inventario
        await expect(this.page).toHaveURL(/inventory/);
    } else {
        const error = await loginPage.getErrorMessage();

        if (resultado === 'locked') {
            // Caso para el usuario bloqueado
            expect(error).toContain('Sorry, this user has been locked out.');
        } else if (resultado === 'failure') {
            expect(error).toContain('Username and password do not match any user in this service');
        }
    }
});

When('va al carrito de compras', async function () {
    await this.page.click('.shopping_cart_link');
});

Then('el carrito debería mostrar el producto {string}', async function (nombreProducto) {
    const itemEnCarrito = this.page.locator('.inventory_item_name');

    await expect(itemEnCarrito).toBeVisible();

    await expect(itemEnCarrito).toHaveText(nombreProducto);
});