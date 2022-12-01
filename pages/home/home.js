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
const imageCdn = 'https://tdesign.gtimg.com/site/swiper';
const swiperList = [
  {
    image: `${imageCdn}/01.png`,
  },
  {
    image: `${imageCdn}/02.png`,
  },
  {
    image: `${imageCdn}/03.png`,
  },
  {
    image: `${imageCdn}/04.png`,
  },
  {
    image: `${imageCdn}/05.png`,
  },
];
Component({
  data: {
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
    value: 'label_1',
    list: [
      { value: 'label_1', label: '首页', icon: 'home' },
      { value: 'label_2', label: '发布', icon: 'check-rectangle'},
      { value: 'label_3', label: '消息', icon: 'notification' },
      { value: 'label_4', label: '我的', icon: 'user' },
    ],
  },

  methods: {
    onChange(e) {
      //tabbar
      this.setData({
        value: e.detail.value,
      });
      //swiper
      const {
        detail: { current, source },
      } = e;
      console.log(current, source);
    },
  },
});