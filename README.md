# redmine-playwright-allure
## Smoke testing Redmine 
5 test cases: valid, invalad registration and sign in, navigation menu checking

## Install 
in terminal enter
```
git clone https://github.com/Honest-Foxy/redmine-playwright-allure.git
npm install 
```
## Run
```
nmx playwright test
```
## Report generation and open
```
npx allure generate allure-results --clean
npx allure open allure-report
```
