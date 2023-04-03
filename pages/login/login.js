// pages/login/login.js
const app = getApp()
Page({
  content(e) {
    this.setData({
      userid: e.detail.value
    })
  },
  password(e) {
    this.setData({
      password: e.detail.value
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    open: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (app.globalData.userid != '' && app.globalData.password != '') {
      this.Login1()
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  password_eye() {
    let open = !this.data.open
    this.setData({
      open: open
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    open: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  password_eye() {
    let open = !this.data.open
    this.setData({
      open: open
    })
  },
  Login1() {
    if (this.data.password === '' || app.globalData.password === '') {
      wx.showToast({
        title: '请输入密码！',
        icon: 'error',
        mask:true
      })
    }
    if (this.data.userid === '' || app.globalData.userid === '') {
      wx.showToast({
        title: '请输入账户！',
        icon: 'error',
        mask:true
      })
    } else {
      let userid = (this.data.userid === '') ? app.globalData.userid : this.data.userid
      let password = (this.data.password === '') ? 
      globalData.password : this.data.password
      wx.showLoading({
        title: '登陆中...',
        mask: true,
        success:()=>{
          wx.request({
            data: {
              data: {
                password: '123456', //password,
                userid: 'U202116999' //userid
              },
              method: "signUp"
            },
            url: 'https://www.hustnic.tech:8081/NIC/login',
            success: (res) => {
              console.log(res.data);
              if (res.data.code === 102) {
                app.globalData.hasLogin = true
                app.globalData.authority1 = res.data.data.authority1
                app.globalData.authority2 = res.data.data.authority2
                app.globalData.authority3 = res.data.data.authority3
                app.globalData.username = res.data.data.username
                app.globalData.userid = res.data.data.userid
                app.globalData.head = res.data.data.head
                //app.globalData.tel = res.data.data.tel
                app.globalData.week_kcb = res.data.time.week
                app.globalData.identity = res.data.data.identity
                app.globalData.missionTaken = res.data.data.missionTaken
                app.globalData.finishedPerformance = res.data.data.finishedPerformance
    
                // 把 SessionId 和过期时间放在内存中的全局对象和本地缓存里边
                app.globalData.sessionId = res.data.sessionId
                wx.setStorageSync('SESSIONID', res.data.sessionId)
                //存储账号密码
                wx.setStorage('USERID', res.data.data.userid)
                wx.setStorage('PASSWORD', this.data.password)
                // 假设登录态保持1天
                let expiredTime = +new Date() + 1 * 24 * 60 * 60 * 1000 * 180
                app.globalData.expiredTime = expiredTime
                wx.setStorageSync('EXPIREDTIME', expiredTime)
    
                wx.showToast({
                    title: '登录成功',
                    mask:true
                  }),
                  app.sleep(1200)
                wx.getUserProfile({
                  desc: '是否授权？',
                  success: (res) => {
                    console.log(res)
                    let datalist1 = res
                    wx.login({
                      success: (res) => {
                        console.log(res)
                        let datalist2 = res
                        wx.request({
                          url: '', //
                          data: {
                            'encryptedData': datalist1.encryptedData,
                            'iv': datalist1.iv,
                            'signature': datalist1.signature,
                            'rawData': datalist1.rawData,
                            'code': datalist2.code,
                            'userid': app.globalData.userid
                          },
                          success: (res) => {
                            console.log(res)
                          }
                        })
                      }
                    })
                  }
                })
    
                wx.requestSubscribeMessage({
                  tmplIds: ['Fehs8jFNXvAJixC7KkudGdsH1uKw5t_-UnehkRMfaB8', 'Fehs8jFNXvAJixC7KkudGaGyx-3_zmdEYjk-5zCbG1g', '9stBRAqDVcQt15Oi4FgLw75P7xpzb9YrifSX7-jLGoQ'],
                  success: (res) => {
                    console.log(res)
                  }
                })
                wx.redirectTo({
                  url: '/pages/home/home',
                })
              }
              if (res.data.code === 99) {
                wx.showToast({
                  title: '查无此用户',
                  icon: 'error',
                  mask:true
                })
              }
              if (res.data.code === 101) {
                wx.showToast({
                  title: '密码错误',
                  icon: 'error',
                  mask:true
                })
              }
              if (res.data.code === 103) {
                wx.showToast({
                  title: 'Error',
                  icon: 'error',
                  mask:true
                })
              }
            }
          })
        },
        complete:()=>{
          wx.hideLoading({
            success: (res) => {},
          })
        }
      })
    }
  },
  Login2() {}
})