// функцися открытия и закрытия попапа
export function openPopup(popup) {
    popup.classList.add('popup_opened');
}
  
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

// закрытие попап ESC
function closePopupEsc (evt) {
    if ( evt.key === 'Escape'){
     let popupEsc = body.querySelector('.popup_opened');
     closePopup(popupEsc);
    }
}

// Закрытие попапа кликом на оверлей
function closePopupOverlay (evt) {
    if (evt.target.classList.contains("popup")){
      closePopup(evt.target);
    }
}