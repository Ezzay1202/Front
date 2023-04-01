// pages/managment/managment.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    value: 'label_4',
    people: [{
      name: '组长会',
      check: true
    }, {
      name: 'NIC例会',
      check: false
    }, {
      name: '发放薪酬',
      check: false
    }, {
      name: '组织团建',
      check: false
    }],
    info: [{
      column: "1/3",
      row: "3/5",
      color: "black",
      btext: "3",
      stext: "待审核任务",
      class: 'maxnum',
      f: "checkMission"
    }, {
      column: "3/5",
      row: "3/5",
      color: "#574c45",
      btext: "4",
      stext: " 进行中任务",
      class: 'maxnum',
      f: "goToMywork"
    },
    //  {
    //   column: "1/5",
    //   row: "1/3",
    //   color: "#0e6e8c",
    //   btext: "待审核稿件：3",
    //   stext: "任务进度",
    //   class: '-max',
    //   f: "changeName"
    // },
    {
      column: "1/2",
      row: "5/6",
      color: "#d56937",
      btext: "50",
      stext: "人员系统",
      blur:true,
      f: ""
    }, {
      column: "2/3",
      row: "5/6",
      color: "#8fb3a5",
      btext: "30",
      stext: "本月任务",
      f: ""
    }, {
      column: "3/5",
      row: "5/7",
      color: "#4a2028",
      btext: "888",
      stext: "组织总绩效",
      blur:true,
      class: "maxnum",
      f: ""
    }],
    list: [{
      value: 'label_1',
      label: '首页',
      icon: 'home'
    },
    {
      value: 'label_2',
      label: '发布',
      icon: 'check-rectangle'
    },
    {
      value: 'label_4',
      label: '我的',
      icon: 'user'
    },
    ],
  },
  onChange(e) {
    //tabbar
    this.setData({
      value: e.detail.value,
    });
    if (app.globalData.hasLogin && e.detail.value == 'label_2') {
      //页面跳转
      if (app.globalData.authority2 == 1) {
        wx.redirectTo({
          url: "/pages/publishM/publishM",
        })
      } else {
        wx.showToast({
          title: '您没有权限',
          icon: 'none'
        })
      }
    }
    if (e.detail.value == 'label_1') {
      //页面跳转
      wx.redirectTo({
        url: "/pages/home/home",
      })
    }
    if (!app.globalData.hasLogin && e.detail.value != 'label_1') {
      //页面跳转
      wx.redirectTo({
        url: "/pages/login/login",
      })
    }
  },
  checkitems(e) {
    console.log(e);
    let index1 = e.currentTarget.dataset.index1;
    let check = 'people.[' + index1 + '].check'
    this.setData({
      [check]: !this.data.people[index1].check
    })
  },
  checkMission(){
    wx.navigateTo({
      url: '/pages/checkM/checkM',
    })
  },
  goToMywork(){
    wx.navigateTo({
      url: '/pages/mywork/mywork',
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