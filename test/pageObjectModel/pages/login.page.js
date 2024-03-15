class LoginPage {
    //define the locator of the element
    get emailInput(){
        return $('input[id="email"]'); //locator username field
    }
    get passwordInput(){
        return $('input[id="password"]'); //locator password field
    }
    get loginButton(){
        return $('button[type="submit"]'); //locator login button
    } 
    get errorMessage() {
        return $('//*[@role="alert"]'); //locator error message
    }

    //defines the action performed on those elements
    async login(email,password){
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async assertErrorMessage(expectedErrorMessage) {
        await expect(this.errorMessage).toHaveTextContaining(expectedErrorMessage);
      }
    
    async getErrorMessage() {
        return this.errorMessage.getText();
      }
}
module.exports = new LoginPage();