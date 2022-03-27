import { expect, Locator, Page } from "@playwright/test";


export class Checkbox {
    constructor() {
    }
}


export class Input {
    protected objectInput: any;
    protected page: Page;
    constructor(page: Page, obj: any) {
        this.objectInput = obj;
        this.page = page;
    }
    async getObject(): Promise<Locator> {
        return this.page.locator(this.objectInput.value);
    }
    async setValue(value: string, options?: object): Promise<void> {
        await this.page.locator(this.objectInput.value).fill(value, options);
    }
    async clearValue(options?: object): Promise<void> {
        await this.page.locator(this.objectInput.value).fill('', options);
    }
    async getValue(options?: object): Promise<string> {
        return await this.page.locator(this.objectInput.value).inputValue(options);
    }
    async assertValue(expValue: string, options?: object): Promise<void> {
        expect(await this.getValue(options)).toEqual(expValue)
    }
}

export class RadioButton {
    constructor() {
    }
}

export class Dropdown {
    protected objectInput: any;
    protected page: Page;
    constructor(page: Page, obj: any) {
        this.objectInput = obj;
        this.page = page;
    }
    async getObject(): Promise<Locator> {
        return this.page.locator(this.objectInput.value);
    }
}

export class Button {
    constructor() {
    }
}
