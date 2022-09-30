import { openPopup } from "./index.js";
import { titlePhoto } from "./index.js";
import { bigPhoto } from "./index.js";
export class Card {

    constructor(text, img, selector){
        this._text = text;
        this._img = img;
        this._selector = selector;
    }

    _getTemplateCard(){
        const newCard = document
        .querySelector(this._selector)
        .content
        .querySelector('.element__card')
        .cloneNode(true);

        return newCard
    }


    _toggleLike(){
        this._element.querySelector('.element__card-item-like').addEventListener('click', (evt) =>{  
            evt.target.classList.toggle('element__card-item-like_active');
          });
    }


    _openCard(){
        this._image.addEventListener('click', () =>{  
            openPopup(cardPopup);
            titlePhoto.textContent = this._text;
            bigPhoto.setAttribute('src', this._img);
            bigPhoto.setAttribute('alt', this._text);
           });
    }


    _deleteCard(){
        this._element.querySelector('.element__card-delete').addEventListener('click', () =>{  
            this._element.remove();
          }); 
    }



    generateCard(){
        this._element = this._getTemplateCard();
        this._image = this._element.querySelector('.element__card-img');
        this._image.setAttribute('src', this._img);
        this._image.setAttribute('alt', this._text);
        this._element.querySelector('.element__card-item-text').textContent = this._text;
        this._toggleLike();
        this._openCard();
        this._deleteCard();

        return this._element;   
    }   
    

}