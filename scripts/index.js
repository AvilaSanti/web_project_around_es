import { enableValidation } from "./validate.js";

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

// DATOS INICIALES

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

// ELEMENTOS DEL DOM
const editButton = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector("#edit-popup");
const closeButton = editPopup.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const popupInputName = document.querySelector(".popup__input_type_name");
const popupInputDescription = document.querySelector(
  ".popup__input_type_description",
);
const profileForm = editPopup.querySelector(".popup__form");
const cardsList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template");

// NUEVOS ELEMENTOS PARA AGREGAR TARJETAS
const addCardButton = document.querySelector(".profile__add-button");
const addCardPopup = document.querySelector("#new-card-popup");
const closeAddCardButton = addCardPopup.querySelector(".popup__close");
const popupInputCardName = addCardPopup.querySelector(
  ".popup__input_type_card-name",
);
const popupInputCardLink = addCardPopup.querySelector(".popup__input_type_url");
const cardForm = addCardPopup.querySelector("#new-card-form");

const imagePopup = document.querySelector("#image-popup");
const popupImageElement = imagePopup.querySelector(".popup__image");
const popupCaptionElement = imagePopup.querySelector(".popup__caption");
const closeImagePopupCtx = imagePopup.querySelector(".popup__close");

// FUNCIONES GENERALES

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  popupInputName.value = profileTitle.textContent;
  popupInputDescription.value = profileDescription.textContent;
}
function handleOpenEditModal() {
  fillProfileForm();
  openModal(editPopup);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputName.value;
  profileDescription.textContent = popupInputDescription.value;
  closeModal(editPopup);
}

function getCardElement({
  name = "Sin título",
  link = "./images/placeholder.jpg",
}) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardElement.querySelector(".card__title").textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", handleLikeIcon);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", handleDeleteCard);
  cardImage.addEventListener("click", () => handleCardImageClick(name, link));

  return cardElement;
}

function renderCard(name, link, container) {
  const card = getCardElement({ name, link });
  container.prepend(card);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const name = popupInputCardName.value;
  const link = popupInputCardLink.value;
  renderCard(name, link, cardsList);
  cardForm.reset();
  closeModal(addCardPopup);
}

function handleLikeIcon(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

function handleDeleteCard(evt) {
  const cardElement = evt.target.closest(".card");
  cardElement.remove();
}

function handleCardImageClick(name, link) {
  popupImageElement.src = link;
  popupImageElement.alt = name;
  popupCaptionElement.textContent = name;
  openModal(imagePopup);
}
// EVENTOS

editButton.addEventListener("click", handleOpenEditModal);
closeButton.addEventListener("click", () => closeModal(editPopup));
profileForm.addEventListener("submit", handleProfileFormSubmit);
addCardButton.addEventListener("click", () => openModal(addCardPopup));
closeAddCardButton.addEventListener("click", () => closeModal(addCardPopup));
cardForm.addEventListener("submit", handleCardFormSubmit);
closeImagePopupCtx.addEventListener("click", () => closeModal(imagePopup));

initialCards.reverse().forEach(function (card) {
  renderCard(card.name, card.link, cardsList);
});

enableValidation(config);
