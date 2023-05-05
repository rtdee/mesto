import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor(popup, handleSubmit) {
    super(popup);
    this.handleSubmit = handleSubmit;
    this._inputList = this.popup.querySelectorAll('.popup__txt-input');
    this._form = this.popup.querySelector('.popup__form');
    this._buttonSave = this._form.querySelector('.popup__save-button');
    this._initText = this._buttonSave.textContent;
  }  

  _getInputValues() {
    const inputValues = {};

    this._inputList.forEach(input => {
      const value = input.value;
      const name = input.name;
      inputValues[name] = value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.handleSubmit(this._getInputValues())
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderSaving(isSaving) {
    if (isSaving) {
      this._buttonSave.textContent = 'Сохранение...';
    } else {
      this._buttonSave.textContent = this._initText;
    }
  }
}