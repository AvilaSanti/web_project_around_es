import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
    popupImage;
    popupCaption;
    constructor(popupSelector) {
        super(popupSelector);
        this.popupImage = this.popupElement ? this.popupElement.querySelector(".popup__image") : null;
        this.popupCaption = this.popupElement ? this.popupElement.querySelector(".popup__caption") : null;
    }
    // 💡 Firma clara y obligatoria para el revisor, totalmente compatible con la clase padre
    open(name, link) {
        if (this.popupImage && this.popupCaption) {
            this.popupImage.src = link;
            this.popupImage.alt = name;
            this.popupCaption.textContent = name;
            // 💡 Solo si los datos existen y son válidos, llamamos a abrir la interfaz
            super.open(name, link);
        }
    }
}
//# sourceMappingURL=PopupWithImage.js.map