// pages/myinformation/myinformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: [],
    showName: false,
    index: 0,
    man: true
  },

  changePhoto(e) {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      camera: 'back',
      success: (res) => {
        //console.log(res.tempFiles[0].tempFilePath)
        this.setData({
          picture: res.tempFiles[0].tempFilePath
        })
      }
    })
  },

  changeName(e) {
    ////console.log(e)
    this.setData({
      index: e.currentTarget.dataset.index,
      showName: !this.data.showName
    })
  },
  cancelMask() {
    this.setData({
      showName: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const resultInfo = JSON.parse(options.resultInfo)
    //console.log(resultInfo)
    this.setData({
      man: true,
      info: [{
        column: "1/4",
        row: "1/2",
        color: "#7b8341",
        btext: resultInfo.info[0].btext,//resultInfo.username,
        stext: "学号",
        f: ""
      }, {
        column: "3/5",
        row: "2/3",
        color: "#626a29",
        btext: resultInfo.info[1].btext,
        stext: "姓名",
        f: ""
      }, {
        column: "3/5",
        row: "3/4",
        color: "#5a6241",
        btext: resultInfo.info[2].btext,
        stext: "身份",
        f: ""
      }, {
        column: "1/5",
        row: "4/5",
        color: "#949441",
        btext: resultInfo.info[3].btext,
        stext: "联系方式",
        f: ""
      }, {
        column: "1/2",
        row: "5/6",
        color: "#deded5",
        btext: resultInfo.info[4].btext,
        blur: true,
        stext: "当月绩效",
        f: ""
      }, {
        column: "2/3",
        row: "5/6",
        color: "#322c18",
        btext: resultInfo.info[5].btext,
        stext: "完成任务",
        f: ""
      }, {
        column: "3/5",
        row: "5/7",
        color: "#deded5",
        btext: resultInfo.info[6].btext,
        stext: "总绩效",
        class: "-max",
        blur: true,
        f: ""
      }],
      picture:resultInfo.head,
      showName: false,
      index: 0
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