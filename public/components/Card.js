class Card {
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
        const cardElement = cardTemplate.content
            .querySelector(".card")
            .cloneNode(true);
        const imageElement = cardElement.querySelector(".card__image");
        const titleElement = cardElement.querySelector(".card__title");
        imageElement.src = this.link;
        imageElement.alt = this.name;
        titleElement.textContent = this.name;
        return cardElement;
    }
    setEventListeners() {
        this.cardElement.addEventListener("click", this.handleCardClick);
    }
    generateCard() {
        return this.cardElement;
    }
}
export {};
//# sourceMappingURL=Card.js.map