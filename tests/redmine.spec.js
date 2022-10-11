const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pageObjects/mainPage');
const { SearchPage } = require ('../pageObjects/searchPage');
const { LoginPage } = require ('../pageObjects/loginPage');
const { LostPasswordPage } = require ('../pageObjects/lostPasswordPage');
const { UserMainPage } = require ('../pageObjects/userMainPage')


const validTextForSearch = 'wiki'
const invalidTextForSearch = '***###'
const email = 'v@mailsac.com'
const userName = 'testUserqwerty1'
const password = 'test'

  test.beforeEach(async ({ page }) => {
       const mainPage = new MainPage(page);
       await mainPage.openRedmine()
       });

  

  test.describe ('Smoke test', () =>{
       
    test ('Check Clickability  of headers menu links', async({page}) =>{
      const mainPage = new MainPage(page);

      await mainPage.clickOverviewMenuLink()
      await expect(page).toHaveURL(/.*redmine/);  
       
      await mainPage.clickDownloadMenuLink()
      await expect(page).toHaveURL(/.*Download/);

      await mainPage.clickActivityMenuLink()
      await expect(page).toHaveURL(/.*activity/);

      await mainPage.clickRoadmapMenuLink()
      await expect(page).toHaveURL(/.*roadmap/);

      await mainPage.clickIssuesMenuLink()
      await expect(page).toHaveURL(/.*issues/);

      await mainPage.clickNewsMenuLink()
      await expect(page).toHaveURL(/.*news/);

      await mainPage.clickWikiloadMenuLink()
      await expect(page).toHaveURL(/.*wiki/);

      await mainPage.clickBoardsMenuLink()
      await expect(page).toHaveURL(/.*boards/);

      await mainPage.clickRepositoryMenuLink()
      await expect(page).toHaveURL(/.*repository/);
    })
    
    
    test ('Check results with valid inputed data', async({page}) =>{
      const mainPage = new MainPage(page);
      const searhPage = new SearchPage(page)

      await mainPage.clickSearchInputField()
      await mainPage.fillSearchInputField(validTextForSearch)
      await mainPage.pressEnterCommandOnSearchInputField()
      await expect(await mainPage.getSearchInputField()).toHaveValue(validTextForSearch);
      await expect(await searhPage.getsSearchMainInputField()).toHaveValue(validTextForSearch);
  
    })
    
  
  
    test ('Check results with invalid inputed data', async({page}) =>{
      const mainPage = new MainPage(page);
      const searhPage = new SearchPage(page)

      await mainPage.clickSearchInputField()
      await mainPage.fillSearchInputField(invalidTextForSearch)
      await mainPage.pressEnterCommandOnSearchInputField()
      await expect(await mainPage.getSearchInputField()).toHaveValue(invalidTextForSearch);
      await expect(await searhPage.getsSearchMainInputField()).toHaveValue(invalidTextForSearch);
      await expect(await searhPage.getsResultsCountLabele()).toHaveText("Results (0)");
  
    })
  
    test ('Check ability  to recover password', async({page}) =>{
      const mainPage = new MainPage(page);
      const loginPage = new LoginPage(page)
      const lostPasswordPage= new LostPasswordPage(page)

      await mainPage.clickLoginBtn()
      await loginPage.clickLostPasswordBtn()
      await lostPasswordPage.setEmailIntoLoginInputField(email)
      await lostPasswordPage.clickSubmitBtn()
      await expect( await lostPasswordPage.getLableFlashNotice()).toHaveText("An email with instructions to choose a new password has been sent to you.");       
    })
  
  
 
    test ('Check ability to Log in with valid credantials', async({page}) =>{
      const mainPage = new MainPage(page);
      const loginPage = new LoginPage(page)
      const userMainPage = new UserMainPage(page)

      await mainPage.clickLoginBtn()
      await loginPage.clickLoginInputField()
      await loginPage.setUserName(userName)
      await loginPage.clickPasswordInputField()
      await loginPage.setPassword(password)
      await loginPage.clickSubmitBtn()
      await page.waitForLoadState()
      await expect(await userMainPage.getUserNameLog()).toHaveText(userName);       
    })
    
  })
  

