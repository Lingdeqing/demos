//app.js
App({
  onLauch(){
  },
  getUserInfo(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.globalData.role = 'user';
        resolve({
          role: this.globalData.role
        })
      }, 2000)

    })
  },
  globalData: {
    role: ''
  }
})