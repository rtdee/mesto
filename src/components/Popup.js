export default class Popup {
  constructor(popup) {
    this.popup = popup;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this.popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this.popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    const popupCloseButton = this.popup.querySelector('.popup__close-button');
    popupCloseButton.addEventListener('click', () => {this.close()});
    this.popup.addEventListener('mousedown', (evt) => {
      if (evt.target === this.popup) {
        this.close();
      }
    });
  }
}