// попап 1
const body = document.querySelector('body');
const popupOne = body.querySelector('.popup-edit');
const openPopupOne = body.querySelector('#openPopupButton');
const closeButtonEdit = body.querySelector('#closeButtonEdit');

// попап 2
const popupTwo = body.querySelector('.popup-add');
const openPopupTwo = body.querySelector('#openPopupAddButton');
const closeButtonAdd = body.querySelector('#closeButtonAdd');

//редактировать профиль
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('#inputName');
const jobInput = formElement.querySelector('#inputJob');

// попап картинка
const imgPopup = document.querySelector('#popupImg');
const img = document.querySelector('.popup__img');
const caption = document.querySelector('.popup__caption');
const closeButtonImg = document.querySelector('#closeButtonImg');

// функцися открытия и закрытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// слушатели открытия попапов
openPopupOne.addEventListener('click', function () {
  openPopup(popupOne);
});
openPopupTwo.addEventListener('click', function () {
  openPopup(popupTwo);
});

// слушатель закрытия попапов
closeButtonEdit.addEventListener('click', function () {
  closePopup(popupOne);
})
closeButtonAdd.addEventListener('click', function () {
  closePopup(popupTwo);
})
closeButtonImg.addEventListener('click', function () {
  closePopup(imgPopup);
})

// функция редактирования профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  document.querySelector('.profile__title').textContent = `${nameInput.value}`;
  document.querySelector('.profile__text').textContent = `${jobInput.value}`;
  closePopup(popupOne);
}

// слушатель профиля
formElement.addEventListener('submit', handleFormSubmit);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//template карточек, лайк и удаление карточек
const elementsContainer = document.querySelector('.photo-grid');
function createCard(titleValue, linkValue) {
  const template = document.querySelector('#template').content;
  const cardElement = template.querySelector('.photo-grid__card').cloneNode(true);

  cardElement.querySelector('.photo-grid__title').textContent = titleValue;
  cardElement.querySelector('.photo-grid__item').src = linkValue;

  cardElement.querySelector('.photo-grid__button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('photo-grid__button_active');
  });

  cardElement.querySelector('.photo-grid__trashcan').addEventListener('click', function () {
    document.querySelector('.photo-grid__card').remove();
  });

  cardElement.querySelector('.photo-grid__item').addEventListener('click', function () {
    openPopup(imgPopup);
    img.src = linkValue;
    caption.textContent = titleValue;
  })

  return cardElement;
}

// переменные на добавление карточек
const addForm = document.querySelector('.form-add');
const addBtnForm = document.querySelector('#closeButtonAdd')
let addCardName = document.querySelector('#inputAddName');
let addCardLink = document.querySelector('#inputAddLink');

// функция добавления карточек
function addCard(evt) {
  evt.preventDefault();
  cardContainer = createCard(addCardName.value, addCardLink.value);
  elementsContainer.prepend(cardContainer);
  closePopup(popupTwo);
}

addForm.addEventListener('submit', addCard);

// перебор массива карточек "из коробки"
initialCards.forEach(function (cards) {
  elementsContainer.prepend(createCard(cards.name, cards.link));
})
