class FormValidator {
  constructor(formElement, config) {
    this.formElement = formElement;
    this.config = config;
  }
  
  showInputError (formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(config.errorClass);
  }
  
  hideInputError (formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
  }
  
  checkInputValidity (formElement, inputElement, config) {
    if (!inputElement.validity.valid) {
      this.showInputError(formElement, inputElement, config);
    } else {
      this.hideInputError(formElement, inputElement, config);
    }
  }
  
  hasInvalidInput (inputList) {
    return inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    });
  }
  
  toggleButtonState (inputList, buttonElement, config) {
    if (this.hasInvalidInput(inputList)) {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.setAttribute('disabled', '');
    } else {
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }
  
  setEventListeners (formElement, config) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    this.toggleButtonState(inputList, buttonElement, config);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this.checkInputValidity(formElement, inputElement, config);
        this.toggleButtonState(inputList, buttonElement, config);
      });
    });
  }
  
  enableValidation (config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      this.setEventListeners(formElement, config);
      new FormValidator(formElement, config);
    });
  }
}

export default FormValidator;