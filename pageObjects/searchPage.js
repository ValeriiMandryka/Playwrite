const { GeneralPage } = require("./generalPage");



const searchMainInputField = '//*[@id="search-input"]'
const resultsCountLabele = '//body//div/h3'

class SearchPage extends GeneralPage {
 
    constructor(page) {
        super(page);
        this.page = page;
        }
       
    async getsSearchMainInputField() {return await super.findElement(searchMainInputField)}
    async getsResultsCountLabele() {return await super.findElement(resultsCountLabele)}

    }
    module.exports = { SearchPage };