const Page = require('../../../pageObjectModel/pages/page')
const LoginPage = require('../../../pageObjectModel/pages/login.page')
const DashboardPage = require('../../../pageObjectModel/pages/dashboard.page')
const CreateUsersPage = require('../../../pageObjectModel/pages/createUsers.page')

describe('Kasir Aja Create Users Test with Function', () => {
    beforeEach(async () => {
        Page.open('/')
      });

    it('should create users successfully with valid credentials', async () => {
      //Login to dashboard page and enter to create users page
        await LoginPage.login('rfrn@qa.com','12345');
        await DashboardPage.clickUsersButton();
        await CreateUsersPage.clickCreateUsersButton();
      //call create user function
        await CreateUsersPage.createUsers('Fatur','rfrn@qa.com','12345');
        await CreateUsersPage.assertSuccessMessage('item ditambahkan');
      });

      it('should create users unsuccessfully with invalid credentials', async () => {
      //Login to dashboard page and enter to create users page
        await DashboardPage.clickUsersButton();
        await CreateUsersPage.clickCreateUsersButton();
      //call create user function
        await CreateUsersPage.createUsers('Fatur','','12345');
        await CreateUsersPage.assertFailedMessage('"email" is not allowed to be empty');
      });
    
  });