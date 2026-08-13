import { Section } from "./components/Section.js";
import { UserInfo } from "./components/UserInfo.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { Card } from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
import { defaultFormConfig } from "./utils/constants.js";
const initialCards = [
    {
        name: "Valle de Yosemite",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    },
    {
        name: "Lago Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    },
    {
        name: "Montañas Calvas",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
    },
    {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
    },
    {
        name: "Parque Nacional de la Vanoise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    },
    {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    },
];
const userInfo = new UserInfo({
    nameSelector: ".profile__title",
    aboutSelector: ".profile__description"
});
const popupImage = new PopupWithImage("#image-popup");
const createCard = (cardData) => {
    const card = new Card(cardData, "#card-template", () => {
        popupImage.open(cardData.name, cardData.link);
    });
    return card.generateCard();
};
const cardListSection = new Section({
    items: initialCards,
    renderer: (cardData) => createCard(cardData)
}, ".cards__list");
const popupEditProfile = new PopupWithForm("#edit-popup", (formValues) => {
    userInfo.setUserInfo({
        name: formValues.name,
        about: formValues.description
    });
    popupEditProfile.close();
});
const popupAddCard = new PopupWithForm("#new-card-popup", (formValues) => {
    const newCardElement = createCard({
        name: formValues["place-name"],
        link: formValues.link
    });
    cardListSection.addItem(newCardElement);
    popupAddCard.close();
});
const formValidators = {};
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(".popup__form"));
    formList.forEach((formElement) => {
        const validator = new FormValidator(config, formElement);
        const formId = formElement.getAttribute("id");
        if (formId) {
            formValidators[formId] = validator;
        }
        validator.enableValidation();
    });
};
popupImage.setEventListeners();
popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
const buttonEditProfile = document.querySelector(".profile__edit-button");
buttonEditProfile?.addEventListener("click", () => {
    const currentUserData = userInfo.getUserInfo();
    const inputName = document.querySelector(".popup__input_type_name");
    const inputDescription = document.querySelector(".popup__input_type_description");
    if (inputName && inputDescription) {
        inputName.value = currentUserData.name;
        inputDescription.value = currentUserData.about;
    }
    formValidators["edit-profile-form"]?.resetValidation();
    popupEditProfile.open();
});
const buttonAddCard = document.querySelector(".profile__add-button");
buttonAddCard?.addEventListener("click", () => {
    formValidators["new-card-form"]?.resetValidation();
    popupAddCard.open();
});
cardListSection.renderer();
enableValidation(defaultFormConfig);
//# sourceMappingURL=index.js.map