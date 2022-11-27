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
const nameInput = formElement.querySelector('#inputName');
const jobInput = formElement.querySelector('#inputJob');
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');

// попап картинка
const imgPopup = document.querySelector('#popupImg');
const img = document.querySelector('.popup__img');
const caption = document.querySelector('.popup__caption');
const buttonCloseImg = document.querySelector('#closeButtonImg');

// функцися открытия и закрытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

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

//template карточек, лайк и удаление карточек
const elementsContainer = document.querySelector('.photo-grid');
function createCard(titleValue, linkValue) {
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
const cardAddForm = document.querySelector('.form-add');
const cardAddName = document.querySelector('#inputAddName');
const cardAddLink = document.querySelector('#inputAddLink');

// функция добавления карточек
function addCard(evt) {
  evt.preventDefault();
  cardContainer = createCard(cardAddName.value, cardAddLink.value);
  elementsContainer.prepend(cardContainer);
  closePopup(popupAddCard);
  cardAddForm.reset();
}

cardAddForm.addEventListener('submit', addCard);

// перебор массива карточек "из коробки"
initialCards.forEach(function (cards) {
  elementsContainer.prepend(createCard(cards.name, cards.link));
})
