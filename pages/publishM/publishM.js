// pages/home/home.js
Page({
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

  },

  /**
   * 页面的初始数据
   */
  data: {

  }
})
const PICKER_KEY = {
  DATE1: 'date1',
  DATE2: 'date2',
  People:'people'
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

      days: Array.from(new Array(31), (_, index) => ({ label: `${index + 1}日`, value: index + 1 })),

      hour:Array.from(new Array(24), (_,index)=>({
        label:`${index}时`,
        value: index,
      })),

      minute:Array.from(new Array(60), (_,index)=>({
        label:`${index}分`,
        value: index,
      })),

      wen:Array.from(new Array(3), (_,index)=>({
        label:`${index+1}文`,
        value: index+1,
      })),

      she:Array.from(new Array(3), (_,index)=>({
        label:`${index+1}摄`,
        value: index+1,
      })),

      [`${PICKER_KEY.DATE}Value`]: [],
      [`${PICKER_KEY.People}Value`]: [],

      value: 'label_2',
    list: [
      { value: 'label_1', label: '首页', icon: 'home' },
      { value: 'label_2', label: '发布', icon: 'check-rectangle'},
      { value: 'label_3', label: '消息', icon: 'notification' },
      { value: 'label_4', label: '我的', icon: 'user' },
    ],
    },
  methods: {
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
      return array.join('-');
    },

    onClickPicker(e) {
      const { key } = e?.currentTarget?.dataset;
      console.log('picker pick:', e,key);
      this.setData({
        [`${key}Visible`]: true,
      });
    },

    onColumnChange(e) {
      console.log('picker pick:', e);
    },

    onPickerChange(e) {
      const { key } = e?.currentTarget?.dataset;
      console.log('picker change:', e.detail);
      this.setData({
        [`${key}Visible`]: false,
        [`${key}Value`]: e.detail.value,
        [`${key}CurrentValue`]: this.joinArray(e.detail.value),
      });
    },
    onPickerCancel(e) {
      const { key } = e?.currentTarget?.dataset;
      console.log(e, '取消');
      console.log('picker1 cancel:');
      this.setData({
        [`${key}Visible`]: false,
      });
    },

    onChange(e) {
      //tabbar
      this.setData({
        value: e.detail.value,
      });
    },
  },
});