export class FormValidator {

    constructor(config, form){
        this.config = config;
        this.form = form;
        this._inputList = Array.from(this.form.querySelectorAll(this.config.inputSelector));
        this._button = this.form.querySelector(this.config.submitButtonSelector);
    }



    disableButton(){
        this._button.classList.add(this.config.inactiveButtonClass);
        this._button.disabled = true;
    } 
        
        
        
    _activateButton(){
        this._button.classList.remove(this.config.inactiveButtonClass);
        this._button.disabled = false;
    }
        
        
        
    _toggleButtonSubmit(){
        if (this._checkAllInput()){
            this.disableButton()
        } else{
            this._activateButton()
        }
    }
        
        
        
    //находим невалидное поле
    _checkAllInput(){
        return this._inputList.some((input) =>{
            return !input.validity.valid
        });
    }
        
        
        
    //добавление ошибки 
    _showInputError(input, errorMessage){
        const errorElement = this.form.querySelector(`.${input.id}-error`);
        input.classList.add(this.config.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this.config.errorClass);
    }
        
        
        
    // //удаление ошибки
    _hideInputError(input){
        const errorElement = this.form.querySelector(`.${input.id}-error`);
        input.classList.remove(this.config.inputErrorClass);
        errorElement.textContent ='';
        errorElement.classList.remove(this.config.errorClass);
    }
        
        
        
    // проверка валидности
    _checkInput(input){
        if (!input.validity.valid){
            this._showInputError(input, input.validationMessage);
        }  else{
            this._hideInputError(input);
        }
    }
     
    //очистить ошибки
    resetValidation() {
        this._toggleButtonSubmit(); 
        this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement)
        });
    }
    
        
    // //добавление обработчиков всем полям
    _setEventListener(){
        
        this._toggleButtonSubmit();
        
        this._inputList.forEach((input) =>{
            input.addEventListener('input', () =>{
                this._checkInput(input);
                this._toggleButtonSubmit();
            });
        });
    }
             
        
    enableValidation(){
        this._setEventListener();   
    }
    
}         