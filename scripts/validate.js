const validationConfig = {
    formSelector: '.popup__container-form',
    inputSelector: '.popup__container-item',
    submitButtonSelector: '.popup__container-button',
    inactiveButtonClass: 'popup__container-button_disabled',
    inputErrorClass: 'popup__container-item_type_error',
    errorClass: 'popup__container-error_visible'   
};



function disableButton(button, config){
    button.classList.add(config.inactiveButtonClass);
    button.disabled = true;
}; 



function activateButton(button, config){
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
};



function toggleButtonSubmit(inputList, button, config){
    if (checkAllInput(inputList)){
        disableButton(button, config)
    } else{
        activateButton(button, config)
    }
};



//находим невалидное поле
function checkAllInput(inputList){
    return inputList.some((input) =>{
        return !input.validity.valid
    });
};



//добавление ошибки 
function showInputError(form, input, config, errorMessage){
    const errorElement = form.querySelector(`.${input.id}-error`);
    input.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
};



//удаление ошибки
function hideInputError(form, input, config){
    const errorElement = form.querySelector(`.${input.id}-error`);
    input.classList.remove(config.inputErrorClass);
    errorElement.textContent ='';
    errorElement.classList.remove(config.errorClass);
};



// проверка валидности
function checkInput(form, input, config){
    if (!input.validity.valid){
        showInputError(form, input, config, input.validationMessage);
    }  else{
        hideInputError(form, input, config);
    }
};



//добавление обработчиков всем полям
function setEventListener(form, config){
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    const button = form.querySelector(config.submitButtonSelector);

    toggleButtonSubmit(inputList, button, config);

    inputList.forEach((input) =>{
        input.addEventListener('input', () =>{
            checkInput(form, input, config);
            toggleButtonSubmit(inputList, button, config);
        });
    });
};



// добавление обработчиков всем формам
function enableValidation(config){
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((form) =>{
        form.addEventListener('submit', (evt) =>{
            evt.preventDefault();
        }); 
        setEventListener(form, config);   
    });
};


enableValidation(validationConfig);