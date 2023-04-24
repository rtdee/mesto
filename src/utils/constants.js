export const initialCards = [
  {
    placeName: 'Нью-Йорк',
    photoLink: 'https://images.unsplash.com/photo-1543716091-a840c05249ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
  },
  {
    placeName: 'Лондон',
    photoLink: 'https://images.unsplash.com/photo-1569865867048-34cfce8d58fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=678&q=80'
  },
  {
    placeName: 'Париж',
    photoLink: 'https://images.unsplash.com/photo-1471623432079-b009d30b6729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    placeName: 'Варшава',
    photoLink: 'https://images.unsplash.com/photo-1578925193365-e69a2b0e4c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
  },
  {
    placeName: 'Шанхай',
    photoLink: 'https://images.unsplash.com/photo-1597531922242-823dbfca45bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1022&q=80'
  },
  {
    placeName: 'Токио',
    photoLink: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
  }
];

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
  popupProfileEditButton: document.querySelector('.profile__edit-button'),
  popupAddPlaceAddButton: document.querySelector('.profile__add-button'),
  profileName: document.querySelector('.profile__name'),
  profileTitle: document.querySelector('.profile__title'),
  profileNameInput: document.querySelector('.popup__txt-input_type_name'),
  profileTitleInput: document.querySelector('.popup__txt-input_type_title'),
  popupProfileForm: document.querySelector('.profile-popup-form'),
  photoSection: document.querySelector('.elements'),
  popupAddPlace: document.querySelector('.add-place-popup'),
  popupAddPlaceForm: document.querySelector('.add-place-popup__form'),
  popupPhoto: document.querySelector('.photo-popup'),
  cardTemplate: document.querySelector('.card-template').content
}