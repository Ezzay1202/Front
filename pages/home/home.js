// pages/home/home.js
const app = getApp()
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = (date.getDate() + 1 < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1)
const currentday = date.getDay() //0-7,0 = Sunday
const week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
const Weekday = week[currentday] //周几
const hour = date.getHours()
const minute = date.getMinutes()
let place1 = ''
const classTime = ['', '8:00', '8:45', '8:55', '9:40', '10:10', '10:55', '11:05', '11:50', '14:00', '14:45', '14:50', '15:35', '15:55', '16:40', '16:45', '17:30', '18:30', '19:15', '19:25', '20:10', '20:15', '21:00']

Page({

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (options.type = "baidu") {
      this.setData({
        url: "https://mp.weixin.qq.com/s/HVmzDgdhLzOJUcBnIMy0fg"
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
    url: ""
  }
})

const PICKER_KEY = {
  DATE1: 'date1',
  DATE2: 'date2',
  People: 'people',
};

Component({
  data: {
    stickyProps: {
      zIndex: 20,
    },
    currentTab: 1,
    swiperViewHeight: '',
    maxswiperViewHeight: [0, 0],
    arr: ['.v1', '.v2'],
    eventname: '',
    locationname: '',
    eventList: [],
    peoples: [],
    picture: [/*{
      img: "https://s3.bmp.ovh/imgs/2023/01/10/5032ffa435b9888b.png",
      people: "乔晟豪"
    }*/],
    news: [],
    boxshow: [],
    isShow: false,
    functions_show: [{
      name: "待接任务",
      img: '/image/publishedM.png',
      goto: "/pages/publishedM/publishedM"
    }, {
      name: "查询稿件",
      img: '/image/apply.png',
      goto: "/pages/inquiryM/inquiryM"
    }, {
      name: "审核稿件",
      img: '/image/checkM.png',
      goto: "/pages/checkM/checkM"
    }],
    functions: [{
      name: "待接任务",
      img: '/image/publishedM.png',
      goto: "/pages/publishedM/publishedM"
    }, {
      name: "查询稿件",
      img: '/image/apply.png',
      goto: "/pages/inquiryM/inquiryM"
    }, {
      name: "审核稿件",
      img: '/image/checkM.png',
      goto: "/pages/checkM/checkM"
    }, {
      name: "提交稿件",
      img: '/image/submitM.png',
      goto: "/pages/submitM/submitM"
    }, {
      name: "历史稿件",
      img: '/image/histroyM.png',
      goto: "/pages/historyM/historyM"
    }, {
      name: "提交排版",
      img: '/image/submitP.png',
      goto: "/pages/submitP/submitP"
    }, {
      name: "稿件记录",
      img: '/image/updateM.png',
      goto: "/pages/updateN/updateN"
    }],

    test1: 0,
    index1: 0,
    index2: 0,
    sideBarIndex: 0,
    scrollTop: 0,
    showcheck: false,
    sideBarIndex: 0,
    showfunctions: true,
    showtime: true,
    current: 0,
    duration: 500,
    interval: 5000,
    value: 'label_1',
    value_s: '',
    categories: [], // 人员列表
    useridList: [],
    nowCheck: 1,
    titleBox: [{
      value: 1,
      title: '精彩摄影'
    }, {
      value: 2,
      title: '新闻速览'
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
    todaywork: [], //我的时间
    day: [], //查看所有日程
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
    },],
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
      },],
      url: "https://mp.weixin.qq.com/s/x-zHT_8DiS7T5NHC91Z3zA",
      score: 4.5
    },
    {
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
      },],
      url: "https://mp.weixin.qq.com/s/x-zHT_8DiS7T5NHC91Z3zA",
      score: 4.5
    },
    ],
    time: 2 * 24 * 60 * 60 * 1000,
    timeData: {},

    swiper_show: [],

    PICKER_KEY,
    [`${PICKER_KEY.DATE1}Visible`]: false,
    [`${PICKER_KEY.DATE2}Visible`]: false,
    [`${PICKER_KEY.People}Visible`]: false,
    pickerTitle: '',

    months: Array.from(new Array(12), (_, index) => ({
      label: `${index + 1}月`,
      value: index + 1,
    })),

    days: Array.from(new Array(31), (_, index) => ({
      label: `${index + 1}日`,
      value: index + 1
    })),

    hour: Array.from(new Array(24), (_, index) => ({
      label: `${index}时`,
      value: index,
    })),

    minute: Array.from(new Array(60), (_, index) => ({
      label: `${index}分`,
      value: index,
    })),
    group: [{
      label: "我",
      value: "我"
    }, {
      label: "全部",
      value: "全部"
    }, {
      label: "组长团",
      value: "组长团"
    }, {
      label: "技术部",
      value: "技术部"
    }, {
      label: "人事部",
      value: "人事部"
    }, {
      label: "记者团",
      value: "记者团"
    }],

    [`${PICKER_KEY.DATE1}Value`]: [month, day, hour, minute],
    [`${PICKER_KEY.DATE2}Value`]: [hour, minute],
    [`${PICKER_KEY.People}Value`]: []
  },

  lifetimes: {
    attached() {
      wx.request({
        url: 'https://www.hustnic.tech:8081/NIC/frontpage?method=show',
        success:(res)=>{
          console.log(res.data)
          this.setData({
            swiper_show:res.data.data.top,
            boxshow:res.data.data.middle,
            news:res.data.data.news,
            picture:res.data.data.photos
          })
          console.log(this.data.news)
        }
      })




      if (app.globalData.hasLogin) {
        if (app.globalData.kcb_code != 702) {
          wx.request({
            url: 'https://www.hustnic.tech:8081/NIC/lesson',
            data: {
              "method": "get",
              "data": {
                "weekStart": 1,
                "weekEnd": 22,
                "userid": app.globalData.userid
              }
            },
            success: (res) => {
              console.log(res.data)
              app.globalData.kcb_code = res.data.code
              if (app.globalData.kcb_code === 702) {
                app.globalData.kcb = res.data.data
              }
            }
          })
        }
        let dayList1 = []
        let times = 5
        // 日程查询
        for (let i = 0; i < times; i++) {
          let date = new Date((new Date).getTime() + (24 * 60 * 60 * 1000) * i)
          wx.request({
            url: 'https://www.hustnic.tech:8081/NIC/affair',
            data: {
              'method': 'get',
              'data': {
                'userid': app.globalData.userid,
                'date': date.getFullYear() + '-' + ((date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)) + '-' + ((date.getDate() + 1 < 10 ? '0' + (date.getDate()) : date.getDate()))
              }
            },
            success: (res) => {
              console.log(res.data)
              let affairList = res.data.data
              let eventList = []
              for (let j = 0; j < affairList.length; j++) {
                let temp = {
                  name: affairList[j].affairName,
                  add: affairList[j].place,
                  time1: affairList[j].beginTime,
                  time2: affairList[j].endTime,
                  id: affairList[j].affairID,
                  date: affairList[j].date
                  //involveUsers:affairList[j].involverUsers,
                }
                eventList.push(temp)
              }

              let templist = this.data.eventList
              templist[i] = (eventList)
              let tempDay = {
                date: ((date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)) + '/' + ((date.getDate() + 1 < 10 ? '0' + (date.getDate()) : date.getDate())) + ' ' + week[(currentday + i) % 7],
                work: templist[i]
              }
              dayList1[i] = tempDay
              this.setData({
                eventList: templist,
                todaywork: templist[0]
              })
              for (let n = 0; n < dayList1.length; n++) {
                if (dayList1[n] === undefined) {
                  break
                }
                if (n === times - 1) {
                  this.setData({
                    day: dayList1
                  })
                }
              }
            }
          })
        }
        wx.request({
          url: 'https://www.hustnic.tech:8081/NIC/allUser',
          data: {
            "method": "grouped",
            "data": {
              "groupItem": "department"
            }
          },
          success: (res) => {
            let people = []
            let dep = []
            let datas = res.data.data
            //console.log(datas)
            let i = 0
            let maps1 = {}
            let maps2 = {}
            let peopleList = new Map()
            this.setData({
              peopleRelated: peopleList
            })
            for (let k in datas) {
              maps1.label = k
              maps1.title = k
              let tempRelated = this.data.peopleRelated //Map
              //console.log(tempRelated)
              tempRelated.set(k, [])
              this.setData({
                peopleRelated: tempRelated
              })
              for (let j = 0; j < datas[k].length; j++) {
                maps2.label = datas[k][j].username
                maps2.userid = datas[k][j].userid
                maps2.checked = false
                dep[j] = maps2
                maps2 = {}
              }
              maps1.items = dep
              dep = []
              people[i++] = maps1
              maps1 = {}
            }
            this.setData({
              categories: people
            })
            console.log(this.data.categories);
          }
        })
      }
      this.setSwiperHeight(this.data.arr[1], 1)
    }
  },
  methods: {
    changeTitle(e) {
      let index = e.currentTarget.dataset.indext;
      this.setData({
        nowCheck: index
      })
    },
    bindChange: function (e) {
      var that = this;
      that.setData({
        currentTab: e.detail.current
      });
      this.setSwiperHeight(this.data.arr[e.detail.current], e.detail.current)
    },
    setSwiperHeight (v, num) {
      let query = wx.createSelectorQuery().in(this);
      query.select(v).boundingClientRect();
      query.exec((res) => {
        let headerHeight = res[0].height;
        this.setData({
          swiperViewHeight: headerHeight
        });
        console.log(this.data.swiperViewHeight)
        if (this.data.swiperViewHeight >= this.data.maxswiperViewHeight[num]) {
          console.log(this.data.swiperViewHeight)
          let maxswiperViewHeight = 'maxswiperViewHeight[' + num + ']'
          this.setData({
            [maxswiperViewHeight]: this.data.swiperViewHeight
          })
        }
      });

    },

    eventName(e) {
      this.setData({
        eventname: e.detail.value
      })
    },
    locationName(e) {
      //console.log(this.data.peopleRelated.size)
      this.setData({
        locationname: e.detail.value
      })
    },
    kcbSpider(e) { },




    //kcb
    gotoKcb() {
      if (!app.globalData.hasLogin) {
        wx.showToast({
          title: '尚未登陆！',
          icon: 'error'
        })
      } else
        if (app.globalData.kcb_code != 702) {
          wx.showToast({
            title: '您未导入课程表!',
            icon: 'error'
          })
        } else {
          wx.navigateTo({
            url: "/pages/mydate/mydate?kcb=" + JSON.stringify(app.globalData.kcb),
          })
        }
    },
    checkedTag(e) {
      console.log(e)
      this.setData({
        index2: e.currentTarget.dataset.index2
      })
    },
    checkedTags(e) {
      console.log(this.data)
      this.setData({
        index1: e.currentTarget.dataset.index1
      })
      let index1 = this.data.index1
      let index2 = this.data.index2
      let checked = 'categories[' + index1 + '].items[' + index2 + '].checked'
      let useridList = this.data.useridList // 所有选中成员的userid
      let peopleRelated = this.data.peopleRelated //是一个Map
      let peopleTemp = this.data.categories[index1].items[index2].label //一个人名
      let useridTemp = this.data.categories[index1].items[index2].userid //
      //console.log(peopleTemp)
      let tempList = peopleRelated.get(this.data.categories[index1].title)

      console.log(tempList)
      console.log(this.data.categories)
      //console.log(peopleRelated)
      if (tempList.includes(peopleTemp)) //检测Map中是否有此人名
      {
        tempList.splice(tempList.indexOf(peopleTemp), 1)
        useridList.splice(useridList.indexOf(useridTemp), 1)
        peopleRelated.set(this.data.categories[index1].title, tempList)
      } else {
        tempList.push(peopleTemp)
        useridList.push(useridTemp)
        peopleRelated.set(this.data.categories[index1].title, tempList)
      }
      let number = []
      let k = 0
      for (let p of peopleRelated) {
        for (let q = 0; q < p[1].length; q++) {
          number[k++] = p[1][q]
        }
      }
      this.setData({
        [checked]: !this.data.categories[index1].items[index2].checked,
        peopleRelated: peopleRelated,
        peoples: number,
        useridList: useridList
      })
      console.log(useridList)
    },
    onClickPicker(e) {
      const {
        key
      } = e?.currentTarget?.dataset;
      console.log('picker pick:', place1);
      this.setData({
        [`${key}Visible`]: true,
      });
    },
    addEvent(e) {
      console.log(this.data)
      if (this.data.eventname === '') {
        wx.showToast({
          title: '请输入事项名称',
          icon: 'error'
        })
      } else if (this.data.locationname === '') {
        wx.showToast({
          title: '请输入地点',
          icon: 'error'
        })
      } else if (this.data.date1CurrentValue === undefined) {
        wx.showToast({
          title: '请输入起始时间',
          icon: 'error'
        })
      } else if (this.data.date2CurrentValue === undefined) {
        wx.showToast({
          title: '请输入结束时间',
          icon: 'error'
        })
      } else if (this.data.useridList === []) {
        wx.showToast({
          title: '请选择人员',
          icon: 'error'
        })
      } else {
        wx.request({
          url: 'https://www.hustnic.tech:8081/NIC/affair',
          data: {
            'method': 'add',
            'data': {
              'pubisher': app.globalData.userid,
              'affairName': this.data.eventname,
              'place': this.data.locationname,
              'date': year + '-' + ((this.data.date1Value[0] > 10) ? (this.data.date1Value[0]) : ('0' + this.data.date1Value[0])) + '-' + ((this.data.date1Value[1] > 10) ? (this.data.date1Value[1]) : ('0' + this.data.date1Value[1])),
              'beginTime': ((this.data.date1Value[2] > 10) ? (this.data.date1Value[2]) : ('0' + this.data.date1Value[2])) + ':' + ((this.data.date1Value[3] > 10) ? (this.data.date1Value[3]) : ('0' + this.data.date1Value[3])),
              'endTime': ((this.data.date2Value[0] > 10) ? (this.data.date2Value[0]) : ('0' + this.data.date2Value[0])) + ':' + ((this.data.date2Value[1] > 10) ? (this.data.date2Value[1]) : ('0' + this.data.date2Value[1])),
              'involveUsers': this.data.useridList
            }
          },
          success: (res) => {
            console.log(res.data)
            if (res.data.code === 702) {
              wx.showToast({
                title: res.data.msg
              })
              app.sleep(2000)
              this.cancelMask()
              this.onLoad()
            } else {
              wx.showToast({
                title: '添加失败',
                icon: 'error'
              })
            }
          }
        })

      }
    },

    showCheck(e) {
      this.setData({
        showcheck: !this.data.showcheck
      })
    },

    onVisibleChange(e) {
      this.setData({
        showcheck: e.detail.visible,
      });
    },

    onSideBarChange(e) {
      console.log(e.detail)
      const {
        value
      } = e.detail;

      this.setData({
        sideBarIndex: value
      });
    },

    onColumnChange(e) {
      console.log('picker pick:', e);
    },
    joinArray(array) {
      return array.join('');
    },
    onPickerChange(e) {
      const {
        key
      } = e?.currentTarget?.dataset;
      console.log('picker change:',);
      this.setData({
        [`${key}Visible`]: false,
        [`${key}Value`]: e.detail.value,
        [`${key}CurrentValue`]: this.joinArray(e.detail.label),
      });
      if (e.detail.value.length === 4) {
        this.setData({
          list1: e.detail.value
        })
      }
      if (e.detail.label[0] == e.detail.value[0] + '时') {
        this.setData({
          list2: e.detail.value
        })
      }
      if (e.detail.label[0] == e.detail.value[0] + '文') {
        this.setData({
          list3: e.detail.value
        })
      }
    },
    onPickerCancel(e) {
      const {
        key
      } = e?.currentTarget?.dataset;
      console.log(e, '取消');
      console.log('picker1 cancel:');
      this.setData({
        [`${key}Visible`]: false,
      });
    },
    addWorks() {
      if (app.globalData.hasLogin) {
        this.setData({
          isShow: "true"
        })
      } else {
        wx.showToast({
          title: '您没有权限！',
          icon: 'error'
        })
      }

    },
    goto(e) {
      console.log(e)
      let url = e.currentTarget.dataset.url
      wx.navigateTo({
        url: `../seeM/seeM?url=${url}`,
      })
    },
    onTimeChange(e) {
      this.setData({
        timeData: e.detail,
      });
    },
    showFunctions() {
      this.setData({
        showfunctions: !this.data.showfunctions
      })
    },
    cancel() {
      this.setData({
        showcheck: !this.data.showcheck
      })
    },
    showTimes() {
      if (app.globalData.hasLogin) {
        this.setData({
          showtime: !this.data.showtime
        })
      } else {
        wx.showToast({
          title: '尚未登录!',
          icon: 'error'
        })
      }

    },
    cancelMask() {
      this.setData({
        isShow: false,
        eventname: '',
        locationname: '',
        date1CurrentValue: '',
        date2CurrentValue: '',
        peoples: []
      })
    },
    goTomoudle2(e) {
      console.log("yes")
      let index = e.currentTarget.dataset.index
      let url = this.data.functions[index].goto
      if (url === '/pages/checkM/checkM') {
        if ((app.globalData.authority2 === 1) || (app.globalData.authority3 === 1)) {
          wx.navigateTo({
            url: url
          })
        } else {
          wx.showToast({
            title: '您没有权限',
            icon: 'error'
          })
        }
      } else if (app.globalData.authority1 === 1) {
        wx.navigateTo({
          url: url
        })
      } else {
        wx.showToast({
          title: '您没有权限',
          icon: 'error'
        })
      }
    },
    func1() {
      wx.navigateTo({
        url: '/pages/inquiryM/inquiryM',
      })
    },
    func2() {
      wx.navigateTo({
        url: '/pages/historyM/historyM',
      })
    },
    onChange(e) {
      //tabbar
      this.setData({
        value: e.detail.value,
      });
      if (app.globalData.hasLogin && e.detail.value === 'label_2') {
        //页面跳转
        if (app.globalData.authority2 === 1) {
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
      if (app.globalData.hasLogin && e.detail.value === 'label_4') {
        //页面跳转
        if (app.globalData.authority3 === 1) {
          wx.redirectTo({
            url: '/pages/managment/managment',
          })
        } else {
          wx.redirectTo({
            url: "/pages/myself/myself",
          })
        }
      }
      if (!app.globalData.hasLogin && e.detail.value != 'label_1') {
        //页面跳转
        wx.redirectTo({
          url: "/pages/login/login",
        })
      }
    },
  },
});