import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popup, handleSubmit) {
    super(popup);
    this.handleSubmit = handleSubmit;
    this._form = this.popup.querySelector('.popup__form');
  }

  getCardId(cardId) {
    this.cardId = cardId;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.handleSubmit(this.cardId);
    });
  }
}