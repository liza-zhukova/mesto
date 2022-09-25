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
   const submitCard = new Card(titleInput.value, linkInput.value, '#template');
   addCard(submitCard);
   closeAddForm();
   evt.target.reset();
   disableButton(submitButton, validationConfig);
 };


 addButton.addEventListener('click', openAddForm);
 addForm.addEventListener('submit', submitAddCard);



// //шаблон узла
 const cardPopup = document.querySelector('#cardPopup');
 const titlePhoto = document.querySelector('.popup__photo-container-title');
 const bigPhoto = document.querySelector('.popup__photo-big');



 function addCard(card){
  const cardElement = card.generateCard(); 
   document.querySelector('.element').prepend(cardElement);
};



//закрытие попапа карточки
function closePhotoPopup(){
  closePopup(cardPopup);
};



//добавление 6 карточек

initialCards.forEach((item) =>{
  const card = new Card(item.name, item.link, '#template');
  addCard(card);
});




//закрытие попапа через Esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

