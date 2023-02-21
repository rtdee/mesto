class FormValidator {
  constructor(formElement, config) {
    this.formElement = formElement;
    this.config = config;
  }
  
  _showInputError (formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this.config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this.config.errorClass);
  }
  
  _hideInputError (formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this.config.inputErrorClass);
    errorElement.classList.remove(this.config.errorClass);
    errorElement.textContent = '';
  }
  
  _checkInputValidity (formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }
  
  _hasInvalidInput (inputList) {
    return inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    });
  }
  
  _toggleButtonState (inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this.config.inactiveButtonClass);
      buttonElement.setAttribute('disabled', '');
    } else {
      buttonElement.classList.remove(this.config.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }
  
  _setEventListeners (formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this.config.inputSelector));
    const buttonElement = formElement.querySelector(this.config.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }
  
  enableValidation () {
    const formList = Array.from(document.querySelectorAll(this.config.formSelector));
    formList.forEach((formElement) => {
      this._setEventListeners(formElement);
      new FormValidator(formElement);
    });
  }
}

export default FormValidator;