const image = 'https://tdesign.gtimg.com/miniprogram/images/example2.png';


// pages/historyM/historyM.js
Page({
  offsetTopList: [],
  /**
   * 页面的初始数据
   */
  data: {
    sideBarIndex: 0,
    index1Tump: 0,
    index2Tump: 0,
    categories: [],

    currentDate: new Date().getTime(),
    switch1: 'true',
    switch2: 'true',
    switchTitle1: '包邮',
    switchTitle2: '团购',
    itemTitle: '筛选',

    tagbox: [],

    listm: [{
        text: "学习二十大，管院在行动 | 本科第六党支部开展11月主题党日活动",
        date: "2022-11-30",
        location: "管理学院105继续继续",
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
        text: "学习二十大，管院在行动 | 管理学院“领跑计划”学生骨干成长训练营开展专题培训 继续",
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

  confirm(e) {

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

  send(e) {
    let obj = Object.create(null);
    for (let [k, v] of this.data.tag) {
      obj[k] = v;
    }
    let tags = JSON.stringify(obj)
    console.log(tags)
    wx.request({
      url: 'http://1.15.118.125:8081/NIC/show',
      data: {
        "method": "showByInput",
        "data": {

        }
      },
      success: (res) => {
        console.log(res)
        if (res.data.code === 202) {
          wx.showToast({
            title: '发布成功',
          })
          app.sleep(2000)
          wx.redirectTo({
            url: '/pages/home/home',
          })
        } else {
          wx.showToast({
            title: '发布失败',
            icon: 'error'
          })
        }
      }
    })
  },

  onLoad() {
    let list1 = []
    let list2 = []
    let temp3 = []
    wx.request({
      url: 'http://1.15.118.125:8081/NIC/manage?method=getTag',
      success: (res) => {
        console.log(res.data.data)
        list1 = res.data.data['list1'][0]
        list2 = res.data.data['list2']
        let len = list1.length === list2.length ? list1.length : 0
        let tag = new Map()
        for (let i = 0; i < len; i++) {
          tag.set(list1[i], [])
          let temp = {
            label: list1[i],
            title: list1[i],
            items: []
          }
          for (let j = 0; j < list2[i].length; j++) {
            let temp2 = {
              label: list2[i][j],
              checked: false
            }
            temp['items'] = temp['items'].concat(temp2)
          }
          temp3 = temp3.concat(temp)
          this.setData({
            categories: temp3,
            tag: tag
          })
          //console.log(temp3)
        }
      }
    })

    wx.request({
      url: 'http://1.15.118.125:8081/NIC/show',
      data: {
        "method": "showFinished"
      },
      success: (res) => {
        console.log(res.data.data);
      }
    })

    //console.log('1')
    const query = wx.createSelectorQuery().in(this);
    query
      .selectAll('.title')
      .boundingClientRect((rects) => {
        this.offsetTopList = rects.map((item) => item.top);
      })
      .exec();
  },
  onSideBarChange(e) {
    const {
      value
    } = e.detail;

    this.setData({
      sideBarIndex: value
    });
  },
  checkedTag(e) {
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
    let temp = this.data.tag
    console.log(temp)
    let temptagbox = this.data.tagbox
    let tempTag = this.data.categories[index1]['items'][index2]['label']
    let templist = temp.get(this.data.categories[index1]['label'])
    let tempdict = {
      color: index1,
      tag: this.data.categories[index1]['label'] + '-' + tempTag
    }
    if (templist.includes(tempTag)) {
      templist.splice(templist.indexOf(tempTag), 1)
      temp.set(this.data.categories[index1]['label'], templist)
      temptagbox.splice(temptagbox.indexOf(tempdict), 1)
    } else {
      templist.push(tempTag)
      temp.set(this.data.categories[index1]['label'], templist)
      temptagbox.push(tempdict)
    }
    this.setData({
      [checked]: !this.data.categories[index1].items[index2].checked,
      tag: temp,
      tagbox: temptagbox
    })
    console.log(this.data.categories[index1].items[index2].checked)
    //console.log(this.data.tag)
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