const { CommandsPage } = require('./commandsPage')


const lostPasswordBtn = '//body//td/a'
const loginInputField ='#username'
const passwordInputField ='#password'
const submitBtn = '[type="submit"]'



class LoginPage extends CommandsPage {
    
    constructor(page) {
        super(page);  
        this.page = page;
    }
    elements={
        LostPasswordBtn: () => lostPasswordBtn,
        LoginInputField: () => loginInputField,
        PasswordInputField: () => passwordInputField,
        SubmitBtn: () => submitBtn, 
       
    } 



}
module.exports = { LoginPage };