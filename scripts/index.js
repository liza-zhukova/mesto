import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import { initialCards } from "./cards.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";

const validationConfig = {
  formSelector: '.popup__container-form',
  inputSelector: '.popup__container-item',
  submitButtonSelector: '.popup__container-button',
  inactiveButtonClass: 'popup__container-button_disabled',
  inputErrorClass: 'popup__container-item_type_error',
  errorClass: 'popup__container-error_visible'   
};


const editButton = document.querySelector('.profile__info-edit-button');
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#opinion-input');
const profileName = document.querySelector('.profile__info-name');
const profileOpinion = document.querySelector('.profile__info-opinion');
const addButton = document.querySelector('.profile__add-button');
const profileForm = document.querySelector('#profilePopupContainer');
const addForm = document.querySelector('#addPopupContainer');
const titleInput = document.querySelector('#title-input');
const linkInput = document.querySelector('#link-input');
const ElementContainer = '.element';



const profilePopup = new Popup ('#profilePopup');
profilePopup.setEventListeners();


const addCardPopup = new Popup ('#addCardPopup');
addCardPopup.setEventListeners();

const cardPopup = new PopupWithImage('#cardPopup');
cardPopup.setEventListeners();


function handleCardClick(name, link){
  cardPopup.open(name, link);
};


//редактировать профиль
function openProfilePopup(){
  profilePopup.open();
  nameInput.value = profileName.textContent;
  jobInput.value = profileOpinion.textContent;
};

const editProfile = new PopupWithForm('#profilePopup', submitProfileEdit);
editProfile.setEventListeners();

//обновить данные профиля
 function submitProfileEdit() {
  profileName.textContent = nameInput.value;
  profileOpinion.textContent = jobInput.value;
  editProfile.close();
  profileValidate.resetValidation();
};

editButton.addEventListener('click', openProfilePopup);
 

function openAddForm(){
  addCardPopup.open();
};


//сздать новую карточку 
function createCard(card) {
  const cardElement = new Card (card, '#template', handleCardClick).generateCard();
  return cardElement
};


//добавить новую карточку
function addCard(card){
  document.querySelector(ElementContainer).prepend(createCard(card));
}

const addCardForm = new PopupWithForm('#addCardPopup', handleCardSubmit);
addCardForm.setEventListeners();

// сохранить новую карточку
 function handleCardSubmit(){
  addCard({name:titleInput.value, link:linkInput.value});
  addCardForm.close()
  addCardValidate.resetValidation();
};

addButton.addEventListener('click', openAddForm);


//добавить массив карточек
const cardList = new Section({
  items: initialCards,
  renderer: (item) =>{
    const card = new Card (item, '#template', handleCardClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, ElementContainer);

cardList.renderItems();


//активировать валидацию
const addCardValidate = new FormValidator(validationConfig, addForm);
addCardValidate.enableValidation();

const profileValidate = new FormValidator(validationConfig, profileForm);
profileValidate.enableValidation();