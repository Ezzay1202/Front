// pages/checkM/checkM.js
const app = getApp();
let list_all = [];
let list_show = [];
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: 'http://1.15.118.125:8080/NIC/show?method=showGotDraft',
      success: (res) => {
        list_all = res.data.data;
        let j = -1;
        let len = list_all.length;
        for (let i = 0; i < len; i++) {
          j++;
          let article = list_all[j].reporterNeeds.article + "文";
          let photo = list_all[j].reporterNeeds.photo + "摄";
          let minbegin = list_all[j].time.beginMinute;
          let minend = list_all[j].time.endMinute;
          if (minbegin < 10) {
            minbegin = "0" + minbegin.toString();
          }
          if (minend < 10) {
            minend = "0" + minend.toString();
          }
          if (list_all[j].reporterNeeds.article == undefined) {
            article = '';
          }
          if (list_all[j].reporterNeeds.photo == undefined) {
            photo = '';
          }
          let date1 = list_all[j].time.month + "月" + list_all[j].time.day + "日" + list_all[j].time.beginHour + ":" + minbegin + '-'
          let date2 = list_all[j].time.endHour + ":" + minend
          if (minbegin == undefined) {
            date2 = ''
            date1 = list_all[j].time.month + "月" + list_all[j].time.day + "日"
          }
          list_show[i] = {
            arr: i,
            files: list_all[j].files, //Array
            missionID: list_all[j].missionID,
            text: list_all[j].description,
            date1: date1,
            date2: date2,
            location: list_all[j].place,
            people: article + photo
          }
        };
        console.log(list_show);
        console.log(list_all);
        this.setData({
          listm: list_show
        })
      }
    })
  },
  func1(e) {
    let i = e.currentTarget.dataset.id
    let data_temp = list_show[i]
    let filesList = []
    for (let i = 0; i < data_temp.files.length; i++) {
      let temp = {
        arr: i,
        name: data_temp.files[i],
        type: 'file',
        path: ''
      }
      filesList.push(temp)
    }
    let da = {
      mag: {
        text: data_temp.text,
        date1: data_temp.date1,
        date2: data_temp.date2,
        location: data_temp.location,
        people: data_temp.people
      },
      files: filesList,
      tag: [{
          name: "优秀稿件",
          show: true
        },
        {
          name: "优秀稿件2",
          show: false
        },
      ],
      attitude: true,
      code: 1,
      code1: 2,
      wjxScore: 0
    }
    wx.navigateTo({
      url: '/pages/fcheckM/fcheckM?resultInfo=' + JSON.stringify(da)
    })
  },

  /**
   * 页面的初始数据
   */
  data: {

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