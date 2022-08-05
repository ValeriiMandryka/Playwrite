const { expect } = require('@playwright/test');
exports.SearchPage = class SearchPage {


    constructor(page) {
        this.page = page;

        this.searchMainInputField = page.locator('//*[@id="search-input"]')
        this.resultsCountLabele = page.locator('//body//div/h3')
    }
}