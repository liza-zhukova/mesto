let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__info_edit-button');
let nameInput = document.querySelector('.popup__container_name');
let jobInput = document.querySelector('.popup__container_opinion');
let nameOfProfile = document.querySelector('.profile__info_name');
let opinionOfProfile = document.querySelector('.profile__info_opinion');
let popupClose = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__container');
let saveButton = document.querySelector('.popup__container_button');


editButton.addEventListener('click', function (){
    popup.classList.add('popup_opened');
    nameInput.value = nameOfProfile.textContent;
    jobInput.value = opinionOfProfile.textContent;
});


popupClose.addEventListener('click', function(){
    popup.classList.remove('popup_opened');
});


popup.addEventListener('click', (event) => {
  if(!event.defaultPrevented){
    popup.classList.remove('popup_opened');
  }
});


formElement.addEventListener('click', (event) =>{
  event.preventDefault()
});

saveButton.addEventListener('click', function(){
    function formSubmitHandler (evt) {
        evt.preventDefault();
    
        nameOfProfile.textContent = nameInput[0].value
        opinionOfProfile.textContent = jobInput[0].value
        // Вставьте новые значения с помощью textContent
    }
    formElement.addEventListener('submit', formSubmitHandler);
    popup.classList.remove('popup_opened');
});




