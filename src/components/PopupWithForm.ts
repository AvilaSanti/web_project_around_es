import { Popup } from './Popup.js';

type FormSubmitCallback = (formValues: Record<string, string>) => void;

export class PopupWithForm extends Popup {
  private _formElement: HTMLFormElement | null = null;
  private _handleFormSubmit: FormSubmitCallback;

  constructor(popupSelector: string, handleFormSubmit: FormSubmitCallback) {
    super(popupSelector);      
    this._handleFormSubmit = handleFormSubmit;

    if (this.popupElement) {
      this._formElement = this.popupElement.querySelector('.popup__form');
    }
  }

  private _getInputValues(): Record<string, string> {
    const formValues: Record<string, string> = {};

    if (this._formElement) {
      const currentInputs = this._formElement.querySelectorAll('.popup__input') as NodeListOf<HTMLInputElement>;
      
      currentInputs.forEach((input) => {
        formValues[input.name] = input.value;
      });
    }

    return formValues;
  }

  public setInputValues(data: Record<string, string>): void {
    if (!this._formElement) return;
    
    Object.keys(data).forEach((key) => {
      const input = this._formElement!.querySelector(`[name="${key}"]`) as HTMLInputElement;
      if (input) {
        input.value = data[key];
      }
    });
  }

  public override setEventListeners(): void {
    super.setEventListeners();

    if (this._formElement) {
      this._formElement.addEventListener('submit', (evt: SubmitEvent) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
      });
    }
  }

  public override close(): void {
    super.close();

    if (this._formElement) {
      this._formElement.reset();
    }
  }
}
