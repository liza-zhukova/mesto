export default class UserInfo{
    constructor({nameSelector, opinionSelector}){
        this._userName = document.querySelector(nameSelector);
        this._userOpinion = document.querySelector(opinionSelector);
    }

    getUserInfo(){
        this._userInfo = {
            myName: this._userName.textContent,
            myOpinion: this._userOpinion.textContent
        };
        return this._userInfo;
    }
    

    setUserInfo(userInfo){
        this._userName.textContent = userInfo.myName;
        this._userOpinion.textContent = userInfo.myOpinion;
    }
}