// pages/inquiryM/inquiryM.js
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
Page({


  /**
   * 页面的初始数据
   */
  data: {
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
            "missionID": missionID,
            'userid': app.globalData.userid
          }
        },
        success: (res) => {
          console.log(res.data)
          if (res.data.code == 302) {
            let current = 0
            a = res.data.data[0].publisher + "于 " + res.data.data[0].status.发布任务 + '发布任务'
            if (res.data.data[0].status.接稿 != '未达成') {
              current += 1
              if (res.data.data[0].reporters.article[0] == res.data.data[0].reporters.photo[0]) {
                b = res.data.data[0].reporters.article[0] + "于 " + res.data.data[0].status.接稿 + "接文摄"
              } else {
                b = res.data.data[0].reporters.article[0] + "和" + res.data.data[0].reporters.photo[0] + "于 " + res.data.data[0].status.接稿 + "分接文摄"
              }
              if (res.data.data[0].status.写稿 != '未达成') {
                current += 1
                c = res.data.data[0].status.写稿 + '完成稿件'
                if (res.data.data[0].status.编辑部审核 != '未达成') {
                  current += 1
                  d = res.data.data[0].status.编辑部审核
                  if (res.data.data[0].status.排版 != '未达成') {
                    current += 1
                    e = res.data.data[0].status.排版
                    if (res.data.data[0].status.辅导员审核 != '未达成') {
                      current += 1
                      f = res.data.data[0].status.辅导员审核
                    }
                  }
                }
              }
            }
            let data_temp = {
              //success
              description: res.data.data[0].description,
              element: res.data.data[0].element,
              current: current,
              location: res.data.data[0].place,
              date1: res.data.data[0].time.month + "月" + res.data.data[0].time.day + "日" + res.data.data[0].time.beginHour + ":" + res.data.data[0].time.beginMinute,
              date2: res.data.data[0].time.endHour + ":" + res.data.data[0].time.endMinute,
              people: res.data.data[0].reporterNeeds.article + "文" + res.data.data[0].reporterNeeds.photo + "摄",
              a: a,
              b: b,
              c: c,
              d: d,
              e: e,
              f: f
            }
            console.log(data_temp)
            wx.showToast({
              title: '查询成功'
            })
            wx.navigateTo({
              url: '/pages/apply/apply?resultInfo2=' + JSON.stringify(data_temp)
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
  data: {}
});
