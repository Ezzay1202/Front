// pages/submitP/submitP.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listp:[{
      text:"管理学创新实验班班会",
      date:"1月14日 7:00",
      tag:["班会","模板1"],
      file:[{
        name:"管理学创新实验班班会.doc",
        size:"2.3 mb"
      }],
      people:[
      {name:"方权泽",tel:"13848440908",detail:"一定要今天发哦"},
      {name:"张赫",tel:"13848440908",detail:"一定要今天发哦"},
      ],
      showdetail:true,
      url:'',
    }]
  },
  content(e){
    console.log(e)
    let index = e.currentTarget.dataset.index
    let url = 'listp[' + index + '].url'
    this.setData({
      [url]:e.detail.value
    })
    console.log(e)
  },
  goto(e){
    console.log(e)
    let url=e.currentTarget.dataset.url
    wx.navigateTo({
      url:`../seeM/seeM?url=${url}`,
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