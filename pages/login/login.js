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
        console.log(res.data.code);
        if (res.data.code == 102) {
          app.globalData.hasLogin = true;
          wx.redirectTo({
            url: '/pages/home/home',
          })
        }
        if (res.data.code == 100) {
          wx.showToast({
            title: '查无此用户',
          })
        }
        if (res.data.coed == 101) {
          wx.showToast({
            title: '密码错误',
          })
        }
        if (res.data.code == 103) {
          wx.showToast({
            title: 'Error',
          })
        }
      }
    })
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
          })
        }
      }
    })
  },
})


