# everyLIFE
Test File for everyLIFE

I have attached the Test and config file to this repo but this is how I generated the config and ran the files (there is this guide too https://webdriver.io/docs/gettingstarted/).


1) Open Terminal in Admin mode
2) cd to the project directory
3) npm init wdio .      - Including the .
4) A project named "webdriverio-tests" was detected at "", correct? Y
5) Where should you tests be launched? local -for e2e testing of web and mobile applications
6) Where is your automation backend located? ON my local machine
7) Would you like to setup Appium for mobile testing? N
8) Which framework do you want to use? Mocha (https://mochajs.org/)
9) Do you want to use a compiler? TypeScript
10) Do you want WebDriverIO to autogenerate some tests files? Y
11) Where should these files be located? Left as default
12) Do you want to use page objects? n
13) Which reporter do you want to use? spec, dot
14) Do you want to add a plugin to your test setup? wait-for
15) Do you want to add a service to your test setup? CHromedriver, vscode
16) What is the base url? one provided for test
17) Do you want me to run `npm install` Y

Once completed, to run the test 

1) npm run wdio
