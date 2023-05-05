export default class UserInfo {
  constructor({ name, about, avatar, myId }) {
    this.name = name;
    this.about = about;
    this.avatar = avatar;
    this.myId = myId;
  }

  getUserInfo() {
    const userInfo = {
      name: this.name.textContent,
      about: this.about.textContent,
      avatar: this.avatar.src,
      myId: this.myId
      
    }
    return userInfo;
  }

  setUserInfo({ name, about, avatar, myId }) {
    this.name.textContent = name;
    this.about.textContent = about;
    this.avatar.src = avatar;
    this.myId = myId;
  }
}