let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__info-edit-button');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('opinion');
let nameOfProfile = document.querySelector('.profile__info-name');
let opinionOfProfile = document.querySelector('.profile__info-opinion');
let closeButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__container');


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
}

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopap);
closeButton.addEventListener('click',closePopap);


