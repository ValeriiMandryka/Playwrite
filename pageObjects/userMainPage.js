const {GeneralPage} = require ('./generalPage')

const userNameLog = '[class="user active"]'

class UserMainPage extends GeneralPage {
    
    constructor(page) {
        super(page);
        this.page = page;
      
    }

    async getUserNameLog() {return await super.findElement(userNameLog)}
}
module.exports = { UserMainPage };