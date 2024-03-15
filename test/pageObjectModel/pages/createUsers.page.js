class CreateUsersPage {
    get createUsersButton(){
        return $('a[href="/users/create"]'); //locator users button
    }
    
    get createPageUrl(){
        return 'https://kasirdemo.belajarqa.com/users/create'
    }

    get namaUsersInput(){
        return $('input[id="nama"]'); //locator name field
    }

    get emailUsersInput(){
        return $('input[id="email"]'); //locator email field
    }

    get passwordUsersInput(){
        return $('input[id="password"]'); //locator password field
    }

    get simpanButton(){
        return $('//*[@class="chakra-button css-l5lnz6"]'); //locator button
    }

    get successMessage() {
        return $('//*[@class="chakra-alert__desc css-zycdy9"]'); //locator success message
    }

    get failedMessage() {
        return $('//*[@role="alert"]'); //locator error message
    }

    //defines the action performed on those elements
    async clickCreateUsersButton(){
        await this.createUsersButton.click();
    }
    
    async assertCreateUrl(){
        await expect(browser).toHaveUrl(this.createPageUrl);
    }

    async createUsers(namaUser,emailUser,passwordUser){
        await this.namaUsersInput.setValue(namaUser);
        await this.emailUsersInput.setValue(emailUser);
        await this.passwordUsersInput.setValue(passwordUser);
        await this.simpanButton.click();
    }

    async assertSuccessMessage(expectedSuccessMessage) {
        await expect(this.successMessage).toHaveTextContaining(expectedSuccessMessage);
    }
    async getSuccessMessage() {
        return this.successMessage.getText();
    }

    async assertFailedMessage(expectedFailedMessage) {
        await expect(this.failedMessage).toHaveTextContaining(expectedFailedMessage);
    }
    async getFailedMessage() {
        return this.failedMessage.getText();
    }
}

module.exports = new CreateUsersPage();