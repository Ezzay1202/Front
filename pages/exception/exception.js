// pages/exception/exception.js
const app = getApp();
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
    showCheck7: false,
    peoples1: [],
    peoples2: [],
    peoples3: [],
    peoples4: [],
    peoples5: [],
    peoples6: [],
    peoples7: [],
    useridList1: [],
    useridList2: [],
    useridList3: [],
    useridList4: [],
    useridList5: [],
    useridList6: [],
    useridList7: [],
  },

  content(e) {
    this.setData({
      url: e.detail.value
    })
  },

  send1(e) {
    this.setData({
      showCheck1: e.detail.value,
      peoples1: e.detail.peoples,
      useridList1: e.detail.useridList,
    })
  },
  send2(e) {
    this.setData({
      showCheck2: e.detail.value,
      peoples2: e.detail.peoples,
      useridList2: e.detail.useridList,
    })
  },
  send3(e) {
    this.setData({
      showCheck3: e.detail.value,
      peoples3: e.detail.peoples,
      useridList3: e.detail.useridList,
    })
  },
  send4(e) {
    this.setData({
      showCheck4: e.detail.value,
      peoples4: e.detail.peoples,
      useridList4: e.detail.useridList,
    })
  },
  send5(e) {
    this.setData({
      showCheck5: e.detail.value,
      peoples5: e.detail.peoples,
      useridList5: e.detail.useridList,
    })
  },
  send6(e) {
    this.setData({
      showCheck6: e.detail.value,
      peoples6: e.detail.peoples,
      useridList6: e.detail.useridList,
    })
  },
  send7(e) {
    this.setData({
      showCheck7: e.detail.value,
      peoples7: e.detail.peoples,
      useridList7: e.detail.useridList,
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
  showCheck7(e) {
    this.setData({
      showCheck7: !this.data.showCheck7
    })
  },

  sendAll(e) {
    let map1 = {
      "photo": this.data.useridList7,
      "article": this.data.useridList2
    }
    let a1 = this.data.useridList5[0]
    let a2 = this.data.useridList4[0]
    let a3 = this.data.useridList6[0]
    let a4 = this.data.useridList1[0]
    let a5 = this.data.useridList3[0]

    let map2 = {
      "辅导员审核": a1,
      "编辑部审稿": a2,
      "排版": a3,
      "发布任务": a4,
      "写稿": a5,
    }
    wx.request({
      url: 'http://1.15.118.125:8081/NIC/manage',
      data: {
        "method": "addFinished",
        "data": {
          "reporters": map1,
          "statusChanger": map2,
          "articleURL": this.data.url,
          "missionID": this.data.missionID
        }
      },
      success: (res) => {
        console.log(res.data)
        if (res.data.code === 202) {
          wx.showToast({
            title: '提交成功'
          })
          app.sleep(3000)
          wx.redirectTo({
            url: "/pages/home/home",
          })
        } else {
          wx.showToast({
            title: '提交失败',
            icon: 'error'
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
    const missionID = JSON.parse(options.missionID)
    this.setData({
      missionID: missionID
    })
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