// pages/publishedM/publishedM.js
let list_all = [];
let list_show = [];
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: 'http://1.15.118.125:8080/NIC/show?method=showAll',
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
            text: list_all[j].description,
            date1: list_all[j].time.month + "月" + list_all[j].time.day + "日" + list_all[j].time.beginHour + ":" + minbegin,
            date2: list_all[j].time.endHour + ":" + minend,
            location: list_all[j].place,
            people: article + photo,
            isUrge1:isUrge1,
            isUrge2:isUrge2,
            isUrge3:isUrge3,
            isUrge4:isUrge4,
          }
        };
        console.log(list_all);
        this.setData({
          listm: list_show
        })
      }
    });

  },
  takePhoto() {
    wx.request({
      url: 'url',
    })
  },

  takeArticle() {
    wx.request({
      url: 'url',
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

  /**
   * 页面的初始数据
   */
  data: {
    hasMore: true,
    showLoading: true,
    start: 0
  },
})