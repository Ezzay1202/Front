// pages/performance/performance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    performance: [{
      title: "完成第一篇稿件",
      style: false,
      score: 50,
      complete: true,
      people: [{
        name: '乔晟豪',
        check: true
      }, {
        name: '蔡毅洲',
        check: false
      }, {
        name: '乔晟豪',
        check: false
      }]
    }, {
      title: "完成第二篇稿件",
      style: false,
      score: 20,
      complete: false
    }, {
      title: "每月参加一次记者团培训/例会",
      style: false,
      score: 10,
      complete: false
    }, {
      title: "完成多篇稿件（第三篇开始）",
      style: true,
      score: 10,
      complete: false
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  }
})