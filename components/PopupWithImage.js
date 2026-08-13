import { Popup } from './Popup.js';
export class PopupWithImage extends Popup {
    _popupImage;
    _popupCaption;
    constructor(popupSelector) {
        super(popupSelector);
        if (this.popupElement) {
            this._popupImage = this.popupElement.querySelector('.popup__image');
            this._popupCaption = this.popupElement.querySelector('.popup__caption');
        }
        else {
            this._popupImage = null;
            this._popupCaption = null;
        }
    }
    open(name, link) {
        if (this._popupImage && this._popupCaption && name && link) {
            this._popupImage.src = link;
            this._popupImage.alt = name;
            this._popupCaption.textContent = name;
        }
        super.open();
    }
}
//# sourceMappingURL=PopupWithImage.js.map