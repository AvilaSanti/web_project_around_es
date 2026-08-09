interface ICard {
  name: string;
  link: string;
}

class Card implements ICard {
public name: string;
public link: string;
public selector: string;
public handleCardClick: () => void;
public cardElement: HTMLElement;

constructor({ name, link}: ICard, selector: string, handleCardClick: () => void){
this.name = name;
this.link = link;
this.selector = selector;
this.handleCardClick = handleCardClick;
this.cardElement = this.getTemplate();
this.setEventListeners();
}

private getTemplate(): HTMLElement {
    const cardTemplate = document.querySelector(
      this.selector,
    ) as HTMLTemplateElement;
const cardElement = cardTemplate.content
      .querySelector(".card")!
      .cloneNode(true) as HTMLElement;
const imageElement = cardElement.querySelector(".card__image") as HTMLImageElement;
const titleElement = cardElement.querySelector(".card__title") as HTMLElement;

imageElement.src = this.link;
imageElement.alt = this.name;
titleElement.textContent = this.name;

    return cardElement;
  }

  private setEventListeners(): void {
    this.cardElement.addEventListener("click", this.handleCardClick);
  }

  public generateCard(): HTMLElement {
   return this.cardElement;
  }
}