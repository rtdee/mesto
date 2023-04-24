class FormValidator {
  constructor(formElement, config) {
    this.formElement = formElement;
    this.config = config;
    this.inputList = Array.from(this.formElement.querySelectorAll(this.config.inputSelector));
    this.buttonElement = this.formElement.querySelector(this.config.submitButtonSelector);
  }
  
  _showInputError (inputElement) {
    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this.config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this.config.errorClass);
  }
  
  _hideInputError (inputElement) {
    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this.config.inputErrorClass);
    errorElement.classList.remove(this.config.errorClass);
    errorElement.textContent = '';
  }
  
  _checkInputValidity (inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
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
      //this.buttonElement.setAttribute('disabled', '');
      this.buttonElement.disabled = true;
    } else {
      this.buttonElement.classList.remove(this.config.inactiveButtonClass);
      //this.buttonElement.removeAttribute('disabled');
      this.buttonElement.disabled = false;
    }
  }
  
  _setEventListeners() {
    this.toggleButtonState();
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  }
  
  enableValidation() {
    this._setEventListeners();
  }
}

export default FormValidator;