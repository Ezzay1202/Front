// pages/performance/performance.js
const PICKER_KEY = {
  DEPART: 'depart',
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index1: '',
    performance: [{
      title: "完成第一篇稿件",
      style: false,
      score: 50,
      complete: true,
      people: [{
        name: '乔晟豪',
        check: true
      }, {
        name: '蔡毅洲',
        check: false
      }, {
        name: '乔晟豪',
        check: false
      }]
    }, {
      title: "完成第二篇稿件",
      style: false,
      score: 20,
      complete: false,
      people: [{
        name: '乔晟豪',
        check: true
      }, {
        name: '蔡毅洲',
        check: false
      }, {
        name: '乔晟豪',
        check: false
      }]
    }, {
      title: "每月参加一次记者团培训/例会",
      style: false,
      score: 10,
      complete: false,
      people: [{
        name: '乔晟豪',
        check: true
      }, {
        name: '蔡毅洲',
        check: false
      }, {
        name: '乔晟豪',
        check: false
      }]
    }, {
      title: "完成多篇稿件（第三篇开始）",
      style: true,
      score: 10,
      complete: false,
      people: [{
        name: '乔晟豪',
        check: true
      }, {
        name: '蔡毅洲',
        check: false
      }, {
        name: '乔晟豪',
        check: false
      }]
    }],
    PICKER_KEY,
    [`${PICKER_KEY.DEPART}Visible`]: false,
    pickerTitle: '',
    [`${PICKER_KEY.DEPART}Value`]: [],
    depart: [{
      label: '人事部',
      value: '人事部'
    }, {
      label: '记者团',
      value: '记者团'
    }, {
      label: '技术部',
      value: '技术部'
    }, {
      label: '记者团',
      value: '记者团'
    }, {
      label: '运营部',
      value: '运营部'
    }, {
      label: '新媒体部',
      value: '新媒体部'
    }]
  },
  showPeople(e) {
    let index1 = e.currentTarget.dataset.index1;
    this.setData({
      index1: index1
    })
    console.log(e, index1);
    let complete = 'performance[' + index1 + '].complete'
    console.log(complete)
    this.setData({
      [complete]: !this.data.performance[index1].complete
    })
    console.log(this.data.performance[index1].complete)
  },
  checkPeople(e) {
    let index2 = e.currentTarget.dataset.index2;
    let index1 = this.data.index1
    let check = 'performance[' + index1 + '].people.[' + index2 + '].check'
    this.setData({
      [check]: !this.data.performance[index1].people[index2].check
    })
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