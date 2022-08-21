const profilePopup = document.querySelector('#profilePopup');
const editButton = document.querySelector('.profile__info-edit-button');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#opinion');
const profileName = document.querySelector('.profile__info-name');
const profileOpinion = document.querySelector('.profile__info-opinion');
const addButton = document.querySelector('.profile__add-button');
const closeEditButton = document.querySelector('#closeEditButton');
const profileForm = document.querySelector('#profilePopupContainer');



//функции открытия и закрытия попапа
function openPopup(popup){
  popup.classList.add('popup_opened')
};

function closePopup(popup){
  popup.classList.remove('popup_opened')
};



//редактировать профиль
function openProfilePopup(){
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileOpinion.textContent;
};

function closeProfilePopup(){
  closePopup(profilePopup);
};


function submitProfileEdit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileOpinion.textContent = jobInput.value;
    closePopup(profilePopup);
};


profileForm.addEventListener('submit', submitProfileEdit);
editButton.addEventListener('click', openProfilePopup);
closeEditButton.addEventListener('click', closeProfilePopup);


// форма добавления карточки
const addForm = document.querySelector('#addPopupContainer');
const closeAddButton = document.querySelector('#closeAddButton');
const addCardPopup = document.querySelector('#addCardPopup');
const titleInput = document.querySelector('#title');
const linkInput = document.querySelector('#link');



function openAddForm(){
  openPopup(addCardPopup);
};

function closeAddForm(){
  closePopup(addCardPopup);
};


function submitAddCard(evt){
  evt.preventDefault();
  createCard(titleInput.value, linkInput.value);
  closeAddForm();
  titleInput.value = '';
  linkInput.value ='';
};


addButton.addEventListener('click', openAddForm);
closeAddButton .addEventListener('click', closeAddForm);
addForm.addEventListener('submit', submitAddCard);



//шаблон узла
const elementsContainer = document.querySelector('.element');
const cardPopup = document.querySelector('#cardPopup');
const template = document.querySelector('#template').content;


function createCard(text, img){
  const newCard = template.cloneNode(true);
  const image = newCard.querySelector('.element__card-img');
  image.setAttribute('src', img);
  image.setAttribute('alt', text);
  newCard.querySelector('.element__card-item-text').textContent = text;
  newCard.querySelector('.element__card-item-like').addEventListener('click', (evt) =>{  //функция добавления и удаления лайка
    evt.target.classList.toggle('element__card-item-like_active');
  });
  image.addEventListener('click', () =>{  //функция открытия карточки
    openPopup(cardPopup);
    document.querySelector('.popup__photo-container-title').textContent = text;
    document.querySelector('.popup__photo-big').setAttribute('src', img);
  });
  newCard.querySelector('.element__card-delete').addEventListener('click', (elem) =>{
    const card = elem.target.closest('.element__card'); //если не добавить эту переменную, удаления не происходит, в консоли пишется, что это #document-fragment
    card.remove();
  });
  elementsContainer.prepend(newCard);  //не получается отделить вставку от создания, карточки не добавляются
};



//закрытие попапа карточки
const closeCardButton = document.querySelector('#closeCardButton');

function closePhotoPopup(){
  closePopup(cardPopup);
};

closeCardButton.addEventListener('click', closePhotoPopup);   



//добавление 6 карточек

function renderInitilCards(){
  initialCards.forEach((item) =>{
    createCard(item.name, item.link);
  });
};

renderInitilCards();