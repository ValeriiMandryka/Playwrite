# redmine-playwright-allure
## Smoke testing  of [Redmine](https://www.redmine.org/) site
5 test cases: valid, invalad registration and sign in, navigation menu checking

## 1. Install 
in terminal enter
```
git clone https://github.com/ValeriiMandryka/playwrite.git
npm ci 
```
## 2. Run tests
```
npm run test  
```
OR

## Run tests in head mode
```
npm run testhead  
```



## 3. Report generation and open
```
npm run allure-generate
npm run allure--serve
```
