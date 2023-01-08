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
let current = 0;
let text = '';
let date1 = '';
let date2 = '';
let location = '';
let people = '';
let time = '';
let element = '';
Page({
  /**
   * 页面的初始数据
   */
  data: {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //const resultInfo2 = JSON.parse(options.resultInfo2)
    //console.log(resultInfo2)
    console.log('yes')
    a = resultInfo2.a
    b = resultInfo2.b
    c = resultInfo2.c
    d = resultInfo2.d
    e = resultInfo2.e
    f = resultInfo2.f
    description = resultInfo2.description
    element = resultInfo2.element
    current = resultInfo2.current
    location = resultInfo2.location
    date1 = resultInfo2.date1
    date2 = resultInfo2.date2
    people = resultInfo2.people
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
  missionSearch: function () {}
})
Component({
  lifetimes: {
    ready() {
      let that = this
      const resultInfo2 = JSON.parse(that.options.resultInfo2)
      console.log(resultInfo2)
      a = resultInfo2.a
      b = resultInfo2.b
      c = resultInfo2.c
      d = resultInfo2.d
      e = resultInfo2.e
      f = resultInfo2.f
      description = resultInfo2.description
      element = resultInfo2.element
      current = resultInfo2.current
      location = resultInfo2.location
      date1 = resultInfo2.date1
      date2 = resultInfo2.date2
      people = resultInfo2.people
      this.setData({
        current: current,
        content: {
          a: a,
          b: b,
          c: c,
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
        }
      })
    }
  },
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
            let current = 0
            a = res.data.data[0].publisher + "于 " + res.data.data[0].status.发布任务
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