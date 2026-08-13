interface ICard {
  name: string;
  link: string;
}

export class Card implements ICard {
  public name: string;
  public link: string;
  public selector: string;
  public handleCardClick: () => void;
  public cardElement: HTMLElement;

  constructor({ name, link }: ICard, selector: string, handleCardClick: () => void) {
    this.name = name;
    this.link = link;
    this.selector = selector;
    this.handleCardClick = handleCardClick;
    this.cardElement = this.getTemplate();
    this.setEventListeners();
  }

  private getTemplate(): HTMLElement {
    const cardTemplate = document.querySelector(this.selector) as HTMLTemplateElement;
    const cardElement = cardTemplate.content.querySelector(".card")!.cloneNode(true) as HTMLElement;
    
    const imageElement = cardElement.querySelector(".card__image") as HTMLImageElement;
    const titleElement = cardElement.querySelector(".card__title") as HTMLElement;

    imageElement.src = this.link;
    imageElement.alt = this.name;
    titleElement.textContent = this.name;

    return cardElement;
  }

  private handleLikeIcon(evt: Event): void {
    const target = evt.target as HTMLElement;
    target.classList.toggle("card__like-button_is-active");
  }

  private handleDeleteCard(): void {
    this.cardElement.remove();
  }

  private setEventListeners(): void {
    const cardImage = this.cardElement.querySelector(".card__image");
    cardImage?.addEventListener("click", () => this.handleCardClick());

    const likeButton = this.cardElement.querySelector(".card__like-button");
    likeButton?.addEventListener("click", (evt: Event) => this.handleLikeIcon(evt));

    const deleteButton = this.cardElement.querySelector(".card__delete-button");
    deleteButton?.addEventListener("click", () => this.handleDeleteCard());
  }

  public generateCard(): HTMLElement {
    return this.cardElement;
  }
}
