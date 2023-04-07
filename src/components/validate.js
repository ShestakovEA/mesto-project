const showInputError = (formElement, inputElement, errorMessage, validConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validConfig.errorClass);
  };
  
  const hideInputError = (formElement, inputElement, validConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validConfig.inputErrorClass);
    errorElement.classList.remove(validConfig.errorClass);
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement, validConfig) => {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity("");
    }
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, validConfig);
    } else {
      hideInputError(formElement, inputElement, validConfig);
    }
  };
  //проверка невалидного поля
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  // функция отключения/включения кнопки
  function toggleButtonState(inputList, buttonElement, settings) {
    if (hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
    buttonElement.classList.add(validConfig.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(validConfig.inactiveButtonClass);
  }
  };
  
  const setEventListeners = (formElement, validConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(validConfig.inputSelector));
    const buttonElement = formElement.querySelector(validConfig.submitButtonSelector);
  
    toggleButtonState(inputList, buttonElement, validConfig);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, validConfig);
        toggleButtonState(inputList, buttonElement, validConfig);
      });
    });
  };
  
  export const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(validConfig.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement, validConfig);
    });
  };