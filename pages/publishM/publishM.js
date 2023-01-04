// pages/home/home.js
const app = getApp();
const date = new Date()
const year = date.getFullYear()
const month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
const day = date.getDate()
const hour = date.getHours()
const minute = date.getMinutes()
let place1 = ''
let description1 = ''
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    place1: '',
    description: ''
  },
})
const PICKER_KEY = {
  DATE1: 'date1',
  DATE2: 'date2',
  People: 'people',
};

Component({
  data: {
    stickyProps: {
      zIndex: 2,
    },
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

    wen: Array.from(new Array(3), (_, index) => ({
      label: `${index+1}文`,
      value: index + 1,
    })),

    she: Array.from(new Array(3), (_, index) => ({
      label: `${index+1}摄`,
      value: index + 1,
    })),

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
    setPlace(e) {
      place1 = e.detail.value
    },
    setDescription(e) {
      description1 = e.detail.value
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
      console.log('picker pick:', place1);
      this.setData({
        [`${key}Visible`]: true,
      });
    },

    onColumnChange(e) {
      console.log('picker pick:', e);
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
    },
    publishMission: function () {
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
          url: 'http://1.15.118.125:8080/NIC/manage',
          data: {
            "method": "add",
            "data": {
              "element":0,
              "publisher":app.globalData.username,
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
              endtime = new Date().getTime();
            }
            wx.redirectTo({
              url: '/pages/home/home',
            })
          }
        })
      }

    }
  },
});