const profilePopup = document.querySelector('#profilePopup');
const editButton = document.querySelector('.profile__info-edit-button');
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#opinion-input');
const profileName = document.querySelector('.profile__info-name');
const profileOpinion = document.querySelector('.profile__info-opinion');
const addButton = document.querySelector('.profile__add-button');
const profileForm = document.querySelector('#profilePopupContainer');
const popups = document.querySelectorAll('.popup')




//функции открытия и закрытия попапа
function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};



function closePopup(popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
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




// форма добавления карточки
const addForm = document.querySelector('#addPopupContainer');
const addCardPopup = document.querySelector('#addCardPopup');
const titleInput = document.querySelector('#title-input');
const linkInput = document.querySelector('#link-input');
const submitButton = addForm.querySelector('.popup__container-button');



function openAddForm(){
  openPopup(addCardPopup);
};



function closeAddForm(){
  closePopup(addCardPopup);
};


function submitAddCard(evt){
  evt.preventDefault();
  addCard(createCard(titleInput.value, linkInput.value));
  closeAddForm();
  evt.target.reset();
  disableButton(submitButton, validationConfig);
};


addButton.addEventListener('click', openAddForm);
addForm.addEventListener('submit', submitAddCard);



//шаблон узла
const elementsContainer = document.querySelector('.element');
const cardPopup = document.querySelector('#cardPopup');
const template = document.querySelector('#template').content.querySelector('.element__card');
const titlePhoto = document.querySelector('.popup__photo-container-title');
const bigPhoto = document.querySelector('.popup__photo-big');


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
    titlePhoto.textContent = text;
    bigPhoto.setAttribute('src', img);
    bigPhoto.setAttribute('alt', text);
  });
  newCard.querySelector('.element__card-delete').addEventListener('click', () =>{  //функция удаления карточки
    newCard.remove();
  }); 
  return newCard;
};



function addCard(card){
  elementsContainer.prepend(card);  
};



//закрытие попапа карточки
function closePhotoPopup(){
  closePopup(cardPopup);
};



//добавление 6 карточек

function renderInitilCards(){
  initialCards.forEach((item) =>{
    addCard(createCard(item.name, item.link));
  });
};

renderInitilCards();


//закрытие попапа через Esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

