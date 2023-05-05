export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__txt-input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__txt-input_type_error',
  errorClass: 'popup__error_visible'
}

export const elements = {
  popupProfile: document.querySelector('.profile-popup'),
  popupProfileForm: document.querySelector('.profile-popup-form'),
  popupProfileEditButton: document.querySelector('.profile__edit-button'),
  profileNameInput: document.querySelector('.popup__txt-input_type_name'),
  profileTitleInput: document.querySelector('.popup__txt-input_type_title'),
  profileName: document.querySelector('.profile__name'),
  profileTitle: document.querySelector('.profile__title'),
  profileAvatar: document.querySelector('.profile__avatar'),
  profileAvatarEdit: document.querySelector('.profile__avatar-overlay'),
  popupAvatar: document.querySelector('.update-avatar-popup'),
  popupAvatarForm: document.querySelector('.update-avatar-popup__form'),
  profileAvatarInput: document.querySelector('.popup__txt-input_type_avatar'),
  popupAddPlace: document.querySelector('.add-place-popup'),
  popupAddPlaceForm: document.querySelector('.add-place-popup__form'),
  popupAddPlaceAddButton: document.querySelector('.profile__add-button'),
  photoSection: document.querySelector('.elements'),
  popupPhoto: document.querySelector('.photo-popup'),
  popupConfirm: document.querySelector('.confirm-popup'),
  cardTemplate: document.querySelector('.card-template').content
}