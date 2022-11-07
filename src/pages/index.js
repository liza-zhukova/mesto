import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import './index.css'; 
import Api from "../components/Api.js";
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

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
const profileAvatar = '.profile__avatar';
const nameInput = document.querySelector('#name-input');
const opinionInput = document.querySelector('#opinion-input');
const addButton = document.querySelector('.profile__add-button');
const profileForm = document.querySelector('#profilePopupContainer');
const addForm = document.querySelector('#addPopupContainer');
const elementContainer = '.element';
const avatarButton = document.querySelector('.profile__avatar-container');
const updateAvatar = document.querySelector('#editAvatarPopupContainer');




//создание всех попапов
const profilePopup = new PopupWithForm ('#profilePopup', submitProfileEdit);
profilePopup.setEventListeners();

const newCardElementPopup = new PopupWithForm ('#addCardPopup', handleCardSubmit);
newCardElementPopup.setEventListeners();

const cardPopup = new PopupWithImage('#cardPopup');
cardPopup.setEventListeners();

const avatarPopup = new PopupWithForm('#editAvatarPopup', handleAvatarSubmit);
avatarPopup.setEventListeners();

const deletePopup = new PopupWithConfirmation('#deletePopup', handleForDeleteCard);
deletePopup.setEventListeners();

const userOpinion = new UserInfo ({
  nameSelector: profileName,
  opinionSelector: profileOpinion,
  avatarSelector: profileAvatar,
});



//работа с апи
const api = new Api({
  url:'https://mesto.nomoreparties.co/v1/cohort-52/',
  headers: {
    authorization: 'c78df5a5-01bc-412b-97d6-b31fbbeed335',
    'Content-Type': 'application/json',
  },
});

let userId;

Promise.all([api.getProfileInfo(), api.getCards()])
  .then(([userInfo, cards]) => {
    userId = userInfo._id;
    userOpinion.setUserInfo(userInfo);
    cardList.renderItems(cards);
  })
  .catch((err) => console.log(err));




//открыть попап профиля
function openProfilePopup(){
  profilePopup.open();
  profileValidate.resetValidation();
  const profileForm = userOpinion.getUserInfo();
  nameInput.value = profileForm.name;
  opinionInput.value = profileForm.about;
};


//обновить данные профиля
function submitProfileEdit(data){
  profilePopup.toggleTextButton(true);
    return api
      .editProfile(data)
      .then((userData) =>{
        userOpinion.setUserInfo(userData);
        profilePopup.close();
      })
      .catch ((err) => console.log(err))
      .finally(() =>{
        profilePopup.toggleTextButton(false);
      });
};


//открытие попапа аватара
function openAvatarPopup(){
  avatarPopup.open();
  avatarValidate.resetValidation();
};


//обновить аватар профиля
function handleAvatarSubmit(url){
  avatarPopup.toggleTextButton(true);
  return api
  .updateAvatar(url)
  .then((link) =>{
    userOpinion.setUserInfo(link);
    avatarPopup.close();
  })
  .catch((err) => console.log(err))
  .finally(() =>{
    avatarPopup.toggleTextButton(false)
  })
};
 



//расположение карточки
const cardList = new Section({
  renderer: (initialCards) =>{
    cardList.addItem(createCard(initialCards));
  }
}, elementContainer);


//фнкция открытия попапа добавления карточки
function openAddForm(){
  newCardElementPopup.open();
  addCardValidate.resetValidation();
};


//создание новой карточки 
function createCard(cardData) {
  const newCard = new Card ({
    name: cardData.name,
    link: cardData.link,
    ownerId: cardData.owner._id,
    userId: userId,
    cardId: cardData._id,
    likes: cardData.likes,
  },
    '#template', 
    handleCardClick,
    () => deletePopup.open(newCard),
    () => {
      return api
        .likeCard(cardData)
        .then((likes) => {
          newCard.countLikes(likes);
          newCard.addLike();
        })
        .catch((err) => console.log(err));
    },
    () => {
      return api
        .removeLikeCard(cardData)
        .then((likes) => {
          newCard.countLikes(likes);
          newCard.deleteLike();
        })
        .catch((err) => console.log(err));
    }
  );
  const cardElement = newCard.generateCard();
  return cardElement
};


//добавить новую карточку
function handleCardSubmit (newCardElement){
  newCardElementPopup.toggleTextButton(true);
  return api
  .addNewCards(newCardElement.name, newCardElement.link)
  .then((newCard) =>{
    cardList.addItem(createCard(newCard));
    newCardElementPopup.close();
  })
  .catch((err) => console.log(err))
  .finally(() =>{
    newCardElementPopup.toggleTextButton(false);
  })
};


//функция-коллбек открытия попапа с картинкой
function handleCardClick(name, link){
  cardPopup.open(name, link);
};


//удалить карточку
function handleForDeleteCard(card){
  return api
  .deleteCard(card._cardId)
  .then(() =>{
    card.deleteCard();
    deletePopup.close();
  })
  .catch((err) => console.log(err));
;}




//слушатели открытия попапов
addButton.addEventListener('click', openAddForm);
editButton.addEventListener('click', openProfilePopup);
avatarButton.addEventListener('click', openAvatarPopup);




//активировать валидацию
const profileValidate = new FormValidator(validationConfig, profileForm);
profileValidate.enableValidation();

const addCardValidate = new FormValidator(validationConfig, addForm);
addCardValidate.enableValidation();

const avatarValidate = new FormValidator(validationConfig, updateAvatar);
avatarValidate.enableValidation();