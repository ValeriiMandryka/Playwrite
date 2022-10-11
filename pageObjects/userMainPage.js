


const userNameLog = '[class="user active"]'

class UserMainPage {
    
    constructor(page) {
        
        this.page = page;
      
    }
    elements={
        UserNameLog: () => userNameLog,
                
    }
   
}

module.exports = new UserMainPage()
