export class Card {
    name;
    link;
    selector;
    handleCardClick;
    cardElement;
    constructor({ name, link }, selector, handleCardClick) {
        this.name = name;
        this.link = link;
        this.selector = selector;
        this.handleCardClick = handleCardClick;
        this.cardElement = this.getTemplate();
        this.setEventListeners();
    }
    getTemplate() {
        const cardTemplate = document.querySelector(this.selector);
        const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);
        const imageElement = cardElement.querySelector(".card__image");
        const titleElement = cardElement.querySelector(".card__title");
        imageElement.src = this.link;
        imageElement.alt = this.name;
        titleElement.textContent = this.name;
        return cardElement;
    }
    handleLikeIcon(evt) {
        const target = evt.target;
        target.classList.toggle("card__like-button_is-active");
    }
    handleDeleteCard() {
        this.cardElement.remove();
    }
    setEventListeners() {
        const cardImage = this.cardElement.querySelector(".card__image");
        cardImage?.addEventListener("click", () => this.handleCardClick());
        const likeButton = this.cardElement.querySelector(".card__like-button");
        likeButton?.addEventListener("click", (evt) => {
            this.handleLikeIcon(evt);
        });
        const deleteButton = this.cardElement.querySelector(".card__delete-button");
        deleteButton?.addEventListener("click", () => {
            this.handleDeleteCard();
        });
    }
    generateCard() {
        return this.cardElement;
    }
}
//# sourceMappingURL=Card.js.map