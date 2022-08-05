const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/loginPage');
const { LostPasswordPage } = require('../pageObjects/lostPasswordPage');
const { MainPage } = require('../pageObjects/mainPage');
const { SearchPage } = require('../pageObjects/searchPage');
const { UserMainPage } = require('../pageObjects/userMainPage');




test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto()
   });

  

  test.describe ('Check clickability of header menu', () =>{
       
    test ('Click  on links of header menu', async({page}) =>{
        const mainPage = new MainPage(page);
        await mainPage.clickOverviewMenuLink()
        await expect(page).toHaveURL(/.*redmine/);  //playwrite нет функции toBecklickable, сделал так
       
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
    
})
test.describe ('Search feature with valid credentials  ', () =>{
    test ('Fill in "Search" field: "wiki"', async({page}) =>{
    const mainPage = new MainPage(page);
    const searhPage = new SearchPage(page)
    await mainPage.searchInputField.click()
    await mainPage.searchInputField.fill('wiki')
    await mainPage.searchInputField.press('Enter')
    await expect(mainPage.searchInputField).toHaveValue("wiki");
    await expect(searhPage.searchMainInputField).toHaveValue("wiki");

    })
  
})
test.describe ('Search feature with invalid credentials  ', () =>{
  test ('Fill in "Search" field: "***###"', async({page}) =>{
    const mainPage = new MainPage(page);
    const searhPage = new SearchPage(page)
    await mainPage.searchInputField.click()
    await mainPage.searchInputField.fill('***###')
    await mainPage.searchInputField.press('Enter')
    await expect(mainPage.searchInputField).toHaveValue("***###");
    await expect(searhPage.searchMainInputField).toHaveValue("***###");
    await expect(searhPage.resultsCountLabele).toHaveText("Results (0)");

  })
})
test.describe ('Password recovery', () =>{  
  test ('Submiting to recover password', async({page}) =>{
    const mainPage = new MainPage(page);
    const loginPage = new LoginPage(page)
    const lostPasswordPage= new LostPasswordPage(page)
    await mainPage.loginBtn.click()     
    await loginPage.lostPasswordBtn.click()   
    await lostPasswordPage.loginInputField.fill("v@mailsac.com")  
    await lostPasswordPage.submitBtn.click()
    await expect(lostPasswordPage.lableFlashNotice).toHaveText("An email with instructions to choose a new password has been sent to you.");       
  })


})
  test.describe ('Sighn in', () =>{  
    test ('Filling   inputs fields', async({page}) =>{
      const mainPage = new MainPage(page);
      const loginPage = new LoginPage(page)
      const userMainPage = new UserMainPage(page)
      await mainPage.loginBtn.click()
      await loginPage.loginInputField.click()
      await loginPage.loginInputField.fill("testUserqwerty1")
      await loginPage.loginInputField.press('Enter')
      await loginPage.passwordInputField.fill("test")
      await loginPage.submitBtn.click()
      await expect(userMainPage.userNameLog).toHaveText("testUserqwerty1");       
  })

      
  })

