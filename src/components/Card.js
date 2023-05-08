class Card {
  constructor({ data, handleCardClick }, cardSelector, handleApiPutLike, handleApiDeleteLike, confirmDelete, userInfo) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this.cardTemplate = cardSelector;
    this.handleCardClick = handleCardClick;
    this.handleApiPutLike = handleApiPutLike;
    this.handleApiDeleteLike = handleApiDeleteLike;
    this.confirmDelete = confirmDelete;
    this.userInfo = userInfo;
  }

  _getTemplate() {
    const card = this.cardTemplate
    .querySelector('.element').cloneNode(true);
    
    return card;
  }

  _handleLikeClick() {
    if (this._likes.some(obj => obj._id === this.userInfo.myId)) {
      this._buttonLike.classList.remove('element__like-button_active');
      this.handleApiDeleteLike(this._cardId);
    } else if (this._likes.every(obj => obj._id !== this.userInfo.myId)){
      this._buttonLike.classList.add('element__like-button_active');
      this.handleApiPutLike(this._cardId);
    }
  }

  _handleDeleteClick() {
    this.confirmDelete(this._cardId);
  }

  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => this._handleLikeClick());
    this._buttonDelete.addEventListener('click', () => this._handleDeleteClick());
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
    this._counterOfLikes = this._newCard.querySelector('.element__like-counter');
    this._counterOfLikes.textContent = this._likes.length;
    if (this._ownerId !== this.userInfo.myId) {
      this._buttonDelete.remove();
    }
    if (this._likes.some(obj => obj._id === this.userInfo.myId)) {
      this._buttonLike.classList.add('element__like-button_active');
    }  
  }

  getCard() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setEventListeners();
    return this._newCard;
  }
}

export default Card;