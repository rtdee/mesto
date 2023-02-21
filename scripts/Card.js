class Card {
  constructor(placeName, photoLink, openPopup) {
    this._name = placeName;
    this._link = photoLink;
    this.openPopup = openPopup;
  }

  _getTemplate() {
    const card = document
    .querySelector('.card-template').content
    .querySelector('.element').cloneNode(true);
    
    return card;
  }

  _likeCard() {
    const cardElementContainer = this._newCard.querySelector('.element__container');
    const likeButton = cardElementContainer.querySelector('.element__like-button'); 
    likeButton.classList.toggle('element__like-button_active'); 
  }

  
  _deleteCard() {
    const deleteButton = this._newCard.querySelector('.element__delete-button');
    const cardElementClosest = deleteButton.closest('.element');
    cardElementClosest.remove();
  }

  _setEventListeners() {
    const cardElementContainer = this._newCard.querySelector('.element__container');
    const likeButton = cardElementContainer.querySelector('.element__like-button');
    const deleteButton = this._newCard.querySelector('.element__delete-button');
    const photo = this._newCard.querySelector('.element__photo');
    likeButton.addEventListener('click', () => this._likeCard());
    deleteButton.addEventListener('click', () => this._deleteCard());
    photo.addEventListener('click', () => {
      const popupPhoto = document.querySelector('.photo-popup');
      const expandedPhoto = document.querySelector('.photo-popup__img');
      const photoLabel = document.querySelector('.photo-popup__label');
      expandedPhoto.src = this._link;
      expandedPhoto.alt = this._name;
      photoLabel.textContent = this._name;
      this.openPopup(popupPhoto);
    });
  }

  _setData() {
    const cardElementContainer = this._newCard.querySelector('.element__container');
    const photo = this._newCard.querySelector('.element__photo');
    photo.src = this._link;
    photo.alt = this._name;
    cardElementContainer.querySelector('.element__header').textContent = this._name;
  }

  getCard() {
    this._newCard = this._getTemplate();
    this._setEventListeners();
    this._setData();
    return this._newCard;
  }
}

export default Card;