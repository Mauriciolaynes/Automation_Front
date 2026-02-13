import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    private readonly page: Page;
    private readonly firstProductAddBtn: Locator;
    private readonly cartLink: Locator;
    private readonly checkoutBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstProductAddBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartLink = page.locator('.shopping_cart_link');
        this.checkoutBtn = page.locator('[data-test="checkout"]');
    }

    async addBackpackToCart() {
        await this.firstProductAddBtn.click();
    }

    async goToCart() {
        await this.cartLink.click();
    }

    async startCheckout() {
        await this.checkoutBtn.click();
    }
}