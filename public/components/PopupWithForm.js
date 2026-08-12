import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
    _formElement = null;
    _handleFormSubmit;
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        if (this.popupElement) {
            this._formElement = this.popupElement.querySelector('.popup__form');
        }
    }
    _getInputValues() {
        const formValues = {};
        if (this._formElement) {
            const currentInputs = this._formElement.querySelectorAll('.popup__input');
            currentInputs.forEach((input) => {
                formValues[input.name] = input.value;
            });
        }
        return formValues;
    }
    setEventListeners() {
        super.setEventListeners();
        if (this._formElement) {
            this._formElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
                this._handleFormSubmit(this._getInputValues());
            });
        }
    }
    close() {
        super.close();
        if (this._formElement) {
            this._formElement.reset();
        }
    }
}
//# sourceMappingURL=PopupWithForm.js.map