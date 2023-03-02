// pages/mywork/mywork.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps_num: 2,
    mainActiveIndex: 0,
    activeId: [],
    max: 2,
    index: 0,
    items: [
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
    itemTitle: '筛选',
    class: [{
      value1: 0,
      option1: [
        { text: '按时间排序', value: 0, icon: '' },
        { text: '按分数排序', value: 1, icon: '' },
        { text: '按状态排序', value: 2, icon: '' },
      ],
    },],
    listm_ing:[{
      text:"管理学创新实验班班会",
      steps_num:1,
    },{
      text:"管理学创新实验班班会",
      steps_num:1,
    },{
      text:"管理学创新实验班班会",
      steps_num:1,
    },{
      text:"管理学创新实验班班会",
      steps_num:1,
    }],
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
      },],
      url: "https://mp.weixin.qq.com/s/x-zHT_8DiS7T5NHC91Z3zA",
      score: 4.5
    },
    {
      text: "学习二十大，管院在行动 | 管理学院“领跑计划”学生骨干成长训练营开展专题培训",
      date: "2022-11-29",
      location: "校史馆",
      people: [{
        key: 1,
        name: "杨彬雪"
      }, {
        key: 5,
        name: "黄颖澜"
      }, {
        key: 4,
        name: "桂云凤"
      },],
      url: "https://mp.weixin.qq.com/s/yReSTZQn5L9UC4eE2zsYNw",
      score: 4.5
    },
    {
      text: "五连冠！管理学院乒乓球队再创佳绩",
      date: "2022-11-24",
      location: "光谷体育馆",
      people: [{
        key: 5,
        name: "黄颖澜"
      }, {
        key: 4,
        name: "方权泽"
      },],
      url: "https://mp.weixin.qq.com/s/QBZr1nPlyee_0WrJaz_LYg",
      score: 4.5
    },
    {
      text: "五连冠！管理学院乒乓球队再创佳绩",
      date: "2022-11-24",
      location: "光谷体育馆",
      people: [{
        key: 5,
        name: "黄颖澜"
      }, {
        key: 4,
        name: "方权泽"
      },],
      url: "https://mp.weixin.qq.com/s/QBZr1nPlyee_0WrJaz_LYg",
      score: 4.5
    },
    {
      text: "五连冠！管理学院乒乓球队再创佳绩",
      date: "2022-11-24",
      location: "光谷体育馆",
      people: [{
        key: 5,
        name: "黄颖澜"
      }, {
        key: 4,
        name: "方权泽"
      },],
      url: "https://mp.weixin.qq.com/s/QBZr1nPlyee_0WrJaz_LYg",
      score: 4.5
    },
    {
      text: "五连冠！管理学院乒乓球队再创佳绩",
      date: "2022-11-24",
      location: "光谷体育馆",
      people: [{
        key: 5,
        name: "黄颖澜"
      }, {
        key: 4,
        name: "方权泽"
      },],
      url: "https://mp.weixin.qq.com/s/QBZr1nPlyee_0WrJaz_LYg",
      score: 4.5
    }
    ],
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
    },],
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