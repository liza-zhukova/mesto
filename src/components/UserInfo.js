export default class UserInfo{
    constructor({nameSelector, opinionSelector, avatarSelector}){
        this._userName = document.querySelector(nameSelector);
        this._userOpinion = document.querySelector(opinionSelector);
        this._userAvatar = document.querySelector(avatarSelector);
    }

    getUserInfo(){
        this._userInfo = {
            name: this._userName.textContent,
            about: this._userOpinion.textContent,
            avatar: this._userAvatar.src,
        };
        return this._userInfo;
    }
    

    setUserInfo(userInfo){
        this._userName.textContent = userInfo.name;
        this._userOpinion.textContent = userInfo.about;
        this._userAvatar.src = userInfo.avatar;
    }
}