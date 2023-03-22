// pages/home/home.js
const app = getApp()
const date = new Date()
const year = date.getFullYear()
const month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
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
    eventname: '',
    locationname: '',
    eventList: [],
    picture: [{
      img: "https://s3.bmp.ovh/imgs/2023/01/10/5032ffa435b9888b.png",
      people: "乔晟豪"
    }, {
      img: "https://s3.bmp.ovh/imgs/2023/01/10/5032ffa435b9888b.png",
      people: "乔晟豪"
    }, {
      img: "https://s3.bmp.ovh/imgs/2023/01/10/5032ffa435b9888b.png",
      people: "乔晟豪"
    }, {
      img: "https://s3.bmp.ovh/imgs/2023/01/10/5032ffa435b9888b.png",
      people: "乔晟豪"
    }, {
      img: "https://s3.bmp.ovh/imgs/2023/01/10/5032ffa435b9888b.png",
      people: "乔晟豪"
    }, ],
    boxshow: [{
        image: "http://mmbiz.qpic.cn/mmbiz_jpg/gbpAf4uUr2CPGoKg3rLAVNiaIjRHRgucKpf2D0xGKXEABncIfmRpeiaAvvRjlibycFw2r9EOiaHJYDOJ2yQp23PX3Q/0?wx_fmt=jpeg",
        text: "W.0.W | 我与兔年那些不得不说的事！"
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/gbpAf4uUr2Ac8wK5HibkMhAmDeXRps44clAPtULQic6IObMB7rB5uscibPfTbM0GqLwXsFrZqR2GCyg0FSKicc0uPg/0?wx_fmt=jpeg",
        text: "M.O.M新春特辑 | 年味儿速递：快看！这些管院er用镜头记录下了年前幸福的瞬间~"
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_png/gbpAf4uUr2B1uZSbxb6SdAEtqm0fNDDSL1arFMsgCcENBibMQbtpRREMp47auxa2uqHzdKXHlcTqRgqasGTpAKg/0?wx_fmt=png",
        text: "W.O.W | 惊！原来距离我成为学霸需要的时间是......"
      }

    ],
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
      img: '/image/submitM.png',
      goto: "/pages/historyM/historyM"
    }, {
      name: "提交排版",
      img: '/image/submitM.png',
      goto: "/pages/submitP/submitP"
    }, {
      name: "历史稿件",
      img: '/image/submitM.png',
      goto: "/pages/historyM/historyM"
    }],

    test1: 0,
    index1: 0,
    index2: 0,
    sideBarIndex: 0,
    scrollTop: 0,
    showcheck: false,
    peoples: [],
    sideBarIndex: 0,
    showfunctions: true,
    showtime: true,
    current: 0,
    duration: 500,
    interval: 5000,
    value: 'label_1',
    value_s: '',
    categories: [{
        label: '选项一',
        title: '标题一',
        badgeProps: {},
        items: [{
            label: '标题文字',
            checked: true
          },
          {
            label: '标题文字',
            checked: false
          },
        ]
      },
      {
        label: '选项二',
        title: '标题二',
        badgeProps: {
          dot: true,
        },
        items: [{
            label: '标题文字',
            checked: false
          },
          {
            label: '标题文字',
            checked: false
          },
        ]
      },
      {
        label: '选项三',
        title: '标题三',
        badgeProps: {},
        items: [{
            label: '标题文字',
            checked: false
          },
          {
            label: '标题文字',
            checked: false
          },
        ]
      },
      {
        label: '选项四',
        title: '标题四',
        badgeProps: {
          count: 8,
        },
        items: [{
            label: '标题文字',
            checked: false
          },
          {
            label: '标题文字',
            checked: false
          },
        ]
      },
      {
        label: '选项五',
        title: '标题五',
        badgeProps: {},
        disabled: true,
        items: [{
            label: '标题文字',
            checked: false
          },
          {
            label: '标题文字',
            checked: false
          },
        ]
      },
    ],
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
    //查看所有日程
    
    day: [{
      date: "1/12 周四",
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
        },
      ],
    }, {
      date: "1/12 周四",
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
        },
      ],
    }, {
      date: "1/12 周四",
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
        },
      ],
    }],
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
    ],
    time: 2 * 24 * 60 * 60 * 1000,
    timeData: {},

    swiper_show: [{
      url: "https://mp.weixin.qq.com/s/QgZSCvkBxFSRbH_wZg2S9Q",
      image: "https://mmbiz.qpic.cn/mmbiz_png/gbpAf4uUr2BUXONjIriayQ15PiadXdAnDibVGqiaSbgibc3PtuojCkEolxKgroPRrG3Ly41hRNw5tGsbn6wEr6LkXgw/0?wx_fmt=png",
      name: "秋日限定 | 小管邀请你抓住秋天最后的尾巴"
    }, {
      url: "https://mp.weixin.qq.com/s/7UwvBVLlALpGn0SYwd8y1Q",
      image: "https://mmbiz.qpic.cn/mmbiz_jpg/gbpAf4uUr2Bkb3kzXMldhB2l9Wx85CqibicPsMsPD1R3kGTeic4fubWnsb3WNUW9baictFMq1ic0QDKsZTTd5XLkskQ/0?wx_fmt=jpeg",
      name: "腊月二十七 | 孩童街上嬉，沐浴剃精细"
    }, {
      url: "https://mp.weixin.qq.com/s/7UwvBVLlALpGn0SYwd8y1Q",
      image: "http://mmbiz.qpic.cn/mmbiz_png/gbpAf4uUr2A9OWFDMY9bsxibgQkKflB0fNND7xgVIts7Y093Kibib8jkwIanJ7a9FFQpBK8rthUlt2Pdc0TaDgqaA/0?wx_fmt=png",
      name: "我们的故事——管理学院学生工作2022年度记忆"
    }],

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

  lifetimes:{
    attached(){
      if (app.globalData.hasLogin) {
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
            app.globalData.kcb_code = res.data.code
            if (app.globalData.kcb_code === 702) {
              app.globalData.kcb = res.data.data
            }
            // kcb 信息
            /*for (let i = 0; i < res.data.data.length; i++) {
              if (res.data.data[i]['week'] === app.globalData.week_kcb) {
                //console.log(app.globalData.week_kcb)
                let classList = res.data.data[i]['time'][(app.globalData.week_kcb + 1) % 7]['lesson']
                console.log(classList)
                let workList = []
                for (let j = classList.length - 1; j > -1; j--) {
                  //classList[j].time =>'9-11'
                  let timeList = classList[j].time.split('-')
                  //console.log(timeList)
                  let lessonTemp = {
                    name: classList[j].name,
                    add: classList[j].location,
                    time1: classTime[Number(timeList[0]) * 2 - 1],
                    time2: classTime[Number(timeList[1]) * 2]
                  }
                  workList.push(lessonTemp)
                }
                this.setData({
                  todaywork: workList
                })

              }
            }*/
          }
        })
        let dayList1 = []
        // 日程查询
        for (let i = 0; i < 3; i++) {
          let date = new Date((new Date).getTime() + (24 * 60 * 60 * 1000) * (i+1))
          wx.request({
            url: 'http://1.15.118.125:8081/NIC/affair',
            data: {
              'method': 'get',
              'data': {
                'userid': app.globalData.userid,
                'date': date.getFullYear() + '-' + ((date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)) + '-' + ((date.getDate() + 1 < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1))
              }
            },
            success: (res) => {
              console.log(res.data)
              let affairList = res.data.affairID
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
              templist.push(eventList)
              let tempDay = {
                date: ((date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)) + '/' + ((date.getDate() + 1 < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1)) + ' ' + week[currentday + i],
                work: eventList[i]
              }
              dayList1[i] = tempDay
              this.setData({
                eventList: templist,
                todaywork: templist[0]
              })
            }
          })
        }
        this.setData({
          day: dayList1
        })
      }
      wx.request({
        url: 'http://1.15.118.125:8081/NIC/allUser',
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
          console.log(datas)
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
            console.log(tempRelated)
            tempRelated.set(k,[])
            this.setData({
              peopleRelated:tempRelated
            }) 
            for (let j = 0; j < datas[k].length; j++) {
              maps2.label = datas[k][j].username
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
  },
  methods: {
    eventName(e) {
      this.setData({
        eventname: e.detail.value
      })
    },
    locationName(e) {
      console.log(this.data)
      this.setData({
        locationname: e.detail.value
      })
    },
    kcbSpider(e) {
      console.log(this.data.eventname)
      //起始时间 date1CurrentValue
      //结束时间 date2CurrentValue
      //相关人员 peopleRelated(Map)
      if (this.data.eventname === '') {}
      wx.request({
        url: 'http://1.15.118.125:8081/NIC/affair',
        data: {
          'method': 'add',
          'data': {
            'pubisher': app.globalData.userid,
            'affairName': this.data.eventname,
            'place': this.data.locationname,
            'date': '2023-5-1',
            'beginTime': '14:30',
            'endTime': '15:30',
            'involveUsers': ['U202116999']
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
          } else {
            wx.showToast({
              title: '添加失败',
              icon: 'error'
            })
          }
        }
      })
    },




    //kcb
    gotoKcb() {

      //console.log(this.data.kcb)
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
      let peopleRelated = this.data.peopleRelated //是一个Map
      let peopleTemp = this.data.categories[index1].items[index2].label //人名
      //console.log(peopleTemp)
      let tempList = peopleRelated.get(this.data.categories[index1].title)
      console.log(tempList)
      console.log(this.data.categories)
      //console.log(peopleRelated)
      if (tempList.includes(peopleTemp)) //检测Map中是否有此人名
      {
        tempList.splice(tempList.indexOf(peopleTemp), 1)
        peopleRelated.set(this.data.categories[index1].title, tempList)
      } else {
        tempList.push(peopleTemp)
        peopleRelated.set(this.data.categories[index1].title, tempList)
      }
      this.setData({
        [checked]: !this.data.categories[index1].items[index2].checked,
        peopleRelated: peopleRelated
      })
      console.log(peopleRelated)
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
      console.log('picker change:', );
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
      this.setData({
        isShow: "true"
      })
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
    showTimes() {
      this.setData({
        showtime: !this.data.showtime
      })
    },
    cancelMask() {
      this.setData({
        isShow: false,
        eventname: '',
        locationname: '',
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
      if (app.globalData.hasLogin && e.detail.value === 'label_4') {
        //页面跳转

        wx.redirectTo({
          url: "/pages/myself/myself",
        })

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