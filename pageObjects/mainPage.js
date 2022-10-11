const { CommandsPage } = require('./commandsPage');

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

class MainPage extends CommandsPage {
 
constructor(page) {
    super(page);
	this.page = page;
    }
    //function openMainPage taken from generalPage
 async openRedmine() {await super.openURL('https://www.redmine.org/')}   
 
 elements={
    OverviewMenuLink: () => overviewMenuLink,
    DownloadMenuLink: () => downloadMenuLink,
    ActivityMenuLink: () => activityMenuLink,
    RoadmapMenuLink: () => roadmapMenuLink, 
    IssuesMenuLink: () => issuesMenuLink,
    NewsMenuLink: () => newsMenuLink,
    WikiMenuLink: () => wikiMenuLink,
    BoardsMenuLink: () => boardsMenuLink, 
    RepositoryMenuLink: () => repositoryMenuLink,
    SearchInputField: () => searchInputField,
    LoginBtn: () => loginBtn,

} 
    
}
module.exports = { MainPage };

   
        

        

    
       

