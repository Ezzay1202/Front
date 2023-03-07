// pages/home/home.js
//可以增加一些tag供发布者选择，以便更好的分类（可能需要后端执行自动分词python文件）
const app = getApp();
const date = new Date()
const year = date.getFullYear()
const month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
const day = date.getDate()
const hour = date.getHours()
const minute = date.getMinutes()
let place1 = ''
let description1 = ''
let description2 = ''
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: 'http://1.15.118.125:8081/NIC/manage?method=getTag',
      success:(res)=>{
        console.log(res.data)
        this.setData({
          categories: res.data.data
        })
      }
    })

    this.setData({
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
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
    list1: [],
    list2: [],
    list3: [],
    place1: ''
  },
})
const PICKER_KEY = {
  DATE: 'date',
  DATE1: 'date1',
  DATE2: 'date2',
  People: 'people',
};

Component({
  offsetTopList: [],
  options: {
    styleIsolation: 'apply-shared',
  },
  data: {
    index1: 0,
    index2: 0,
    sideBarIndex: 0,
    scrollTop: 0,
    categories: [{
        label: '教学建设',
        title: '教学建设',
        items: [{
            label: "研讨会",
            checked: true
          },
          {
            label: "座谈会",
            checked: false
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "管院国奖故事"
          },
          {
            label: "研讨会",
            checked: true
          },
          {
            label: "座谈会",
            checked: false
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "管院国奖故事"
          },
          {
            label: "研讨会",
            checked: true
          },
          {
            label: "座谈会",
            checked: false
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "管院国奖故事"
          },
        ]
      },
      {
        label: '选项1',
        title: '选项1',
        items: [{
            label: "研讨会",
            checked: true
          },
          {
            label: "座谈会",
            checked: false
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "管院国奖故事"
          },
        ]
      },
      {
        label: '选项2',
        title: '选项2',
        items: [{
            label: "研讨会",
            checked: true
          },
          {
            label: "座谈会",
            checked: false
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "管院国奖故事"
          },
        ]
      },
      {
        label: '选项3',
        title: '选项3',
        items: [{
            label: "研讨会",
            checked: true
          },
          {
            label: "座谈会",
            checked: false
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "管院国奖故事"
          },
        ]
      },
      {
        label: '选项4',
        title: '选项4',
        items: [{
            label: "研讨会",
            checked: true
          },
          {
            label: "座谈会",
            checked: false
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "座谈会"
          },
          {
            label: "管院国奖故事"
          },
        ]
      },
    ],
    showcheck: false,
    fileArray: [],
    step: [{
      text: '已写稿',
    }, {
      text: '编辑部审稿',
      content: "需要编辑部帮助润色稿件"
    }, {
      text: '辅导员审稿',
      content: "已有其他辅导员审核稿件"
    }, {
      text: '排版',
    }, ],
    first: 1,
    second: 1,
    third: 1,
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
      label: `${index+1}文`,
      value: index + 1,
    })),

    she: Array.from(new Array(3), (_, index) => ({
      label: `${index+1}摄`,
      value: index + 1,
    })),
    [`${PICKER_KEY.DATE}Value`]: [month, day, hour],
    [`${PICKER_KEY.DATE1}Value`]: [month, day, hour, minute],
    [`${PICKER_KEY.DATE2}Value`]: [hour, minute],
    [`${PICKER_KEY.People}Value`]: [],

    value: 'label_2',
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
  },
  methods: {
    checkedTag(e) {
      console.log('2')
      console.log(e)
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
    showCheck(e) {
      this.setData({
        showcheck: !this.data.showcheck
      })
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
    checkedTag(e) {
      console.log('2')
      console.log(e)
      this.setData({
        index2: e.currentTarget.dataset.index2
      })
    },
    checkedTags(e) {
      console.log('1')
      this.setData({
        index1: e.currentTarget.dataset.index1
      })
      let index1 = this.data.index1
      let index2 = this.data.index2
      let checked = 'categories[' + index1 + '].items[' + index2 + '].checked'
      console.log(index1, index2, checked)
      this.setData({
        [checked]: !this.data.categories[index1].items[index2].checked
      })
      console.log(this.data.categories[index1].items[index2].checked)
    },

    uploadFile: function (e) {
      console.log(e)
      wx.chooseMessageFile({
        count: 10, //选择文件的数量
        type: 'all', //选择文件的类型
        success: (res) => {
          console.log(res.tempFiles)
          this.setData({
            fileArray: this.data.fileArray.concat(res.tempFiles)
          })
        }
      })
    },
    removefile(e) {
      let index = e.currentTarget.dataset.index
      console.log(e, index)
      this.data.fileArray.splice(index, 1)
      this.setData({
        fileArray: this.data.fileArray
      })
    },
    // 预览附件
    previewFile(e) {
      var string = ''
      string = e.currentTarget.dataset.path.substring(e.currentTarget.dataset.path.indexOf(".") + 1)
      if (string == 'png' || string == 'jpg' || string == 'gif' || string == 'jpeg') {
        // 图片预览
        var arr = []
        arr.push(e.currentTarget.dataset.path)
        wx.previewImage({
          current: e.currentTarget.dataset.path,
          urls: arr
        })
      } else {
        // 文件预览
        wx.openDocument({
          fileType: string, // 文件类型
          filePath: e.currentTarget.dataset.path, // 文件地址
          success: function (res) {
            console.log('成功')
          },
          fail: function (error) {
            console.log("失败")
          }
        })
      }
    },
    onFirstChange(e) {
      //选择任务状态
      this.setData({
        first: e.detail.current
      });
    },
    onSecondChange(e) {
      this.setData({
        second: e.detail.current
      });
    },
    onThirdChange(e) {
      this.setData({
        third: e.detail.current
      });
    },
    setPlace(e) {
      place1 = e.detail.value
    },
    setDescription1(e) {
      description1 = e.detail.value
    },
    setDescription2(e) {
      description2 = e.detail.value
      //console.log(description2)
    },
    onTabsChange(event) {
      console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    },

    onTabsClick(event) {
      console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
    },

    onStickyScroll(event) {
      console.log(event.detail);

    },

    joinArray(array) {
      return array.join(' ');
    },

    onClickPicker(e) {
      const {
        key
      } = e?.currentTarget?.dataset;
      //console.log('picker pick:', place1);
      this.setData({
        [`${key}Visible`]: true,
      });
    },

    onColumnChange(e) {
      //console.log('picker pick:', e);
    },
    onPickerChange(e) {
      const {
        key
      } = e?.currentTarget?.dataset;
      //console.log('picker change:', );
      this.setData({
        [`${key}Visible`]: false,
        [`${key}Value`]: e.detail.value,
        [`${key}CurrentValue`]: this.joinArray(e.detail.label),
      });
      if (e.detail.value.length == 4) {
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
        wx.redirectTo({
          url: '/pages/myself/myself',
        })
      }
    },
    publishMission() {
      if (this.data.list1 == null) {
        wx.showToast({
          icon: 'none',
          title: '请填写起始时间',
        })
      } else if (this.data.list2 == null) {
        wx.showToast({
          icon: 'none',
          title: '请填写结束时间',
        })
      } else if (this.data.list3 == null) {
        wx.showToast({
          icon: 'none',
          title: '请填写小记者',
        })
      } else if (place1 == '') {
        wx.showToast({
          icon: 'none',
          title: '请填写地点',
        })
      } else if (description1 == '') {
        wx.showToast({
          icon: 'none',
          title: '请填写活动内容',
        })
      } else if (this.data.list2[0] < this.data.list1[2] || (this.data.list2[0] == this.data.list1[2] && this.data.list1[3] > this.data.list2[1])) {
        wx.showToast({
          icon: 'none',
          title: '请填写正确的结束时间',
        })
      } else {
        wx.request({
          url: 'http://1.15.118.125:8081/NIC/manage',
          data: {
            "method": "add",
            "data": {
              "element": 0,
              "publisher": app.globalData.userid,
              "place": place1,
              "title": "",
              "description": description1,
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
                "photo": this.data.list3[0],
                "article": this.data.list3[1]
              }
            }
          },
          success: (res) => {
            console.log(res)
            wx.showToast({
              title: '发布成功',
            });
            let now = new Date();
            let entertime = now.getTime();
            let endtime = now.getTime();
            while (endtime - entertime < 2000) {
              endtime = new Date().getTime()
            }
            wx.redirectTo({
              url: '/pages/home/home',
            })
          }
        })
      }
    },
    publishMission2() {
      let fileArray = this.data.fileArray
      if (description2 == '') {
        wx.showToast({
          icon: 'none',
          title: '请填写稿件备注',
        })
      } else if (fileArray.length == 0) {
        wx.showToast({
          icon: 'none',
          title: '请上传文件',
        })
      } else {
        wx.showLoading({
          title: '请稍等...',
        })
        wx.request({
          url: 'http://1.15.118.125:8081/NIC/manage',
          data: {
            "method": "add",
            "data": {
              "element": 1,
              "publisher": app.globalData.userid,
              "description": description2
            }
          },
          success: (res) => {
            console.log(res.data)
            let missionID = res.data.missionID
            for (let i = 0; i < fileArray.length; i++) {
              console.log(fileArray[i])
              wx.uploadFile({
                filePath: fileArray[i].path,
                name: 'file',
                url: 'http://1.15.118.125:8081/NIC/upload?missionID=' + missionID,
                header: {
                  "Content-Type": "multipart/form-data"
                },
                success: (res) => {
                  let json = JSON.parse(res.data)
                  console.log(json)
                }
              })
            }
            if (json.code == 502) {
              wx.showToast({
                title: '发布成功',
              })
              let now = new Date();
              let entertime = now.getTime();
              let endtime = now.getTime();
              while (endtime - entertime < 2000) {
                endtime = new Date().getTime();
              }
              wx.redirectTo({
                url: '/pages/home/home',
              })
            } else {
              wx.showToast({
                title: '提交失败',
                icon: 'error'
              })
            }
          },
          complete: (res) => {
            wx.hideLoading({
              success: (res) => {},
            })
          }
        })
      }
    }
  },
});