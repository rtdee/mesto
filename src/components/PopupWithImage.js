import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._expandedPhoto = this.popup.querySelector('.photo-popup__img');
    this._photoLabel = this.popup.querySelector('.photo-popup__label');

  }
  open(data) {
    this._expandedPhoto.src = data.link;
    this._expandedPhoto.alt = data.name;
    this._photoLabel.textContent = data.name;
    super.open();
  }
}
