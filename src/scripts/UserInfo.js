export default class UserInfo {
  constructor({ userNameSelector, userAboutSelector }) {
    this.userName = userNameSelector;
    this.userAbout = userAboutSelector;
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