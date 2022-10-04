export class Card {

    constructor(data, selector, handleCardClick){
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
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


    _deleteCard(){
        this._element.querySelector('.element__card-delete').addEventListener('click', () =>{  
            this._element.remove();
          }); 
    }

    _setEventListeners(){
        this._toggleLike();
        this._deleteCard();
        this._image.addEventListener('click', () =>{ 
            this._handleCardClick(this._name, this._link)
        })    
    }


    generateCard(){
        this._element = this._getTemplateCard();
        this._image = this._element.querySelector('.element__card-img');
        this._image.setAttribute('src', this._link);
        this._image.setAttribute('alt', this._name);
        this._element.querySelector('.element__card-item-text').textContent = this._name;
        this._setEventListeners();

        return this._element;   
    }   
    

}