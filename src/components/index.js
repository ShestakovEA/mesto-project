import '../pages/index.css';
import {initialCards, validConfig} from './data.js';
import {enableValidation} from './validate.js';
import {elementsContainer, createCard, addCard, cardAddForm, cardAddName, cardAddLink} from './card.js';
import {openPopup, closePopup, closePopupEsc, closePopupOverlay} from './modal.js';

// попап 1
const body = document.querySelector('body');
const popupEditProfile = body.querySelector('.popup-edit');
const buttonOpenPopupProfile = body.querySelector('#openPopupButton');
const buttonClosePopupProfile = body.querySelector('#closeButtonEdit');

// попап 2
const popupAddCard = body.querySelector('.popup-add');
const buttonOpenAddCard = body.querySelector('#openPopupAddButton');
const buttonCloseAddCard = body.querySelector('#closeButtonAdd');

//редактировать профиль
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.form__name');
const jobInput = formElement.querySelector('.form__job');
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');

// попап картинка
const imgPopup = document.querySelector('#popupImg');
const img = document.querySelector('.popup__img');
const caption = document.querySelector('.popup__caption');
const buttonCloseImg = document.querySelector('#closeButtonImg');


// слушатели открытия попапов
buttonOpenPopupProfile.addEventListener('click', function () {
  openPopup(popupEditProfile);
});
buttonOpenAddCard.addEventListener('click', function () {
  openPopup(popupAddCard);
});

// слушатель закрытия попапов
buttonClosePopupProfile.addEventListener('click', function () {
  closePopup(popupEditProfile);
})
buttonCloseAddCard.addEventListener('click', function () {
  closePopup(popupAddCard);
})
buttonCloseImg.addEventListener('click', function () {
  closePopup(imgPopup);
})

// функция редактирования профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = `${nameInput.value}`;
  profileText.textContent = `${jobInput.value}`;
  closePopup(popupEditProfile);
}

// слушатель профиля
formElement.addEventListener('submit', handleFormSubmit);

cardAddForm.addEventListener('submit', addCard);

// перебор массива карточек "из коробки"
initialCards.forEach(function (cards) {
  elementsContainer.prepend(createCard(cards.name, cards.link));
})

document.addEventListener('keydown', closePopupEsc);
document.addEventListener('mousedown', closePopupOverlay);

//валидация формы «Редактировать профиль»
export const form = document.querySelector('.form');
export const formInput = formElement.querySelector('.form__input');
export const formError = formElement.querySelector(`.${formInput.id}-error`);

enableValidation(validConfig);