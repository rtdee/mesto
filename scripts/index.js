
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile-info__edit-button');

closeButton.addEventListener('click', popupToggle);
editButton.addEventListener('click', popupToggle);

function popupToggle() {
  popup.classList.toggle('popup_opened');
}

let profileName = document.querySelector('.profile-info__name');
let profileTitle = document.querySelector('.profile-info__title');
let inputName = document.querySelector('#popup__profile-name');
let inputTitle = document.querySelector('#popup__profile-title');
let formElement = document.querySelector('.popup__container');

inputName.value = profileName.textContent;
inputTitle.value = profileTitle.textContent;

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileTitle.textContent = inputTitle.value;
  popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler); 