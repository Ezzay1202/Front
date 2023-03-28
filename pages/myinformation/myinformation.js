// pages/myinformation/myinformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: [],
    showName: false,
    index: 0,
  },

  changeName(e) {
    //console.log(e)
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
    console.log(resultInfo)
    this.setData({
      info: [{
        column: "1/4",
        row: "1/2",
        color: "black",
        btext: resultInfo.info[0].btext,//resultInfo.username,
        stext: "昵称",
        f: "changeName"
      }, {
        column: "3/5",
        row: "2/3",
        color: "#574c45",
        btext: resultInfo.info[1].btext,
        stext: "姓名",
        f: ""
      }, {
        column: "3/5",
        row: "3/4",
        color: "#6a63a6",
        btext: resultInfo.info[2].btext,
        stext: "身份",
        f: ""
      }, {
        column: "1/5",
        row: "4/5",
        color: "#0e6e8c",
        btext: resultInfo.info[3].btext,
        stext: "联系方式",
        f: "changeName"
      }, {
        column: "1/2",
        row: "5/6",
        color: "#0e6e8c",
        btext: resultInfo.info[4].btext,
        stext: "当月绩效",
        f: ""
      }, {
        column: "2/3",
        row: "5/6",
        color: "#8fb3a5",
        btext: resultInfo.info[5].btext,
        stext: "完成任务",
        f: ""
      }, {
        column: "3/5",
        row: "5/7",
        color: "#4a2028",
        btext: resultInfo.info[6].btext,
        stext: "总绩效",
        class: "-max",
        f: ""
      }],
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