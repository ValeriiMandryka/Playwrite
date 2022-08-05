const { expect } = require('@playwright/test');
exports.LoginPage = class LoginPages {

    

    constructor(page) {
        this.page = page;
        this.lostPasswordBtn = page.locator('//body//td/a')
        this.loginInputField =page.locator('#username')
        this.passwordInputField =page.locator('#password')
        this.submitBtn =page.locator('[type="submit"]')

    }
}