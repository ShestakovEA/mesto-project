import {openPopup} from './modal.js';

//template карточек, лайк и удаление карточек
export const elementsContainer = document.querySelector('.photo-grid');
export function createCard(titleValue, linkValue) {
  const template = document.querySelector('#template').content;
  const cardElement = template.querySelector('.photo-grid__card').cloneNode(true);
  const cardElementTitle = cardElement.querySelector('.photo-grid__title');
  const cardElementItem = cardElement.querySelector('.photo-grid__item');
  const cardElementButton = cardElement.querySelector('.photo-grid__button');
  const cardElementTrashcan = cardElement.querySelector('.photo-grid__trashcan');

  cardElementTitle.textContent = titleValue;
  cardElementItem.src = linkValue;
  cardElementItem.alt = titleValue;

  cardElementButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('photo-grid__button_active');
  });

  cardElementTrashcan.addEventListener('click', function () {
    cardElement.remove();
  });

  cardElementItem.addEventListener('click', function () {
    img.src = linkValue;
    img.alt = titleValue;
    caption.textContent = titleValue;
    openPopup(imgPopup);
  })

  return cardElement;
}

// переменные на добавление карточек
export const cardAddForm = document.querySelector('.form-add');
export const cardAddName = document.querySelector('#inputAddName');
export const cardAddLink = document.querySelector('#inputAddLink');

// функция добавления карточек
export function addCard(evt) {
  evt.preventDefault();
  cardContainer = createCard(cardAddName.value, cardAddLink.value);
  elementsContainer.prepend(cardContainer);
  closePopup(popupAddCard);
  cardAddForm.reset();
}
