export default class Popup{
    constructor(popupSelector){
        this._selector = document.querySelector(popupSelector);
    }

    open(){
        this._selector.classList.add('popup_opened');
    }

    close(){
        this._selector.classList.remove('popup_opened');
    }

    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners(){
        this._selector.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close()
            };
            if (evt.target.classList.contains('popup__close')) {
                this.close()
            };
        });
        document.addEventListener('keydown', this._handleEscClose.bind(this));
    }
}