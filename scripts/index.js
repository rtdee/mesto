
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let profileTitle = document.querySelector('.profile__title');
let inputName = document.querySelector('#popup__profile-name');
let inputTitle = document.querySelector('#popup__profile-title');
let formElement = document.querySelector('.popup__container');

function popupToggle() {
  inputName.value = profileName.textContent;
  inputTitle.value = profileTitle.textContent;
  popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileTitle.textContent = inputTitle.value;
  popupToggle();
}

closeButton.addEventListener('click', popupToggle);
editButton.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler);
