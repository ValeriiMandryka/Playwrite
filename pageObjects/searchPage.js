const { CommandsPage } = require("./commandsPage");




const searchMainInputField = '//*[@id="search-input"]'
const resultsCountLabele = '//body//div/h3'

class SearchPage extends CommandsPage {
 
    constructor(page) {
        super(page);
        this.page = page;
    }
    elements={
        SearchMainInputField: () => searchMainInputField,
        ResultsCountLabele: () => resultsCountLabele,            
    }       
   

    }
    module.exports = { SearchPage };