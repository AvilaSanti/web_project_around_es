interface UserInfoSelectors {
  nameSelector: string;
  aboutSelector: string;
}

export interface UserData {
  name: string;
  about: string;
}

export class UserInfo {
  private _nameElement: HTMLElement | null;
  private _aboutElement: HTMLElement | null;

  constructor({ nameSelector, aboutSelector }: UserInfoSelectors) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);

    if (!this._nameElement) {
      console.warn(`UserInfo: El elemento del nombre no fue encontrado con el selector "${nameSelector}".`);
    }
    if (!this._aboutElement) {
      console.warn(`UserInfo: El elemento de la descripción no fue encontrado con el selector "${aboutSelector}".`);
    }
  }

  public getUserInfo(): UserData {
    return {
      name: this._nameElement?.textContent?.trim() || '',
      about: this._aboutElement?.textContent?.trim() || ''
    };
  }

  public setUserInfo({ name, about }: UserData): void {
    if (this._nameElement) {
      this._nameElement.textContent = name;
    }
    if (this._aboutElement) {
      this._aboutElement.textContent = about;
    }
  }
}
