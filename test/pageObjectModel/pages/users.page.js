class UsersPage {
    get usersPageUrl(){
        return 'https://kasirdemo.belajarqa.com/users'
    }
    get tambahButton(){
        return $('a[href="/users/create"]').toHaveText('tambah');
    }

    //defines the action performed on those elements
    async assertUsersUrl(){
        await expect(browser).toHaveUrl(this.usersPageUrl);
    }

    async addUsers(){
        await this.tambahButton.click();
    }
}

module.exports = new UsersPage();