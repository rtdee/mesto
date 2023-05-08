import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import { validationConfig, elements } from '../utils/constants.js'

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: '7946e21b-f2ed-4c59-bfb7-0f52e5cb3fd4',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo({
  name: elements.profileName,
  about: elements.profileTitle,
  avatar: elements.profileAvatar
});

function getUserInfo() {
  api.getUserInfo()
    .then((res) => {
      userInfo.setUserInfo({
        name: res.name,
        about: res.about,
        avatar: res.avatar,
        myId: res._id
      });
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
      alert(err);
    })
}
getUserInfo();

const createCard = (data) => {
  const card = new Card({
    data,
    handleCardClick: () => {
      popupWithImage.open(data);
    }
  }, elements.cardTemplate, putLike, deleteLike, confirmDelete, userInfo.getUserInfo());
  
  return card.getCard();
}

const cardsSection = new Section({
    renderer: (data) => {
      cardsSection.appendItem(createCard(data));
    }
  }, elements.photoSection
);

const cardsSectionPost = new Section({
  renderer: (data) => {
    cardsSection.prependItem(createCard(data));
  }
}, elements.photoSection
);

function renderInitCards() {
  getUserInfo();
  api.getInitialCards()
    .then((res) => {
      cardsSection.renderItems(res);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
      alert(err);
    })
}
renderInitCards();

function handleProfileFormSubmit(formData) {
  popupWithFormUser.renderSaving(true);

  const data = {
    name: formData.name,
    about: formData.about
  };

  api.patchUserInfo(data)
    .then((res) => {
      getUserInfo();
      popupWithFormUser.close();
      profileFormValidator.toggleButtonState();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
      alert(err);
    })
    .finally(() => {
      popupWithFormUser.renderSaving(false);
    })
}

const popupWithFormUser = new PopupWithForm(elements.popupProfile, handleProfileFormSubmit);
popupWithFormUser.setEventListeners();

function handleAvatarUpdate(formData) {
  popupWithFormAvatar.renderSaving(true);

  const data = {
    avatar: formData.avatar
  };

  api.patchAvatar(data)
    .then((res) => {
      getUserInfo();
      popupWithFormAvatar.close();
      avatarFormValidator.toggleButtonState();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
      alert(err);
    })
    .finally(() => {
      popupWithFormAvatar.renderSaving(false);
    })
}

const popupWithFormAvatar = new PopupWithForm(elements.popupAvatar, handleAvatarUpdate);
popupWithFormAvatar.setEventListeners();

function handleCardFormSubmit(formData) {
  popupWithFormPlace.renderSaving(true);

  const data = {
    name: formData.name,
    link: formData.link
  };

  api.postNewCard(data)
    .then((res) => {
      cardsSectionPost.renderItems([res]);
      popupWithFormPlace.close();
      cardFormValidator.toggleButtonState();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
      alert(err);
    })
    .finally(() => {
      popupWithFormPlace.renderSaving(false);
    })
}

const popupWithFormPlace = new PopupWithForm(elements.popupAddPlace, handleCardFormSubmit);
popupWithFormPlace.setEventListeners();

const popupWithImage = new PopupWithImage(elements.popupPhoto);
popupWithImage.setEventListeners();

function fillProfileFormValues() {
  const userData = userInfo.getUserInfo();
  elements.profileNameInput.value = userData.name;
  elements.profileTitleInput.value = userData.about;
}

function putLike(cardId) {
  api.putLike(cardId)
    .then((res) => {
      cardsSection.clearSection();
      renderInitCards();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
      alert(err);
    })
}

function deleteLike(cardId) {
  api.deleteLike(cardId)
    .then((res) => {
      cardsSection.clearSection();
      renderInitCards();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
      alert(err);
    })
}

function confirmDelete(cardId) {
  popupWithConfirmation.getCardId(cardId)
  popupWithConfirmation.open()
}

function handleCardDelete(cardId) {
  api.deleteCard(cardId)
    .then((res) => {
      cardsSection.clearSection();
      renderInitCards();
      popupWithConfirmation.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
      alert(err);
    })
}

const popupWithConfirmation = new PopupWithConfirmation(elements.popupConfirm, handleCardDelete);
popupWithConfirmation.setEventListeners();

const profileFormValidator = new FormValidator(elements.popupProfileForm, validationConfig);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(elements.popupAddPlaceForm, validationConfig);
cardFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(elements.popupAvatarForm, validationConfig);
avatarFormValidator.enableValidation();

elements.popupAddPlaceAddButton.addEventListener('click', function() {popupWithFormPlace.open()});
elements.popupProfileEditButton.addEventListener('click', function() {fillProfileFormValues(); popupWithFormUser.open()});
elements.profileAvatarEdit.addEventListener('click', function() {fillProfileFormValues(); popupWithFormAvatar.open()});