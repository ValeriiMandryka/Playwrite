const { test, expect } = require('@playwright/test');

 

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.redmine.org/');
});

test.describe ('Сlickability and display accuracy header  menu  ', () =>{
    test ('click on Overview link', async({page}) =>{
        await page.locator('.overview').click()
        await expect(page).toHaveURL(/.*redmine/);

  
        await page.locator('.download').click()
        await expect(page).toHaveURL(/.*Download/);

    
        await page.locator('.activity').click()
        await expect(page).toHaveURL(/.*activity/);
    
        await page.locator('.roadmap').click()
        await expect(page).toHaveURL(/.*roadmap/);
        await page.locator('.issues').click()
        await expect(page).toHaveURL(/.*issues/);
   
        await page.locator('.news').click()
        await expect(page).toHaveURL(/.*news/);
    
        await page.locator('#main-menu >> text=Wiki').click()
        await expect(page).toHaveURL(/.*wiki/);
    
        await page.locator('.boards').click()
        await expect(page).toHaveURL(/.*boards/);
   
   
        await page.locator('.repository').click()
        await expect(page).toHaveURL(/.*repository/);
    })
    
})
test.describe ('Search feature with valid credentials  ', () =>{
  test ('Fill in "Search" field: "wiki"', async({page}) =>{
    await page.locator('#q').click()
    await page.locator('#q').fill('wiki')
    await page.locator('input[name="q"]').press('Enter')
    await expect(page.locator('#q')).toHaveValue("wiki");
    await expect(page.locator('//*[@id="search-input"]')).toHaveValue("wiki");

  })
  
})
test.describe ('Search feature with invalid credentials  ', () =>{
  test ('Fill in "Search" field: "***###"', async({page}) =>{
    await page.locator('#q').click()
    await page.locator('#q').fill('***###')
    await page.locator('input[name="q"]').press('Enter')
    await expect(page.locator('#q')).toHaveValue("***###");
    await expect(page.locator('//*[@id="search-input"]')).toHaveValue("***###");
    await expect(page.locator('//body//div/h3')).toHaveText("Results (0)");
//body//div/h3
  })
})