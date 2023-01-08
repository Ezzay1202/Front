// pages/home/home.js
const app = getApp()
Page({

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if(options.type="baidu"){
      this.setData({
        url:"https://mp.weixin.qq.com/s/HVmzDgdhLzOJUcBnIMy0fg"
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


const swiperList = [{
    image: "/image/test1.png",
  },
  {
    image: "/image/test2.png",
  },
  {
    image: "/image/test3.png",
  },

];
Component({
  data: {
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
    },{
      name: "历史稿件",
      img: '/image/submitM.png',
      goto: "/pages/historyM/historyM"
    }],
    current: 0,
    duration: 500,
    interval: 5000,
    swiperList,
    value: 'label_1',
    value_s: '',
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
    goTomoudle2(e) {
      console.log("yes", e)
      let index = e.currentTarget.dataset.index
      let url = this.data.functions[index].goto
      if (url == '/pages/checkM/checkM' && app.globalData.authority2 == 10) {
        wx.showToast({
          title: '您没有权限',
          icon: 'error'
        })
      } else {
        wx.redirectTo({
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
      if (!app.globalData.hasLogin && e.detail.value != 'label_1') {
        //页面跳转
        wx.redirectTo({
          url: "/pages/login/login",
        })
      }
    },
  },
});