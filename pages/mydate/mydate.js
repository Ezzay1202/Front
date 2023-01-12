// pages/mydate/mydate.js
const app = getApp()
const date = new Date()
const month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
const day = date.getDate()
const currentday = date.getDay()
const week=["周日","周一","周二","周三","周四","周五","周六"]
const weekday = week[currentday]
Page({
  /**
   * 页面的初始数据
   */
  data: {
    time: {
      one: [{
          index: 1,
          timeStart: '08:00',
          timeEnd: '08:45'
        },
        {
          index: 2,
          timeStart: '08:55',
          timeEnd: '09:40'
        },
        {
          index: 3,
          timeStart: '09:50',
          timeEnd: '10:45'
        },
        {
          index: 4,
          timeStart: '10:50',
          timeEnd: '11:35'
        },
        {
          index: 5,
          timeStart: '13:30',
          timeEnd: '14:15'
        },
        {
          index: 6,
          timeStart: '14:25',
          timeEnd: '15:10'
        },
        {
          index: 7,
          timeStart: '15:20',
          timeEnd: '16:05'
        },
        {
          index: 8,
          timeStart: '16:15',
          timeEnd: '17:00'
        },
        {
          index: 9,
          timeStart: '13:30',
          timeEnd: '14:15'
        },

        {
          index: 10,
          timeStart: '14:25',
          timeEnd: '15:10'
        },
        {
          index: 11,
          timeStart: '15:20',
          timeEnd: '16:05'
        },
        {
          index: 12,
          timeStart: '16:15',
          timeEnd: '17:00'
        },
      ],
    },
    weekList: [{
      isCurr: true,
      weekday: "周一",
      day: "1-10",
    }, {
      isCurr: false,
      weekday: "周二",
      day: "1-11",
    }, {
      isCurr: false,
      weekday: "周三",
      day: "1-12",
    }, {
      isCurr: false,
      weekday: "周四",
      day: "1-9",
    }, {
      isCurr: false,
      weekday: "周五",
      day: "1-9",
    }, {
      isCurr: false,
      weekday: "周六",
      day: "1-9",
    }, {
      isCurr: false,
      weekday: "周日",
      day: "1-9",
    }],
    isShow: false,
    color: ["#8fb3a5", "#be6476", "#819b77", "#b8a070", "#1f8faf", "#419b89", "#8e7f64", "#6476be", "#e07050", "8faf1f"],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const kcb = JSON.parse(options.kcb)
    console.log(kcb)
    this.setData({
      currentWeek: app.globalData.week_kcb,
    })
    let list_all = []
    for (let i = 1; i < kcb.length + 1; i++) {
      let lesson_list = []
      for (let j = 0; j < 7; j++) {
        for (let k = 0; k < kcb[i - 1].time[j].lesson.length; k++) {
          let num1 = Number(kcb[i - 1].time[j].lesson[k].time.split('-')[0])
          let num2 = Number(kcb[i - 1].time[j].lesson[k].time.split('-')[1]) + 1
          let temp = {
            weekday: j + 1,
            num1: num1,
            num2: num2,
            sub: kcb[i - 1].time[j].lesson[k].name,
            add: kcb[i - 1].time[j].lesson[k].location,
            color: Math.floor(Math.random() * 10)
          }
          lesson_list.push(temp)
        }
      }
      let temp2 = {
        id: i,
        class: lesson_list
      }
      list_all.push(temp2)
    }
    this.setData({
      weeks: list_all
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

  },
  changeWeeks(e) {
    this.setData({
      currentWeek: e.detail.current + 1
    })
  }
})