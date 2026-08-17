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

export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://amazonaws.com",
  },
  {
    name: "Lago Louise",
    link: "https://amazonaws.com",
  },
  {
    name: "Montañas Calvas",
    link: "https://amazonaws.com",
  },
  {
    name: "Latemar",
    link: "https://amazonaws.com",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://amazonaws.com",
  },
  {
    name: "Lago di Braies",
    link: "https://amazonaws.com",
  },
];