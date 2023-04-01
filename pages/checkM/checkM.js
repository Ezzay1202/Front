// pages/checkM/checkM.js
const app = getApp();
let list_all = [];
let list_show = [];
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let kind = ''
    if (app.globalData.authority3 === 1) {
      kind = 'teacher'
    } else {
      kind = 'editor'
    }
    console.log(kind)
    list_show = []
    this.setData({
      list_all: []
    })
    wx.request({
      url: 'https://www.hustnic.tech:8081/NIC/show?method=showGotDraft',
      data: {
        'data': {
          'kind': kind
        }
      },
      success: (res) => {
        console.log(res.data.data)
        list_all = res.data.data
        let j = -1;
        let len = list_all.length;
        for (let i = 0; i < len; i++) {
          j++;
          let state = 0
          let name = []
          let detail = []
          if (kind === 'editor') {
            if (JSON.stringify(list_all[i].comments.teacher) != '{}') {
              state = 1
              for (let k in list_all[i].comments.teacher) {
                name.push(k)
                detail.push(list_all[i].comments.teacher[k])
              }
            }
          }
          let article = list_all[j].reporterNeeds.article + "文" // 1文
          let photo = list_all[j].reporterNeeds.photo + "摄" // 1摄
          let minbegin = list_all[j].time.beginMinute
          let minend = list_all[j].time.endMinute
          if (minbegin < 10) {
            minbegin = "0" + minbegin.toString()
          }
          if (minend < 10) {
            minend = "0" + minend.toString();
          }
          if (list_all[j].reporterNeeds.article === undefined) {
            article = ''
          }
          if (list_all[j].reporterNeeds.photo === undefined) {
            photo = ''
          }
          let date1 = list_all[j].time.month + "月" + list_all[j].time.day + "日" + list_all[j].time.beginHour + ":" + minbegin + '-'
          let date2 = list_all[j].time.endHour + ":" + minend
          if (minbegin === undefined) {
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
            people: article + photo,
            articleList: list_all[j].reporters.article, //个人信息
            photoList: list_all[j].reporters.photo, //
            editor: list_all[j].statusChanger['编辑部审稿'],
            state: state,
            name: name[0],
            detail: detail[0]

          }
        }
        this.setData({
          listm: list_show
        })
        console.log(this.data.listm)
      }
    })
  },
  func1(e) {
    let i = e.currentTarget.dataset.id
    let data_temp = this.data.listm[i]
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
        location: (data_temp.location === undefined) ? '' : data_temp.location,
        people: data_temp.people, //1文1摄
        article: (data_temp.articleList === undefined) ? '' : data_temp.articleList,
        photo: (data_temp.photoList === undefined) ? '' : data_temp.photoList,
        editor: (data_temp.editor === undefined) ? '' : data_temp.editor, //
      },
      files: filesList,
      missionID: data_temp.missionID,
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
  data: {},

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