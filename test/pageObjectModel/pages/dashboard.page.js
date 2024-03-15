class DashboardPage {
    get dashboardPageUrl(){
        return 'https://kasirdemo.belajarqa.com/dashboard'
    }

    get usersButton(){
        return $('a[href="/users"]'); //locator users button
    }

    //defines the action performed on those elements
    async assertDashboardUrl(){
        await expect(browser).toHaveUrl(this.dashboardPageUrl);
    }

    async clickUsersButton(){
        await this.usersButton.click();
    }
}

module.exports = new DashboardPage();