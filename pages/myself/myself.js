// pages/myself/meself.js
const app = getApp()
let userid = ''
let password = ''
Page({
  content(e) {
    userid = e.detail.value
  },
  password(e) {
    password = e.detail.value
  },

  /**
   * 页面的初始数据
   */
  data: {
    value: 'label_4',
    steps_num: 2,
    functions: [{
      name: "我的稿件",
      src: "https://www.hustnic.tech/NIC/work_files/image/mywo.png",
      bindtap: "gotoMywork"
    }, {
      name: "我的绩效",
      src: "https://www.hustnic.tech/NIC/work_files/image/myw.png",
      bindtap: 'gotoMyper'
    }, {
      name: "个人信息",
      src: "https://www.hustnic.tech/NIC/work_files/image/myi.png",
      bindtap: 'gotoMyi'
    }, {
      name: "我的时间",
      src: "https://www.hustnic.tech/NIC/work_files/image/myt.png",
      bindtap: "gotoMydate"
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
    listm: [],
    listn: [],
    step: [{
      text: '接稿',
    }, {
      text: '写稿',
    }, {
      text: '编辑部审稿',
    }, {
      text: '辅导员审稿',
    }, {
      text: '排版',
    }, ],
    todaywork: [],
    day: [],
    performance: [{
      title: "完成第一篇稿件",
      style: false,
      score: 50,
      complete: true
    }, {
      title: "完成第二篇稿件",
      style: false,
      score: 20,
      complete: false
    }, {
      title: "每月参加一次记者团培训/例会",
      style: false,
      score: 10,
      complete: false
    }, {
      title: "完成多篇稿件（第三篇开始）",
      style: true,
      score: 10,
      complete: false
    }],
    isShow: false,
    showdetail: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getKcb()
    this.getHistoryMission()
    this.getRelatedMission()
    this.setData({
      name: app.globalData.username,
      headP: app.globalData.head
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
  showDetail() {
    this.setData({
      showdetail: !this.data.showdetail
    })
  },
  getKcb() {
    wx.request({
      url: 'https://www.hustnic.tech:8081/NIC/lesson',
      data: {
        "method": "get",
        "data": {
          "weekStart": 1,
          "weekEnd": 19,
          "userid": app.globalData.userid
        }
      },
      success: (res) => {
        console.log(res.data)
        this.setData({
          kcb_code: res.data.code
        })
        if (res.data.code === 702) {
          this.setData({
            kcb: res.data.data
          })
        }
        //console.log(this.data.kcb)
      }
    })
  },
  kcbSpider(e) {
    if (userid === '') {
      wx.showToast({
        title: 'title',
        icon: 'error'
      })
    } else if (password === '') {
      wx.showToast({
        title: 'title',
        icon: 'error'
      })
    } else {
      wx.showLoading({
        title: '导入课程表中...',
        mask: true //防止多次点击
      })
      wx.request({
        url: 'https://www.hustnic.tech:8081/NIC/lesson',
        data: {
          "method": "add",
          "data": {
            "password": password,
            "userid": userid
          }
        },
        success: (res) => {
          //console.log(res.data)
          if (res.data.code === 702) {
            wx.showToast({
              title: '导入成功!'
            })
            this.getKcb()
            app.sleep(1200)
            this.setData({
              isShow: false
            })
          }
        },
        fail: () => {
          wx.showToast({
            title: '导入失败，请稍后再试！',
            icon: 'error'
          })
        },
        complete: () => {
          wx.hideLoading()
        }
      })
    }
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
  cancelMask() {
    this.setData({
      isShow: false
    })
  },
  gotoMyper() {
    wx.showToast({
      title: '敬请期待',
      icon: 'error'
    })
    app.globalData.hasLogin = false
    app.globalData.userid = '1'
  },
  gotoMydate() {
    if (this.data.kcb_code != 702) {
      wx.showToast({
        title: '您未导入课程表',
        icon: 'error'
      })
      app.sleep(1500)
      this.setData({
        isShow: true
      })
    } else {
      wx.navigateTo({
        url: "/pages/mydate/mydate?kcb=" + JSON.stringify(this.data.kcb),
      })
    }
  },
  gotoMyi() {
    //console.log(app)
    let info = [{
      btext: app.globalData.userid
    }, {
      btext: app.globalData.username
    }, {
      btext: app.globalData.identity
    }, {
      btext: app.globalData.tel
    }, {
      btext: '0'
    }, {
      btext: app.globalData.finishedPerformance.length //
    }, {
      btext: '0'
    }]
    let data = {
      info: info,
      head: app.globalData.head
    }
    wx.navigateTo({
      url: '/pages/myinformation/myinformation?resultInfo=' + JSON.stringify(data),
    })
  },
  gotoMywork() {
    /*
    wx.showToast({
      title: '敬请期待',
      icon: 'error'
    })
    */
    wx.navigateTo({
      url: '/pages/mywork/mywork',
    })
  },
  getHistoryMission() {
    wx.request({
      url: 'https://www.hustnic.tech:8081/NIC/user',
      data: {
        'method': 'showFinished',
        'data': {
          'userid': app.globalData.userid.toString()
        }
      },
      success: (res) => {
        console.log(res.data)
        let list1 = res.data.data
        let list2 = []
        for (let i = 0; i < list1.length; i++) {
          let peoplelist = [{
            key: 1,
            name: list1[i]['statusChanger']['编辑部审稿']['username']
          }, {
            key: 2,
            name: list1[i]['statusChanger']['辅导员审核']['username']
          }]
          for (let j = 0; j < list1[i]['reporters']['article'].length; j++) {
            let temp = {
              key: 5,
              name: list1[i]['reporters']['article'][j]['username']
            }
            peoplelist.push(temp)
          }
          for (let j = 0; j < list1[i]['reporters']['photo'].length; j++) {
            let temp = {
              key: 4,
              name: list1[i]['reporters']['photo'][j]['username']
            }
            peoplelist.push(temp)
          }
          let temp = {
            text: list1[i]['description'],
            date: list1[i]['time']['year'] + '-' + list1[i]['time']['month'] + '-' + list1[i]['time']['day'],
            location: list1[i]['place'],
            people: peoplelist,
            url: list1[i]['url']
          }
          console.log(temp)
          list2.push(temp)
        }
        this.setData({
          listm: list2
        })
      }
    })
  },
  getRelatedMission() {
    wx.request({
      url: 'https://www.hustnic.tech:8081/NIC/user',
      data: {
        'method': 'showRelated',
        'data': {
          'userid': app.globalData.userid.toString()
        }
      },
      success: (res) => {
        console.log(res.data.data)
        let listn = []
        for (let i = 0; i < res.data.data.length; i++) {
          let temp = {
            text: res.data.data[i].description,
            date: res.data.data[i].time.year + '-' + res.data.data[i].time.month + '-' + res.data.data[i].time.day + '-' + res.data.data[i].time.beginHour + ':' + res.data.data[i].time.beginMinute,
            steps_num: this.checkStep(res.data.data[i].status)
          }
          listn.push(temp)
        }
        console.log(listn)
        this.setData({
          listn: listn
        })
      }
    })
  },
  gotoURL(e) {
    console.log(e)
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: `../seeM/seeM?url=${url}`,
    })
  },
  checkStep(status) {
    if (status['写稿'] == '未达成') {
      return 1
    } else if (status['编辑部审稿'] == '未达成') {
      return 2
    } else if (status['辅导员审核'] == '未达成') {
      return 3
    } else {
      return 4
    }
  },
})