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
        element.classList.remove(this.formInfo.errorActiveClass);
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
    toggleButtonState(inputList, buttonElement) {
        if (buttonElement === null) {
            return;
        }
        if (this.hasInvalidInput(inputList)) {
            buttonElement.disabled = true;
            buttonElement.classList.add(this.formInfo.inactiveButtonClass);
        }
        else {
            buttonElement.disabled = false;
            buttonElement.classList.remove(this.formInfo.inactiveButtonClass);
        }
    }
    setEventListeners() {
        const inputList = Array.from(this.formElement.querySelectorAll(this.formInfo.inputSelector));
        const buttonElement = this.formElement.querySelector(this.formInfo.buttonSelector);
        this.toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this.checkInputValidity(inputElement);
                this.toggleButtonState(inputList, buttonElement);
            });
        });
    }
    enableValidation() {
        this.formElement.setAttribute("novalidate", "true");
        this.formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this.setEventListeners();
    }
    resetValidation() {
        const inputList = Array.from(this.formElement.querySelectorAll(this.formInfo.inputSelector));
        const buttonElement = this.formElement.querySelector(this.formInfo.buttonSelector);
        inputList.forEach((inputElement) => {
            this.hideInputError(inputElement);
        });
        this.toggleButtonState(inputList, buttonElement);
    }
}
//# sourceMappingURL=FormValidator.js.map