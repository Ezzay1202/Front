// pages/publishedM/publishedM.js
const app = getApp();
let list_all = [];
let list_show = [];
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: 'http://1.15.118.125:8081/NIC/show?method=showNeed',
      success: (res) => {
        list_all = res.data.data;
        let j = -1;
        let len = list_all.length;
        for (let i = 0; i < len; i++) {
          let isUrge1 = true;
          let isUrge2 = true;
          let isUrge3 = true;
          let isUrge4 = true;
          j++;
          let lackAtc = list_all[j].reporterLack.article;
          let lackPht = list_all[j].reporterLack.photo;
          if (lackAtc == 0 && lackPht == 0) {
            list_show.splice(i, 1);
            i -= 1;
            len -= 1;
            continue;
          }
          if (lackAtc > 0) {
            isUrge3 = false;
          }
          if (lackPht > 0) {
            isUrge4 = false;
          }
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
          list_show[i] = {
            missionID: list_all[j].missionID,
            text: list_all[j].description,
            date1: list_all[j].time.month + "月" + list_all[j].time.day + "日" + list_all[j].time.beginHour + ":" + minbegin,
            date2: list_all[j].time.endHour + ":" + minend,
            location: list_all[j].place,
            people: article + photo,
            isUrge1: isUrge1,
            isUrge2: isUrge2,
            isUrge3: isUrge3,
            isUrge4: isUrge4,
          }
        };
        console.log(list_all);
        this.setData({
          listm: list_show
        })
      }
    })
  },
  takePhoto(e) {
    if (app.globalData.authority1 == 1) {
      wx.request({
        url: 'http://1.15.118.125:8081/NIC/take',
        data: {
          "method": "take",
          "data": {
            "userid": app.globalData.userid.toString(),
            "missionID": e.currentTarget.dataset.id.toString(),
            "kind": "photo"
          }
        },
        success: (res) => {
          console.log(res.data)
          if (res.data.code == 401) {
            wx.showToast({
              title: res.data.msg,
              icon:'error'
            })
          }
          if (res.data.code == 403) {
            wx.showToast({
              title: '接摄成功',
              //问题：一个人重复接一个任务。。。。。
            })
          }
          if (res.data.code == 99) {
            wx.showToast({
              title: '无此任务，请刷新界面',
              icon:'error'
            })
          }
          if (res.data.code == 98) {
            wx.showToast({
              title: '错误！请联系开发者',
              icon:'error'
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: '您没有权限',
        icon: "error"
      })
    }

  },

  takeArticle(e) {
    if (app.globalData.authority1 == 1) {
      wx.request({
        url: 'http://1.15.118.125:8081/NIC/take',
        data: {
          "method": "take",
          "data": {
            "userid": app.globalData.userid.toString(),
            "missionID": e.currentTarget.dataset.id.toString(),
            "kind": "article"
          }
        },
        success: (res) => {
          console.log(res.data)
          if (res.data.code == 401) {
            wx.showToast({
              title: res.data.msg,
              icon:'error'
            })
          }
          if (res.data.code == 403) {
            wx.showToast({
              title: '接文成功',
              //问题：一个人重复接一个任务。。。。。
            })
          }
          if (res.data.code == 99) {
            wx.showToast({
              title: '无此任务，请刷新界面',
              icon:'error'
            })
          }
          if (res.data.code == 98) {
            wx.showToast({
              title: '请联系开发者',
              icon:'error'
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: '您没有权限',
        icon: "error"
      })
    }

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

  /**
   * 页面的初始数据
   */
  data: {
    hasMore: true,
    showLoading: true,
    start: 0,
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
    }]
  },
  showDetail(e){
    console.log(e)
    let index = e.currentTarget.dataset.index
    let showdetail = 'listp[' + index + '].showdetail'
    this.setData({
      [showdetail]:!this.data.listp[index].showdetail
    })
  }
})