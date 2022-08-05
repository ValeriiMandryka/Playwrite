const { expect } = require('@playwright/test');
exports.MainPage = class MainPage {

    

    constructor(page) {
        this.page = page;
        //Header menuLinks
        this.overviewMenuLink = page.locator('.overview')
        this.downloadMenuLink = page.locator('.download')
        this.activityMenuLink = page.locator('.activity')
        this.roadmapMenuLink = page.locator('.roadmap')
        this.issuesMenuLink = page.locator('.issues')
        this.newsMenuLink = page.locator('.news')
        this.wikiMenuLink = page.locator('#main-menu >> text=Wiki')
        this.boardsMenuLink = page.locator('.boards')
        this.repositoryMenuLink = page.locator('.repository')
        
        this.searchInputField =page.locator('#q')

        this.loginBtn =page.locator('.login')

        

    }
        //function openMainPage
    async goto() { await this.page.goto('https://www.redmine.org/');}
        //functions "click" on heade menu Links
    async clickOverviewMenuLink() {await this.overviewMenuLink.click()}
    async clickDownloadMenuLink() {await this.downloadMenuLink.click()}
    async clickActivityMenuLink() {await this.activityMenuLink.click()}
    async clickRoadmapMenuLink() {await this.roadmapMenuLink.click()}
    async clickIssuesMenuLink() {await this.issuesMenuLink.click()}
    async clickNewsMenuLink() {await this.newsMenuLink.click()}
    async clickWikiloadMenuLink() {await this.wikiMenuLink.click()}
    async clickBoardsMenuLink() {await this.boardsMenuLink.click()}
    async clickRepositoryMenuLink() {await this.repositoryMenuLink.click()}


}