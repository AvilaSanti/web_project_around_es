import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    private _popupImage: HTMLImageElement | null;
    private _popupCaption: HTMLElement | null;

    constructor(popupSelector: string) {
        super(popupSelector);

        if (this.popupElement) {
            this._popupImage = this.popupElement.querySelector('.popup__image');
            this._popupCaption = this.popupElement.querySelector('.popup__caption');
        } else {
            this._popupImage = null;
            this._popupCaption = null;
        }
    }

    public override open(name?: string, link?: string): void {
        if (this._popupImage && this._popupCaption && name && link) {
            this._popupImage.src = link;
            this._popupImage.alt = name;
            this._popupCaption.textContent = name;
    }
        super.open();
    }
}
