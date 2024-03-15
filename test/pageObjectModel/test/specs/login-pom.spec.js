const Page = require('../../../pageObjectModel/pages/page')
const LoginPage = require('../../../pageObjectModel/pages/login.page')
const DashboardPage = require('../../../pageObjectModel/pages/dashboard.page')


describe('Kasir Aja Login Test with Function', () =>{
    beforeEach(async () => {
        //open browser
        Page.open('/')
    });


    it('should login unsuccessfully with invalid password', async () =>{
        //call login function
        await LoginPage.login('rfrn@qa.com','test123');
        await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
    });

    it('allows users to log in with valid credentials', async () =>{
        //call login function
        await LoginPage.login('rfrn@qa.com','12345');
        await DashboardPage.assertDashboardUrl();
    });

   
});