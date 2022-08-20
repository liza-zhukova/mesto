const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__info-edit-button');
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('opinion');
const nameOfProfile = document.querySelector('.profile__info-name');
const opinionOfProfile = document.querySelector('.profile__info-opinion');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__container');


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
const formCard = document.querySelector('.popup__container_card');
const closeButtonCardForm = document.querySelector('.popup__close_card');
const cardPopup = document.querySelector('.popup_add-card');
const titleInput = document.querySelector('#title');
const linkInput = document.querySelector('#link');



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



//шаблон узла
const element = document.querySelector('.element');
const photoPopup = document.querySelector('.popup_photo');



function templateCard(text, img){
  const template = document.querySelector('#template');
  const li = template.content.cloneNode(true);
  const image = li.querySelector('.element__card-img');
  image.setAttribute('src', img);
  image.setAttribute('alt', text);
  li.querySelector('.element__card-item-text').textContent = text;
  li.querySelector('.element__card-item-like').addEventListener('click', (evt) =>{  //функция добавления и удаления лайка
    evt.target.classList.toggle('element__card-item-like_active');
  });
  li.querySelector('.element__card-img').addEventListener('click', () =>{  //функция открытия карточки
    photoPopup.classList.add('popup_opened');
    document.querySelector('.popup__photo-container-title').textContent = text;
    document.querySelector('.popup__photo-big').setAttribute('src', img);
    });
    li.querySelector('.element__card-delete').addEventListener('click', (elem) =>{
      const card = elem.target.closest('.element__card');
      card.remove();
    });
  element.prepend(li);
};

//закрытие попапа карточки
const closePhoto = document.querySelector('.popup__close_photo-big');

function closePhotoPopup(){
  photoPopup.classList.remove('popup_opened');
};

closePhoto.addEventListener('click', closePhotoPopup);   



//добавление 6 карточек
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






