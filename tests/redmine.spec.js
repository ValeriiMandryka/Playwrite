const { test, expect } = require('@playwright/test');

const { MainPage } = require('../pageObjects/mainPage');





  test.beforeEach(async ({ page }) => {
       const mainPage = new MainPage(page);
       await mainPage.openRedmine()
       });

  

  test.describe ('Smoke test', () =>{
       
    test ('Clickability  of headers menu links', async({page}) =>{
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
    

  })

