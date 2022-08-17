let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__info-edit-button');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('opinion');
let nameOfProfile = document.querySelector('.profile__info-name');
let opinionOfProfile = document.querySelector('.profile__info-opinion');
let addButton = document.querySelector('.profile__add-button');
let closeButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__container');
let bigPhoto = document.querySelector('.popup_photo');


//редактировать профиль
function openPopap(){
    popup.classList.add('popup_opened');
    nameInput.value = nameOfProfile.textContent;
    jobInput.value = opinionOfProfile.textContent;
};


function closePopap(){
    popup.classList.remove('popup_opened');
};



function formSubmitHandler (evt) {
    evt.preventDefault();
    nameOfProfile.textContent = nameInput.value
    opinionOfProfile.textContent = jobInput.value
    closePopap()
};


formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopap);
closeButton.addEventListener('click', closePopap);


//добавление 6 карточек
let element = document.querySelector('.element');


function templateCard(text, img){
  let template = document.querySelector('#template');
  let li = template.content.cloneNode(true);
  li.querySelector('.element__card-item-text').textContent = text;
  li.querySelector('.element__card-img').setAttribute('src', img);
  element.prepend(li);
};


const initialCards = [
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Никарагуа',
    link: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Мальдивы',
    link: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80'
  },
  {
    name: 'Бали',
    link: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  },
  {
    name: 'Морейн',
    link: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Айбзее',
    link: 'https://images.unsplash.com/photo-1553114836-026cecec9778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  }
];


function renderCard(){
  initialCards.forEach((item) =>{
    templateCard(item.name, item.link);
  });
};

renderCard();


// форма добавления карточки
let formCard = document.querySelector('.popup__container_card');
let closeButtonCardForm = document.querySelector('.popup__close_card');
let cardPopup = document.querySelector('.popup_add-card');
let titleInput = document.querySelector('#title');
let linkInput = document.querySelector('#link');



function openformCard(){
  cardPopup.classList.add('popup_opened');
};

function closeCard(){
  cardPopup.classList.remove('popup_opened');
};


function addCard(evt){
  evt.preventDefault();
  templateCard(titleInput.value, linkInput.value)
  closeCard();
  titleInput.value = '';
  linkInput.value ='';
};


addButton.addEventListener('click', openformCard);
closeButtonCardForm .addEventListener('click', closeCard);
formCard.addEventListener('submit', addCard);



//добавить или убрать лайк

   
