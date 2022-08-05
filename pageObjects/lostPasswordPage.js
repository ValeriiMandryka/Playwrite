const { expect } = require('@playwright/test');
exports.LostPasswordPage = class LostPasswordPage {

    

    constructor(page) {
        this.page = page;
        
        this.loginInputField =page.locator('#mail')
        this.submitBtn = page.locator('[type="submit"]')
        this.lableFlashNotice = page.locator('#flash_notice')
    }
}