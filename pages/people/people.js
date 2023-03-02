// pages/people/people.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainActiveIndex: 0,
    items:[
      {
        // 导航名称
        text: '班级',
        // 导航名称右上角徽标
        badge: 3,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        dot: false,
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '管实2101班',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            disabled: false,
          },
          {
            text: '物流2001班',
            id: 2,
          },
        ],
      },
    ],
    activeId: []
    ,
    max: 2,
    index:0,
    choose:true,
    itemTitle: '筛选',
    people:[
      {
        text:"人事部",
        show_dep:true,
        dep:[{
          value:2,
          checked:true,
          img:'/image/啸天.png',
          name:"乔晟豪",
          tag_box:['人事部部长','管实2101班']
        },
        {
          value:1,
          checked:false,
          img:'/image/啸天.png',
          name:"乔晟豪",
          tag_box:['人事部部长','管实2101班']
        }]
      },
      {
        text:"技术部",
        show_dep:true,
        dep:[{
          img:'/image/啸天.png',
          name:"苏睿贤",
          tag_box:['技术部部长','管实2101班']
        },
        {
          img:'/image/啸天.png',
          name:"江昊洋",
          tag_box:['技术部成员','物流2001班']
        }]
      }
    ],
    class:[{
      value1:0,
      option1: [
        { text: '按职务排序', value: 0,icon:'' },
        { text: '按姓名排序', value: 1,icon:''},
      ],
     },],
  },
  showDep(e){
    console.log(e)
    let index1=e.currentTarget.dataset.index
    let show_dep = 'people[' + index1 + '].show_dep'
    this.setData({
      [show_dep]:!this.data.people[index1].show_dep
    })
  },
  Choose(e){
    this.setData({
      choose:!this.data.choose
    })
  },
  indexOfMyArray(e){
    let index1=e.currentTarget.dataset.index
    this.setData({
      index:index1
    })
  },
  onChoose(e){
    console.log(e)
    let choose=this.data.choose
    if(choose){
      let index1=this.data.index
      let index2=e.currentTarget.dataset.index1
      let checked='people[' + index1 + '].dep['+index2+'].checked'
      console.log(index1,index2,checked)
      this.setData({
        [checked]:!this.data.people[index1].dep[index2].checked
      })
    }
  },
  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
    });
  },

  onClickItem({ detail = {} }) {
    const { activeId } = this.data;

    const index = activeId.indexOf(detail.id);
    if (index > -1) {
      activeId.splice(index, 1);
    } else {
      activeId.push(detail.id);
    }

    this.setData({ activeId });
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