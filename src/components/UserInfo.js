export default class UserInfo {
  constructor({ userName, userAbout }) {
    this.userName = userName;
    this.userAbout = userAbout;
  }

  getUserInfo() {
    const userInfo = {
      userName: this.userName.textContent,
      userAbout: this.userAbout.textContent
    }
    return userInfo;
  }

  setUserInfo(userName, userAbout) {
    this.userName.textContent = userName;
    this.userAbout.textContent = userAbout;
  }
}