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
  
  _hasInvalidInput() {
    return this.inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    });
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.buttonElement.classList.add(this.config.inactiveButtonClass);
      this.buttonElement.setAttribute('disabled', '');
    } else {
      this.buttonElement.classList.remove(this.config.inactiveButtonClass);
      this.buttonElement.removeAttribute('disabled');
    }
  }
  
  _setEventListeners (formElement) {
    this.inputList = Array.from(formElement.querySelectorAll(this.config.inputSelector));
    this.buttonElement = formElement.querySelector(this.config.submitButtonSelector);
    this.toggleButtonState();
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        this.toggleButtonState();
      });
    });
  }
  
  enableValidation() {
    this._setEventListeners (this.formElement);
  }
}

export default FormValidator;