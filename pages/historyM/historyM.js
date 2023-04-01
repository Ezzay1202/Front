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
      url: 'https://www.hustnic.tech:8081/NIC/show',
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
      url: 'https://www.hustnic.tech:8081/NIC/manage?method=getTag', //获取Tag
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
      url: 'https://www.hustnic.tech:8081/NIC/show',
      data: {
        "method": "showFinished"
      },
      success: (res) => {
        console.log(res.data.data)
        let missionList = res.data.data
        let listm = []
        for (let i = 0; i < missionList.length; i++) {
          let people = []
          if (missionList[i].statusChanger['编辑部审稿'] != undefined) {
            for (let i of missionList[i].reporters.article.concat(missionList[i].reporters.photo).concat(missionList[i].statusChanger['编辑部审稿']).concat(missionList[i].statusChanger['辅导员审核'])) {
              console.log(i)
              people.push(i.username)
            }
          }

          for (let j in people) {
            let temp = {
              key: j,
              name: people[j]
            }
            people[j] = temp
          }
          let tempMission = {
            text: missionList[i].title,
            date: missionList[i].time.year + '-' + ((missionList[i].time.month + 1 < 10 ? '0' + (missionList[i].time.month + 1) : missionList[i].time.month + 1)) + '-' + ((missionList[i].time.day + 1 < 10 ? '0' + (missionList[i].time.day) : missionList[i].time.day)),
            location: missionList[i].place,
            people: people,
            url: missionList[i].articleURL
          }
          listm.push(tempMission)
        }
        this.setData({
          listm: listm
        })
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