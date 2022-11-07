import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup{
    constructor(popupSelector, handleSubmitDeleteCard){
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__container-form');
        this._button = this._popup.querySelector('.popup__container-button');
        this._handleSubmitDeleteCard = handleSubmitDeleteCard;
    }

    open(cardElement){
         super.open();
         this._newCard = cardElement;
         this._button.focus();
    }

    setEventListeners(){
        super.setEventListeners();
         this._form.addEventListener('submit', (evt) =>{
             evt.preventDefault();
             this._handleSubmitDeleteCard(this._newCard);
        });
    }    
}
