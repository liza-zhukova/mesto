export default class Card {

    constructor(dataCard, templateSelector, handleCardClick, handleForDeleteCard, addLikeCard, deleteLikeCard){
        this._name = dataCard.name;
        this._link = dataCard.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleForDeleteCard = handleForDeleteCard;
        this._addLikeCard = addLikeCard;
        this._deleteLikeCard = deleteLikeCard;
        this._likes = dataCard.likes;
        this._userId = dataCard.userId;
        this._cardId = dataCard.cardId;
        this._ownerId = dataCard.ownerId;
    }

    _getTemplateCard(){
        const newCard = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element__card')
        .cloneNode(true);

        return newCard
    }

    deleteCard(){
        this._element.remove();
        this._element = null; 
    }

    _isOwn(){
        if(this._userId !== this._ownerId){
            this._delete.remove();
        }
    }

    addLike(){
        this._like.classList.add('element__card-item-like_active');
    }

    deleteLike(){
        this._like.classList.remove('element__card-item-like_active');
    }

    _isLiked(){
        this._likes.forEach((user) =>{
            if (user._id === this._userId){
                this.addLike();
            } else{
                this.deleteLike()
            }
        });
    }

    _toggleLikeCard(){
        if (this._like.classList.contains('element__card-item-like_active')){
            this._deleteLikeCard();
        } else {
            this._addLikeCard();
        }
    }

    countLikes(likes){
        this._likeNumber.textContent = likes.likes.length;
    }

    _setEventListeners(){
        this._delete.addEventListener('click', () => {
            this._handleForDeleteCard(this)
         });
        this._like.addEventListener('click', () => {
            this._toggleLikeCard();
        });
        this._image.addEventListener('click', () =>{ 
            this._handleCardClick(this._name, this._link)
        });   
    }

    generateCard(){
        this._element = this._getTemplateCard();
        this._image = this._element.querySelector('.element__card-img');
        this._like = this._element.querySelector('.element__card-item-like');
        this._delete = this._element.querySelector('.element__card-delete');
        this._likeNumber = this._element.querySelector('.element__card-item-like-number');

        this._image.setAttribute('src', this._link);
        this._image.setAttribute('alt', this._name);
        this._element.querySelector('.element__card-item-text').textContent = this._name;
        this._likeNumber.textContent = this._likes.length;
        this._setEventListeners();
        this._isLiked();
        this._isOwn();

        return this._element;   
    }     
}