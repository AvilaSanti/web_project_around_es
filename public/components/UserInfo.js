export class UserInfo {
    _nameElement;
    _aboutElement;
    constructor({ nameSelector, aboutSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._aboutElement = document.querySelector(aboutSelector);
        if (!this._nameElement) {
            console.warn(`UserInfo: El elemento del nombre no fue encontrado con el selector "${nameSelector}".`);
        }
        if (!this._aboutElement) {
            console.warn(`UserInfo: El elemento de la descripción no fue encontrado con el selector "${aboutSelector}".`);
        }
    }
    getUserInfo() {
        return {
            name: this._nameElement?.textContent?.trim() || '',
            about: this._aboutElement?.textContent?.trim() || ''
        };
    }
    setUserInfo({ name, about }) {
        if (this._nameElement) {
            this._nameElement.textContent = name;
        }
        if (this._aboutElement) {
            this._aboutElement.textContent = about;
        }
    }
}
//# sourceMappingURL=UserInfo.js.map