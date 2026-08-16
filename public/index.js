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
const editProfileForm = document.querySelector("#edit-profile-form");
const newCardForm = document.querySelector("#new-card-form");
const editProfileValidator = new FormValidator(defaultFormConfig, editProfileForm);
const newCardValidator = new FormValidator(defaultFormConfig, newCardForm);
popupImage.setEventListeners();
popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
const buttonEditProfile = document.querySelector(".profile__edit-button");
buttonEditProfile?.addEventListener("click", () => {
    const currentUserData = userInfo.getUserInfo();
    popupEditProfile.setInputValues({
        name: currentUserData.name,
        description: currentUserData.about
    });
    editProfileValidator.resetValidation();
    popupEditProfile.open();
});
const buttonAddCard = document.querySelector(".profile__add-button");
buttonAddCard?.addEventListener("click", () => {
    newCardValidator.resetValidation();
    popupAddCard.open();
});
cardListSection.renderer();
editProfileValidator.enableValidation();
newCardValidator.enableValidation();
//# sourceMappingURL=index.js.map