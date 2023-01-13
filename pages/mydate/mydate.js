// pages/mydate/mydate.js
const app = getApp()
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()
const currentday = date.getDay()
const week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
const Weekday = week[currentday]
const date_now = month + "-" + day
let rank = 0
Page({
  indexOf(element, arr) {
    let k = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        k = i
      }
    }
    return k
  },
  setDate_list() {
    const year = new Date().getFullYear()
    let list_temp = []
    for (let i = 1; i < 13; i++) {
      let day = 0
      if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) {
        day = 31
      } else if (i != 2) {
        day = 30
      } else {
        if (year % 4 == 0) {
          day = 29
        } else {
          day = 28
        }
      }
      for (let j = 1; j < day + 1; j++) {
        let temp = i + "-" + j
        list_temp.push(temp)
      }
    }
    this.setData({
      date_list: list_temp
    })
  },
  estimateDate() {
    let list = []
    //console.log(date_now)
    rank = this.indexOf(date_now, this.data.date_list)
    let temp = {}
    for (let j = 0; j < 7; j++) {
      if ((j + 1) % 7 === currentday) {
        temp = {
          isCurr: true,
          weekday: Weekday,
          day: this.data.date_list[rank],
        }
      } else {
        temp = {
          isCurr: false,
          weekday: week[(j + 1) % 7],
          day: this.data.date_list[(366 + rank + (j % 7) - currentday) % 365],
        }
      }
      list.push(temp)
    }
    this.setData({
      weekList: list
    })
  },
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
    isShow: false,
    color: ["#8fb3a5", "#be6476", "#819b77", "#b8a070", "#1f8faf", "#419b89", "#8e7f64", "#6476be", "#e07050", "8faf1f"],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setDate_list()
    this.estimateDate()
    //console.log(this.data.date_list)
    const kcb = JSON.parse(options.kcb)
    //console.log(kcb)
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
    //console.log(list_all)
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
    //console.log(e.detail)
    console.log(this.data.weekList)
    let list = this.data.weekList
    const week_kcb = app.globalData.week_kcb
    const rank = this.indexOf(date_now, this.data.date_list)
    for (let i = 0; i < 7; i++) {
      list[i].day = this.data.date_list[(rank + (i % 7) - currentday + (e.detail.current - week_kcb) * 7 + 366) % 365]
    }
    if (e.detail.current === week_kcb) {
      list[(currentday + 6) % 7].isCurr = true
    } else {
      list[(currentday + 6) % 7].isCurr = false
    }
    this.setData({
      currentWeek: e.detail.current,
      weekList: list
    })

  }
})