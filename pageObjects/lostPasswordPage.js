const {GeneralPage} = require ('./generalPage')

const loginInputField ='#mail'
const submitBtn = '[type="submit"]'
const lableFlashNotice = '#flash_notice'

class LostPasswordPage extends GeneralPage {

    

    constructor(page) {
        super(page);  
        this.page = page;     
    }
    async setEmailIntoLoginInputField(email) {await super.setValue(loginInputField,email)}
    async clickSubmitBtn() {await super.clickElement(submitBtn)}
    
    async getLableFlashNotice() {return await super.findElement(lableFlashNotice)}
}
module.exports = { LostPasswordPage };