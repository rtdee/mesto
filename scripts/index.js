const popupProfile = document.querySelector('.profile-popup');
const popupProfileCloseButton = document.querySelector('.popup__close-button');
const popupProfileEditButton = document.querySelector('.profile__edit-button');
const popupAddPlaceAddButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileTitle = document.querySelector('.profile__title');
const profileNameInput = document.querySelector('.popup__txt-input_type_name');
const profileTitleInput = document.querySelector('.popup__txt-input_type_title');
const popupProfileForm = document.querySelector('.profile-popup-form');
const photoSection = document.querySelector('.elements');
const popupAddPlace = document.querySelector('.add-place-popup');
const popupAddPlaceCloseButton = document.querySelector('.add-place-popup__close-button');
const placeNameInput = document.querySelector('.popup__txt-input_type_place');
const photoLinkInput = document.querySelector('.popup__txt-input_type_photo');
const popupAddPlaceForm = document.querySelector('.add-place-popup__form');
const expandedPhoto = document.querySelector('.photo-popup__img');
const photoLabel = document.querySelector('.photo-popup__label');
const popupPhoto = document.querySelector('.photo-popup');
const popupPhotoCloseButton = document.querySelector('.popup__close-button_location_photo-popup');

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  deleteEventListenerKeydownEsc (popup);
}

function setEventListenerKeydownEsc (popup) {
  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      closePopup (popup)
    }
  });
}

function deleteEventListenerKeydownEsc (popup) {
  document.removeEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      closePopup (popup)
    }
  });
}

function setEventListenerClickOverlay (popup) {
  popup.addEventListener('click', function (evt) {
    if (evt.target === popup) {
      closePopup (popup);
    }
  });
}

function openPopup (popup) {
  popup.classList.add('popup_opened');
  setEventListenerKeydownEsc (popup);
  setEventListenerClickOverlay (popup);
}

function createCard (placeName, photoLink) {
  const cardTemplate = document.querySelector('.card-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardElementContainer = cardElement.querySelector('.element__container');
  const likeButton = cardElementContainer.querySelector('.element__like-button');
  const deleteButton = cardElement.querySelector('.element__delete-button');
  const photo = cardElement.querySelector('.element__photo');

  cardElement.querySelector('.element__photo').src = photoLink;
  cardElement.querySelector('.element__photo').alt = placeName;
  cardElementContainer.querySelector('.element__header').textContent = placeName;

  function likeCard() { 
    likeButton.classList.toggle('element__like-button_active'); 
  }

  function deleteCard() {
    const cardElementClosest = deleteButton.closest('.element');
    cardElementClosest.remove();
  }

  likeButton.addEventListener('click', likeCard); 
  deleteButton.addEventListener('click', deleteCard);
  photo.addEventListener('click', function (evt) {
    const eventTarget = evt.target
    expandedPhoto.src = eventTarget.src
    expandedPhoto.alt = eventTarget.alt
    photoLabel.textContent = eventTarget.alt
    openPopup (popupPhoto);
  });
  return cardElement;
}

function renderCard(card) {
  photoSection.prepend(card);
}

function submitAddPlaceForm (evt) {
  evt.preventDefault();
  renderCard(createCard (placeNameInput.value, photoLinkInput.value));
  popupAddPlaceForm.reset();
  closePopup (popupAddPlace);
}

initialCards.forEach(function (elem) {
  renderCard(createCard (elem.name, elem.link));
});

function submitProfileForm (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileTitle.textContent = profileTitleInput.value;
  closePopup (popupProfile);
}

function syncProfileFormData() {
  profileNameInput.value = profileName.textContent;
  profileTitleInput.value = profileTitle.textContent;
}

popupProfileCloseButton.addEventListener('click', function() {closePopup (popupProfile)});
popupProfileEditButton.addEventListener('click', function () {syncProfileFormData(); openPopup (popupProfile);});
popupProfileForm.addEventListener('submit', submitProfileForm);
popupAddPlaceAddButton.addEventListener('click', function() {openPopup (popupAddPlace)});
popupAddPlaceCloseButton.addEventListener('click', function() {closePopup (popupAddPlace)});
popupAddPlaceForm.addEventListener('submit', submitAddPlaceForm);
popupPhotoCloseButton.addEventListener('click', function() {closePopup (popupPhoto)});