// pages/exception/exception.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showCheck1: false,
    showCheck2: false,
    showCheck3: false,
    showCheck4: false,
    showCheck5: false,
    showCheck6: false,
    peoples1: [],
    peoples2: [],
    peoples3: [],
    peoples4: [],
    peoples5: [],
    peoples6: [],
  },

  content(e) {
    let url = e.currentTarget.dataset.value
    this.setData({
      url: e.detail.value
    })
    console.log(url);
  },

  send1(e) {
    this.setData({
      showCheck1: e.detail.value,
      peoples1: e.detail.peoples
    })
  },
  send2(e) {
    this.setData({
      showCheck2: e.detail.value,
      peoples2: e.detail.peoples
    })
  },
  send3(e) {
    this.setData({
      showCheck2: e.detail.value,
      peoples2: e.detail.peoples
    })
  },
  send4(e) {
    this.setData({
      showCheck2: e.detail.value,
      peoples2: e.detail.peoples
    })
  },
  send5(e) {
    this.setData({
      showCheck2: e.detail.value,
      peoples2: e.detail.peoples
    })
  },
  send6(e) {
    this.setData({
      showCheck2: e.detail.value,
      peoples2: e.detail.peoples
    })
  },

  showCheck1(e) {
    this.setData({
      showCheck1: !this.data.showCheck1
    })
  },
  showCheck2(e) {
    this.setData({
      showCheck2: !this.data.showCheck2
    })
  },
  showCheck3(e) {
    this.setData({
      showCheck3: !this.data.showCheck3
    })
  },
  showCheck4(e) {
    this.setData({
      showCheck4: !this.data.showCheck4
    })
  },
  showCheck5(e) {
    this.setData({
      showCheck5: !this.data.showCheck5
    })
  },
  showCheck6(e) {
    this.setData({
      showCheck6: !this.data.showCheck6
    })
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