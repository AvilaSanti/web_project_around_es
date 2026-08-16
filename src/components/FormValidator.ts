import { defaultFormConfig } from "../utils/constants.js";

interface FormConfig {
  inputSelector: string;
    buttonSelector: string;
    inactiveButtonClass: string;
    inputErrorClass: string;
    errorActiveClass: string;
}

export class FormValidator {
    private formInfo: FormConfig;
    private formElement: HTMLFormElement;

    constructor(formInfo: FormConfig, formElement: HTMLFormElement){
        this.formInfo = formInfo;
        this.formElement = formElement;
    }

private showInputError( element: HTMLInputElement, errorMessage: string): void {
    const errorElement = this.formElement.querySelector(`.${element.id}-input-error`)!;
    element.classList.add(this.formInfo.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.formInfo.errorActiveClass);
}

    private hideInputError( element: HTMLInputElement ): void {
    const errorElement = this.formElement.querySelector(`.${element.id}-input-error`)!;
    element.classList.remove(this.formInfo.inputErrorClass);
    errorElement.classList.remove(this.formInfo.errorActiveClass);
    errorElement.textContent = "";
}

    private checkInputValidity( element: HTMLInputElement):void {
    if (!element.validity.valid) {
        this.showInputError( element, element.validationMessage);
    }
    else {
        this.hideInputError( element );
    }
}

private hasInvalidInput(inputList: HTMLInputElement[]): boolean {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

private toggleButtonState(inputList: HTMLInputElement[], buttonElement: HTMLButtonElement | null, formInfo: FormConfig): void {
 
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

private setEventListeners(formElement: HTMLFormElement , formInfo: FormConfig): void {
    const inputList = Array.from(formElement.querySelectorAll<HTMLInputElement>(formInfo.inputSelector));
    const buttonElement = formElement.querySelector<HTMLButtonElement>(formInfo.buttonSelector);
    this.toggleButtonState(inputList, buttonElement, formInfo);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", (evt: Event) => {
            this.checkInputValidity( inputElement );
            this.toggleButtonState(inputList, buttonElement, formInfo);
        });
    });
}

 public enableValidation(): void {
        this.formElement.addEventListener("submit", (evt: Event) => {
          evt.preventDefault();
        });
        this.setEventListeners(this.formElement, this.formInfo);
    }

    public resetValidation(): void {
    const inputList = Array.from(this.formElement.querySelectorAll<HTMLInputElement>(this.formInfo.inputSelector));
    const buttonElement = this.formElement.querySelector<HTMLButtonElement>(this.formInfo.buttonSelector);
    inputList.forEach((inputElement) => {
    this.hideInputError( inputElement );
  });
        this.toggleButtonState(inputList, buttonElement, this.formInfo );
    }
}