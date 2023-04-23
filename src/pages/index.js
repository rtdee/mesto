import './index.css';
import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import Section from '../scripts/Section.js';
import Popup from '../scripts/Popup.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import UserInfo from '../scripts/UserInfo.js';
import { initialCards, validationConfig } from '../utils/constants.js'


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
const popupPhoto = document.querySelector('.photo-popup');
const expandedPhoto = document.querySelector('.photo-popup__img');
const photoLabel = document.querySelector('.photo-popup__label');
const popupPhotoCloseButton = document.querySelector('.popup__close-button_location_photo-popup');
const popupList = document.querySelectorAll('.popup');
const cardTemplate = document.querySelector('.card-template').content;

const userInfo = new UserInfo({
  userNameSelector: profileName,
  userAboutSelector: profileTitle
});

const createCard = (data) => {
  const card = new Card({
    data,
    handleCardClick: () => {
      popupWithImage.open(data);
    }
  }, cardTemplate);
  
  return card.getCard();
}

const newSection = new Section({
    renderer: (data) => {
      newSection.addItem(createCard(data));
    }
  }, photoSection
);
newSection.renderItems(initialCards);

function submitFormUser(evt) {
  evt.preventDefault();
  userInfo.setUserInfo(profileNameInput.value, profileTitleInput.value);
  popupWithFormUser.close();
}

const popupWithFormUser = new PopupWithForm(popupProfile, submitFormUser);
popupWithFormUser.setEventListeners()

function submitFormPlace(evt) {
  evt.preventDefault();
  newSection.addItem(createCard(popupWithFormPlace._getInputValues()));
  popupWithFormPlace.close();
}

const popupWithFormPlace = new PopupWithForm(popupAddPlace, submitFormPlace);
popupWithFormPlace.setEventListeners();

const popupWithImage = new PopupWithImage(popupPhoto);
popupWithImage.setEventListeners();

function syncProfileFormData() {
  profileNameInput.value = userInfo.getUserInfo().userName;
  profileTitleInput.value = userInfo.getUserInfo().userAbout;
}

const profileFormValidator = new FormValidator(popupProfileForm, validationConfig);
profileFormValidator.enableValidation();

const addPlaceFormValidator = new FormValidator(popupAddPlaceForm, validationConfig);
addPlaceFormValidator.enableValidation();

popupAddPlaceAddButton.addEventListener('click', function() {popupWithFormPlace.open()});
popupProfileEditButton.addEventListener('click', function() {syncProfileFormData(); popupWithFormUser.open()});

/*
function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}

function closeByEsc (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
}

popupList.forEach(function (popup) {
  popup.addEventListener('mousedown', function (evt) {
    if (evt.target === popup) {
      closePopup (popup);
    }
  });
});

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

function openPopupPhoto () {
  expandedPhoto.src = this._link;
  expandedPhoto.alt = this._name;
  photoLabel.textContent = this._name;
  openPopup (popupPhoto);
}

function createCard(placeName, photoLink, openPopupPhoto, cardTemplate) {
  const card = new Card(placeName, photoLink, openPopupPhoto, cardTemplate);
  return card;
}

function renderCard(card) {
  photoSection.prepend(card.getCard());
}

function submitAddPlaceForm (evt) {
  evt.preventDefault();
  renderCard(createCard(placeNameInput.value, photoLinkInput.value, openPopupPhoto, cardTemplate));
  popupAddPlaceForm.reset();
  addPlaceFormValidator.toggleButtonState();
  closePopup (popupAddPlace);
}

initialCards.forEach(function (elem) {
  renderCard(createCard(elem.name, elem.link, openPopupPhoto, cardTemplate));
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
*/