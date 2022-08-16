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



// форма добавления карточки
let formCard = document.querySelector('.popup__container_card');
let closeButtonCardForm = document.querySelector('.popup__close_card');
let cardPopap = document.querySelector('.popup_add-card');
let titleInput = document.querySelector('#title');
let linkInput = document.querySelector('#link');
let element = document.querySelector('.element');


function openformCard(){
  cardPopap.classList.add('popup_opened');
};

function closeCard(){
  cardPopap.classList.remove('popup_opened');
};


function addCard(evt){
  evt.preventDefault();
  let template = document.querySelector('#template');
  let item = template.content.cloneNode(true);
  item.querySelector('.element__card-item-text').textContent = titleInput.value;
  item.querySelector('.element__card-img').setAttribute('src', linkInput.value);
  element.append(item);
  closeCard();
  titleInput.value = '';
  linkInput.value ='';
};


addButton.addEventListener('click', openformCard);
closeButtonCardForm .addEventListener('click', closeCard);
formCard.addEventListener('submit', addCard);



//добавить или убрать лайк

   
