import { FormConfig } from "../utils/constants.js";

export class FormValidator {
  private formInfo: FormConfig;
  private formElement: HTMLFormElement;

  constructor(formInfo: FormConfig, formElement: HTMLFormElement) {
    this.formInfo = formInfo;
    this.formElement = formElement;
  }

  private showInputError(element: HTMLInputElement, errorMessage: string): void {
    const errorElement = this.formElement.querySelector(`.${element.id}-input-error`)!;
    element.classList.add(this.formInfo.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.formInfo.errorActiveClass);
  }

  private hideInputError(element: HTMLInputElement): void {
    const errorElement = this.formElement.querySelector(`.${element.id}-input-error`)!;
    element.classList.remove(this.formInfo.inputErrorClass);
    element.classList.remove(this.formInfo.errorActiveClass);
    errorElement.textContent = "";
  }

  private checkInputValidity(element: HTMLInputElement): void {
    if (!element.validity.valid) {
      this.showInputError(element, element.validationMessage);
    } else {
      this.hideInputError(element);
    }
  }

  private hasInvalidInput(inputList: HTMLInputElement[]): boolean {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  private toggleButtonState(inputList: HTMLInputElement[], buttonElement: HTMLButtonElement | null): void {
    if (buttonElement === null) {
      return;
    }
    if (this.hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(this.formInfo.inactiveButtonClass);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(this.formInfo.inactiveButtonClass);
    }
  }

  private setEventListeners(): void {
    const inputList = Array.from(this.formElement.querySelectorAll<HTMLInputElement>(this.formInfo.inputSelector));
    const buttonElement = this.formElement.querySelector<HTMLButtonElement>(this.formInfo.buttonSelector);
    this.toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState(inputList, buttonElement);
      });
    });
  }

  public enableValidation(): void {
    this.formElement.setAttribute("novalidate", "true");
    this.formElement.addEventListener("submit", (evt: Event) => {
      evt.preventDefault();
    });
    this.setEventListeners();
  }

  public resetValidation(): void {
    const inputList = Array.from(this.formElement.querySelectorAll<HTMLInputElement>(this.formInfo.inputSelector));
    const buttonElement = this.formElement.querySelector<HTMLButtonElement>(this.formInfo.buttonSelector);
    inputList.forEach((inputElement) => {
      this.hideInputError(inputElement);
    });
    this.toggleButtonState(inputList, buttonElement);
  }
}
