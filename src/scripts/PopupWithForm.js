import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitter) {
    super(popupSelector);
    this.submit = formSubmitter;
  }  

  _getInputValues() {
    const inputList = this.popup.querySelectorAll('.popup__txt-input')
    const inputValues = {};

    inputList.forEach(input => {
      const value = input.value;
      const name = input.name;
      inputValues[name] = value;
    });

    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this.form = this.popup.querySelector('.popup__form');
    this.form.addEventListener('submit', this.submit);
  }

  close() {
    super.close();
    this.form.reset();
    //this.popup.querySelector('.popup__form').reset();
  }
}