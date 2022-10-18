import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { initialCards } from "../components/cards.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import './index.css'; 

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
const nameInput = document.querySelector('#name-input');
const opinionInput = document.querySelector('#opinion-input');
const addButton = document.querySelector('.profile__add-button');
const profileForm = document.querySelector('#profilePopupContainer');
const addForm = document.querySelector('#addPopupContainer');
const elementContainer = '.element';


const profilePopup = new PopupWithForm ('#profilePopup', submitProfileEdit);
profilePopup.setEventListeners();

const newCardElement = new PopupWithForm ('#addCardPopup', handleCardSubmit);
newCardElement.setEventListeners();

const cardPopup = new PopupWithImage('#cardPopup');
cardPopup.setEventListeners();

const userOpinion = new UserInfo ({
  nameSelector: profileName,
  opinionSelector: profileOpinion,
});


//открыть попап профиля
function openProfilePopup(){
  profilePopup.open();
  profileValidate.resetValidation();
  const profileForm = userOpinion.getUserInfo();
  nameInput.value = profileForm.myName;
  opinionInput.value = profileForm.myOpinion;
};


//обновить данные профиля
 function submitProfileEdit({myName, myOpinion}) {
  userOpinion.setUserInfo({myName, myOpinion})
};

 
//фнкция открытия попапа добавления карточки
function openAddForm(){
  newCardElement.open();
  addCardValidate.resetValidation();
};


//создать новую карточку 
function createCard(card) {
  const newCard = new Card (card, '#template', handleCardClick);
  const cardElement = newCard.generateCard();
  return cardElement
};


//функция открытия попапа с картинкой
function handleCardClick(name, link){
  cardPopup.open(name, link);
};

//добавить новую карточку
function handleCardSubmit (newCardElement){
  cardList.addItem(createCard(newCardElement));
};


//добавить массив карточек
const cardList = new Section({
  items: initialCards,
  renderer: (item) =>{
    cardList.addItem(createCard(item));
  }
}, elementContainer);

cardList.renderItems();


//слушатели открытия попапов
addButton.addEventListener('click', openAddForm);
editButton.addEventListener('click', openProfilePopup);


//активировать валидацию
const profileValidate = new FormValidator(validationConfig, profileForm);
profileValidate.enableValidation();

const addCardValidate = new FormValidator(validationConfig, addForm);
addCardValidate.enableValidation();

