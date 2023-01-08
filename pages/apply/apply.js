// pages/apply/apply.js
const app = getApp();
let missionID = '';
let a = '';
let b = '';
let c = '';
let d = '';
let e = '';
let f = '';
let description = '';
let publisher = '';
let text = '';
let date1 = '';
let date2 = '';
let location = '';
let people = '';
let time = '';
let name1 = '';
let bool = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false
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
    this.setData({
      show: true
    })
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
  missionSearch: function () {
    wx.request({
      url: 'http://1.15.118.125:8080/NIC/show',
      data: {
        "method": "showByInput",
        "data": {
          "missionID": missionID
        }
      },
      success: (res) => {
        console.log(res.data)
        if (res.data.code == 302) {
          //success
          description = res.data.data[0].description
          location = res.data.data[0].place
          publisher = res.data.data[0].publisher
          date1 = res.data.data[0].time.month + "月" + res.data.data[0].time.day + "日" + res.data.data[0].time.beginHour + ":" + res.data.data[0].time.beginMinute
          date2 = res.data.data[0].time.endHour + ":" + res.data.data[0].time.endMinute
          people = res.data.data[0].reporterNeeds.article + "文" + res.data.data[0].reporterNeeds.photo + "摄"
          wx.showToast({
            title: '查询成功',
            success: res => {
              //页面刷新如何实现？？？
              reload()
            }
          })
        } else {
          wx.showToast({
            title: '未查询到此稿件码',
            icon: 'none'
          })
        }
      }
    })
  }
})
Component({
  methods: {
    onChange(e) {
      missionID = e.detail.value.toString()
    },
    missionSearch: function () {
      wx.request({
        url: 'http://1.15.118.125:8080/NIC/show',
        data: {
          "method": "showByInput",
          "data": {
            "missionID": missionID
          }
        },
        success: (res) => {
          console.log(res.data)
          if (res.data.code == 302) {
            //success
            description = res.data.data[0].description
            location = res.data.data[0].place
            publisher = res.data.data[0].publisher
            date1 = res.data.data[0].time.month + "月" + res.data.data[0].time.day + "日" + res.data.data[0].time.beginHour + ":" + res.data.data[0].time.beginMinute
            date2 = res.data.data[0].time.endHour + ":" + res.data.data[0].time.endMinute
            people = res.data.data[0].reporterNeeds.article + "文" + res.data.data[0].reporterNeeds.photo + "摄"
            wx.showToast({
              title: '查询成功',
              success: res => {
                //页面刷新如何实现？？？
              }
            })
          } else {
            wx.showToast({
              title: '未查询到此稿件码',
              icon: 'none'
            })
          }
        }
      })
    }
  },
  data: {
    current: 0,
    info: {
      name: name1,
      time: "2022-10-21 20:00"
    },
    content: {
      a: a,
      b: b,
      c: "小明于 2022-10-21 20：00完成了该任务",
      d: d,
      e: e,
      f: f
    },
    mag: {
      text: description,
      date1: date1,
      date2: date2,
      location: location,
      people: people,
      bool:bool
    },
  }
});