import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards, validationConfig, elements } from '../utils/constants.js'

const userInfo = new UserInfo({
  userName: elements.profileName,
  userAbout: elements.profileTitle
});

const createCard = (data) => {
  const card = new Card({
    data,
    handleCardClick: () => {
      popupWithImage.open(data);
    }
  }, elements.cardTemplate);
  
  return card.getCard();
}

const cardsSection = new Section({
    renderer: (data) => {
      cardsSection.addItem(createCard(data));
    }
  }, elements.photoSection
);
cardsSection.renderItems(initialCards);

function handleProfileFormSubmit(formData) {
  userInfo.setUserInfo(formData.userName, formData.userAbout);
  popupWithFormUser.close();
  profileFormValidator.toggleButtonState();
}

const popupWithFormUser = new PopupWithForm(elements.popupProfile, handleProfileFormSubmit);
popupWithFormUser.setEventListeners();

function handleCardFormSubmit(formData) {
  cardsSection.addItem(createCard(formData));
  popupWithFormPlace.close();
  cardFormValidator.toggleButtonState();
}

const popupWithFormPlace = new PopupWithForm(elements.popupAddPlace, handleCardFormSubmit);
popupWithFormPlace.setEventListeners();

const popupWithImage = new PopupWithImage(elements.popupPhoto);
popupWithImage.setEventListeners();

function fillProfileFormValues() {
  const userData = userInfo.getUserInfo();
  elements.profileNameInput.value = userData.userName;
  elements.profileTitleInput.value = userData.userAbout;
}

const profileFormValidator = new FormValidator(elements.popupProfileForm, validationConfig);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(elements.popupAddPlaceForm, validationConfig);
cardFormValidator.enableValidation();

elements.popupAddPlaceAddButton.addEventListener('click', function() {popupWithFormPlace.open()});
elements.popupProfileEditButton.addEventListener('click', function() {fillProfileFormValues(); popupWithFormUser.open()});