const image = 'https://tdesign.gtimg.com/miniprogram/images/example2.png';


// pages/historyM/historyM.js
Page({
  offsetTopList: [],
  /**
   * 页面的初始数据
   */
  data: {
    sideBarIndex: 1,
    scrollTop: 0,
    index1Tump: 0,
    index2Tump: 0,
    categories: [{
        label: '教学建设',
        title: '教学建设',
        items: [{
            label: "研讨会",
            checked: true,
            number: 0
          },
          {
            label: "座谈会",
            checked: false,
            number: 1
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
        label: '选项',
        title: '标题',
        badgeProps: {
          dot: true,
        },
        items: [{
          label: "研讨会"
        }]
      },
      {
        label: '选项',
        title: '标题',
        items: [{
          label: "研讨会"
        }]
      },
      {
        label: '选项',
        title: '标题',
        badgeProps: {
          count: 6,
        },
        items: [{
          label: "研讨会"
        }]
      },
      {
        label: '选项',
        title: '标题',
        items: [{
          label: "研讨会"
        }]
      },
    ],

    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    switch1: 'true',
    switch2: 'true',
    switchTitle1: '包邮',
    switchTitle2: '团购',
    itemTitle: '筛选',
    class: [{
      value1: 0,
      option1: [{
          text: '按时间排序',
          value: 0,
          icon: ''
        },
        {
          text: '按分数排序',
          value: 1,
          icon: ''
        },
        {
          text: '按状态排序',
          value: 2,
          icon: ''
        },
      ],
    }, ],

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
        }, ],
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
        }, ],
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
        }, ],
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
        }, ],
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
        }, ],
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
        }, ],
        url: "https://mp.weixin.qq.com/s/QBZr1nPlyee_0WrJaz_LYg",
        score: 4.5
      }
    ],
    index1: 0
  },

  goto(e) {
    console.log(e)
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: `../seeM/seeM?url=${url}`,
    })
  },
  onConfirm() {
    this.selectComponent('#item').toggle();
  },

  onSwitch1Change({
    detail
  }) {
    this.setData({
      switch1: detail
    });
  },

  onSwitch2Change({
    detail
  }) {
    this.setData({
      switch2: detail
    });
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },
  onLoad() {
    const query = wx.createSelectorQuery().in(this);
    query
      .selectAll('.title')
      .boundingClientRect((rects) => {
        this.offsetTopList = rects.map((item) => item.top);
      })
      .exec();
  },
  onSideBarChange(e) {
    console.log('onSideBarChange')
    const {
      value
    } = e.detail;
    this.setData({
      sideBarIndex: value,
      scrollTop: this.offsetTopList[value]
    });
  },
  onScroll(e) {
    const {
      scrollTop
    } = e.detail;
    //console.log(scrollTop)
    const threshold = 10; // 下一个标题与顶部的距离

    if (scrollTop < threshold) {
      this.setData({
        sideBarIndex: 0
      });
      return;
    }

    const index = this.offsetTopList.findIndex((top) => top > scrollTop && top - scrollTop <= threshold);

    if (index > -1) {
      this.setData({
        sideBarIndex: index
      });
    }
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

  /**
   * 生命周期函数--监听页面加载
   */

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