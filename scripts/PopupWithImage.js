import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._image = this._selector.querySelector('.popup__photo-big');
        this._text = this._selector.querySelector('.popup__photo-container-title');
    }

    open(name, link){
        super.open();
        this._image.setAttribute('src', link);
        this._text.textContent = name;
        this._text.setAttribute('alt', name);
    }
}