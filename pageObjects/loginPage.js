const {GeneralPage} = require ('./generalPage')

const lostPasswordBtn = '//body//td/a'
const loginInputField ='#username'
const passwordInputField ='#password'
const submitBtn = '[type="submit"]'



class LoginPage extends GeneralPage {
    
    constructor(page) {
        super(page);  
        this.page = page;
    }
async clickLostPasswordBtn() {await super.clickElement(lostPasswordBtn)}
async clickLoginInputField() {await super.clickElement(loginInputField)} 
async clickPasswordInputField() {await super.clickElement(passwordInputField)}
async clickSubmitBtn() {await super.clickElement(submitBtn)}

async setUserName(userName) {await super.setValue(loginInputField, userName)}
async setPassword(password) {await super.setValue(passwordInputField, password)}
  



}
module.exports = { LoginPage };