const { CommandsPage } = require('./commandsPage');


const loginInputField ='#mail'
const submitBtn = '[type="submit"]'
const lableFlashNotice = '#flash_notice'

class LostPasswordPage extends CommandsPage {

    

    constructor(page) {
        super(page);  
        this.page = page;     
    }
    elements={
        LoginInputField: () => loginInputField,
        SubmitBtn: () => submitBtn,
        LableFlashNotice: () => lableFlashNotice,
        
    } 
}
module.exports = { LostPasswordPage };