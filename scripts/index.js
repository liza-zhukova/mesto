import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import { initialCards } from "./cards.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

const validationConfig = {
  formSelector: '.popup__container-form',
  inputSelector: '.popup__container-item',
  submitButtonSelector: '.popup__container-button',
  inactiveButtonClass: 'popup__container-button_disabled',
  inputErrorClass: 'popup__container-item_type_error',
  errorClass: 'popup__container-error_visible'   
};


const editButton = document.querySelector('.profile__info-edit-button');
const profileName = '.profile__info-name';
const profileOpinion = '.profile__info-opinion';
const addButton = document.querySelector('.profile__add-button');
const profileForm = document.querySelector('#profilePopupContainer');
const addForm = document.querySelector('#addPopupContainer');
const titleInput = document.querySelector('#title-input');
const linkInput = document.querySelector('#link-input');
const ElementContainer = '.element';


const profilePopup = new PopupWithForm ('#profilePopup', submitProfileEdit);

profilePopup.setEventListeners();

const addCardPopup = new PopupWithForm ('#addCardPopup', handleCardSubmit);
addCardPopup.setEventListeners();

const cardPopup = new PopupWithImage('#cardPopup');
cardPopup.setEventListeners();

const userOpinion = new UserInfo (profileName, profileOpinion);

//редактировать профиль
function openProfilePopup(){
  profilePopup.open();
  userOpinion.getUserInfo();
};


//обновить данные профиля
 function submitProfileEdit() {
  userOpinion.setUserInfo();
  profilePopup.close();
  profileValidate.resetValidation();
};

 
//фнкция открытия попапа добавления карточки
function openAddForm(){
  addCardPopup.open();
};


//сздать новую карточку 
function createCard(card) {
  const newCard = new Card (card, '#template', handleCardClick);
  const cardElement = newCard.generateCard();
  return cardElement
};


//добавить новую карточку
function addCard(card){
  document.querySelector(ElementContainer).prepend(createCard(card));
};


//функция открытия попапа с картинкой
function handleCardClick(name, link){
  cardPopup.open(name, link);
};


// сохранить новую карточку
function handleCardSubmit(){
  addCard({name:titleInput.value, link:linkInput.value});
  addCardPopup.close()
  addCardValidate.resetValidation();
 };


//добавить массив карточек
const cardList = new Section({
  items: initialCards,
  renderer: (item) =>{
    cardList.addItem(createCard(item));
  }
}, ElementContainer);

cardList.renderItems();


//слушатели открытия попапов
addButton.addEventListener('click', openAddForm);
editButton.addEventListener('click', openProfilePopup);


//активировать валидацию
const addCardValidate = new FormValidator(validationConfig, addForm);
addCardValidate.enableValidation();

const profileValidate = new FormValidator(validationConfig, profileForm);
profileValidate.enableValidation();