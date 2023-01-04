// pages/login/login.js
const app = getApp()
let username = ''
let password = ''
Page({
  content(e) {
    username = e.detail.value
  },
  password(e) {
    password = e.detail.value
  },

  /**
   * 页面的初始数据
   */
  data: {

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
  Login1: function () {
    if (password == '') {
      wx.showToast({
        title: '请输入密码！',
        icon: 'error'
      })
    }
    if (username == '') {
      wx.showToast({
        title: '请输入账户！',
        icon: 'error'
      })
    } else {
      wx.request({
        data: {
          data: {
            password: password,
            username: username
          },
          method: "signUp"
        },
        url: 'http://1.15.118.125:8080/NIC/login',
        success: (res) => {
          console.log(res.data);
          if (res.data.code == 102) {
            app.globalData.hasLogin = true;
            app.globalData.authority1 = res.data.data.authority1;
            app.globalData.authority2 = res.data.data.authority2;
            app.globalData.authority3 = res.data.data.authority3;
            app.globalData.username = res.data.data.username;
            app.globalData.userid = res.data.data.userid;
            app.globalData.missionTaken = res.data.data.missionTaken;
            app.globalData.missionCompleted = res.data.data.missionCompleted;
            wx.showToast({
                title: '登录成功',
              }),
              wx.redirectTo({
                url: '/pages/home/home',
              })
          }
          if (res.data.code == 99) {
            wx.showToast({
              title: '查无此用户',
              icon: 'error'
            })
          }
          if (res.data.code == 101) {
            wx.showToast({
              title: '密码错误',
              icon: 'error'
            })
          }
          if (res.data.code == 103) {
            wx.showToast({
              title: 'Error',
              icon: 'error'
            })
          }
        }
      })
    }
  },
  Login2: function () {
    wx.request({
      data: {
        method: "tourist"
      },
      url: 'http://1.15.118.125:8080/NIC/login',
      success: (res) => {
        if (res.data.code == 102) {
          app.globalData.hasLogin = true;
          wx.redirectTo({
              url: '/pages/home/home',
            }),
            wx.showToast({
              title: '登录成功',
            })
        }
        if (res.data.code == 103) {
          wx.showToast({
            title: 'Error',
            icon:'error'
          })
        }
      }
    })
  },
})