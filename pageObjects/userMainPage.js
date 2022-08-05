const { expect } = require('@playwright/test');
exports.UserMainPage = class UserMainPage {

    

    constructor(page) {
        this.page = page;
        this.userNameLog = page.locator('[class="user active"]')

    }
}