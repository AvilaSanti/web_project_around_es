export class Popup {
    popupElement;
    constructor(popupSelector) {
        this.popupElement = document.querySelector(popupSelector);
    }
    open() {
        if (!this.popupElement) {
            return;
        }
        this.popupElement.classList.add('popup_is-opened');
        document.addEventListener('keydown', this.handleEscClose);
    }
    close() {
        if (!this.popupElement) {
            return;
        }
        this.popupElement.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', this.handleEscClose);
    }
    handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    };
    setEventListeners() {
        if (!this.popupElement)
            return;
        const closeButton = this.popupElement.querySelector('.popup__close');
        if (closeButton) {
            closeButton.addEventListener('click', () => this.close());
        }
        this.popupElement.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
            }
        });
    }
}
//# sourceMappingURL=Popup.js.map