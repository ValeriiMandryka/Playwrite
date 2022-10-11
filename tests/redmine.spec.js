const { test, expect } = require('@playwright/test');


const { MainPage } = require('../pageObjects/mainPage');
const { SearchPage } = require('../pageObjects/searchPage');
const { LoginPage } = require('../pageObjects/loginPage');
const { LostPasswordPage } = require('../pageObjects/lostPasswordPage');
const  UserMainPage  = require('../pageObjects/userMainPage');



const validTextForSearch = 'wiki'
const invalidTextForSearch = '***###'

const keybordKeys = {
  enter: 'Enter',
  delete: 'Delete'
}
const email = 'v@mailsac.com'
const userName = 'testUserqwerty1'
const password = 'test'


  test.beforeEach(async ({ page }) => {
       const mainPage = new MainPage(page);
       await mainPage.openRedmine()
       });

  

  test.describe ('Smoke test', () =>{
       
    test ('Clickability  of headers menu links', async({page}) =>{
        const mainPage = new MainPage(page);

        await mainPage.clickElement(mainPage.elements.OverviewMenuLink())
        await expect(page).toHaveURL(/.*redmine/);  
       
        await mainPage.clickElement(mainPage.elements.DownloadMenuLink())
        await expect(page).toHaveURL(/.*Download/);

        await mainPage.clickElement(mainPage.elements.ActivityMenuLink())
        await expect(page).toHaveURL(/.*activity/);

        await mainPage.clickElement(mainPage.elements.RoadmapMenuLink())
        await expect(page).toHaveURL(/.*roadmap/);

        await mainPage.clickElement(mainPage.elements.IssuesMenuLink())
        await expect(page).toHaveURL(/.*issues/);

        await mainPage.clickElement(mainPage.elements.NewsMenuLink())
        await expect(page).toHaveURL(/.*news/);

        await mainPage.clickElement(mainPage.elements.WikiMenuLink())
        await expect(page).toHaveURL(/.*wiki/);

        await mainPage.clickElement(mainPage.elements.BoardsMenuLink())
        await expect(page).toHaveURL(/.*boards/);

        await mainPage.clickElement(mainPage.elements.RepositoryMenuLink())
        await expect(page).toHaveURL(/.*repository/);
    })
 
    test ('Check asearch feature with valid credantials', async({page}) =>{
        const mainPage = new MainPage(page);
        const searhPage = new SearchPage(page)
 
        await mainPage.clickElement(mainPage.elements.SearchInputField())
        await mainPage.setValue(mainPage.elements.SearchInputField(),validTextForSearch)
        await mainPage.pressKeybordBtn(mainPage.elements.SearchInputField(), keybordKeys.enter)
        await expect(await mainPage.findElement(mainPage.elements.SearchInputField())).toHaveValue(validTextForSearch);
        await expect(await mainPage.findElement(searhPage.elements.SearchMainInputField())).toHaveValue(validTextForSearch);
  
      })
    
  
  
    test('Check asearch feature with invalid credantials', async({page}) =>{
      const mainPage = new MainPage(page);
      const searhPage = new SearchPage(page)

      await mainPage.clickElement(mainPage.elements.SearchInputField())
      await mainPage.setValue(mainPage.elements.SearchInputField(),invalidTextForSearch)
      await mainPage.pressKeybordBtn(mainPage.elements.SearchInputField(), keybordKeys.enter)
      await expect(await mainPage.findElement(mainPage.elements.SearchInputField())).toHaveValue(invalidTextForSearch);
      await expect(await mainPage.findElement(searhPage.elements.SearchMainInputField())).toHaveValue(invalidTextForSearch);
      await expect(await mainPage.findElement(searhPage.elements.ResultsCountLabele())).toHaveText("Results (0)");
  
    })
  
  
    test ('Check ability to recover password', async({page}) =>{
      const mainPage = new MainPage(page);
      const loginPage = new LoginPage(page)
      const lostPasswordPage= new LostPasswordPage(page)

      await mainPage.clickElement(mainPage.elements.LoginBtn())
      await mainPage.clickElement(loginPage.elements.LostPasswordBtn())
      await mainPage.setValue(lostPasswordPage.elements.LoginInputField(), email)
      await mainPage.clickElement(lostPasswordPage.elements.SubmitBtn())
      await expect(await mainPage.findElement(lostPasswordPage.elements.LableFlashNotice())).toHaveText("An email with instructions to choose a new password has been sent to you.");       
    })
  
  
  
    
      test.only  ('Check ability to Log in with valid credantials', async({page}) =>{
        const mainPage = new MainPage(page);
        const loginPage = new LoginPage(page)
        

        await mainPage.clickElement(mainPage.elements.LoginBtn())
        await mainPage.clickElement(loginPage.elements.LoginInputField())
        await mainPage.setValue(loginPage.elements.LoginInputField(), userName)
        await mainPage.pressKeybordBtn(loginPage.elements.LoginInputField(), keybordKeys.enter)
        await mainPage.setValue(loginPage.elements.PasswordInputField(),password)
        await mainPage.clickElement(loginPage.elements.SubmitBtn())
        await expect(await mainPage.findElement(UserMainPage.elements.UserNameLog()) ).toHaveText("testUserqwerty1");       
        
      })

  })

