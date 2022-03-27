import { Locator, Page } from '@playwright/test';
import loginpageloc from '../pagelocators/loginpageloc';
import * as uielement from '../../lib/webUtil/uielement';

export default class LoginPage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get txtUserName(): uielement.Input {
        return new uielement.Input(this.page, loginpageloc.txtUserName);
    }

    get txtPassword(): uielement.Input {
        return new uielement.Input(this.page, loginpageloc.txtPassword);
    }

    async loginToApp(): Promise<void> {
        await this.txtUserName.setValue('basheer1234');
        await this.txtUserName.assertValue('basheer1234')
        await this.txtPassword.setValue('Sab#123456');
        await this.txtPassword.assertValue('Sab#123456');
    }

}
