class Card {
  constructor({ data, handleCardClick }, cardSelector) {
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

  _handleLikeClick() {
    this._buttonLike.classList.toggle('element__like-button_active'); 
  }

  
  _deleteCard() {
    this._newCard.remove();
  }

  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => this._handleLikeClick());
    this._buttonDelete.addEventListener('click', () => this._deleteCard());
    this._photo.addEventListener('click', () => {
      this.handleCardClick();
    });
  }

  _setData() {
    this._buttonLike = this._newCard.querySelector('.element__like-button');
    this._buttonDelete = this._newCard.querySelector('.element__delete-button');
    this._photo = this._newCard.querySelector('.element__photo');
    this._photo.src = this._link;
    this._photo.alt = this._name;
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