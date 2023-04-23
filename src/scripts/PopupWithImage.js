import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  open(data) {
    const expandedPhoto = this.popup.querySelector('.photo-popup__img');
    const photoLabel = this.popup.querySelector('.photo-popup__label');
    expandedPhoto.src = data.photoLink;
    expandedPhoto.alt = data.placeName;
    photoLabel.textContent = data.placeName;
    super.open();
  }
}
