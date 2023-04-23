class Card {
  constructor({ data, handleCardClick }, cardSelector) { // (placeName, photoLink, openPopupPhoto, cardTemplate)
    //this._name = placeName;
    //this._link = photoLink;
    //this.openPopupPhoto = openPopupPhoto;
    //this.cardTemplate = cardTemplate;
    this._name = data.placeName;
    this._link = data.photoLink;
    this.cardTemplate = cardSelector;
    this.handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const card = this.cardTemplate
    .querySelector('.element').cloneNode(true);
    
    return card;
  }

  _likeCard() {
    this.likeButton.classList.toggle('element__like-button_active'); 
  }

  
  _deleteCard() {
    const cardElementClosest = this.deleteButton.closest('.element');
    cardElementClosest.remove();
  }

  _setEventListeners() {
    this.likeButton.addEventListener('click', () => this._likeCard());
    this.deleteButton.addEventListener('click', () => this._deleteCard());
    this.photo.addEventListener('click', () => {
      this.handleCardClick();
    });
  }

  _setData() {
    this.likeButton = this._newCard.querySelector('.element__like-button');
    this.deleteButton = this._newCard.querySelector('.element__delete-button');
    this.photo = this._newCard.querySelector('.element__photo');
    this.photo.src = this._link;
    this.photo.alt = this._name;
    this._newCard.querySelector('.element__header').textContent = this._name;
  }

  getCard() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setEventListeners();
    return this._newCard;
  }
}

export default Card;