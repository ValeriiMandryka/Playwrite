const { GeneralPage } = require('./generalPage');
//Header menuLinks
const overviewMenuLink = '.overview'
const downloadMenuLink = '.download'
const activityMenuLink = '.activity'
const roadmapMenuLink = '.roadmap'
const issuesMenuLink = '.issues'
const newsMenuLink = '.news'
const wikiMenuLink = '#main-menu >> text=Wiki'
const boardsMenuLink = '.boards'
const repositoryMenuLink = '.repository'

const searchInputField = '#q'

const loginBtn = '.login'

class MainPage extends GeneralPage {
 
constructor(page) {
    super(page);
	this.page = page;
    }
    //function openMainPage taken from generalPage
 async openRedmine() {await super.openURL('https://www.redmine.org/')}   
    
     //functions "click" on header menu Links
 async clickOverviewMenuLink() {await super.clickElement(overviewMenuLink)}
 async clickDownloadMenuLink() {await super.clickElement(downloadMenuLink)}
 async clickActivityMenuLink() {await super.clickElement(activityMenuLink)}
 async clickRoadmapMenuLink() {await super.clickElement(roadmapMenuLink)}
 async clickIssuesMenuLink() {await super.clickElement(issuesMenuLink)}
 async clickNewsMenuLink() {await super.clickElement(newsMenuLink)}
 async clickWikiloadMenuLink() {await super.clickElement(wikiMenuLink)}
 async clickBoardsMenuLink() {await super.clickElement(boardsMenuLink)}
 async clickRepositoryMenuLink() {await super.clickElement(repositoryMenuLink)}
       //functions "click" on Search button

 async clickSearchInputField() {await super.clickElement(searchInputField)}
 async fillSearchInputField(text) {await super.setValue(searchInputField,text)}
 async pressEnterCommandOnSearchInputField() {await super.pressKeyCommand(searchInputField, 'Enter')}

 async clickLoginBtn() {await super.clickElement(loginBtn)}

 async getSearchInputField() {return await super.findElement(searchInputField)}
}

module.exports = { MainPage };

   
        

        

    
       

