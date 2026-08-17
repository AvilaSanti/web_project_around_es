interface UserSelectors {
  nameSelector: string;
  aboutSelector: string;
}

interface UserData {
  name: string;
  about: string;
}

export class UserInfo {
  private nameElement: HTMLElement | null;
  private aboutElement: HTMLElement | null;

  constructor({ nameSelector, aboutSelector }: UserSelectors) {
    this.nameElement = document.querySelector(nameSelector);
    this.aboutElement = document.querySelector(aboutSelector);
  }

  public getUserInfo(): UserData {
    return {
      name: this.nameElement ? this.nameElement.textContent || "" : "",
      about: this.aboutElement ? this.aboutElement.textContent || "" : ""
    };
  }

  public setUserInfo({ name, about }: UserData): void {
    if (this.nameElement) {
      this.nameElement.textContent = name;
    }
    if (this.aboutElement) {
      this.aboutElement.textContent = about;
    }
  }
}
