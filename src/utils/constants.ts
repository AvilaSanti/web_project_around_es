export interface FormConfig {
  inputSelector: string;
  buttonSelector: string;
  inactiveButtonClass: string;
  inputErrorClass: string;
  errorActiveClass: string;
}

export const defaultFormConfig: FormConfig = {
  inputSelector: ".popup__input",
  buttonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorActiveClass: "popup__input-error_active"
};
