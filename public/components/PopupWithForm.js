import { Popup } from "./Popup.js";
import { defaultFormConfig } from "../utils/constants.js";
export class PopupWithForm extends Popup {
    formElement = null;
    handleFormSubmit;
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this.handleFormSubmit = handleFormSubmit;
        if (this.popupElement) {
            this.formElement = this.popupElement.querySelector(".popup__form");
        }
    }
    getInputValues() {
        const formValues = {};
        if (this.formElement) {
            // 💡 Reutilizamos defaultFormConfig.inputSelector en lugar de dejarlo fijo
            const currentInputs = this.formElement.querySelectorAll(defaultFormConfig.inputSelector);
            currentInputs.forEach((input) => {
                formValues[input.name] = input.value;
            });
        }
        return formValues;
    }
    setInputValues(data) {
        if (!this.formElement)
            return;
        Object.keys(data).forEach((key) => {
            const input = this.formElement.querySelector(`[name="${key}"]`);
            if (input) {
                input.value = data[key];
            }
        });
    }
    setEventListeners() {
        super.setEventListeners();
        if (this.formElement) {
            this.formElement.addEventListener("submit", (evt) => {
                evt.preventDefault();
                this.handleFormSubmit(this.getInputValues());
            });
        }
    }
    close() {
        super.close();
        if (this.formElement) {
            this.formElement.reset();
        }
    }
}
//# sourceMappingURL=PopupWithForm.js.map