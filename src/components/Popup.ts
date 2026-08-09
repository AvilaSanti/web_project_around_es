export class Popup {
    protected popupElement: HTMLElement | null;

    constructor(popupSelector: string) {
        this.popupElement = document.querySelector(popupSelector);
    }

    public open(): void {
        if (!this.popupElement) {
            return;
        };
        
        this.popupElement.classList.add('popup_opened'); 
        document.addEventListener('keydown', this.handleEscClose);
    }

    public close(): void {
        if (!this.popupElement) {
            return;
        };
        this.popupElement.classList.remove('popup_opened'); 
        document.removeEventListener('keydown', this.handleEscClose);
    }

    private handleEscClose = (evt: KeyboardEvent): void => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    public setEventListeners(): void {
        if (!this.popupElement) return;

        const closeButton = this.popupElement.querySelector('.popup__close');
        if (closeButton) {
            closeButton.addEventListener('click', () => this.close());
        }

        this.popupElement.addEventListener('mousedown', (evt: MouseEvent) => {
            if (evt.target === evt.currentTarget) {
                this.close();
            }
        });
    }
}
