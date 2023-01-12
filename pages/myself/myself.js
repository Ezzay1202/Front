// pages/myself/meself.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps_num: 2,
    functions: [{
      name: "我的稿件",
      src: "/image/mywo.png"

    }, {
      name: "我的绩效",
      src: "/image/myw.png"
    }, {
      name: "个人信息",
      src: "/image/myi.png"
    }, {
      name: "我的时间",
      src: "/image/myt.png",
      goto: "/pages/mydate/mydate"
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
        value: 'label_3',
        label: '消息',
        icon: 'notification'
      },
      {
        value: 'label_4',
        label: '我的',
        icon: 'user'
      },
    ],
    listm: [{
        text: "学习二十大，管院在行动 | 本科第六党支部开展11月主题党日活动",
        date: "2022-11-30",
        location: "管理学院105",
        people: [{
          key: 1,
          name: "陶柯羽"
        }, {
          key: 2,
          name: "高原"
        }, {
          key: 5,
          name: "徐文慧"
        }, {
          key: 4,
          name: "张赫"
        }, ],
        url: "https://mp.weixin.qq.com/s/x-zHT_8DiS7T5NHC91Z3zA",
        score: 4.5
      },
      {
        text: "学习二十大，管院在行动 | 管理学院“领跑计划”学生骨干成长训练营开展专题培训",
        date: "2022-11-29",
        location: "校史馆",
        people: [{
          key: 1,
          name: "杨彬雪"
        }, {
          key: 5,
          name: "黄颖澜"
        }, {
          key: 4,
          name: "桂云凤"
        }, ],
        url: "https://mp.weixin.qq.com/s/yReSTZQn5L9UC4eE2zsYNw",
        score: 4.5
      },
      {
        text: "五连冠！管理学院乒乓球队再创佳绩",
        date: "2022-11-24",
        location: "光谷体育馆",
        people: [{
          key: 5,
          name: "黄颖澜"
        }, {
          key: 4,
          name: "方权泽"
        }, ],
        url: "https://mp.weixin.qq.com/s/QBZr1nPlyee_0WrJaz_LYg",
        score: 4.5
      },
      {
        text: "五连冠！管理学院乒乓球队再创佳绩",
        date: "2022-11-24",
        location: "光谷体育馆",
        people: [{
          key: 5,
          name: "黄颖澜"
        }, {
          key: 4,
          name: "方权泽"
        }, ],
        url: "https://mp.weixin.qq.com/s/QBZr1nPlyee_0WrJaz_LYg",
        score: 4.5
      },
      {
        text: "五连冠！管理学院乒乓球队再创佳绩",
        date: "2022-11-24",
        location: "光谷体育馆",
        people: [{
          key: 5,
          name: "黄颖澜"
        }, {
          key: 4,
          name: "方权泽"
        }, ],
        url: "https://mp.weixin.qq.com/s/QBZr1nPlyee_0WrJaz_LYg",
        score: 4.5
      },
      {
        text: "五连冠！管理学院乒乓球队再创佳绩",
        date: "2022-11-24",
        location: "光谷体育馆",
        people: [{
          key: 5,
          name: "黄颖澜"
        }, {
          key: 4,
          name: "方权泽"
        }, ],
        url: "https://mp.weixin.qq.com/s/QBZr1nPlyee_0WrJaz_LYg",
        score: 4.5
      }
    ],
    step: [{
      text: '已接稿',
    }, {
      text: '已写稿',
    }, {
      text: '编辑部审稿',
    }, {
      text: '辅导员审稿',
    }, {
      text: '排版',
    }, ],
    work: [{
        name: "概率论",
        add: "D888",
        time1: "8:00",
        time2: "10:00",
      },
      {
        name: "概率论",
        add: "D888",
        time1: "8:00",
        time2: "10:00",
      }, {
        name: "概率论",
        add: "D888",
        time1: "8:00",
        time2: "10:00",
      }, {
        name: "概率论",
        add: "D888",
        time1: "8:00",
        time2: "10:00",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: 'http://1.15.118.125:8080/NIC/lesson',
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
        if (res.data.code == 702) {
          this.setData({
            kcb: res.data.data
          })
        }
      }
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
  goTomoudle(e) {
    console.log("yes", e)
    let index = e.currentTarget.dataset.index
    let url = this.data.functions[index].goto
    if (index == 3) {
      if (this.data.kcb_code != 702) {
        wx.showToast({
          title: '您未导入课程表',
          icon: 'error'
        })
      } else {
        wx.navigateTo({
          url: url + "?kcb=" + JSON.stringify(this.data.kcb),
        })
      }
    } else {
      wx.navigateTo({
        url: url,
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
    };
    if (e.detail.value == 'label_1') {
      //页面跳转
      wx.redirectTo({
        url: "/pages/home/home",
      })
    }
  },
})