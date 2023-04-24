import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._expandedPhoto = this.popup.querySelector('.photo-popup__img');
    this._photoLabel = this.popup.querySelector('.photo-popup__label');

  }
  open(data) {
    this._expandedPhoto.src = data.photoLink;
    this._expandedPhoto.alt = data.placeName;
    this._photoLabel.textContent = data.placeName;
    super.open();
  }
}
