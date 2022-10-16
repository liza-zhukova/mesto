export default class UserInfo{
    constructor(nameSelector, opinionSelector){
        this._userName = document.querySelector(nameSelector);
        this._userOpinion = document.querySelector(opinionSelector);
        this._nameInput = document.querySelector('#name-input');
        this._opinionInput = document.querySelector('#opinion-input');
    }

    getUserInfo(){
        this._nameInput.value = this._userName.textContent;
        this._opinionInput.value = this._userOpinion.textContent;
    }
    

    setUserInfo(){
        this._userName.textContent = this._nameInput.value;
        this._userOpinion.textContent = this._opinionInput.value;
    }
}