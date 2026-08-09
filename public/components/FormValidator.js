import { defaultFormConfig } from "../utils/constants.js";
export class FormValidator {
    formInfo;
    formElement;
    constructor(formInfo, formElement) {
        this.formInfo = formInfo;
        this.formElement = formElement;
    }
    showInputError(element, errorMessage) {
        const errorElement = this.formElement.querySelector(`.${element.id}-input-error`);
        element.classList.add(this.formInfo.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this.formInfo.errorActiveClass);
    }
    hideInputError(element) {
        const errorElement = this.formElement.querySelector(`.${element.id}-input-error`);
        element.classList.remove(this.formInfo.inputErrorClass);
        errorElement.classList.remove(this.formInfo.errorActiveClass);
        errorElement.textContent = "";
    }
    checkInputValidity(element) {
        if (!element.validity.valid) {
            this.showInputError(element, element.validationMessage);
        }
        else {
            this.hideInputError(element);
        }
    }
    hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }
    toggleButtonState(inputList, buttonElement, formInfo) {
        if (buttonElement === null) {
            return;
        }
        if (this.hasInvalidInput(inputList)) {
            buttonElement.disabled = true;
            buttonElement.classList.add(formInfo.inactiveButtonClass);
        }
        else {
            buttonElement.disabled = false;
            buttonElement.classList.remove(formInfo.inactiveButtonClass);
        }
    }
    setEventListeners(formElement, formInfo) {
        const inputList = Array.from(formElement.querySelectorAll(formInfo.inputSelector));
        const buttonElement = formElement.querySelector(formInfo.buttonSelector);
        this.toggleButtonState(inputList, buttonElement, formInfo);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", (evt) => {
                this.checkInputValidity(inputElement);
                this.toggleButtonState(inputList, buttonElement, formInfo);
            });
        });
    }
    enableValidation() {
        this.formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this.setEventListeners(this.formElement, this.formInfo);
    }
    resetValidation() {
        const inputList = Array.from(this.formElement.querySelectorAll(this.formInfo.inputSelector));
        const buttonElement = this.formElement.querySelector(this.formInfo.buttonSelector);
        inputList.forEach((inputElement) => {
            this.hideInputError(inputElement);
        });
        this.toggleButtonState(inputList, buttonElement, this.formInfo);
    }
}
//# sourceMappingURL=FormValidator.js.map