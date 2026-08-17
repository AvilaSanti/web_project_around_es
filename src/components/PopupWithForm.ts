import { Popup } from "./Popup.js";
import { defaultFormConfig } from "../utils/constants.js";

type FormSubmitCallback = (formValues: Record<string, string>) => void;

export class PopupWithForm extends Popup {
  private formElement: HTMLFormElement | null = null;
  private handleFormSubmit: FormSubmitCallback;

  constructor(popupSelector: string, handleFormSubmit: FormSubmitCallback) {
    super(popupSelector);      
    this.handleFormSubmit = handleFormSubmit;

    if (this.popupElement) {
      this.formElement = this.popupElement.querySelector(".popup__form");
    }
  }

  private getInputValues(): Record<string, string> {
    const formValues: Record<string, string> = {};

    if (this.formElement) {
      // 💡 Reutilizamos defaultFormConfig.inputSelector en lugar de dejarlo fijo
      const currentInputs = this.formElement.querySelectorAll(defaultFormConfig.inputSelector) as NodeListOf<HTMLInputElement>;
      
      currentInputs.forEach((input) => {
        formValues[input.name] = input.value;
      });
    }

    return formValues;
  }

  public setInputValues(data: Record<string, string>): void {
    if (!this.formElement) return;
    
    Object.keys(data).forEach((key) => {
      const input = this.formElement!.querySelector(`[name="${key}"]`) as HTMLInputElement;
      if (input) {
        input.value = data[key];
      }
    });
  }

  public override setEventListeners(): void {
    super.setEventListeners();

    if (this.formElement) {
      this.formElement.addEventListener("submit", (evt: Event) => {
        evt.preventDefault();
        this.handleFormSubmit(this.getInputValues());
      });
    }
  }

  public override close(): void {
    super.close();

    if (this.formElement) {
      this.formElement.reset();
    }
  }
}
