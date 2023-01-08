
// pages/historyM/historyM.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    switch1:'true',
    switch2:'true',
    switchTitle1: '包邮',
    switchTitle2: '团购',
    itemTitle: '筛选',
   class:[{
    value1:0,
    option1: [
      { text: '按时间排序', value: 0,icon:'' },
      { text: '按分数排序', value: 1,icon:''},
      { text: '按状态排序', value: 2,icon:''},
    ],
   },],

    listm:[
      {
        text:"学习二十大，管院在行动 | 本科第六党支部开展11月主题党日活动", date:"2022-11-30" , location:"管理学院105",people:[{key:1,name:"陶柯羽"},{key:2,name:"高原"},{key:5,name:"徐文慧"},{key:4,name:"张赫"},],url:"https://mp.weixin.qq.com/s/x-zHT_8DiS7T5NHC91Z3zA",score:4.5},
        {
          text:"学习二十大，管院在行动 | 管理学院“领跑计划”学生骨干成长训练营开展专题培训", date:"2022-11-29" , location:"校史馆",people:[{key:1,name:"杨彬雪"},{key:5,name:"黄颖澜"},{key:4,name:"桂云凤"},],url:"https://mp.weixin.qq.com/s/yReSTZQn5L9UC4eE2zsYNw" ,score:4.5
        },
        {
          text:"五连冠！管理学院乒乓球队再创佳绩", date:"2022-11-24" , location:"光谷体育馆",people:[{key:5,name:"黄颖澜"},{key:4,name:"方权泽"},],url:"https://mp.weixin.qq.com/s/QBZr1nPlyee_0WrJaz_LYg" ,score:4.5
        },
        {
          text:"五连冠！管理学院乒乓球队再创佳绩", date:"2022-11-24" , location:"光谷体育馆",people:[{key:5,name:"黄颖澜"},{key:4,name:"方权泽"},],url:"https://mp.weixin.qq.com/s/QBZr1nPlyee_0WrJaz_LYg" ,score:4.5
        },
        {
          text:"五连冠！管理学院乒乓球队再创佳绩", date:"2022-11-24" , location:"光谷体育馆",people:[{key:5,name:"黄颖澜"},{key:4,name:"方权泽"},],url:"https://mp.weixin.qq.com/s/QBZr1nPlyee_0WrJaz_LYg" ,score:4.5
        },
        {
          text:"五连冠！管理学院乒乓球队再创佳绩", date:"2022-11-24" , location:"光谷体育馆",people:[{key:5,name:"黄颖澜"},{key:4,name:"方权泽"},],url:"https://mp.weixin.qq.com/s/QBZr1nPlyee_0WrJaz_LYg" ,score:4.5
        }
    ]

  },

  goto(e){
    console.log(e)
    let url=e.currentTarget.dataset.url
    wx.navigateTo({
      url:`../seeM/seeM?url=${url}`,
    })
  },
  onConfirm() {
    this.selectComponent('#item').toggle();
  },

  onSwitch1Change({ detail }) {
    this.setData({ switch1: detail });
  },

  onSwitch2Change({ detail }) {
    this.setData({ switch2: detail });
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail,
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