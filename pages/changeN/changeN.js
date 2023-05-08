// pages/home/home.js
//可以增加一些tag供发布者选择，以便更好的分类（可能需要后端执行自动分词python文件）
const app = getApp();
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()
const hour = date.getHours()
const minute = date.getMinutes()
const PICKER_KEY = {
  DATE: 'date',
  DATE1: 'date1',
  DATE2: 'date2',
  People: 'people',
}

Page({
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
  data: {},
})


Component({
  offsetTopList: [],
  options: {
    styleIsolation: 'apply-shared',
  },
  data: {
    test1: 0,
    index1: 0,
    index2: 0,
    index12: 0,
    index22: 0,
    sideBarIndex: 0,
    sideBarIndex2: 0,
    list1: [],
    list2: [],
    list3: [],
    place1: '',
    scrollTop: 0,
    categories: [],
    tagbox: [],
    tagbox2: [],
    showcheck: false,
    showcheck2: false,
    fileArray: [],
    stickyProps: {
      zIndex: 2,
    },
    PICKER_KEY,

    [`${PICKER_KEY.DATE}Visible`]: false,
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

    wen: Array.from(new Array(3), (_, index) => ({
      label: `${index}文`,
      value: index,
    })),

    she: Array.from(new Array(3), (_, index) => ({
      label: `${index}摄`,
      value: index,
    })),
    [`${PICKER_KEY.DATE}Value`]: [month, day, hour],
    [`${PICKER_KEY.DATE1}Value`]: [month, day, hour, minute],
    [`${PICKER_KEY.DATE2}Value`]: [hour, minute],
    [`${PICKER_KEY.People}Value`]: [],

    value: 'label_2',
  },
  methods: {
    onLoad: async function (options) {
      const resultInfo = JSON.parse(options.resultInfo)
      //console.log(resultInfo)
      let list1 = []
      let list2 = []
      let temp3 = []
      wx.request({
        url: 'https://www.hustnic.tech:8081/NIC/manage?method=getTag',
        success: (res) => {
          //console.log(res.data.data)
          list1 = res.data.data['list1'][0]
          list2 = res.data.data['list2']
          let len = list1.length === list2.length ? list1.length : 0
          let tag = new Map()
          for (let i = 0; i < len; i++) {
            tag.set(list1[i], [])
            let temp = {
              label: list1[i],
              title: list1[i],
              items: []
            }
            for (let j = 0; j < list2[i].length; j++) {
              let temp2 = {
                label: list2[i][j],
                checked: false
              }
              temp['items'] = temp['items'].concat(temp2)
            }
            temp3 = temp3.concat(temp)
            this.setData({
              categories: temp3,
              tag: tag
            })
          }
          //设置稿件类型
          //console.log(temp3) //categories
          for (let i in resultInfo.tags) {
            for (let j of resultInfo.tags[i]) {
              for (let k in temp3) {
                if (temp3[k].label === i) {
                  for (let m = 0; m < temp3[k].items.length; m++) {
                    if (temp3[k].items[m].label === j) {
                      this.checkedTag(m)
                      this.checkedTags(parseInt(k,10))
                      break
                    }
                  }
                }
              }
            }
          }
        }
      })

      this.setData({
        [`${PICKER_KEY.DATE1}CurrentValue`]: resultInfo.time.month + '月 ' + resultInfo.time.day + '日 ' + resultInfo.time.hour + '时 ' + resultInfo.time.minute + '分',
        [`${PICKER_KEY.DATE2}CurrentValue`]: resultInfo.time.endHour + '时 ' + resultInfo.time.endMinute + '分',
        [`${PICKER_KEY.People}CurrentValue`]: resultInfo.reporterNeeds.article + '文 ' + resultInfo.reporterNeeds.photo + '摄',
        [`${PICKER_KEY.DATE1}Value`]: [resultInfo.time.month, resultInfo.time.day, resultInfo.time.hour, resultInfo.time.minute],
        [`${PICKER_KEY.DATE2}Value`]: [resultInfo.time.endHour, resultInfo.time.endMinute],
        [`${PICKER_KEY.People}Value`]: [resultInfo.reporterNeeds.article, resultInfo.reporterNeeds.photo],
        list1:[resultInfo.time.month, resultInfo.time.day, resultInfo.time.hour, resultInfo.time.minute],
        list2:[resultInfo.time.endHour, resultInfo.time.endMinute],
        list3:[resultInfo.reporterNeeds.article, resultInfo.reporterNeeds.photo],
        place1: resultInfo.place,
        description1: resultInfo.text,
        missionID:resultInfo.missionID
      })
    },
    step1() {

    },
    step2() {},
    checkedTag(e) {
      //console.log('2')
      //console.log(e)
      this.setData({
        index2: e.currentTarget.dataset.index2
      })
    },
    handlePopup(e) {
      const {
        item
      } = e.currentTarget.dataset;

      this.setData({
          cur: item,
        },
        () => {
          this.setData({
            showcheck: true
          });
        },
      );
    },
    onVisibleChange(e) {
      this.setData({
        showcheck: e.detail.visible,
      });
    },
    onVisibleChange2(e) {
      this.setData({
        showcheck2: e.detail.visible,
      });
    },
    cancelCheck(e) {
      this.setData({
        showcheck: !this.data.showcheck
      })
    },
    showCheck(e) {
      this.setData({
        showcheck: !this.data.showcheck
      })
    },
    cancelCheck2(e) {
      this.setData({
        showcheck2: !this.data.showcheck2
      })
    },
    showCheck2(e) {
      this.setData({
        showcheck2: !this.data.showcheck2
      })
    },
    onSideBarChange(e) {
      //console.log(e.detail)
      const {
        value
      } = e.detail;

      this.setData({
        sideBarIndex: value
      });
    },
    onSideBarChange2(e) {
      //console.log(e.detail)
      const {
        value
      } = e.detail;

      this.setData({
        sideBarIndex2: value
      });
    },
    checkedTag(e) {
      //console.log(e)
      if (String(typeof e) === 'number') {
        //console.log('number')
        this.setData({
          index2: e
        })
      } else {
        this.setData({
          index2: e.currentTarget.dataset.index2 //大类
        })
      }
    },
    checkedTags(e) {
      if (String(typeof e) === 'number') {
        this.setData({
          index1: e
        })
      } else {
        this.setData({
          index1: e.currentTarget.dataset.index1
        })
      }
      let index1 = this.data.index1
      let index2 = this.data.index2
      let checked = 'categories[' + index1 + '].items[' + index2 + '].checked'
      let temp = this.data.tag
      //console.log(temp)
      let temptagbox = this.data.tagbox
      let tempTag = this.data.categories[index1]['items'][index2]['label']
      let templist = temp.get(this.data.categories[index1]['label'])
      let tempdict = {
        color: index1,
        tag: this.data.categories[index1]['label'] + '-' + tempTag
      }
      if (templist.includes(tempTag)) {
        templist.splice(templist.indexOf(tempTag), 1)
        temp.set(this.data.categories[index1]['label'], templist)
        temptagbox.splice(temptagbox.indexOf(tempdict), 1)
      } else {
        templist.push(tempTag)
        temp.set(this.data.categories[index1]['label'], templist)
        temptagbox.push(tempdict)
      }
      this.setData({
        [checked]: !this.data.categories[index1].items[index2].checked,
        tag: temp,
        tagbox: temptagbox
      })
      //console.log(this.data.categories[index1].items[index2].checked)
      ////console.log(this.data.tag)
    },
    setPlace(e) {
      this.setData({
        place1: e.detail.value
      })
    },
    setDescription1(e) {
      this.setData({
        description1: e.detail.value
      })
    },
    onTabsChange(event) {
      //console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    },

    onTabsClick(event) {
      //console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
    },

    onStickyScroll(event) {
      //console.log(event.detail);

    },

    joinArray(array) {
      return array.join(' ');
    },

    onClickPicker(e) {
      const {
        key
      } = e?.currentTarget?.dataset;
      this.setData({
        [`${key}Visible`]: true,
      });
    },

    onColumnChange(e) {
      ////console.log('picker pick:', e);
    },
    onPickerChange(e) {
      //console.log(e.detail)
      const {
        key
      } = e?.currentTarget?.dataset;
      ////console.log('picker change:', );
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
      if (e.detail.label[0] === e.detail.value[0] + '时') {
        this.setData({
          list2: e.detail.value
        })
      }
      if (e.detail.label[0] === e.detail.value[0] + '文') {
        this.setData({
          list3: e.detail.value
        })
      }
    },
    onPickerCancel(e) {
      const {
        key
      } = e?.currentTarget?.dataset;
      //console.log(e, '取消');
      //console.log('picker1 cancel:');
      this.setData({
        [`${key}Visible`]: false,
      });
    },
    onChange(e) {
      //tabbar
      //四个页面
      this.setData({
        value: e.detail.value,
      });
      if (e.detail.value == 'label_1') {
        wx.redirectTo({
          url: '/pages/home/home',
        })
      }
      if (e.detail.value == 'label_4') {
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
    },

    //
    publishMission() {
      if (this.data.list1 === null) {
        wx.showToast({
          icon: 'none',
          title: '请填写起始时间',
          mask: true
        })
      } else if (this.data.list2 === null) {
        wx.showToast({
          icon: 'none',
          title: '请填写结束时间',
          mask: true
        })
      } else if (this.data.list3 === null) {
        wx.showToast({
          icon: 'none',
          title: '请填写小记者',
          mask: true
        })
      } else if (this.data.place1 === '') {
        wx.showToast({
          icon: 'none',
          title: '请填写地点',
          mask: true
        })
      } else if (this.data.description1 === '') {
        wx.showToast({
          icon: 'none',
          title: '请填写活动内容',
          mask: true
        })
      } else if (this.data.list3[0] + this.data.list3[1] === 0) {
        wx.showToast({
          icon: 'none',
          title: '请选择正确人数！',
          mask: true
        })
      } else if (this.data.list2[0] < this.data.list1[2] || (this.data.list2[0] == this.data.list1[2] && this.data.list1[3] > this.data.list2[1])) {
        wx.showToast({
          icon: 'none',
          title: '请填写正确的结束时间',
          mask: true
        })
      } else {
        let obj = Object.create(null);
        for (let [k, v] of this.data.tag) {
          obj[k] = v;
        }
        let tags = JSON.stringify(obj)
        //console.log(tags)
        wx.request({
          url: 'https://www.hustnic.tech:8081/NIC/manage',
          data: {
            "method": "alter",
            "data": {
              "missionID":this.data.missionID,
              "tags": tags,
              "element": 0,
              "publisher": app.globalData.userid,
              "place": this.data.place1,
              "title": "",
              "description": this.data.description1,
              "time": {
                "year": year,
                "month": this.data.list1[0],
                "day": this.data.list1[1],
                "beginHour": this.data.list1[2],
                "beginMinute": this.data.list1[3],
                "endHour": this.data.list2[0],
                "endMinute": this.data.list2[1],
              },
              "reporterNeeds": {
                "photo": this.data.list3[1],
                "article": this.data.list3[0]
              }
            }
          },
          success: (res) => {
            //console.log(res)
            if (res.data.code === 202) {
              wx.showToast({
                title: '发布成功',
                mask: true
              })
              app.sleep(2000)
              wx.redirectTo({
                url: '/pages/home/home',
              })
            } else {
              wx.showToast({
                title: '发布失败',
                icon: 'error',
                mask: true
              })
            }
          },
        })
      }
    }
  },
});