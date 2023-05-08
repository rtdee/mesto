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
    if (name) {
      this.name.textContent = name;
    }
    if (about) {
      this.about.textContent = about;
    }
    if (avatar) {
      this.avatar.src = avatar;
    }
    if (myId) {
      this.myId = myId;
    }
  }
}