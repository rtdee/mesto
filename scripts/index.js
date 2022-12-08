const initialCards = [
  {
    name: 'Нью-Йорк',
    link: 'https://images.unsplash.com/photo-1543716091-a840c05249ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
  },
  {
    name: 'Лондон',
    link: 'https://images.unsplash.com/photo-1569865867048-34cfce8d58fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=678&q=80'
  },
  {
    name: 'Париж',
    link: 'https://images.unsplash.com/photo-1471623432079-b009d30b6729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Варшава',
    link: 'https://images.unsplash.com/photo-1578925193365-e69a2b0e4c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
  },
  {
    name: 'Шанхай',
    link: 'https://images.unsplash.com/photo-1597531922242-823dbfca45bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1022&q=80'
  },
  {
    name: 'Токио',
    link: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
  }
];

const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileTitle = document.querySelector('.profile__title');
const inputName = document.querySelector('.popup__txt-input_type_name');
const inputTitle = document.querySelector('.popup__txt-input_type_title');
const formElement = document.querySelector('.popup__form');
const photoSection = document.querySelector('.elements');
const addPlacePopup = document.querySelector('.add-place-popup');
const addPlaceCloseButton = document.querySelector('.add-place-popup__close-button');
const inputPlaceName = document.querySelector('.popup__txt-input_type_place');
const inputPhotoLink = document.querySelector('.popup__txt-input_type_photo');
const addPlaceForm = document.querySelector('.add-place-popup__form');


initialCards.forEach(function (elem) {
  function loadCards() {
    const cardTemplate = document.querySelector('.card-template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardElementContainer = cardElement.querySelector('.element__container');
   
    cardElement.querySelector('.element__photo').src = elem.link;
    cardElement.querySelector('.element__photo').alt = elem.name;
    cardElementContainer.querySelector('.element__header').textContent = elem.name;
    photoSection.prepend(cardElement);
  }
    loadCards();
});

function popupOpen() {
  inputName.value = profileName.textContent;
  inputTitle.value = profileTitle.textContent;
  popup.classList.add('popup_opened');
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileTitle.textContent = inputTitle.value;
  popupClose();
}

function openAddPlacePopup () {
  addPlacePopup.classList.add('popup_opened');
}

function closeAddPlacePopup () {
  addPlacePopup.classList.remove('popup_opened');
}

function addCard (evt) {
  evt.preventDefault();
  const cardTemplate = document.querySelector('.card-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardElementContainer = cardElement.querySelector('.element__container');
    
  cardElement.querySelector('.element__photo').src = inputPhotoLink.value;
  cardElement.querySelector('.element__photo').alt = inputPlaceName.value;
  cardElementContainer.querySelector('.element__header').textContent = inputPlaceName.value;
  photoSection.prepend(cardElement);
  closeAddPlacePopup();
}

const likeButton = document.querySelectorAll('.element__like-button');

likeButton.forEach(function(item) {
  function likeCard () {
    item.classList.toggle('element__like-button_active');
  }
  item.addEventListener('click', likeCard);
});

const deleteButton = document.querySelectorAll('.element__delete-button');

deleteButton.forEach(function(item) {
  item.addEventListener('click', function deleteCard () {
    item.parentNode.parentNode.removeChild(item.parentNode);
    /*const cardElementClosest = deleteButton.closest('.element');
    cardElementClosest.remove();*/
  });
});

const photoPopup = document.querySelector('.photo-popup');
const photo = document.querySelectorAll('.element__photo');
const photoPopupCloseButton = document.querySelector('.popup__close-button_location_photo-popup');

photo.forEach(function(item) {
  function expandPhoto () {
    photoPopup.classList.add('popup_opened');
  }
  item.addEventListener('click', function (evt) {
    const eventTarget = evt.target
    const expandedPhoto = document.querySelector('.photo-popup__img');
    expandedPhoto.src = eventTarget.src
    expandedPhoto.alt = eventTarget.alt
    const photoLabel = document.querySelector('.photo-popup__label');
    photoLabel.textContent = eventTarget.alt
    expandPhoto();
  });
});

function closeExpandedPhoto () {
  photoPopup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', popupClose);
editButton.addEventListener('click', popupOpen);
formElement.addEventListener('submit', formSubmitHandler);
addButton.addEventListener('click', openAddPlacePopup);
addPlaceCloseButton.addEventListener('click', closeAddPlacePopup);
addPlaceForm.addEventListener('submit', addCard);
photoPopupCloseButton.addEventListener('click', closeExpandedPhoto);
