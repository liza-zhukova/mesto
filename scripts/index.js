import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import { initialCards } from "./cards.js";


const validationConfig = {
  formSelector: '.popup__container-form',
  inputSelector: '.popup__container-item',
  submitButtonSelector: '.popup__container-button',
  inactiveButtonClass: 'popup__container-button_disabled',
  inputErrorClass: 'popup__container-item_type_error',
  errorClass: 'popup__container-error_visible'   
};

const profilePopup = document.querySelector('#profilePopup');
const editButton = document.querySelector('.profile__info-edit-button');
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#opinion-input');
const profileName = document.querySelector('.profile__info-name');
const profileOpinion = document.querySelector('.profile__info-opinion');
const addButton = document.querySelector('.profile__add-button');
const profileForm = document.querySelector('#profilePopupContainer');
const popups = document.querySelectorAll('.popup');
const addForm = document.querySelector('#addPopupContainer');
const addCardPopup = document.querySelector('#addCardPopup');
const titleInput = document.querySelector('#title-input');
const linkInput = document.querySelector('#link-input');
export const titlePhoto = document.querySelector('.popup__photo-container-title');
export const bigPhoto = document.querySelector('.popup__photo-big');
const element = document.querySelector('.element');
const cardPopup = document.querySelector('#cardPopup');



//функции открытия и закрытия попапа
export function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};



function closePopup(popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};


function handleCardClick(name, link){
  openPopup(cardPopup);
  titlePhoto.textContent = name;
  bigPhoto.setAttribute('src', link);
  bigPhoto.setAttribute('alt', name);
};


//закрытие попапа по клику на оверлей и на кнопку закрытия
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      };
      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup)
      };
  });
});


//закрытие попапа через Esc
function closeByEscape(evt) {
if (evt.key === 'Escape') {
  const openedPopup = document.querySelector('.popup_opened');
  closePopup(openedPopup);
};
};



//редактировать профиль
function openProfilePopup(){
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileOpinion.textContent;
};


//обновить данные профиля
function submitProfileEdit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileOpinion.textContent = jobInput.value;
    closePopup(profilePopup);
    profileValidate.disableButton();
    profileValidate.resetValidation();
};


profileForm.addEventListener('submit', submitProfileEdit);
editButton.addEventListener('click', openProfilePopup);
 


function openAddForm(){
  openPopup(addCardPopup);
};


function closeAddForm(){
  closePopup(addCardPopup);
};


//сздать новую карточку 
function createCard(card) {
  const cardElement = new Card (card, '#template', handleCardClick).generateCard();
  return cardElement
};


//добавть новую карточку
function addCard(card){  
  element.prepend(createCard(card)); 
};


// сохранить новую карточку
function submitAddCard(evt){
  evt.preventDefault();
  addCard({name:titleInput.value, link:linkInput.value});
  closeAddForm();
  evt.target.reset();
  addCardValidate.disableButton();
  addCardValidate.resetValidation();
};


addButton.addEventListener('click', openAddForm);
addForm.addEventListener('submit', submitAddCard);

//добавить массив карточек
initialCards.forEach((card) =>{
  addCard(card);
});


//активировать валидацию
const addCardValidate = new FormValidator(validationConfig, addCardPopup);
addCardValidate.enableValidation();

const profileValidate = new FormValidator(validationConfig, profilePopup);
profileValidate.enableValidation();